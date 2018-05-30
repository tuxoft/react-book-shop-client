export const SET_BOOK_EDIT = "SET_BOOK_EDIT";

export const setBookEdit = (value) => ({
  type: SET_BOOK_EDIT,
  payload: {
      value
  }
});

export const SET_NEW_BOOK_EDIT = "SET_NEW_BOOK_EDIT";

export const setNewBookEdit = (value) => ({
  type: SET_NEW_BOOK_EDIT
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

export const SAVE_COVER_IMAGE = "SAVE_COVER_IMAGE";

export const saveCoverImage = (value) => ({
  type: SAVE_COVER_IMAGE,
  payload: {
    value
  }
});

export const SET_COVER_IMAGE = "SET_COVER_IMAGE";

export const setCoverImage = (value) => ({
  type: SET_COVER_IMAGE,
  payload: {
    value
  }
});

export const FETCH_BOOK_EDIT_LIST = "FETCH_BOOK_EDIT_LIST";

export const fetchBookEditList = (value) => ({
  type: FETCH_BOOK_EDIT_LIST,
  payload: {
    value
  }
});

export const SET_BOOK_EDIT_LIST = "SET_BOOK_EDIT_LIST";

export const setBookEditList = (value) => ({
  type: SET_BOOK_EDIT_LIST,
  payload: {
    value
  }
});

export const SET_SORT_FIELD = "SET_SORT_FIELD";

export const setSortField = (value) => ({
  type: SET_SORT_FIELD,
  payload: {
    value
  }
});

export const CHANGE_SORT_FIELD = "CHANGE_SORT_FIELD";

export const changeSortField = (value) => ({
  type: CHANGE_SORT_FIELD,
  payload: {
    value
  }
});