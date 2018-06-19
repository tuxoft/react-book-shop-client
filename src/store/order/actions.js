export const FETCH_ORDER = "FETCH_ORDER";
export const fetchOrder = (id) => ({
    type: FETCH_ORDER,
    payload: {
        id
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

