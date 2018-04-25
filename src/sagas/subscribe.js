import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as actionsSubscribe from "../store/subscribe/actions";

// WORKERS
function* fetchSubscribe(action) {
    try {
        console.log("Вы подписаны "+ action.payload.email,);
        yield put(
            flashActions.showFlash(
                "Вы подписаны "+ action.payload.email,
                "danger",
                true,
            ),
        );
    } catch (error) {
        yield put(
            flashActions.showFlash(
                "Ошибка! Вы не подписаны",
                "danger",
                false,
            ),
        );
    }
}

// WATCHERS
function* subscribeFlow() {
    yield takeLatest(actionsSubscribe.SUBSCRIBE_EMAIL, fetchSubscribe);
}

export default function* subscribe() {
  yield all([subscribeFlow()]);
}
