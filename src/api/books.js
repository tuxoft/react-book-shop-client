import axios from "axios";
import Contur from "../constants/contur";

export default {

    new: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", {params: params});
    },
    trade: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", {params: params});
    },
    good: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", {params: params});
    },
    search: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books", {params: params});
    },
    id: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/books/"+params);
    },
    category: (params) => {
      const ENDPOINT = Contur.get().API;
      return axios.get(ENDPOINT + "/api/categories/"+params.categoryId+"/books", {params: params});
    }
};
