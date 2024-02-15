import Layout from "../../components/Layout/Layout";
import "./BookDetails.scss";
import BookCover from "../../assets/images/cover.jpg";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import BookResponse from "../../types/BookResponse";

type BookDetailsProps = {
  books: BookResponse[];
};

const BookDetails = ({ books }: BookDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const selectedBook = books.find((book) => book.id === Number(id));

  return (
    <Layout>
      <div className="book-details">
        <Sidebar />
        <div className="book-details__main">
          {selectedBook ? (
            <>
              <div className="book-details__cover">
                <img
                  className="book-details__image"
                  src={selectedBook.cover || BookCover}
                  alt={selectedBook.title}
                />
              </div>
              <div className="book-details__info">
                <h2 className="book-details__title">{selectedBook.title}</h2>
                <p className="book-details__author">{`${selectedBook.authorId.firstName} ${selectedBook.authorId.lastName}`}</p>
                <p className="book-details__genre">{selectedBook.genre}</p>
                <p className="book-details__favourite">
                  Favourite:{" "}
                  {selectedBook.isFavourite === "true" ? " Yes" : " No"}
                </p>
                <p className="book-details__description">
                  {selectedBook.descriptionLong}
                </p>
              </div>
            </>
          ) : (
            <div className="book-details__message">Oops! It looks like this book is not in my collection.</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
