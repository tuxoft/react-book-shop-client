import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as actionsSubscribe from "../store/searchBooks/actions";

// WORKERS
function* fetchSearchBooks(action) {
    try {
        yield put(
            flashActions.showFlash(
                "Вы ищете "+ action.payload.value,
                "danger",
                false,
            ),
        );
    } catch (error) {
        yield put(
            flashActions.showFlash(
                "Ошибка! Вы не ищете",
                "danger",
                false,
            ),
        );
    }
}

// WATCHERS
function* searchBooksFlow() {
    yield takeLatest(actionsSubscribe.SEARCH_BOOKS, fetchSearchBooks);
}

export default function* searchBooks() {
  yield all([searchBooksFlow()]);
}
