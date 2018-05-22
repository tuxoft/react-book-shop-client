import * as actions from "./actions";

const initialState = {
    options: [
        {
            name: "name",
            parametrName: "Название",
            dictionary: "",
            type: "input"
        },
        {
            name: "publisherId",
            parametrName: "Название",
            dictionary: "publisher",
            type: "oneFromList"
        },
    ],
    bookSeriesEdit: {
        "id": 2,
        "name": "Полное собрание сочинений",
        "publisherId": {
            "id": 2,
            "name": "NOT Эксмо",
            "bookList": null,
            "bookSeriesList": null
        },
        "bookList": null
    },
};

const bookSeriesEdit = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_BOOK_SERIES_EDIT: {
            return setBookSeriesEdit(state, action);
        }
        default: {
            return state;
        }
    }
};

// SET_BOOK_SERIES_EDIT
const setBookSeriesEdit = (state, action) => {
    return {
        ...state,
        bookSeriesEdit: action.payload.value
    };
};

export default bookSeriesEdit;
