import "./AddBook.scss";
import BookForm from "../components/BookForm/BookForm";
import BookRequest from "../types/BookRequest";
import OptionType from "../types/OptionType";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";

type AddBookProps = {
  authors: OptionType[];
};

const AddBook = ({ authors }: AddBookProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (newBook: BookRequest) => {
    const result = await fetch("http://localhost:8080/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (result.ok) {
      alert("Book added");
      const book = await result.json();
      navigate(`/`, { state: book });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    id: -1,
    cover: "",
    title: "",
    authorId: -1,
    descriptionShort: "",
    genre: "",
    descriptionLong: "",
    isFavourite: "false",
  };
  return (
    <Layout>
      <section className="add-book">
        <Sidebar />
        <div className="add-book__main">
          <BookForm
            handleSubmit={handleSubmit}
            defaultFormState={defaultFormState}
            formTitle="Add New Book"
            authors={authors}
          />
        </div>
      </section>
    </Layout>
  );
};

export default AddBook;
