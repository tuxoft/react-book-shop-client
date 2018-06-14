export const SET_ACTIVE_OBJECT = "SET_ACTIVE_OBJECT";

export const setActiveObject = (value) => ({
  type: SET_ACTIVE_OBJECT,
  payload: {
    value
  }
});

export const FETCH_OBJECT_EDIT = "FETCH_OBJECT_EDIT";

export const fetchObjectEdit = (value) => ({
  type: FETCH_OBJECT_EDIT,
  payload: {
    value
  }
});

export const SET_OBJECT_EDIT = "SET_OBJECT_EDIT";

export const setObjectEdit = (value) => ({
  type: SET_OBJECT_EDIT,
  payload: {
    value
  }
});

export const SET_NEW_OBJECT_EDIT = "SET_NEW_OBJECT_EDIT";

export const setNewObjectEdit = (value) => ({
  type: SET_NEW_OBJECT_EDIT
});

export const SET_CANCEL_OBJECT_EDIT = "SET_CANCEL_OBJECT_EDIT";

export const setCancelObjectEdit = (value) => ({
  type: SET_CANCEL_OBJECT_EDIT,
  payload: {
    value
  }
});

export const SAVE_CHANGE_OBJECT_EDIT = "SAVE_CHANGE_OBJECT_EDIT";

export const saveChangeObjectEdit = (value) => ({
  type: SAVE_CHANGE_OBJECT_EDIT,
  payload: {
    value
  }
});

export const CANCEL_CHANGE_OBJECT_EDIT = "CANCEL_CHANGE_OBJECT_EDIT";

export const cancelChangeObjectEdit = () => ({
  type: CANCEL_CHANGE_OBJECT_EDIT
});

export const FETCH_OBJECT_EDIT_LIST = "FETCH_OBJECT_EDIT_LIST";

export const fetchObjectEditList = (value) => ({
  type: FETCH_OBJECT_EDIT_LIST,
  payload: {
    value
  }
});

export const SET_OBJECT_EDIT_LIST = "SET_OBJECT_EDIT_LIST";

export const setObjectEditList = (value) => ({
  type: SET_OBJECT_EDIT_LIST,
  payload: {
    value
  }
});

export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE_OBJECT";

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: {
    value
  }
});

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE_OBJECT";

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  payload: {
    value
  }
});

export const SET_SORT_FIELD = "SET_SORT_FIELD_OBJECT";

export const setSortField = (value) => ({
  type: SET_SORT_FIELD,
  payload: {
    value
  }
});

export const CHANGE_SORT_FIELD = "CHANGE_SORT_FIELD_OBJECT";

export const changeSortField = (value) => ({
  type: CHANGE_SORT_FIELD,
  payload: {
    value
  }
});

export const SAVE_IMAGE = "SAVE_IMAGE";

export const saveImage = (value, field) => ({
  type: SAVE_IMAGE,
  payload: {
    value,
    field
  }
});

export const SET_IMAGE = "SET_IMAGE";

export const setImage = (value, field) => ({
  type: SET_IMAGE,
  payload: {
    value,
    field
  }
})

export const DELETE_OBJECT_EDIT = "DELETE_OBJECT_EDIT";

export const deleteObjectEdit = (value) => ({
  type: DELETE_OBJECT_EDIT,
  payload: {
    value
  }
});