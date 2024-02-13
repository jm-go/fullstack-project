import Layout from "../../components/Layout/Layout";
import "./BookDetails.scss";
import BookCover from "../../assets/images/cover.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../../types/book";
import Sidebar from "../../components/Sidebar/Sidebar";

type BookDetailsProps = {
  books: Book[];
};

const BookDetails = ({ books }: BookDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState(null);

  const selectedBook = books.find((book) => book.id === Number(id));

  const getBookDetails = async () => {
    const url = `http://localhost:8080/${id}`;
    const response = await fetch(url);
    const bookData = await response.json();
    setBook(bookData);
  };

  useEffect(() => {
    getBookDetails();
  }, [id]);

  if (!selectedBook) return <div>No such book found.</div>;

  return (
    <Layout>
      <div className="book-details">
        <Sidebar />
        <div className="book-details__main">
          <div className="book-details__cover">
            <img
              className="book-details__image"
              src={selectedBook.cover || BookCover}
              alt={selectedBook.title}
            />
          </div>
          <div className="book-details__info">
            <h2 className="book-details__title">{selectedBook.title}</h2>
            <p className="book-details__author">{selectedBook.author}</p>
            <p className="book-details__genre">{selectedBook.genre}</p>
            <p className="book-details__favourite">
              Favourites: {selectedBook.favourite ? " Yes" : " No"}
            </p>
            <p className="book-details__description">
              {selectedBook.longDescription}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
