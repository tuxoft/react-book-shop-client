import { all, call, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as orderActions from "../store/order/actions";
import Api from "../api";
import Contur from "../constants/contur";

// WORKERS
function* fetchOrder(action) {
    try {
        console.log("fetchOrder ", action.payload.id);
        const order = yield call(Api.order.getById, action.payload.id);
        yield put(orderActions.setOrder(order.data));
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
function* initOrder(action) {
    try {
        console.log("initOrder ");
        const order = yield call(Api.order.getInit);
        yield put(orderActions.setOrder(order.data));
        if (order.data && order.data.shopCity && order.data.shopCity.id) {
          yield put(orderActions.selectCity(order.data.shopCity.id));
        }
    } catch (error) {
        console.log("initOrder error", error);
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
        console.log("getPickupPoint ", action.payload.cityId);
        const pickupPoint = yield call(Api.order.getPickupPoint, action.payload.cityId);
        yield put(orderActions.setPickupPoint(pickupPoint.data));
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
        console.log("getPickupCities ");
        const cities = yield call(Api.order.getCities);
        yield put(orderActions.setPickupCities(cities.data));
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
        console.log("makeOrder ", action.payload.order);
        const url = yield call(Api.order.makeOrder, action.payload.order);
        //yield put(orderActions.setPickupCities(cities.data));
        console.log("haveMake", url, Contur.get().PAY_URL + url.data);
        window.location.replace(Contur.get().PAY_URL + url.data);
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

// WORKERS
function* selectCity(action) {
  try {
    yield put(orderActions.getPickupPoint(action.payload.cityId));
  } catch (error) {
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
function* initOrderFlow() {
    yield takeLatest(orderActions.INIT_ORDER, initOrder);
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
function* selectCityFlow() {
  yield takeLatest(orderActions.SELECT_CITY, selectCity);
}

export default function* order() {
  yield all([
      fetchOrderFlow(),
      initOrderFlow(),
      getPickupPointFlow(),
      getPickupCitiesFlow(),
      makeOrderFlow(),
      selectCityFlow()
  ]);
}
