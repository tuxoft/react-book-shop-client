import * as actions from "./actions";

const initialState = {
    menu: {
      top: null,
      footer: null
    },
    categoryCarousels: []
};

const content = (state = initialState, action) => {

  switch (action.type) {
    case actions.SET_MENU: {
      return setMenu(state, action);
    }
    case actions.SET_CATEGORY_CAROUSELS: {
      return setCategoryCarousels(state, action);
    }
    default: {
      return state;
    }
  }
};

const setMenu = (state, action) => {
  return {
    ...state,
    menu: action.payload.value
  };
};

const setCategoryCarousels = (state, action) => {
  return {
    ...state,
    categoryCarousels: action.payload.value
  };
};

export default content;
