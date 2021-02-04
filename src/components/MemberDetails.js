import { DetailWrapper } from "../styles";

import { useParams } from "react-router-dom";

const MemberDetails = (props) => {
 
 
  const memberSlug = useParams().memberSlug;
  console.log(Object.values(props));
  const member = props.member.find((member) => member.firstName === memberSlug);

  return (
    <div>
      <DetailWrapper className="text-left">
        <p>
          Name :{props.member.firstName} {props.member.lastName}
        </p>
        <p> Book List:{props.member.currentlyBorrowedBooks}</p>
        <p>MemberShip {props.member.membership} </p>
      </DetailWrapper>
    </div>
  );
};

export default MemberDetails;
