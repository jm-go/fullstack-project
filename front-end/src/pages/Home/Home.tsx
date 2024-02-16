import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import BookList from "../../components/BookList/BookList";
import BookResponse from "../../types/BookResponse";
import { useState } from "react";

type HomeProps = {
  books: BookResponse[];
};

const Home = ({ books }: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (searchValue: string) => {
    setSearchQuery(searchValue.toLowerCase());
  };

  const filteredBooks = searchQuery
    ? books.filter((book) => book.title.toLowerCase().includes(searchQuery))
    : books;

  return (
    <Layout>
      <main className="home">
        <Sidebar />
        <Header onSearch={handleSearch} searchValue={searchQuery} />
        <BookList books={filteredBooks} />
      </main>
    </Layout>
  );
};

export default Home;
