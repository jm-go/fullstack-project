import BookCard from "../BookCard/BookCard";
import "./BookList.scss";
import BookResponse from "../../types/BookResponse";

type BookListProps = {
  books: BookResponse[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="book-list">
      <div className="book-list__container">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
