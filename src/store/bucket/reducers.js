import * as actions from "./actions";

const initialState = {
    itemsCount: 0,
    itemsReservCount: 0,
};

const buscket = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUSKET_ADD_BOOK_TO_ITEMS: {
      return addItems(state, action);
    }
    case actions.BUSKET_ADD_BOOK_TO_RESERV_ITEMS: {
      return addReservItems(state, action);
    }
    default: {
      return state;
    }
  }
};

// BUSKET_ADD_BOOK_TO_ITEMS
const addItems = (state, action) => {
  return {
    ...state,
      itemsCount: state.itemsCount+1
  };
};

// BUSKET_ADD_BOOK_TO_RESERV_ITEMS
const addReservItems = (state, action) => {
    return {
        ...state,
        itemsReservCount: state.itemsReservCount+1
    };
};

export default buscket;
