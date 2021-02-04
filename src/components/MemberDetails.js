import { DetailWrapper } from "../styles";

import { useParams } from "react-router-dom";

const MemberDetails = (props) => {
  const memberSlug = useParams().memberSlug;
  const member = props.member.find((member) => member.firstName === memberSlug);

  return (
    <div>
      <DetailWrapper className="text-left">
        <p>
          Name :{member.firstName} {member.lastName}
        </p>
        <p> Book List:{member.currentlyBorrowedBooks}</p>
        <p>MemberShip {member.membership} </p>
      </DetailWrapper>
    </div>
  );
};

export default MemberDetails;
