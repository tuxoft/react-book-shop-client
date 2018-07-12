import axios from "axios";
import Contur from "../constants/contur";

export default {
    getById: (id) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/"+id);
    },
    getList: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/", {params: params });
    },
    setWorkStatus: (orderId, workStatus) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/work-status", {params: {id: orderId, status: workStatus}});
    },
    setOrderStatus: (orderId, orderStatus, note) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/status", {params: {id: orderId, status: orderStatus, note: note}});
    },
    setOrderWorker: (orderId, workerId) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/worker", {params: {id: orderId, workerId: workerId}});
    },
    setOrderPay: (orderId, pay) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/pay", {params: {id: orderId, pay: pay}});
    },
    searchWorkers: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/worker/search", {params: params});
    },
    getOrderInWork: (orderId) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/getInWork", {params: {id: orderId}});
    },

};

