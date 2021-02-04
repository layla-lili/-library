import { DetailWrapper } from "../styles";

import { useParams } from "react-router-dom";

const BookDetails = (props) => {
  const bookSlug = useParams().bookSlug;
  const book = props.book.find((book) => book.slug === bookSlug);

  return (
    <div>
      <DetailWrapper className="text-left">
        <p>Title :{book.title}</p>
        <p>Author: {book.author}</p>
        <img src={book.image} alt={book.title} />
        <p> Book genre:{book.genre}</p>
        <p>Book Available {book.available ? "available" : "not available"}</p>
        <p>Borrowed By {book.borrowedBy} </p>
      </DetailWrapper>
    </div>
  );
};

export default BookDetails;
