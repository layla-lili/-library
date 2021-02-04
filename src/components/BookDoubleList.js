import ViewBooks from "./ViewBooks";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MemberList = (props) => {
  const [query, setQuery] = useState("");
  const booklist = props.book
    .filter(
      (book) => book.title.toLowerCase().includes(query.toLowerCase() )
      //genre.toLowerCase().includes(query.toLowerCase())
    )
    // .map((genre) => genre.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <ViewBooks book={book} key={book.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {booklist}
    </div>
  );
};

export default MemberList;
