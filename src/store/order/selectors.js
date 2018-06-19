export const getOrder = (state) => {
    return state.order;
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
    return state.cities.find((city) => city.id == state.selectCity);
};

export const getPickupPoint = (state) => {
    return state.pickupPoint?state.pickupPoint.map((point, indx)=>({
        "geometry": {"coordinates": point.coords},
        "properties": {
            orgId: point.id,
            orgName: point.name,
            orgWorkPeriod: point.workPeriod,
            orgIconUrl: point.iconUrl,
            orgAddr: point.addr,
            payCase: point.payCase
        },
        "options": {
            "preset": "islands#icon",
            "iconColor": "#0095b6"
        }
    })):[];
};

export const getOriginalPickupPoints = (state) => {
    return state.pickupPoint ? state.pickupPoint : [];
};

export const getPickupPointsRangeCost = (state) => {
    let cost = "";
    if (state.pickupPoint) {
        let minCost, maxCost;
        state.pickupPoint.forEach((pickupPoint, indx) => {
            if (pickupPoint.sendPrice > maxCost || indx == 0) {
                 maxCost = pickupPoint.sendPrice
            };
            if (pickupPoint.sendPrice < minCost || indx == 0) {
              minCost = pickupPoint.sendPrice
            };
        });
        if (minCost === maxCost) {
            cost = minCost + " ₽"
        } else {
            cost = minCost + " - " + maxCost + " ₽"
        }
    }
    return cost;
}
