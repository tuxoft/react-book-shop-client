export const SET_DICTIONARY = "SET_DICTIONARY";
export const setDictionary = (value, type) => ({
  type: SET_DICTIONARY,
  payload: {
      value,
      type
  }
});

