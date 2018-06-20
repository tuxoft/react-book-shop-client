import * as actions from "./actions";

const initialState = {
    profile:{
        email: "prezident@mail.ru",
        firstName: "Владимир",
        middleName: "Владимирович",
        lastName: "Путин",
        phoneNumber: "+79000000001",
    },
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_PROFILE: {
            return setProfile(state, action);
        }
        default: {
            return state;
        }
    }
};

// SET_PROFILE
const setProfile = (state, action) => {
    return {
        ...state,
        profile: action.payload.profile
    };
};


export default profile;
