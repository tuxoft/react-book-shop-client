export const getBookEdit = (state) => {
    console.log("getBookEdit", state);
    return state.editBook;
};

export const getBookEditList = (state) => {
  console.log("getBookEditList", state);
  return state.bookEditList;
};
