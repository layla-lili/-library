import member from "../members";

const initialState = {
  member: member,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      return {
        ...state,
        member: [...state.member, action.payload.member],
      };
    default:
      return state;
  }
};

export default reducer;
