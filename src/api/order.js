import axios from "axios";
import Contur from "../constants/contur";

export default {
    getInit: () => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/order");
    },
    getById: (id) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/order/"+id);
    },
    makeOrder: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.put(
            ENDPOINT + "/api/order",
            {params}
        );
    },
    getCities: () => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/cities");
    },
    getPickupPoint: (id) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/pickupPoint/"+id);
    },
};
