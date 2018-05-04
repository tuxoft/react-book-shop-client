export const SEARCH_BOOKS_SET_VALUE = "SEARCH_BOOKS_SET_VALUE";
export const setSearchValue = (value) => ({
  type: SEARCH_BOOKS_SET_VALUE,
  payload: {
      value
  }
});

export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const searchBooks = (value) => ({
    type: SEARCH_BOOKS,
    payload: {
        value
    }
});
