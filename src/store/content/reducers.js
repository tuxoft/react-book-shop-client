import * as actions from "./actions";

const initialState = {
    menu: {
      top: null,
      footer: null
    },
    categoryCarousels: [],
    promoPictures: [],
    navigationMenuTop: [],
    navigationMenuLeft: []
};

const content = (state = initialState, action) => {

  switch (action.type) {
    case actions.SET_MENU: {
      return setMenu(state, action);
    }
    case actions.SET_CATEGORY_CAROUSELS: {
      return setCategoryCarousels(state, action);
    }
    case actions.SET_PROMO_PICTURES: {
      return setPromoPictures(state, action);
    }
    case actions.SET_NAVIGATION_MENU_TOP: {
      return setNavigationMenuTop(state, action);
    }
    case actions.SET_NAVIGATION_MENU_LEFT: {
      return setNavigationMenuLeft(state, action);
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

const setPromoPictures = (state, action) => {
  return {
    ...state,
    promoPictures: action.payload.value
  };
};

const setNavigationMenuTop = (state, action) => {
  return {
    ...state,
    navigationMenuTop: action.payload.value
  };
};

const setNavigationMenuLeft = (state, action) => {
  return {
    ...state,
    navigationMenuLeft: action.payload.value
  };
};

export default content;
