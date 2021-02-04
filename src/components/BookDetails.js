import { DetailWrapper } from "../styles";

import { useParams } from "react-router-dom";

const BookDetails = (props) => {
  const bookSlug = useParams().bookSlug;
  const book = props.book.find((book) => book.slug === bookSlug);

  return (
    <div>
      <DetailWrapper className="text-left">
        <p>Title :{props.book.title}</p>
        <p>Author: {props.book.author}</p>
        <img src={props.book.image} alt={props.book.title} />
        <p> Book genre:{props.book.genre}</p>
        <p>Book Available {props.book.available ? "available" : "not available"}</p>
        <p>Borrowed By {props.book.borrowedBy} </p>
      </DetailWrapper>
    </div>
  );
};

export default BookDetails;
