import * as actions from "./actions";

const initialState = {
    itemsCount: 0,
    itemsReservCount: 0,
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MENU: {
      return setMenu(state, action);
    }
    default: {
      return state;
    }
  }
};

//
const setMenu = (state, action) => {
  return {
    ...state,
    menu: action.payload.value
  };
};


export default menu;
