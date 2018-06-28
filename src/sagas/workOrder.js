import { all, call, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as orderActions from "../store/workOrder/actions";
import Api from "../api";

// WORKERS
function* fetchOrder(action) {
    try {
        console.log("fetchOrder ", action.payload.id);
        const order = yield call(Api.workOrder.getById, action.payload.id);
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
function* fetchOrderList(action) {
    try {
        console.log("fetchOrderList ");
        const orderList = yield call(Api.workOrder.getList);
        yield put(orderActions.setOrderList(orderList.data));
    } catch (error) {
        console.log("fetchOrderList error", error);
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
function* setWorkStatus(action) {
    try {
        console.log("setWorkStatus ", action.payload.orderId, action.payload.orderStatus);
        const order = yield call(Api.workOrder.setWorkStatus, action.payload.orderId, action.payload.orderStatus);
        yield put(orderActions.setOrder(order.data));
    } catch (error) {
        console.log("setWorkStatus error", error);
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
function* setOrderStatus(action) {
    try {
        console.log("setOrderStatus ", action.payload.orderId, action.payload.orderStatus, action.payload.note);
        const order = yield call(Api.workOrder.setOrderStatus, action.payload.orderId, action.payload.orderStatus, action.payload.note);
        yield put(orderActions.setOrder(order.data));
    } catch (error) {
        console.log("setOrderStatus error", error);
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
function* setOrderWorker(action) {
    try {
        console.log("setOrderWorker ", action.payload.orderId, action.payload.workerId);
        const order = yield call(Api.workOrder.setOrderWorker, action.payload.orderId, action.payload.workerId);
        yield put(orderActions.setOrder(order.data));
    } catch (error) {
        console.log("setOrderWorker error", error);
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
function* setOrderPay(action) {
    try {
        console.log("setOrderPay ", action.payload.orderId, action.payload.pay);
        const order = yield call(Api.workOrder.setOrderPay, action.payload.orderId, action.payload.pay);
        yield put(orderActions.setOrder(order.data));
    } catch (error) {
        console.log("setOrderPay error", error);
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
function* searchWorkers(action) {
    try {
        console.log("searchWorkers ", action.payload.params);
        const order = yield call(Api.workOrder.searchWorkers, action.payload.params);
        yield put(orderActions.setOrder(order.data));
    } catch (error) {
        console.log("searchWorkers error", error);
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
    yield takeLatest(orderActions.FETCH_WORK_ORDER, fetchOrder);
}
// WATCHERS
function* fetchOrderListFlow() {
    yield takeLatest(orderActions.FETCH_WORK_ORDER_LIST, fetchOrderList);
}
// WATCHERS
function* setWorkStatusFlow() {
    yield takeLatest(orderActions.SET_WORK_STATUS, setWorkStatus);
}
// WATCHERS
function* setOrderStatusFlow() {
    yield takeLatest(orderActions.SET_ORDER_STATUS, setOrderStatus);
}
// WATCHERS
function* setOrderWorkerFlow() {
    yield takeLatest(orderActions.SET_ORDER_WORKER, setOrderWorker);
}
// WATCHERS
function* setOrderPayFlow() {
    yield takeLatest(orderActions.SET_ORDER_PAY, setOrderPay);
}
// WATCHERS
function* searchWorkersFlow() {
    yield takeLatest(orderActions.SEARCH_WORKERS, searchWorkers);
}

export default function* workOrder() {
  yield all([
      fetchOrderFlow(),
      fetchOrderListFlow(),
      setWorkStatusFlow(),
      setOrderStatusFlow(),
      setOrderWorkerFlow(),
      setOrderPayFlow(),
      searchWorkersFlow(),
  ]);
}
