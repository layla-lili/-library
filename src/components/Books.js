import BookList from "./BookList";
import { useSelector } from "react-redux";

const Books = () => {
  const book = useSelector((state) => state.book);

  const booklist = book.map((book) => <BookList key={book.id} book={book} />);
  return <div className="row my-5">{booklist}</div>;
};

export default Books;
