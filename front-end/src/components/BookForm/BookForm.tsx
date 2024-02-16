import { ChangeEvent, FormEvent, useState } from "react";
import "./BookForm.scss";
import BookRequest from "../../types/BookRequest";
import OptionType from "../../types/OptionType";
import Select from "../Select/Select";

type BookFormProps = {
  defaultFormState: BookRequest;
  formTitle: string;
  handleSubmit: (book: BookRequest) => void;
  authors: OptionType[];
};

const BookForm = ({
  defaultFormState,
  handleSubmit,
  formTitle,
  authors,
}: BookFormProps) => {
  const [book, setBook] = useState<BookRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(book);
    if (Object.values(book).some((value) => !value)) {
      alert("Missing content, unable to proceed.");
      return;
    }

    handleSubmit(book);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => setBook({ ...book, [key]: event.currentTarget.value });

  return (
    <div className="form">
      <h2 className="form__title">{formTitle}</h2>
      <form className="form__form" onSubmit={handleValidation}>
        <Select
          labelText={"Select Author: "}
          label={"authorId"}
          options={authors}
          onChange={(event) => handleInput(event, "authorId")}
          defaultOption={"Select author"}
          defaultValue={book.authorId}
        />
        <label htmlFor="title" className="form__label">
          Title:{" "}
        </label>
        <input
          id="title"
          className="form__input"
          type="text"
          placeholder="Enter book title"
          value={book.title}
          onInput={(event) => handleInput(event, "title")}
        />
        <label htmlFor="cover" className="form__label">
          Cover URL:{" "}
        </label>
        <input
          id="cover"
          className="form__input"
          type="text"
          placeholder="Enter URL"
          value={book.cover}
          onInput={(event) => handleInput(event, "cover")}
        />
        <label htmlFor="genre" className="form__label">
          Genre:{" "}
        </label>
        <input
          id="genre"
          className="form__input"
          type="text"
          placeholder="Enter book genre"
          value={book.genre}
          onInput={(event) => handleInput(event, "genre")}
        />
        <label htmlFor="descriptionShort" className="form__label">
          Short Description:{" "}
        </label>
        <input
          id="descriptionShort"
          className="form__input"
          type="text"
          placeholder="Add short description"
          value={book.descriptionShort}
          onInput={(event) => handleInput(event, "descriptionShort")}
        />
        <label htmlFor="descriptionLong" className="form__label">
          Long Description:{" "}
        </label>
        <input
          id="descriptionLong"
          className="form__input"
          type="text"
          placeholder="Add long description"
          value={book.descriptionLong}
          onInput={(event) => handleInput(event, "descriptionLong")}
        />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
