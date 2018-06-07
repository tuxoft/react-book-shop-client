import * as actions from "./actions";

const initialState = {
  activeObject: "author",
  objectInfo: {
    author: {
      pageListTitle: "Авторы",
      pageItemTitle: "Редактирование автора",
      newObjectButtonCaption: "Новый автор"
    },
    book: {
      pageListTitle: "Книги",
      pageItemTitle: "Редактирование книги",
      newObjectButtonCaption: "Новая книга"
    },
    publisher: {
      pageListTitle: "Издательства",
      pageItemTitle: "Редактирование издательства",
      newObjectButtonCaption: "Новое издательство"
    },
    category: {
      pageListTitle: "Категории",
      pageItemTitle: "Редактирование категорий",
      newObjectButtonCaption: "Новая категория"
    },
    bookSeries: {
      pageListTitle: "Серия книг",
      pageItemTitle: "Редактирование серии книг",
      newObjectButtonCaption: "Новая серия книг"
    },
    city: {
      pageListTitle: "Города",
      pageItemTitle: "Редактирование городов",
      newObjectButtonCaption: "Новый город"
    },
    language: {
      pageListTitle: "Языки",
      pageItemTitle: "Редактирование языков",
      newObjectButtonCaption: "Новый язык"
    }
  },
  options: {
    author: [
      {
        name: "lastName",
        parametrName: "Фамилия",
        dictionary: "",
        type: "input"
      },
      {
        name: "firstName",
        parametrName: "Имя",
        dictionary: "",
        type: "input"
      },
      {
        name: "middleName",
        parametrName: "Отчество",
        dictionary: "",
        type: "input"
      },
    ],
    book: [
      {
        name: "title",
        parametrName: "Название",
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
        dictionary: "author"
      },
      {
        name: "categories",
        parametrName: "Категории",
        type: "multiObjFromList",
        dictionary: "category"
      },
      {
        name: "publicationYear",
        parametrName: "Год издания",
        type: "input",
        valueType: "number"
      },
      {
        name: "pageCount",
        parametrName: "Кол-во страниц",
        type: "input",
        valueType: "number"
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
        type: "input",
        valueType: "number"
      },
      {
        name: "weight",
        parametrName: "Вес",
        type: "input",
        valueType: "number"
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
        type: "input",
        valueType: "number"
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
        type: "input",
        valueType: "number"
      }
    ],
    publisher: [
      {
        name: "name",
        parametrName: "Название",
        dictionary: "",
        type: "input"
      },
    ],
    category: [
      {
        name: "name",
        parametrName: "Название",
        dictionary: "",
        type: "input"
      },
      {
        name: "parent",
        parametrName: "Родительская категория",
        dictionary: "category",
        type: "oneFromList"
      },
    ],
    bookSeries: [
      {
        name: "name",
        parametrName: "Название",
        dictionary: "",
        type: "input"
      },
      {
        name: "publisher",
        parametrName: "Издательство",
        dictionary: "publisher",
        type: "oneFromList"
      },
    ],
    city: [
      {
        name: "name",
        parametrName: "Название",
        dictionary: "",
        type: "input"
      },
      {
        name: "codeCity",
        parametrName: "Код города",
        dictionary: "",
        type: "input"
      },
    ],
    language: [
      {
        name: "name",
        parametrName: "Название",
        dictionary: "",
        type: "input"
      },
      {
        name: "codeLanguage",
        parametrName: "Код языка",
        dictionary: "",
        type: "input"
      },
    ]
  },
  editObject: {
    author: {},
    book: {},
    publisher: {},
    category: {},
    bookSeries: {},
    city: {},
    language: {}
  },
  cancelObject: {
    author: {},
    book: {},
    publisher: {},
    category: {},
    bookSeries: {},
    city: {},
    language: {}
  },
  editList: {
    author: {},
    book: {},
    publisher: {},
    category: {},
    bookSeries: {},
    city: {},
    language: {}
  },
  headersForEditList: {
    author: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Фамилия",
        name: "lastName"
      },
      {
        title: "Имя",
        name: "firstName"
      },
      {
        title: "Отчество",
        name: "middleName"
      }
    ],
    book: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Название",
        name: "title"
      },
      {
        title: "Цена",
        name: "price"
      },
      {
        title: "В наличии",
        name: "inStock"
      }
    ],
    publisher: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Название",
        name: "name"
      }
    ],
    category: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Название",
        name: "name"
      },
      {
        title: "Родительская категория",
        name: "parent.name"
      }
    ],
    bookSeries: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Название",
        name: "name"
      },
      {
        title: "Издательство",
        name: "publisher.name"
      }
    ],
    city: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Город",
        name: "name"
      },
      {
        title: "Код города",
        name: "codeCity"
      }
    ],
    language: [
      {
        title: "Ид",
        name: "id"
      },
      {
        title: "Язык",
        name: "name"
      },
      {
        title: "Код языка",
        name: "codeLanguage"
      }
    ]
  },
  queryParams: {
    author: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    },
    book: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    },
    publisher: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    },
    category: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    },
    bookSeries: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    },
    city: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    },
    language: {
      start: 0,
      pageSize: 20,
      sort: "id",
      query: ""
    }
  }
};

