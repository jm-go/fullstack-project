import { useEffect, useState } from "react";
import "./main.scss";
import BookDetails from "./pages/BookDetails/BookDetails";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookResponse from "./types/BookResponse";

const App = () => {
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [favouriteBooks, setFavouriteBooks] = useState<BookResponse[]>([]);

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

  useEffect(() => {
    getBooks();
    getFavouriteBooks();
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
