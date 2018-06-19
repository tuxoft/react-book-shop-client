import axios from "axios";
import Contur from "../constants/contur";

export default {

  searchDictionary: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/dictionary/search", {params: params});
  },

  getDictionary: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/dictionary", {params: params});
  }

};