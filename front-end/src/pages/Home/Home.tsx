import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import BookList from "../../components/BookList/BookList";
import { useEffect, useState } from "react";
import BookResponse from "../../types/BookResponse";

type HomeProps = {
  onSearch: (value: string) => void;
  books: BookResponse[];
};

const Home = ({ books, onSearch }: HomeProps) => {
  //const [books, setBooks] = useState<BookResponse[]>([]);

  // const getBooks = async () => {
  //   const response = await fetch("http://localhost:8080/books");
  //   const booksData = await response.json();
  //   setBooks(booksData);
  // };

  // useEffect(() => {
  //   getBooks();
  // }, []);

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
