import * as actions from "./actions";

const initialState = {
    order:{
        sendPrice: 0,
        addr: {}
    },
    cities:[{
        data: { content: 'Saint-Petersburg' },
        options: { selectOnClick: false },
        coords: [55.76, 37.64],
    },
        {
            data: { content: 'U-U' },
            options: { selectOnClick: false },
            coords: [51.811704, 107.623283],
        }],
    selectCity:{
        data: { content: 'Saint-Petersburg' },
        options: { selectOnClick: false },
        coords: [55.76, 37.64]
    },
    pickupPoint:[{"geometry": {"coordinates": [55.76, 37.64]},
        "properties": {
            "balloonContent": "organization",
            orgId: "1",
            orgName: "PickPoint",
            orgWorkPeriod: "09:-20:00",
            orgIconUrl: "http://placehold.it/85x22",
            orgAddr: "Улан-Удэ, Республика Бурятия, 670961, Улан-Удэ, Смолина ул., 54",
            payCase: "Наличные и банковская карта"
        },
        "options": {
            "preset": "islands#icon",
            "iconColor": "#0095b6"
        }},
        {"geometry": {"coordinates": [55.76, 37.65]},
            "properties": {
                "balloonContent": "organization",
                orgId: "2",
                orgName: "PickPoint2",
                orgWorkPeriod: "09:-20:00",
                orgIconUrl: "http://placehold.it/85x22",
                orgAddr: "Улан-Удэ, Республика Бурятия, 670961, Улан-Удэ, Смолина ул., 54",
                payCase: "Наличные и банковская карта"
            },
            "options": {
                "preset": "islands#icon",
                "iconColor": "#0095b6"
            }}]
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
        selectCity: action.payload.city
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
// SET_PICKUP_CITIES
const setPickupCities = (state, action) => {
    return {
        ...state,
        cities: action.payload.cities
    };
};


export default books;
