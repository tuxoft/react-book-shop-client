import axios from "axios";
import Contur from "../constants/contur";

export default {
    getById: (id) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/order/"+id);
    },
    getList: () => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders");
    },
    setWorkStatus: (orderId, orderStatus) => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/work/orders/work-status", {params: {id: orderId, status: orderStatus}});
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
        return axios.get(ENDPOINT + "/api/dictionary/search", {params: params});
    },

};

