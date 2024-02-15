import "./BookCard.scss";
import BookCover from "../../assets/images/cover.jpg";
import BookResponse from "../../types/BookResponse";

type BookCardProps = {
  book: BookResponse;
};

const BookCard = ({ book }: BookCardProps) => {
  const {
    title,
    cover,
    descriptionShort,
    authorId: { firstName, lastName } = {},
  } = book;

  return (
    <div className="book-card">
      <img src={cover || BookCover} alt={title} className="book-card__image" />
      <div className="book-card__info">
        <h2 className="book-card__title">{title}</h2>
        <h3 className="book-card__author">{`${firstName} ${lastName}`}</h3>
        <p className="book-card__description">{descriptionShort}</p>
      </div>
    </div>
  );
};

export default BookCard;
