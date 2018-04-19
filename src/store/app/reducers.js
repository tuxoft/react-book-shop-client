import * as actions from "./actions";

const initialState = {
  isInitialized: true
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_SET_INITIALIZED: {
      return setInitialized(state, action);
    }
    default: {
      return state;
    }
  }
};

// SET_INITIALIZED
const setInitialized = (state, action) => {
  return {
    ...state,
    isInitialized: action.payload.isInitialized
  };
};

export default app;
