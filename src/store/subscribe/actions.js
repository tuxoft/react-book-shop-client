export const SUBSCRIBE_SET_EMAIL = "SUBSCRIBE_SET_EMAIL";
export const setEmail = (email) => ({
  type: SUBSCRIBE_SET_EMAIL,
  payload: {
      email
  }
});

export const SUBSCRIBE_EMAIL = "SUBSCRIBE_EMAIL";
export const subscribeEmail = (email) => ({
    type: SUBSCRIBE_EMAIL,
    payload: {
        email
    }
});
