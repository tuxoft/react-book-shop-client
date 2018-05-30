import axios from "axios";
import Contur from "../constants/contur";

export default {
  getBook: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/admin/books/" + params);
  },

  searchDictionary: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/admin/dictionary/search", {params: params});
  },

  getDictionary: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/admin/dictionary", {params: params});
  },

  saveBook: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.put(ENDPOINT + "/api/admin/books", params);
  },

  saveFile: (file) => {
    const ENDPOINT = Contur.get().API;
    const data = new FormData();
    data.append("file", file);
    return axios.post(ENDPOINT + "/api/admin/file", data);
  },

  getBookList: (params) => {
    const ENDPOINT = Contur.get().API;
    return axios.get(ENDPOINT + "/api/admin/books", {params: params});
  },

};
