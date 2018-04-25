export const BUSKET_ADD_BOOK_TO_ITEMS = "BUSKET_ADD_BOOK_TO_ITEMS";
export const addBookToItems = (value) => ({
  type: BUSKET_ADD_BOOK_TO_ITEMS,
  payload: {
      value
  }
});

export const BUSKET_ADD_BOOK_TO_RESERV_ITEMS = "BUSKET_ADD_BOOK_TO_RESERV_ITEMS";
export const addBookToReservItems = (value) => ({
    type: BUSKET_ADD_BOOK_TO_RESERV_ITEMS,
    payload: {
        value
    }
});
