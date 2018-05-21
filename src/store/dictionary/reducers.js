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
    publisher: [
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
            "id": 2,
            "firstName": "Уильям",
            "middleName": null,
            "lastName": "Шекспир"
        },
        {
            "id": 3,
            "firstName": "Уильям",
            "middleName": null,
            "lastName": "Pushkin"
        },
        {
            "id": 4,
            "firstName": "Уильям",
            "middleName": null,
            "lastName": "Mozart"
        },
        {
            "id": 5,
            "firstName": "Уильям",
            "middleName": null,
            "lastName": "Gogol'"
        },
    ],
    categories: [
        {
            "id": 21,
            "name": "Классика",
            "parentId": 4,
            "bookList": null
        },
        {
            "id": 22,
            "name": "Kolbasika",
            "parentId": 4,
            "bookList": null
        },
        {
            "id": 23,
            "name": "Риторика",
            "parentId": 4,
            "bookList": null
        }
    ],
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DICTIONARY: {
      return setDictionary(state, action);
    }
    default: {
      return state;
    }
  }
};

// SET_DICTIONARY
const setDictionary = (state, action) => {
  return {
    ...state,
      [action.payload.type]: action.payload.value
  };
};

export default dictionary;
