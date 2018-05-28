import * as actions from "./actions";

const initialState = {
  isInitialized: false,
  keycloak: null,
  isAuthenticated: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_SET_INITIALIZED: {
      return setInitialized(state, action);
    }
      case actions.APP_SET_KEYCLOAK: {
          return setKeycloak(state, action);
      }
      case actions.APP_SET_AUTHENTICATED: {
          return setAuthenticated(state, action);
      }
    default: {
      return state;
    }
  }
};

// SET_INITIALIZED
const setKeycloak = (state, action) => {
  return {
    ...state,
    isInitialized: action.payload.isInitialized,
  };
};
// APP_SET_KEYCLOAK
const setInitialized = (state, action) => {
    return {
        ...state,
        keycloak: action.payload.keycloak,
    };
};
// APP_SET_AUTHENTICATED
const setAuthenticated = (state, action) => {
    return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
    };
};

export default app;
