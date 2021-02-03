import members from "../members";

const initialState = {
  members: members,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      return {
        ...state,
        member: [...state.member, action.payload.newMember],
      };
    default:
      return state;
  }
};

export default reducer;
