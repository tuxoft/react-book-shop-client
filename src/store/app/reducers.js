import * as actions from "./actions";

const initialState = {
    isInitialized: false,
    keycloak: null,
    isAuthenticated: false
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case actions.APP_SET_INITIALIZED: {
            console.log(action.type, action.payload.isInitialized);
            return setInitialized(state, action);
        }
        case actions.APP_SET_KEYCLOAK: {
            console.log(action.type, action.payload.keycloak);
            return setKeycloak(state, action);
        }
        case actions.APP_SET_AUTHENTICATED: {
            console.log(action.type, action.payload.isAuthenticated);
            return setAuthenticated(state, action);
        }
        case actions.INIT_AUTHENTICATION_SUCCESS: {
            console.log(action.type, action.payload.isAuthenticated);
            return authenticationInitSuccess(state, action);
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
        isInitialized: action.payload.isInitialized,
    };
};
// APP_SET_KEYCLOAK
const setKeycloak = (state, action) => {
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
// INIT_AUTHENTICATION_SUCCESS
const authenticationInitSuccess = (state, action) => {
    return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        isInitialized: true,
        keycloak: action.payload.keycloak,
    };
};


export default app;
