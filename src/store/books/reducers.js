import * as actions from "./actions";

const initialState = {
    newBooks:[],
    tradeBooks:[],
    goodBooks:[],
    searchBooks:[],
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BOOKS_NEW: {
      return setNewBooks(state, action);
    }
      case actions.SET_BOOKS_TRADE: {
          return setTradeBooks(state, action);
      }
      case actions.SET_BOOKS_GOOD: {
          return setGoodBooks(state, action);
      }
      case actions.SET_BOOKS_SEARCH: {
          return setSearchBooks(state, action);
      }
    default: {
      return state;
    }
  }
};

// SET_BOOKS_NEW
const setNewBooks = (state, action) => {
  return {
    ...state,
      newBooks: action.payload.books
  };
};

// SET_BOOKS_TRADE
const setTradeBooks = (state, action) => {
    return {
        ...state,
        tradeBooks: action.payload.books
    };
};

// SET_BOOKS_GOOD
const setGoodBooks = (state, action) => {
    return {
        ...state,
        goodBooks: action.payload.books
    };
};

// SET_BOOKS_SEARCH
const setSearchBooks = (state, action) => {
    return {
        ...state,
        searchBooks: action.payload.books
    };
};

export default books;
