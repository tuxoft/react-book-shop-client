export const getCartItemsCount = (state) => {
  return state.cart.cartItemList?state.cart.cartItemList.length:0;
};

export const getCart = (state) => {
    return state.cart;
};
