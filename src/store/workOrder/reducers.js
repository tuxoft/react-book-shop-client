import * as actions from "./actions";

const initialState = {
    order:{
        sendPrice: 0,
        addr: {}
    },
    orderList: [],
    workers: [],
};

const workOrder = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_WORK_ORDER: {
            return setOrder(state, action);
        }
        case actions.SET_WORK_ORDER_LIST: {
            return setOrderList(state, action);
        }
        case actions.SET_WORKERS: {
            return setWorkers(state, action);
        }

        default: {
            return state;
        }
    }
};

// SET_WORK_ORDER
const setOrder = (state, action) => {
    return {
        ...state,
        order: action.payload.order
    };
};
// SET_WORK_ORDER_LIST
const setOrderList = (state, action) => {
    return {
        ...state,
        orderList: action.payload.orderList
    };
};
// SET_WORKERS
const setWorkers = (state, action) => {
    return {
        ...state,
        workers: action.payload.workers
    };
};

export default workOrder;
