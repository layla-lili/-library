const ADD_MEMBER = "ADD_MEMBER";

export const addMember = (member) => {
 
  return {
    type: ADD_MEMBER,
    payload: { member }, // {newMamber: newMamber}
  };
};