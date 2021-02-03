import { addMember } from "../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddMember = () => {
  const dispatch = useDispatch();
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    slug: "",
    id:"",
    membership:"",
currentlyBorrowedBooks:[]
  });

  const handleChange = (event) =>
    setMember({ ...member, [event.target.name]: event.target.value });

  const resetForm = () =>
    setMember({
        firstName: "",
        lastName: "",
        slug: "",
        id:"",
        membership:"",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMember(member));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info ">Last Name*</span>
        </div>
        <input
          required
          className="form-control"
          type="text"
          name="firstName"
          value={member.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Last Name*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="lastName"
          value={member.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Id*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="id"
          value={member.id}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">slug*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="slug"
          value={member.slug}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">membership*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="membership"
          value={member.membership}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">currentlyBorrowedBooks*</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="currentlyBorrowedBooks"
          value={member.currentlyBorrowedBooks}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <input className="btn btn-info" type="submit" />
      </div>
    </form>
  );
};

export default AddMember;