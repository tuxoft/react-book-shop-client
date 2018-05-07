export const BOOKS_NEW = "BOOKS_NEW";
export const fetchNewBooks = (params) => ({
  type: BOOKS_NEW,
  payload: {
      params
  }
});

export const BOOKS_TRADE = "BOOKS_TRADE";
export const fetchTradeBooks = (params) => ({
    type: BOOKS_TRADE,
    payload: {
        params
    }
});

export const BOOKS_GOOD = "BOOKS_GOOD";
export const fetchGoodBooks = (params) => ({
    type: BOOKS_GOOD,
    payload: {
        params
    }
});

export const BOOKS_SEARCH = "BOOKS_SEARCH";
export const fetchSearchBooks = (params) => ({
    type: BOOKS_SEARCH,
    payload: {
        params
    }
});

export const SET_BOOKS_NEW = "SET_BOOKS_NEW";
export const setNewBooks = (books) => ({
    type: SET_BOOKS_NEW,
    payload: {
        books
    }
});

export const SET_BOOKS_TRADE = "SET_BOOKS_TRADE";
export const setTradeBooks = (books) => ({
    type: SET_BOOKS_TRADE,
    payload: {
        books
    }
});

export const SET_BOOKS_GOOD = "SET_BOOKS_GOOD";
export const setGoodBooks = (books) => ({
    type: SET_BOOKS_GOOD,
    payload: {
        books
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
