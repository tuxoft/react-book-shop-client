export const APP_SET_INITIALIZED = "APP_SET_INITIALIZED";
export const setInitialized = (isInitialized) => ({
  type: APP_SET_INITIALIZED,
  payload: {
    isInitialized,
  }
});

export const APP_SET_KEYCLOAK = "APP_SET_KEYCLOAK";
export const setKeycloak = (keycloak) => ({
    type: APP_SET_KEYCLOAK,
    payload: {
        keycloak,
    }
});

export const APP_SET_AUTHENTICATED = "APP_SET_AUTHENTICATED";
export const setAuthenticated = (isAuthenticated) => ({
    type: APP_SET_AUTHENTICATED,
    payload: {
        isAuthenticated
    }
});

export const INIT_AUTHENTICATION = "INIT_AUTHENTICATION";
export const authenticationInit = (isInitialized) => ({
    type: INIT_AUTHENTICATION,
    payload: {
        isInitialized
    }
});

export const INIT_AUTHENTICATION_SUCCESS = "INIT_AUTHENTICATION_SUCCESS";
export const authenticationInitSuccess = (authenticated, keycloak) => ({
    type: INIT_AUTHENTICATION_SUCCESS,
    payload: {
        authenticated,
        keycloak
    }
});

export const LOGIN_AUTHENTICATION = "LOGIN_AUTHENTICATION";
export const authenticationLogin = (keycloak, isAuthenticated) => ({
    type: LOGIN_AUTHENTICATION,
    payload: {
        keycloak,
        isAuthenticated
    }
});

export const LOGOUT_AUTHENTICATION = "LOGOUT_AUTHENTICATION";
export const authenticationLogout = (keycloak, isAuthenticated) => ({
    type: LOGOUT_AUTHENTICATION,
    payload: {
        keycloak,
        isAuthenticated
    }
});

export const TOKEN_AUTHENTICATION = "TOKEN_AUTHENTICATION";
export const authenticationToken = (keycloak) => ({
    type: TOKEN_AUTHENTICATION,
    payload: {
        keycloak
    }
});