import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { mockBooks } from "../../components/data/books";
import BookList from "../../components/BookList/BookList";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <Sidebar />
        <Header />
        <BookList books={mockBooks} />
      </main>
    </Layout>
  );
};

export default Home;
