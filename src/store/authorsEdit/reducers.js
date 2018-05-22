import * as actions from "./actions";

const initialState = {
    options: [
        {
            name: "firstName",
            parametrName: "Имя",
            dictionary: "",
            type: "input"
        },
        {
            name: "lastName",
            parametrName: "Фамилия",
            dictionary: "",
            type: "input"
        },
        {
            name: "middleName",
            parametrName: "Имя",
            dictionary: "",
            type: "input"
        },
    ],
    authorsEdit: {
        "id": 2,
        "firstName": "Уильям",
        "middleName": '',
        "lastName": "Шекспир"
    }
};

const authorsEdit = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_AUTHORS_EDIT: {
            return setAuthorsEdit(state, action);
        }
        default: {
            return state;
        }
    }
};

// SET_AUTHORS_EDIT
const setAuthorsEdit = (state, action) => {
    return {
        ...state,
        authorsEdit: action.payload.value
    };
};

export default authorsEdit;
