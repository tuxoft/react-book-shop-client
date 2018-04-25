import * as actions from "./actions";

const initialState = {
  searchValue: "",
  searchResult: [],
};

const searchBooks = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_BOOKS_SET_VALUE: {
      return setSearchValue(state, action);
    }
    default: {
      return state;
    }
  }
};

// SEARCH_BOOKS_SET_VALUE
const setSearchValue = (state, action) => {
  return {
    ...state,
      searchValue: action.payload.value
  };
};

export default searchBooks;
