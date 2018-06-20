export const getOrder = (state) => {
    return state.order;
};

export const getOrders = (state) => {
    return state.list;
};

export const getCities = (state) => {
    return state.cities?state.cities.map((citi, indx)=>({
        data: { content: citi.name },
        options: { selectOnClick: false },
        coords: citi.coords,
        id: citi.id
    })):[];
};

export const getSelectCity = (state) => {
    return state.selectCity;
};

export const getPickupPoint = (state) => {
    return state.pickupPoint?state.pickupPoint.map((point, indx)=>({
        "geometry": {"coordinates": point.coords},
        "properties": {
            orgId: point.orgId,
            orgName: point.orgName,
            orgWorkPeriod: point.orgWorkPeriod,
            orgIconUrl: point.orgIconUrl,
            orgAddr: point.orgAddr,
            payCase: point.payCase
        },
        "options": {
            "preset": "islands#icon",
            "iconColor": "#0095b6"
        }
    })):[];
};
