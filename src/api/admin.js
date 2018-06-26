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
  },

  saveObject: (params, type) => {
    const ENDPOINT = Contur.get().API;
    switch (type) {
      case "book":  return axios.put(ENDPOINT + "/api/admin/books", params);
      case "author":  return axios.put(ENDPOINT + "/api/admin/authors", params);
      case "publisher":  return axios.put(ENDPOINT + "/api/admin/publishers", params);
      case "category":  return axios.put(ENDPOINT + "/api/admin/categories", params);
      case "bookSeries":  return axios.put(ENDPOINT + "/api/admin/bookSeries", params);
      case "city":  return axios.put(ENDPOINT + "/api/admin/cities", params);
      case "language":  return axios.put(ENDPOINT + "/api/admin/languages", params);
      case "promoPicture":  return axios.put(ENDPOINT + "/api/admin/promoPictures", params);
      case "categoryCarousel":  return axios.put(ENDPOINT + "/api/admin/categoryCarousels", params);
      default: return axios.put(ENDPOINT + "/api/admin/books", params);
    }
  },

  deleteObject: (params, activeObject) => {

    const ENDPOINT = Contur.get().API;
    switch (activeObject) {
      case "author": return axios.delete(ENDPOINT + "/api/admin/authors/" + params);
      case "book": return axios.delete(ENDPOINT + "/api/admin/books/" + params);
      case "publisher": return axios.delete(ENDPOINT + "/api/admin/publishers/" + params);
      case "category":  return axios.delete(ENDPOINT + "/api/admin/categories/" + params);
      case "bookSeries":  return axios.delete(ENDPOINT + "/api/admin/bookSeries/" + params);
      case "city":  return axios.delete(ENDPOINT + "/api/admin/cities/" + params);
      case "language":  return axios.delete(ENDPOINT + "/api/admin/languages/" + params);
      case "promoPicture":  return axios.delete(ENDPOINT + "/api/admin/promoPictures/" + params);
      case "categoryCarousel":  return axios.delete(ENDPOINT + "/api/admin/categoryCarousels/" + params);
      default: return axios.delete(ENDPOINT + "/api/admin/books/" + params);
    }
  },

  saveFile: (file) => {
    const ENDPOINT = Contur.get().API;
    const data = new FormData();
    data.append("file", file);
    return axios.post(ENDPOINT + "/api/admin/file", data);
  },

  getObject: (params, activeObject) => {
    const ENDPOINT = Contur.get().API;
    switch (activeObject) {
      case "author": return axios.get(ENDPOINT + "/api/admin/authors/" + params);
      case "book": return axios.get(ENDPOINT + "/api/admin/books/" + params);
      case "publisher": return axios.get(ENDPOINT + "/api/admin/publishers/" + params);
      case "category":  return axios.get(ENDPOINT + "/api/admin/categories/" + params);
      case "bookSeries":  return axios.get(ENDPOINT + "/api/admin/bookSeries/" + params);
      case "city":  return axios.get(ENDPOINT + "/api/admin/cities/" + params);
      case "language":  return axios.get(ENDPOINT + "/api/admin/languages/" + params);
      case "promoPicture":  return axios.get(ENDPOINT + "/api/admin/promoPictures/" + params);
      case "categoryCarousel":  return axios.get(ENDPOINT + "/api/admin/categoryCarousels/" + params);
      default: return axios.get(ENDPOINT + "/api/admin/books/" + params);
    }
  },

  getObjectList: (params, activeObject) => {
    const ENDPOINT = Contur.get().API;
    switch (activeObject) {
      case "author": return axios.get(ENDPOINT + "/api/admin/authors", {params: params});
      case "book": return axios.get(ENDPOINT + "/api/admin/books", {params: params});
      case "publisher": return axios.get(ENDPOINT + "/api/admin/publishers", {params: params});
      case "category":  return axios.get(ENDPOINT + "/api/admin/categories", {params: params});
      case "bookSeries":  return axios.get(ENDPOINT + "/api/admin/bookSeries", {params: params});
      case "city":  return axios.get(ENDPOINT + "/api/admin/cities", {params: params});
      case "language":  return axios.get(ENDPOINT + "/api/admin/languages", {params: params});
      case "promoPicture":  return axios.get(ENDPOINT + "/api/admin/promoPictures", {params: params});
      case "categoryCarousel":  return axios.get(ENDPOINT + "/api/admin/categoryCarousels", {params: params});
      default: return axios.get(ENDPOINT + "/api/admin/books", {params: params});
    }
  },
};
