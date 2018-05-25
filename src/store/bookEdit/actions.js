export const SET_BOOK_EDIT = "SET_BOOK_EDIT";

export const setBookEdit = (value) => ({
  type: SET_BOOK_EDIT,
  payload: {
      value
  }
});

export const SET_CANCEL_BOOK_EDIT = "SET_CANCEL_BOOK_EDIT";

export const setCancelBookEdit = (value) => ({
  type: SET_CANCEL_BOOK_EDIT,
  payload: {
    value
  }
});

export const FETCH_BOOK_EDIT = "FETCH_BOOK_EDIT";

export const fetchBookEdit = (value) => ({
  type: FETCH_BOOK_EDIT,
  payload: {
    value
  }
});

export const SAVE_CHANGE_BOOK_EDIT = "SAVE_CHANGE_BOOK_EDIT";

export const saveChangeBookEdit = (value) => ({
  type: SAVE_CHANGE_BOOK_EDIT,
  payload: {
    value
  }
});

export const CANCEL_CHANGE_BOOK_EDIT = "CANCEL_CHANGE_BOOK_EDIT";

export const cancelChangeBookEdit = () => ({
  type: CANCEL_CHANGE_BOOK_EDIT
});