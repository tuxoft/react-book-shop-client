export const FETCH_ORDER = "FETCH_ORDER";
export const fetchOrder = (id) => ({
    type: FETCH_ORDER,
    payload: {
        id
    }
});
export const FETCH_ORDER_LIST = "FETCH_ORDER_LIST";
export const fetchOrderList = (id) => ({
    type: FETCH_ORDER_LIST,
    payload: {
        id
    }
});
export const SET_ORDER_LIST = "SET_ORDER_LIST";
export const setOrderList = (list) => ({
    type: SET_ORDER_LIST,
    payload: {
        list
    }
});
export const INIT_ORDER = "INIT_ORDER";
export const initOrder = () => ({
    type: INIT_ORDER,
    payload: {
    }
});
export const GET_PICKUP_POINT = "GET_PICKUP_POINT";
export const getPickupPoint = (cityId) => ({
    type: GET_PICKUP_POINT,
    payload: {
        cityId
    }
});
export const SET_PICKUP_POINT = "SET_PICKUP_POINT";
export const setPickupPoint = (pickupPoint) => ({
    type: SET_PICKUP_POINT,
    payload: {
        pickupPoint
    }
});
export const GET_MAIL_SERVICE = "GET_MAIL_SERVICE";
export const getMailService = (cityId) => ({
  type: GET_MAIL_SERVICE,
  payload: {
    cityId
  }
});
export const SET_MAIL_SERVICE = "SET_MAIL_SERVICE";
export const setMailService = (mailService) => ({
  type: SET_MAIL_SERVICE,
  payload: {
    mailService
  }
});
export const GET_COURIER_SERVICE = "GET_COURIER_SERVICE";
export const getCourierService = (cityId) => ({
  type: GET_COURIER_SERVICE,
  payload: {
    cityId
  }
});
export const SET_COURIER_SERVICE = "SET_COURIER_SERVICE";
export const setCourierService = (courierService) => ({
  type: SET_COURIER_SERVICE,
  payload: {
    courierService
  }
});
export const GET_PICKUP_CITIES = "GET_PICKUP_CITIES";
export const getPickupCities = () => ({
    type: GET_PICKUP_CITIES,
    payload: {}
});
export const SET_PICKUP_CITIES = "SET_PICKUP_CITIES";
export const setPickupCities = (cities) => ({
    type: SET_PICKUP_CITIES,
    payload: {
        cities
    }
});
export const SELECT_CITY = "SELECT_CITY";
export const selectCity = (cityId) => ({
    type: SELECT_CITY,
    payload: {
        cityId
    }
});
export const SET_ORDER_ORDER = "SET_ORDER_ORDER";
export const setOrder = (order) => ({
    type: SET_ORDER_ORDER,
    payload: {
        order
    }
});

export const MAKE_ORDER = "MAKE_ORDER";
export const makeOrder = (order) => ({
    type: MAKE_ORDER,
    payload: {
        order
    }
});

