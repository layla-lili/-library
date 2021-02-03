const ADD_MEMBER = "ADD_MEMBER";
const ADD_BOOK = "ADD_BOOK";

export const addMember = (newMember) => {
  return {
    type: ADD_MEMBER,
    payload: { newMember }, // {newMamber: newMamber}
  };
};

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: { newBook }, // {newMamber: newMamber}
  };
};
