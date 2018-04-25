import * as actions from "./actions";

const initialState = {
  email: ""
};

const subscribe = (state = initialState, action) => {
  switch (action.type) {
    case actions.SUBSCRIBE_SET_EMAIL: {
      return setEmail(state, action);
    }
    default: {
      return state;
    }
  }
};

// SET_INITIALIZED
const setEmail = (state, action) => {
  return {
    ...state,
      email: action.payload.email
  };
};

export default subscribe;
