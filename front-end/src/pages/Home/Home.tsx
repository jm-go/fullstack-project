import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import BookList from "../../components/BookList/BookList";
import BookResponse from "../../types/BookResponse";

type HomeProps = {
  onSearch: (value: string) => void;
  books: BookResponse[];
};

const Home = ({ books, onSearch }: HomeProps) => {
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
