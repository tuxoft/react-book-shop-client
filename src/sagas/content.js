import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as contentActions from "../store/content/actions";
import Api from "../api";

// WORKERS
function* fetchMenu(action) {
    try {
        console.log("fetchMenu ", action.payload.value);
        const menu = yield call(Api.content.getMenu, action.payload.value);
        yield put(contentActions.setMenu(menu.data));
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

function* fetchCategoryCarousels(action) {
  try {
    console.log("fetchCategoryCarousels ", action.payload.value);
    const categoryCarousels = yield call(Api.content.getCategoryCarousels, action.payload.value);
    yield put(contentActions.setCategoryCarousels(categoryCarousels.data));
  } catch (error) {
    console.log("fetchCategoryCarousels error", error);
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
    yield takeLatest(contentActions.FETCH_MENU, fetchMenu);
}

function* fetchCategoryCarouselsFlow() {
  yield takeLatest(contentActions.FETCH_CATEGORY_CAROUSELS, fetchCategoryCarousels);
}

export default function* menu() {
  yield all([
      fetchMenuFlow(),
      fetchCategoryCarouselsFlow()
  ]);
}
