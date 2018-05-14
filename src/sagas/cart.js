import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as bucketActions from "../store/bucket/actions";
import Api from "../api";

// WORKERS
function* fetchCart(action) {
    try {
        console.log("fetchCart ", action.payload.value);
        const cart = yield call(Api.cart.get, action.payload.value);
        yield put(bucketActions.setCart(cart.data));
    } catch (error) {
        console.log("fetchCart error", error);
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
function* addBookToCart(action) {
    try {
        console.log("addBookToCart ", action.payload.value);
        const cart = yield call(Api.cart.post, action.payload.value);
        yield put(bucketActions.setCart(cart.data));
    } catch (error) {
        console.log("addBookToCart error", error);
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
function* setBookInCart(action) {
    try {
        console.log("setBookInCart ", action.payload.value);
        const cart = yield call(Api.cart.put, action.payload.value);
        yield put(bucketActions.setCart(cart.data));
    } catch (error) {
        console.log("setBookInCart error", error);
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
function* deleteBookFromCart(action) {
    try {
        console.log("deleteBookFromCart ", action.payload.value);
        const cart = yield call(Api.cart.delete, action.payload.value);
        yield put(bucketActions.setCart(cart.data));
    } catch (error) {
        console.log("deleteBookFromCart error", error);
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
function* deleteBookFromCartAll(action) {
    try {
        console.log("deleteBookFromCartAll ", action.payload.value);
        const cart = yield call(Api.cart.deleteAll, action.payload.value);
        yield put(bucketActions.setCart(cart.data));
    } catch (error) {
        console.log("deleteBookFromCartAll error", error);
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
function* fetchCartFlow() {
    yield takeLatest(bucketActions.GET_CART, fetchCart);
}
function* addBookToCartFlow() {
    yield takeLatest(bucketActions.ADD_BOOK_TO_CART, addBookToCart);
}
function* setBookInCartFlow() {
    yield takeLatest(bucketActions.SET_BOOK_IN_CART, setBookInCart);
}
function* deleteBookFromCartFlow() {
    yield takeLatest(bucketActions.DELETE_BOOK_FROM_CART, deleteBookFromCart);
}
function* deleteBookFromCartAllFlow() {
    yield takeLatest(bucketActions.DELETE_BOOK_FROM_CART_ALL, deleteBookFromCartAll);
}

export default function* cart() {
  yield all([
      fetchCartFlow(),
      addBookToCartFlow(),
      setBookInCartFlow(),
      deleteBookFromCartFlow(),
      deleteBookFromCartAllFlow(),
  ]);
}
