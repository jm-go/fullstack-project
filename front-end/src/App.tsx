import { mockBooks } from "./components/data/books";
import "./main.scss";
import BookDetails from "./pages/BookDetails/BookDetails";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        {/* <Route path="/add" element={<Add />} /> */}
        <Route path="/:id" element={<BookDetails books={mockBooks} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
