import * as actions from "./actions";

const initialState = {
    cart: {}
};

const buscket = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CART: {
      return setCart(state, action);
    }
    default: {
      return state;
    }
  }
};

// SET_CART
const setCart = (state, action) => {
  return {
    ...state,
      cart: action.payload.value
  };
};

export default buscket;
