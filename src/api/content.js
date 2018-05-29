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
    },
    getNavigationMenuTop: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/navigationMenuTop/"+params.id);
    },
    getNavigationMenuLeft: (params) => {
      const ENDPOINT = Contur.get().API;
      return axios.get(ENDPOINT + "/api/navigationMenuLeft/"+params.id);
    },
    getAdminMenu: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/admin/menu", {params: params});
    },

};
