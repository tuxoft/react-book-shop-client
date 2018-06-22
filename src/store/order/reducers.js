import * as actions from "./actions";

const initialState = {
    order:{
        sendPrice: 0,
        addr: {}
    },
    cities:[],
    selectCity:{
       coords: []
    },
    pickupPoint:[],
    courierService:[],
    mailService:[],
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_CITY: {
            return selectCity(state, action);
        }
        case actions.SET_ORDER_ORDER: {
            return setOrder(state, action);
        }
        case actions.SET_PICKUP_POINT: {
            return setPickupPoint(state, action);
        }
        case actions.SET_COURIER_SERVICE: {
            return setCourierService(state, action);
        }
        case actions.SET_MAIL_SERVICE: {
            return setMailService(state, action);
        }
        case actions.SET_PICKUP_CITIES: {
            return setPickupCities(state, action);
        }
        default: {
            return state;
        }
    }
};

// SELECT_CITY
const selectCity = (state, action) => {
    return {
        ...state,
        selectCity: action.payload.cityId
    };
};
// SET_ORDER_ORDER
const setOrder = (state, action) => {
    return {
        ...state,
        order: action.payload.order
    };
};
// SET_PICKUP_POINT
const setPickupPoint = (state, action) => {
    return {
        ...state,
        pickupPoint: action.payload.pickupPoint
    };
};
// SET_COURIER_SERVICE
const setCourierService = (state, action) => {
  return {
    ...state,
    courierService: action.payload.courierService
  };
};
// SET_MAIL_SERVICE
const setMailService = (state, action) => {
  return {
    ...state,
    mailService: action.payload.mailService
  };
};
// SET_PICKUP_CITIES
const setPickupCities = (state, action) => {
    let selectCity = action.payload.cities && action.payload.cities.length>0?{
        coords: action.payload.cities[0].coords,
    }:{coords: [55.76, 37.64]};
    return {
        ...state,
        cities: action.payload.cities,
        selectCity: selectCity
    };
};


export default books;