const objectEdit = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ACTIVE_OBJECT: {
      return setActiveObject(state, action);
    }
    case actions.SET_OBJECT_EDIT: {
      return setObjectEdit(state, action);
    }
    case actions.SET_NEW_OBJECT_EDIT: {
      return setNewObjectEdit(state, action);
    }
    case actions.SET_CANCEL_OBJECT_EDIT: {
      return setCancelObjectEdit(state, action);
    }
    case actions.CANCEL_CHANGE_OBJECT_EDIT: {
      return cancelChangeObjectEdit(state);
    }
    case actions.SET_OBJECT_EDIT_LIST: {
      return setObjectEditList(state, action);
    }
    case actions.SET_SEARCH_VALUE: {
      return setSearchValue(state, action);
    }
    case actions.SET_SORT_FIELD: {
      return setSortField(state, action);
    }
    case actions.SET_COVER_IMAGE: {
      return setCoverImage(state, action)
    }
    default: {
      return state;
    }
  }
};

// SET_ACTIVE_OBJECT
const setActiveObject = (state, action) => {
  let activeObject = action.payload.value ? action.payload.value : "book";
  return {
    ...state,
    activeObject: activeObject
  };
};

// SET_OBJECT_EDIT
const setObjectEdit = (state, action) => {
  return {
    ...state,
    editObject: {
      ...state.editObject,
      [state.activeObject]: action.payload.value
    }
  };
};

// SET_NEW_OBJECT_EDIT
const setNewObjectEdit = (state, action) => {
  return {
    ...state,
    editObject: {
      ...state.editObject,
      [state.activeObject]: {}
    },
    cancelObject: {
      ...state.cancelObject,
      [state.activeObject]: {}
    },
  };
};

// SET_CANCEL_OBJECT_EDIT
const setCancelObjectEdit = (state, action) => {
  return {
    ...state,
    cancelObject: {
      ...state.cancelObject,
      [state.activeObject]: action.payload.value
    },
  };
};

// CANCEL_CHANGE_OBJECT_EDIT
const cancelChangeObjectEdit = (state) => {
  return {
    ...state,
    editObject: {
      ...state.editObject,
      [state.activeObject]: state.cancelObject[state.activeObject]
    }
  };
};

// SET_OBJECT_EDIT_LIST
const setObjectEditList = (state, action) => {
  return {
    ...state,
    editList: {
      ...state.editList,
      [state.activeObject]: action.payload.value
    }
  };
};

// SET_SEARCH_VALUE
const setSearchValue = (state, action) => {
  return {
    ...state,
    queryParams: {
      ...state.queryParams,
      [state.activeObject]: {
        ...state.queryParams[state.activeObject],
        query: action.payload.value
      }
    }
  };
};

// SET_SORT_FIELD
const setSortField = (state, action) => {
  return {
    ...state,
    queryParams: {
      ...state.queryParams,
      [state.activeObject]: {
        ...state.queryParams[state.activeObject],
        sort: action.payload.value
      }
    }
  };
};

// SET_COVER_IMAGE
const setCoverImage = (state, action) => {
  return {
    ...state,
    editObject: {
      ...state.editObject,
      book: {
        ...state.editObject.book,
        coverUrl: action.payload.value
      }
    }
  };
};

export default objectEdit;