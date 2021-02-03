import slugify from "react-slugify";

import member from "../members";
import book from "../books";

const initialState = {
  member: member,
  book: book,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      const { newMember } = action.payload;

      newMember.id = state.member[state.member.length - 1].id + 1;
      newMember.slug = slugify(newMember.firstName - newMember.lastName);
      return {
        ...state,
        member: [...state.member, newMember],
      };
    case "ADD_BOOK":
      const { newBook } = action.payload;

      newBook.id = state.book[state.book.length - 1].id + 1;
      newBook.slug = slugify(newBook.title);
      return {
        ...state,
        book: [...state.book, newBook],
      };
    default:
      return state;
  }
};

export default reducer;
