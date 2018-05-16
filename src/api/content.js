import axios from "axios";
import Contur from "../constants/contur";

export default {
    getMenu: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/menu", {params: params});
    },
    getCategoryCarousels: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/categoryCarousels", {params: params});
    },
    getPromoPictures: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/promoPictures", {params: params});
    }

};
