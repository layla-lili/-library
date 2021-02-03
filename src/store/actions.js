const ADD_MEMBER = "ADD_MEMBER";

export const addMember = (newMamber) => {
 
  return {
    type: ADD_MEMBER,
    payload: { newMamber }, // {newMamber: newMamber}
  };
};