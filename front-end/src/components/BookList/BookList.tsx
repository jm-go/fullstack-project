import BookCard from "../BookCard/BookCard";
import Book from "../../types/book";
import "./BookList.scss";

type BookListProps = {
  books: Book[];
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
