import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as booksActions from "../store/books/actions";
import Api from "../api";

// WORKERS
function* fetchNewBooks(action) {
    try {
        console.log("fetchNewBooks ", action.payload.params);
        const books = yield call(Api.books.new, action.payload.params);
        yield put(booksActions.setNewBooks(books.data));
    } catch (error) {
        console.log("fetchNewBooks error", error);
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
function* fetchTradeBooks(action) {
    try {
        console.log("fetchTradeBooks ", action.payload.params);
        const books = yield call(Api.books.trade, action.payload.params);
        yield put(booksActions.setTradeBooks(books.data));
    } catch (error) {
        console.log("fetchTradeBooks error", error);
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
function* fetchGoodBooks(action) {
    try {
        console.log("fetchGoodBooks ", action.payload.params);
        const books = yield call(Api.books.good, action.payload.params);
        yield put(booksActions.setGoodBooks(books.data));
    } catch (error) {
        console.log("fetchGoodBooks error", error);
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

// WATCHERS
function* fetchNewBooksFlow() {
    yield takeLatest(booksActions.BOOKS_NEW, fetchNewBooks);
}
function* fetchTradeBooksFlow() {
    yield takeLatest(booksActions.BOOKS_TRADE, fetchTradeBooks);
}
function* fetchGoodBooksFlow() {
    yield takeLatest(booksActions.BOOKS_GOOD, fetchGoodBooks);
}
function* fetchSearchBooksFlow() {
    yield takeLatest(booksActions.BOOKS_SEARCH, fetchSearchBooks);
}
function* fetchBookFlow() {
    yield takeLatest(booksActions.GET_BOOK, fetchBook);
}

export default function* books() {
  yield all([
      fetchNewBooksFlow(),
      fetchTradeBooksFlow(),
      fetchGoodBooksFlow(),
      fetchBookFlow(),
      fetchSearchBooksFlow()
  ]);
}
