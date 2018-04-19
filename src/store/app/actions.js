export const APP_SET_INITIALIZED = "APP_SET_INITIALIZED";
export const setInitialized = (isInitialized) => ({
  type: APP_SET_INITIALIZED,
  payload: {
    isInitialized
  }
});
