export const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
export const addBookToCart = (value) => ({
  type: ADD_BOOK_TO_CART,
  payload: {
      value
  }
});

export const SET_BOOK_IN_CART = "SET_BOOK_IN_CART";
export const setBookInCart = (value) => ({
    type: SET_BOOK_IN_CART,
    payload: {
        value
    }
});

export const DELETE_BOOK_FROM_CART = "DELETE_BOOK_FROM_CART";
export const deleteBookFromCart = (value) => ({
    type: DELETE_BOOK_FROM_CART,
    payload: {
        value
    }
});

export const DELETE_BOOK_FROM_CART_ALL = "DELETE_BOOK_FROM_CART_ALL";
export const deleteBookFromCartAll = (value) => ({
    type: DELETE_BOOK_FROM_CART_ALL,
    payload: {
        value
    }
});

export const GET_CART = "GET_CART";
export const getCart = (value) => ({
    type: GET_CART,
    payload: {
        value
    }
});

export const SET_CART = "SET_CART";
export const setCart = (value) => ({
    type: SET_CART,
    payload: {
        value
    }
});
