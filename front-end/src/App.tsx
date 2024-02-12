import "./main.scss";
import Favourites from "./pages/Favourites/Favourites";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fullstack-project" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        {/* <Route path="/book/:id" element={<BookDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
