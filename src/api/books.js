import axios from "axios";
import Contur from "../constants/contur";

export default {
  new: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/books", { params: params });
  },
    trade: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", { params: params });
    },
    good: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", { params: params });
    },
    search: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", { params: params });
    },
};
