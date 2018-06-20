export const FETCH_PROFILE = "FETCH_PROFILE";
export const fetchProfile = () => ({
    type: FETCH_PROFILE,
    payload: {
    }
});
export const SET_PROFILE = "SET_PROFILE";
export const setProfile = (profile) => ({
    type: SET_PROFILE,
    payload: {
        profile
    }
});

