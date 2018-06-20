import axios from "axios";
import Contur from "../constants/contur";

export default {
    get: () => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/profile");
    },
};
