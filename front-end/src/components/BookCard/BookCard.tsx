import "./BookCard.scss";
import BookCover from "../../assets/images/cover.jpg";
import BookResponse from "../../types/BookResponse";

type BookCardProps = {
  book: BookResponse;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card">
      <img
        src={book.cover || BookCover}
        alt={book.title}
        className="book-card__image"
      />
      <div className="book-card__info">
        <h2 className="book-card__title">{book.title}</h2>
        <h3 className="book-card__author">
          {`${book.author.first_name} ${book.author.last_name}`}/
        </h3>
        <p className="book-card__description">{book.description_short}</p>
      </div>
    </div>
  );
};

export default BookCard;
