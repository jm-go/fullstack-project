import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import BookCard from "../../components/BookCard/BookCard";
import { mockBook } from "../../components/data/books";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <Sidebar />
        <Header />
        <div className="home__content">
        <BookCard book={mockBook} />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
