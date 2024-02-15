import Sidebar from "../../components/Sidebar/Sidebar";
import "./Favourites.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import BookList from "../../components/BookList/BookList";
import BookResponse from "../../types/BookResponse";

type FavouritesProps = {
  onSearch: (value: string) => void;
  books: BookResponse[];
};

const Favourites = ({ books, onSearch }: FavouritesProps) => {
  return (
    <Layout>
      <main className="favourites">
        <Sidebar />
        <Header onSearch={onSearch} />
        <BookList books={books} />
      </main>
    </Layout>
  );
};

export default Favourites;
