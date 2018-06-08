export const FETCH_ORDER = "FETCH_ORDER";
export const fetchOrder = (params) => ({
    type: FETCH_ORDER,
    payload: {
        params
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
export const getPickupCities = (params) => ({
    type: GET_PICKUP_CITIES,
    payload: {
        params
    }
});
export const SET_PICKUP_CITIES = "SET_PICKUP_CITIES";
export const setPickupCities = (cities) => ({
    type: SET_PICKUP_CITIES,
    payload: {
        cities
    }
});
export const SELECT_CITY = "SELECT_CITY";
export const selectCity = (city) => ({
    type: SELECT_CITY,
    payload: {
        city
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

