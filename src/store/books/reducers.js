import * as actions from "./actions";

const initialState = {
    searchBooks:[],
    suggestionSearch: [],
    book: {},
    booksByCategory: []
};

const books = (state = initialState, action) => {
  switch (action.type) {
      case actions.SET_BOOKS_SEARCH: {
          return setSearchBooks(state, action);
      }
      case actions.SET_BOOK: {
          return setBook(state, action);
      }
      case actions.SET_BOOKS_BY_CATEGORY: {
          return setBooksByCategory(state, action);
      }
      case actions.SET_SUGGESTION_SEARCH: {
          return setSuggestionSearch(state, action);
      }
      case actions.CLEAR_SUGGESTION_SEARCH: {
          return clearSuggestionSearch(state, action);
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

//SET_BOOKS_BY_CATEGORY
const setBooksByCategory = (state, action) => {
  return {
    ...state,
    booksByCategory: action.payload.booksByCategory
  };
};

//SET_SUGGESTION_SEARCH
const setSuggestionSearch = (state, action) => {
  return {
    ...state,
    suggestionSearch: action.payload.suggestionSearch
  };
};

//CLEAR_SUGGESTION_SEARCH
const clearSuggestionSearch = (state, action) => {
  return {
    ...state,
    suggestionSearch: []
  };
};

export default books;
