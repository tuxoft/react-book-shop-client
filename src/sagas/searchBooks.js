import { all, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as actionsSearchBooks from "../store/searchBooks/actions";

// WORKERS
function* fetchSearchBooks(action) {
    try {
        console.log("Вы ищете "+ action.payload.value,);
        yield put(
            flashActions.showFlash(
                "Вы ищете "+ action.payload.value,
                "danger",
                true,
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
    yield takeLatest(actionsSearchBooks.SEARCH_BOOKS, fetchSearchBooks);
}

export default function* searchBooks() {
  yield all([searchBooksFlow()]);
}
