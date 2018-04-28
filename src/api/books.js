import axios from "axios";
import Contur from "../constants/contur";

export default {
  new: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/books");
  },
    trade: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books");
    },
    good: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books");
    },
    search: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books");
    },
};
