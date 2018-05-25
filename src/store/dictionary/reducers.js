import * as actions from "./actions";

const initialState = {
    bookSeries:[],
    publisher: [],
    authors: [],
    categories: [],
    ageLimit: [],
    coverType: [],
    city: [],
    language: []
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DICTIONARY: {
      return setDictionary(state, action);
    }
    case actions.CLEAR_DICTIONARY: {
      return clearDictionary(state, action)
    }
    default: {
      return state;
    }
  }
};

// SET_DICTIONARY
const setDictionary = (state, action) => {
  return {
    ...state,
      [action.payload.type]: action.payload.value
  };
};

// CLEAR_DICTIONARY
const clearDictionary = (state, action) => {
  return {
    ...state,
    [action.payload.type]: []
  };
};

export default dictionary;
