import * as actions from "./actions";

const initialState = {
  isVisible: false,
  message: undefined,
  type: undefined,
  autoHide: true,
};

const flash = (state = initialState, action) => {
  switch (action.type) {
    case actions.FLASH_SHOW_FLASH: {
      return showFlash(state, action);
    }
    case actions.FLASH_HIDE_FLASH: {
      return hideFlash(state, action);
    }
    default: {
      return state;
    }
  }
};

const showFlash = (state, action) => {
  return {
    ...state,
    isVisible: true,
    message: action.payload.message,
    type: action.payload.type,
    autoHide: action.payload.autoHide,
  };
};

const hideFlash = (state, action) => {
  return initialState;
};

export default flash;
