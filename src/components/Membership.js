

const Memebership = ({ member }) => (
    <div className="col-12 col-md-3">
      <div >
        <div >
          <h3 >`{member.firstName} {member.lastName}`</h3>
          <p >{member.membership}</p>
          <p >{member.currentlyBorrowedBooks}</p>
        </div>
      </div>
    </div>
  );
  
  export default Memebership;