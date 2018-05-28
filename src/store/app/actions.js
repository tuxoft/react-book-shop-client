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