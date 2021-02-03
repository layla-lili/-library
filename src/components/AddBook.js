import { addBook } from "../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    author: "",
    title: "",
    genre: [],
    available: "",
    borrowedBy: [],
  });

  const handleChange = (event) =>
    setBook({
      ...book,
      [event.target.name]: event.target.value,
      [event.target.id]: event.target.value,
    });

  const resetForm = () =>
    setBook({
      title: "",
      author: "",

      genre: [],
      available: "",
      borrowedBy: [],
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Title*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Author*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Genre *</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
        />
      </div>

      <div>
        <select onChange={handleChange} id="available">
          <option value="true">available</option>
          <option value="false">not available</option>
        </select>
      </div>
      <br />

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">borrowedBy*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="borrowedBy"
          value={book.borrowedBy}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <input className="btn btn-info" type="submit" />
      </div>
    </form>
  );
};

export default AddBook;
