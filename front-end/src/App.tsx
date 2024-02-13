import { useState } from "react";
import { mockBooks } from "./components/data/books";
import "./main.scss";
import BookDetails from "./pages/BookDetails/BookDetails";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState(mockBooks);

  const handleSearch = (searchQuery: string) => {
    const filteredBooks = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home onSearch={handleSearch} books={searchResults} />}
        />
        <Route
          path="/favourites"
          element={<Favourites onSearch={handleSearch} />}
        />
        {/* <Route path="/add" element={<Add />} /> */}
        <Route path="/:id" element={<BookDetails books={mockBooks} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
