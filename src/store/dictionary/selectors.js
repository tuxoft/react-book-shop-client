export const getDictionary = (state, type) => {
    console.log("getDictionary", state);
    return state[type];
};

export const getDictionaries = (state) => {
    console.log("getDictionaries", state);
    return state;
};

