import books from "../books";
import BookList from "./BookList";

const ViewBooks = (props) => {
  const book = props.book;

  return <BookList book={book} />;
};

export default ViewBooks;
