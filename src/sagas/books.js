import { all, call, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as booksActions from "../store/books/actions";
import Api from "../api";

// WORKERS
function* fetchSearchBooks(action) {
    try {
        console.log("fetchSearchBooks ", action.payload.params);
        const books = yield call(Api.books.search, action.payload.params);
        yield put(booksActions.setSearchBooks(books.data, action.payload.params.query));
    } catch (error) {
        console.log("fetchSearchBooks error", error);
        yield put(
            flashActions.showFlash(
                "Ошибка! Данные не получены",
                "danger",
                true,
            ),
        );
    }
}

// WORKERS
function* fetchBook(action) {
    try {
        console.log("fetchBook ", action.payload.id);
        const book = yield call(Api.books.id, action.payload.id);
        yield put(booksActions.setBook(book.data));
    } catch (error) {
        console.log("fetchBook error", error);
        yield put(
            flashActions.showFlash(
                "Ошибка! Данные не получены",
                "danger",
                true,
            ),
        );
    }
}

// WORKERS
function* fetchBooksByCategory(action) {
  try {
    console.log("fetchBooksByCategory ", action.payload.params);
    const booksByCategory = yield call(Api.books.category, action.payload.params);
    yield put(booksActions.setBooksByCategory(booksByCategory.data, action.payload.params.categoryId));
  } catch (error) {
    console.log("fetchBooksByCategory error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

// WORKERS
function* fetchSuggestionSearch(action) {
  try {
    console.log("fetchSuggestionSearch ", action.payload.params);
    const suggestionSearch = yield call(Api.books.search, action.payload.params);
    yield put(booksActions.setSuggestionSearch(suggestionSearch.data.data));
  } catch (error) {
    console.log("fetchSuggestionSearch error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

// WATCHERS
function* fetchSearchBooksFlow() {
    yield takeLatest(booksActions.BOOKS_SEARCH, fetchSearchBooks);
}
function* fetchBookFlow() {
    yield takeLatest(booksActions.GET_BOOK, fetchBook);
}
function* fetchBooksByCategoryFlow() {
  yield takeLatest(booksActions.FETCH_BOOKS_BY_CATEGORY, fetchBooksByCategory);
}

function* fetchSuggestionSearchFlow() {
  yield takeLatest(booksActions.FETCH_SUGGESTION_SEARCH, fetchSuggestionSearch);
}

export default function* books() {
  yield all([
      fetchBookFlow(),
      fetchSearchBooksFlow(),
      fetchBooksByCategoryFlow(),
      fetchSuggestionSearchFlow()
  ]);
}
