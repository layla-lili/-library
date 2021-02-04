import members from "../members";
import Memebership from "./Membership";
const ViewMembers = (props) => {
  const member = props.member;

  return <Memebership member={member} />;
};

export default ViewMembers;
