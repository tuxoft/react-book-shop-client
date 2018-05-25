import * as actions from "./actions";

const initialState = {
    options: [
        {
            name: "title",
            parametrName: "Назание",
            type: "input"
        },
        {
            name: "description",
            parametrName: "Описание",
            type: "textArea"
        },
        {
            name: "publisher",
            parametrName: "Издатель",
            type: "select",
        },
        {
            name: "bookSeries",
            parametrName: "Серия",
            type: "oneFromList",
        },
        {
            name: "bookAuthors",
            parametrName: "Авторы",
            type: "authors",
            dictionary: "authors"
        },
        {
            name: "categories",
            parametrName: "Категории",
            type: "multiObjFromList"
        },
        {
            name: "publicationYear",
            parametrName: "Год издания",
            type: "input"
        },
        {
            name: "pageCount",
            parametrName: "Кол-во страниц",
            type: "input"
        },
        {
            name: "isbn",
            parametrName: "ISBN",
            type: "input"
        },
        {
            name: "udc",
            parametrName: "UDC",
            type: "input"
        },
        {
            name: "bbk",
            parametrName: "BBK",
            type: "input"
        },
        {
            name: "circulation",
            parametrName: "Тираж",
            type: "input"
        },
        {
            name: "weight",
            parametrName: "Вес",
            type: "input"
        },
        {
            name: "ageLimit",
            parametrName: "Возрастные ограничения",
            type: "select"
        },
        {
            name: "dimensions",
            parametrName: "Формат",
            type: "input"
        },
        {
            name: "coverType",
            parametrName: "Тип обложки",
            type: "select"
        },
        {
            name: "inStock",
            parametrName: "В наличии",
            type: "input"
        },
        {
            name: "city",
            parametrName: "Город",
            type: "oneFromList"
        },
        {
            name: "language",
            parametrName: "Язык",
            type: "oneFromList"
        },
        {
            name: "price",
            parametrName: "Цена",
            type: "input"
        },
    ],
    editBook: {},
    cancelBook: {},
};

const bookEdit = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BOOK_EDIT: {
      return setBookEdit(state, action);
    }
    case actions.SET_CANCEL_BOOK_EDIT: {
      return setCancelBookEdit(state, action);
    }
    case actions.CANCEL_CHANGE_BOOK_EDIT: {
      return cancelChangeBookEdit(state);
    }
    default: {
      return state;
    }
  }
};

// SET_BOOK_EDIT
const setBookEdit = (state, action) => {
  return {
    ...state,
      editBook: action.payload.value
  };
};

// SET_CANCEL_BOOK_EDIT
const setCancelBookEdit = (state, action) => {
  return {
    ...state,
    cancelBook: action.payload.value
  };
};

// CANCEL_CHANGE_BOOK_EDIT
const cancelChangeBookEdit = (state) => {
  return {
    ...state,
    editBook: {...state.cancelBook}
  };
};

export default bookEdit;
