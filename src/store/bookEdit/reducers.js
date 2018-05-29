import * as actions from "./actions";

const initialState = {
    options: [
        {
            name: "title",
            parametrName: "Назание",
            type: "input"
        },
        {
            name: "coverUrl",
            parametrName: "Изображение обложки",
            type: "inputImage"
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
    bookEditList: [],
    cancelBook: {},
};

const bookEdit = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BOOK_EDIT: {
      return setBookEdit(state, action);
    }
    case actions.SET_NEW_BOOK_EDIT: {
      return setNewBookEdit(state, action);
    }
    case actions.SET_CANCEL_BOOK_EDIT: {
      return setCancelBookEdit(state, action);
    }
    case actions.CANCEL_CHANGE_BOOK_EDIT: {
      return cancelChangeBookEdit(state);
    }
    case actions.SET_COVER_IMAGE: {
      return setCoverImage(state, action)
    }
    case actions.SET_BOOK_EDIT_LIST: {
      return setBookEditList(state, action);
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

// SET_NEW_BOOK_EDIT
const setNewBookEdit = (state, action) => {
  return {
    ...state,
    editBook: {}
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

// SET_COVER_IMAGE
const setCoverImage = (state, action) => {
  return {
    ...state,
    editBook: {
      ...state.editBook,
      coverUrl: action.payload.value
    },
  };
};

// SET_BOOK_EDIT_LIST
const setBookEditList = (state, action) => {
  return {
    ...state,
    bookEditList: action.payload.value
  };
};

export default bookEdit;
