import Sidebar from "../../components/Sidebar/Sidebar";
import "./Favourites.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { mockBooks } from "../../components/data/books";
import BookList from "../../components/BookList/BookList";

type FavouritesProps = {
  onSearch: (value: string) => void;
};

const Favourites = ({ onSearch }: FavouritesProps) => {
  return (
    <Layout>
      <main className="favourites">
        <Sidebar />
        <Header onSearch={onSearch} />
        <BookList books={mockBooks} />
      </main>
    </Layout>
  );
};

export default Favourites;
