import * as actions from "./actions";

const initialState = {
    searchBooks: {
        meta: {},
        data: []
    },
    suggestionSearch: [],
    book: {},
    booksByCategory: {
        meta: {},
        data: []
    },
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_BOOKS_SEARCH: {
            return setSearchBooks(state, action);
        }
        case actions.SET_BOOK: {
            return setBook(state, action);
        }
        case actions.SET_BOOKS_BY_CATEGORY: {
            return setBooksByCategory(state, action);
        }
        case actions.FETCH_BOOKS_BY_CATEGORY: {
            return fetchBooksByCategory(state, action);
        }
        case actions.SET_SUGGESTION_SEARCH: {
            return setSuggestionSearch(state, action);
        }
        case actions.CLEAR_SUGGESTION_SEARCH: {
            return clearSuggestionSearch(state, action);
        }
        default: {
            return state;
        }
    }
};

// SET_BOOKS_SEARCH
const setSearchBooks = (state, action) => {
    return {
        ...state,
        searchBooks: action.payload.books
    };
};

//SET_BOOK
const setBook = (state, action) => {
    return {
        ...state,
        book: action.payload.book
    };
};

//SET_BOOKS_BY_CATEGORY
const setBooksByCategory = (state, action) => {
    if (action.payload.booksByCategory.meta.paging.start > 0) {
        let mass = state.booksByCategory;
        if (!mass[action.payload.categoryId]) {
            mass[action.payload.categoryId] = action.payload.booksByCategory;
        } else {
            mass[action.payload.categoryId].meta=action.payload.booksByCategory.meta;
            mass[action.payload.categoryId].data=[...mass[action.payload.categoryId].data , ...action.payload.booksByCategory.data];
        }
        mass[action.payload.categoryId].spiner = false;
        return {
            ...state,
            booksByCategory: mass
        };
    } else {
        let mass = state.booksByCategory;
        mass[action.payload.categoryId] = action.payload.booksByCategory;
        mass[action.payload.categoryId].spiner = false;
        return {
            ...state,
            booksByCategory: mass
        };
    }
};

//FETCH_BOOKS_BY_CATEGORY
const fetchBooksByCategory = (state, action) => {
        let mass = state.booksByCategory;
        if(!mass[action.payload.params.categoryId]){
            mass[action.payload.params.categoryId]={
                spiner: true,
                total: 20,
                paging: {
                    start: 0,
                    pageSize: 12
                }
            }
        }else{
            mass[action.payload.params.categoryId].spiner = true;
        }
        return {
            ...state,
            booksByCategory: mass
        };
};

//SET_SUGGESTION_SEARCH
const setSuggestionSearch = (state, action) => {
    return {
        ...state,
        suggestionSearch: action.payload.suggestionSearch
    };
};

//CLEAR_SUGGESTION_SEARCH
const clearSuggestionSearch = (state, action) => {
    return {
        ...state,
        suggestionSearch: []
    };
};

export default books;
