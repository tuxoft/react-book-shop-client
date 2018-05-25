export const SET_DICTIONARY = "SET_DICTIONARY";

export const setDictionary = (value, type) => ({
  type: SET_DICTIONARY,
  payload: {
      value,
      type
  }
});

export const SEARCH_DICTIONARY = "SEARCH_DICTIONARY";

export const searchDictionary = (value, type) => ({
  type: SEARCH_DICTIONARY,
  payload: {
    value,
    type
  }
});

export const FETCH_DICTIONARY = "FETCH_DICTIONARY";

export const fetchDictionary = (value, type) => ({
  type: FETCH_DICTIONARY,
  payload: {
    value,
    type
  }
});

export const CLEAR_DICTIONARY = "CLEAR_DICTIONARY";

export const clearDictionary = (type) => ({
  type: CLEAR_DICTIONARY,
  payload: {
    type
  }
});