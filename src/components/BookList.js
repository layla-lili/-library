import { Link } from "react-router-dom";

const BookList = ({ book }) => (
  <div className="col-12 col-md-3">
    <div>
      <div>
        <h3>{book.author} </h3>

        <Link to={`/book/${book.slug}`}>
          <img src={book.image} alt={book.title} width="100" height="200" />
        </Link>

        <p>{book.title}</p>
        {/* <p>{book.genre}</p>
        <p>{book.available ? "Available" : "Not Available"}</p>
        <p>{book.currentlyBorrowedBooks}</p>
        <p>{book.borrowedBy}</p> */}
      </div>
    </div>
  </div>
);

export default BookList;
