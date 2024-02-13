import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import BookList from "../../components/BookList/BookList";
import Book from "../../types/book";

type HomeProps = {
  onSearch: (value: string) => void;
  books: Book[];
};

const Home = ({ onSearch, books }: HomeProps) => {
  return (
    <Layout>
      <main className="home">
        <Sidebar />
        <Header onSearch={onSearch} />
        <BookList books={books} />
      </main>
    </Layout>
  );
};

export default Home;
