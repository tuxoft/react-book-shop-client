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
            name: "parentId",
            parametrName: "Категории",
            dictionary: "categories",
            type: "oneFromList"
        },
    ],
    categoryEdit: {
        "id": 21,
        "name": "Классика",
        "parentId": {
            "id": 22,
            "name": "Kolbasika",
            "parentId": 4,
            "bookList": null
        },
        "bookList": null
    }
};

const categoryEdit = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CATEGORY_EDIT: {
      return setCategoryEdit(state, action);
    }
    default: {
      return state;
    }
  }
};

// SET_CATEGORY_EDIT
const setCategoryEdit = (state, action) => {
  return {
    ...state,
      categoryEdit: action.payload.value
  };
};

export default categoryEdit;
