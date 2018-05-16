import * as actions from "./actions";

const initialState = {
    searchBooks:[],
    book: {},
    category: {}
};

const books = (state = initialState, action) => {
  switch (action.type) {
      case actions.SET_BOOKS_SEARCH: {
          return setSearchBooks(state, action);
      }
      case actions.SET_BOOK: {
          return setBook(state, action);
      }
      case actions.SET_CATEGORY: {
          return setCategory(state, action);
      }

    default: {
      return state;
    }
  }
};

// SET_BOOKS_SEARCH
const setSearchBooks = (state, action) => {
    return {
        ...state,
        searchBooks: action.payload.books
    };
};

//SET_BOOK
const setBook = (state, action) => {
    return {
        ...state,
        book: action.payload.book
    };
};

//SET_CATEGORY
const setCategory = (state, action) => {
  return {
    ...state,
    category: action.payload.category
  };
};
export default books;
