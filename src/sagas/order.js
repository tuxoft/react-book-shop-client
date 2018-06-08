import { all, call, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as orderActions from "../store/order/actions";
import Api from "../api";

// WORKERS
function* fetchOrder(action) {
    try {
        console.log("fetchOrder ", action.payload.params);
        //const books = yield call(Api.books.search, action.payload.params);
        //yield put(booksActions.setSearchBooks(books.data, action.payload.params.query));
    } catch (error) {
        console.log("fetchOrder error", error);
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
function* getPickupPoint(action) {
    try {
        console.log("getPickupPoint ", action.payload.params);
        //const books = yield call(Api.books.search, action.payload.params);
        //yield put(booksActions.setSearchBooks(books.data, action.payload.params.query));
    } catch (error) {
        console.log("getPickupPoint error", error);
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
function* getPickupCities(action) {
    try {
        console.log("getPickupCities ", action.payload.params);
        //const books = yield call(Api.books.search, action.payload.params);
        //yield put(booksActions.setSearchBooks(books.data, action.payload.params.query));
    } catch (error) {
        console.log("getPickupCities error", error);
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
function* makeOrder(action) {
    try {
        console.log("makeOrder ", action.payload.params);
        //const books = yield call(Api.books.search, action.payload.params);
        //yield put(booksActions.setSearchBooks(books.data, action.payload.params.query));
    } catch (error) {
        console.log("makeOrder error", error);
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
function* fetchOrderFlow() {
    yield takeLatest(orderActions.FETCH_ORDER, fetchOrder);
}
function* getPickupPointFlow() {
    yield takeLatest(orderActions.GET_PICKUP_POINT, getPickupPoint);
}
function* getPickupCitiesFlow() {
    yield takeLatest(orderActions.GET_PICKUP_CITIES, getPickupCities);
}
function* makeOrderFlow() {
    yield takeLatest(orderActions.MAKE_ORDER, makeOrder);
}

export default function* order() {
  yield all([
      fetchOrderFlow(),
      getPickupPointFlow(),
      getPickupCitiesFlow(),
      makeOrderFlow(),
  ]);
}
