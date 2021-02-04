import { Link } from "react-router-dom";

const Memebership = ({ member }) => (
  <div className="col-12 col-md-3">
    <div>
      <div>
        <Link to={`/${member.firstName}`}>
          <h3>
            {member.firstName} {member.lastName}
          </h3>
        </Link>
        <p>{member.membership}</p>
        <p>{member.currentlyBorrowedBooks}</p>
      </div>
    </div>
  </div>
);

export default Memebership;
