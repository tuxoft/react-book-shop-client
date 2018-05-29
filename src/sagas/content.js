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

function* fetchPromoPictures(action) {
  try {
    console.log("fetchPromoPictures ", action.payload.value);
    const promoPictures = yield call(Api.content.getPromoPictures, action.payload.value);
    yield put(contentActions.setPromoPictures(promoPictures.data));
  } catch (error) {
    console.log("fetchPromoPictures error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

function* fetchNavigationMenuTop(action) {
  try {
    console.log("fetchNavigationMenuTop ", action.payload.value);
    const navigationMenuTop = yield call(Api.content.getNavigationMenuTop, action.payload.value);
    yield put(contentActions.setNavigationMenuTop(navigationMenuTop.data));
  } catch (error) {
    console.log("fetchNavigationMenuTop error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

function* fetchNavigationMenuLeft(action) {
  try {
    console.log("fetchNavigationMenuLeft ", action.payload.value);
    const navigationMenuLeft = yield call(Api.content.getNavigationMenuLeft, action.payload.value);
    yield put(contentActions.setNavigationMenuLeft(navigationMenuLeft.data));
  } catch (error) {
    console.log("fetchNavigationMenuLeft error", error);
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
function* fetchAdminMenu(action) {
  try {
    console.log("fetchAdminMenu ", action.payload.value);
    const menu = yield call(Api.content.getAdminMenu, action.payload.value);
    yield put(contentActions.setAdminMenu(menu.data));
  } catch (error) {
    console.log("fetchAdminMenu error", error);
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

function* fetchPromoPictureFlow() {
  yield takeLatest(contentActions.FETCH_PROMO_PICTURES, fetchPromoPictures);
}

function* fetchNavigationMenuTopFlow() {
  yield takeLatest(contentActions.FETCH_NAVIGATION_MENU_TOP, fetchNavigationMenuTop);
}

function* fetchNavigationMenuLeftFlow() {
  yield takeLatest(contentActions.FETCH_NAVIGATION_MENU_LEFT, fetchNavigationMenuLeft);
}

function* fetchAdminMenuFlow() {
  yield takeLatest(contentActions.FETCH_ADMIN_MENU, fetchAdminMenu);
}

export default function* menu() {
  yield all([
      fetchMenuFlow(),
      fetchCategoryCarouselsFlow(),
      fetchPromoPictureFlow(),
      fetchNavigationMenuTopFlow(),
      fetchNavigationMenuLeftFlow(),
      fetchAdminMenuFlow()
  ]);
}
