import * as actions from "./actions";

const initialState = {
    options: [
        {
            name: "name",
            parametrName: "Название",
            dictionary: "",
            type: "input"
        },
    ],
    publisherEdit: {
        "id": 2,
        "name": "NOT Эксмо",
        "bookList": null,
        "bookSeriesList": null
    }
};

const publisherEdit = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_PUBLISHER_EDIT: {
            return setPublisherEdit(state, action);
        }
        default: {
            return state;
        }
    }
};

// SET_PUBLISHER_EDIT
const setPublisherEdit = (state, action) => {
    return {
        ...state,
        publisherEdit: action.payload.value
    };
};

export default publisherEdit;
