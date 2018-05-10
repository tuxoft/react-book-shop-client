import axios from "axios";
import Contur from "../constants/contur";

export default {
    get: () => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/cart");
    },
    put: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.post(
            ENDPOINT + "/api/cart",
            {params: params}
        );
    },
    post: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.post(
            ENDPOINT + "/api/cart",
            {params: params}
        );
    },
    delete: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.post(
            ENDPOINT + "/api/cart",
            {params: params}
        );
    },
};
