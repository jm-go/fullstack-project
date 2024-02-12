import Sidebar from "../../components/Sidebar/Sidebar";
import "./Favourites.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { mockBooks } from "../../components/data/books";
import BookList from "../../components/BookList/BookList";

const Favourites = () => {
  return (
    <Layout>
      <main className="favourites">
        <Sidebar />
        <Header />
        <BookList books={mockBooks} />
      </main>
    </Layout>
  );
};

export default Favourites;
