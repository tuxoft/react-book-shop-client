export const BOOKS_SEARCH = "BOOKS_SEARCH";
export const fetchSearchBooks = (params) => ({
    type: BOOKS_SEARCH,
    payload: {
        params
    }
});

export const SET_BOOKS_SEARCH = "SET_BOOKS_SEARCH";
export const setSearchBooks = (books) => ({
    type: SET_BOOKS_SEARCH,
    payload: {
        books
    }
});

export const GET_BOOK = "GET_BOOK";
export const fetchBook = (id) => ({
    type: GET_BOOK,
    payload: {
        id
    }
});

export const SET_BOOK = "SET_BOOK";
export const setBook = (book) => ({
    type: SET_BOOK,
    payload: {
        book
    }
});

export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const fetchCategory = (params) => ({
  type: FETCH_CATEGORY,
  payload: {
    params
  }
});

export const SET_CATEGORY = "SET_CATEGORY";
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: {
    category
  }
});

export const FETCH_SUGGESTION_SEARCH = "FETCH_SUGGESTION_SEARCH";
export const fetchSuggestionSearch = (params) => ({
  type: FETCH_SUGGESTION_SEARCH,
  payload: {
    params
  }
});

export const SET_SUGGESTION_SEARCH = "SET_SUGGESTION_SEARCH";
export const setSuggestionSearch = (suggestionSearch) => ({
  type: SET_SUGGESTION_SEARCH,
  payload: {
    suggestionSearch
  }
});

export const CLEAR_SUGGESTION_SEARCH = "CLEAR_SUGGESTION_SEARCH";
export const clearSuggestionSearch = () => ({
  type: CLEAR_SUGGESTION_SEARCH
});
