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

  if (!selectedBook) return <div className="book-details__message">No such book found.</div>;

  const {
    title,
    cover,
    descriptionLong,
    authorId: { firstName, lastName } = {},
    genre,
    isFavourite,
  } = selectedBook;

  return (
    <Layout>
      <div className="book-details">
        <Sidebar />
        <div className="book-details__main">
          <div className="book-details__cover">
            <img
              className="book-details__image"
              src={cover || BookCover}
              alt={title}
            />
          </div>
          <div className="book-details__info">
            <h2 className="book-details__title">{title}</h2>
            <p className="book-details__author">{`${firstName} ${lastName}`}</p>
            <p className="book-details__genre">{genre}</p>
            <p className="book-details__favourite">
              Favourite: {isFavourite === "true" ? " Yes" : " No"}
            </p>
            <p className="book-details__description">{descriptionLong}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
