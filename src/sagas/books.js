import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as booksActions from "../store/books/actions";
import Api from "../api";

// WORKERS
function* fetchSearchBooks(action) {
    try {
        console.log("fetchSearchBooks ", action.payload.params);
        const books = yield call(Api.books.search, action.payload.params);
        yield put(booksActions.setSearchBooks(books.data));
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
function* fetchCategory(action) {
  try {
    console.log("fetchCategory ", action.payload.params);
    const category = yield call(Api.books.category, action.payload.params);
    yield put(booksActions.setCategory(category.data));
  } catch (error) {
    console.log("fetchCategory error", error);
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
function* fetchCategoryFlow() {
  yield takeLatest(booksActions.FETCH_CATEGORY, fetchCategory);
}

export default function* books() {
  yield all([
      fetchBookFlow(),
      fetchSearchBooksFlow(),
      fetchCategoryFlow()
  ]);
}
