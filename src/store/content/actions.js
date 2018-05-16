export const FETCH_MENU = "FETCH_MENU";
export const fetchMenu = (value) => ({
  type: FETCH_MENU,
  payload: {
      value
  }
});

export const SET_MENU = "SET_MENU";
export const setMenu = (value) => ({
    type: SET_MENU,
    payload: {
        value
    }
});

export const FETCH_CATEGORY_CAROUSELS = "FETCH_CATEGORY_CAROUSELS";
export const fetchCategoryCarousels = (value) => ({
  type: FETCH_CATEGORY_CAROUSELS,
  payload: {
    value
  }
});

export const SET_CATEGORY_CAROUSELS = "SET_CATEGORY_CAROUSELS";
export const setCategoryCarousels = (value) => ({
  type: SET_CATEGORY_CAROUSELS,
  payload: {
    value
  }
});

export const FETCH_PROMO_PICTURES = "FETCH_PROMO_PICTURES";
export const fetchPromoPictures = (value) => ({
  type: FETCH_PROMO_PICTURES,
  payload: {
    value
  }
});

export const SET_PROMO_PICTURES = "SET_PROMO_PICTURES";
export const setPromoPictures = (value) => ({
  type: SET_PROMO_PICTURES,
  payload: {
    value
  }
});
