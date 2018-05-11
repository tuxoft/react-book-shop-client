import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as menuActions from "../store/menu/actions";
import Api from "../api";

// WORKERS
function* fetchMenu(action) {
    try {
        console.log("fetchMenu ", action.payload.value);
        const menu = yield call(Api.menu.getMenu, action.payload.value);
        yield put(menuActions.setMenu(menu.data));
    } catch (error) {
        console.log("fetchMenu error", error);
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
function* fetchMenuFlow() {
    yield takeLatest(menuActions.FETCH_MENU, fetchMenu);
}

export default function* menu() {
  yield all([
      fetchMenuFlow()
  ]);
}
