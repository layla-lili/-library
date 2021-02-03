const BookList = ({ book }) => (
  <div className="col-12 col-md-3">
    <div>
      <div>
        <h3>{book.author} </h3>
        <p>{book.title}</p>
        <p>{book.genre}</p>
        <p>{book.available ? "Available" : "Not Available"}</p>
        <p>{book.currentlyBorrowedBooks}</p>
        <p>{book.borrowedBy}</p>
      </div>
    </div>
  </div>
);

export default BookList;
