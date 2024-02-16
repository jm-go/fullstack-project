import { useEffect, useState } from "react";
import "./main.scss";
import BookDetails from "./pages/BookDetails/BookDetails";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookResponse from "./types/BookResponse";
import AddBook from "./containers/AddBook";
import OptionType from "./types/OptionType";

const App = () => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [favouriteBooks, setFavouriteBooks] = useState<BookResponse[]>([]);
  const [authors, setAuthors] = useState<OptionType[]>([]);

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }
      const booksData = (await response.json()) as BookResponse[];
      setBooks(booksData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const getFavouriteBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/favourites");
      if (!response.ok) {
        throw new Error("Failed to fetch favourite books.");
      }
      const favouriteBooksData = (await response.json()) as BookResponse[];
      setFavouriteBooks(favouriteBooksData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const getAuthors = async () => {
    const response = await fetch("http://localhost:8080/authors");
    const authorData = await response.json();
    setAuthors(authorData);
  };

  useEffect(() => {
    getBooks();
    getFavouriteBooks();
    getAuthors();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route
          path="/favourites"
          element={<Favourites books={favouriteBooks} />}
        />
        <Route path="/:id" element={<BookDetails books={books} />} />
        <Route path="/add" element={<AddBook authors={authors} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
