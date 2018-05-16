import * as actions from "./actions";

const initialState = {
    bookSeries:[
        {
            "id": 2,
            "name": "Полное собрание сочинений",
            "publisherId": 1,
            "bookList": null
        },
        {
            "id": 3,
            "name": "Про луну",
            "publisherId": 1,
            "bookList": null
        },
        {
            "id": 4,
            "name": "Про куку",
            "publisherId": 1,
            "bookList": null
        }
    ],
    publishers: [
        {
        "id": 1,
        "name": "Эксмо",
        "bookList": null,
        "bookSeriesList": null
    },
        {
            "id": 2,
            "name": "NOT Эксмо",
            "bookList": null,
            "bookSeriesList": null
        }
    ],
    authors: [
        {
            "author": {
                "id": 2,
                "firstName": "Уильям",
                "middleName": null,
                "lastName": "Шекспир"
            },
            "position": 1
        },
        {
            "author": {
                "id": 3,
                "firstName": "Pushkin",
                "middleName": null,
                "lastName": "Solncelikiy"
            },
            "position": 1
        },
        {
            "author": {
                "id": 4,
                "firstName": "Gogol'",
                "middleName": null,
                "lastName": "Mogol'"
            },
            "position": 1
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
