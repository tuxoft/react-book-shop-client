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
export const SAVE_PROFILE = "SAVE_PROFILE";
export const saveProfile = (profile) => ({
    type: SAVE_PROFILE,
    payload: {
        profile
    }
});

