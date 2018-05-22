import * as actions from "./actions";

const initialState = {
    options: [
        {
            name: "title",
            parametrName: "Назание",
            type: "input"
        },
        {
            name: "subtitle",
            parametrName: "Описание",
            type: "textArea"
        },
        {
            name: "bookSeries",
            parametrName: "Серия",
            type: "oneFromList",
        },
        {
            name: "publisher",
            parametrName: "Издатель",
            type: "select",
        },
        {
            name: "authors",
            parametrName: "Авторы",
            type: "authors"
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
            type: "input"
        },
        {
            name: "format",
            parametrName: "Формат",
            type: "input"
        },
        {
            name: "coverType",
            parametrName: "Тип обложки",
            type: "input"
        },
        {
            name: "inStock",
            parametrName: "В наличии",
            type: "input"
        },
        {
            name: "city",
            parametrName: "Город",
            type: "input"
        },
        {
            name: "language",
            parametrName: "Язык",
            type: "input"
        },
        {
            name: "price",
            parametrName: "Цена",
            type: "input"
        },
    ],
    editBook: {
        "id": 2,
        "title": "Великие трагедии и комедии в одном томе",
        "subtitle": "Уильям Шекспир, великий драматург и поэт, крупнейший гуманист эпохи позднего Возрождения, оставил потомкам богатейшее литературное наследие. Один из самых загадочных творцов слова поставил перед человечеством вопрос \"Быть или не быть?\", предоставив каждому возможность искать ответ самому. В сборник пьес английского Барда вошли избранные трагедии и комедии, которые оказали огромное влияние на всю европейскую литературу.",
        "edition": 1,
        "isbn": "978-5-04-092582-7",
        "udc": "821.111-2",
        "bbk": "84(4Вел)-6",
        "publicationYear": 2018,
        "circulation": 3000,
        "price": 619,
        "inStock": 10,
        "weight": 1020,
        "ageLimit": "16+",
        "format": "21.9 x 14.4 x 5.2",
        "coverType": "Твердая бумажная",
        "pageCount": 1120,
        "coverUrl": null,
        "authors": [
            {
                "author": {
                    "id": 2,
                    "firstName": "Уильям",
                    "middleName": null,
                    "lastName": "Шекспир"
                },
                "position": 1
            }
        ],
        "publisher": {
            "id": 1,
            "name": "Эксмо",
            "bookList": null,
            "bookSeriesList": null
        },
        "city": "Москва",
        "categories": [
            {
                "id": 21,
                "name": "Классика",
                "parentId": 4,
                "bookList": null
            }
        ],
        "bookSeries": {
            "id": 2,
            "name": "Полное собрание сочинений",
            "publisherId": 1,
            "bookList": null
        },
        "language": "Русский"
    }
};

const bookEdit = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_BOOK_EDIT: {
      return setBookEdit(state, action);
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

export default bookEdit;
