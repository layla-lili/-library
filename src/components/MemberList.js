import ViewMembers from "./ViewMembers";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MemberList = (props) => {
  const [query, setQuery] = useState("");
  const memberlist = props.member
    .filter((member) =>
      member.firstName.toLowerCase().includes(query.toLowerCase())
    )
    .filter((member) =>
      member.lastName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => <ViewMembers member={member} key={member.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {memberlist}
    </div>
  );
};

export default MemberList;
