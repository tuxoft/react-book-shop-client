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
