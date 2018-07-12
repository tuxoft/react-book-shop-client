export const FETCH_WORK_ORDER = "FETCH_WORK_ORDER";
export const fetchOrder = (id) => ({
    type: FETCH_WORK_ORDER,
    payload: {
        id
    }
});
export const SET_WORK_ORDER = "SET_WORK_ORDER";
export const setOrder = (order) => ({
    type: SET_WORK_ORDER,
    payload: {
        order
    }
});
export const FETCH_WORK_ORDER_LIST = "FETCH_WORK_ORDER_LIST";
export const fetchOrderList = (workStatus) => ({
    type: FETCH_WORK_ORDER_LIST,
    payload: {
        workStatus
    }
});
export const SET_WORK_ORDER_LIST = "SET_WORK_ORDER_LIST";
export const setOrderList = (orderList) => ({
    type: SET_WORK_ORDER_LIST,
    payload: {
        orderList
    }
});
export const SET_WORK_STATUS = "SET_WORK_STATUS";
export const setWorkStatus = (orderId, orderStatus) => ({
    type: SET_WORK_STATUS,
    payload: {
        orderId,
        orderStatus
    }
});
export const SET_ORDER_STATUS = "SET_ORDER_STATUS";
export const setOrderStatus = (orderId, orderStatus, note) => ({
    type: SET_ORDER_STATUS,
    payload: {
        orderId,
        orderStatus,
        note
    }
});
export const SET_ORDER_WORKER = "SET_ORDER_WORKER";
export const setOrderWorker = (orderId, workerId) => ({
    type: SET_ORDER_WORKER,
    payload: {
        orderId,
        workerId
    }
});
export const SET_ORDER_PAY = "SET_ORDER_PAY";
export const setOrderPay = (orderId, pay) => ({
    type: SET_ORDER_PAY,
    payload: {
        orderId,
        pay
    }
});
export const SEARCH_WORKERS = "SEARCH_WORKERS";
export const searchWorkers = (params) => ({
    type: SEARCH_WORKERS,
    payload: {
        params
    }
});
export const SET_WORKERS = "SET_WORKERS";
export const setWorkers = (workers) => ({
    type: SET_WORKERS,
    payload: {
        workers
    }
});
export const GET_ORDER_IN_WORK = "GET_ORDER_IN_WORK";
export const getOrderInWork = (orderId) => ({
  type: GET_ORDER_IN_WORK,
  payload: {
    orderId
  }
});


