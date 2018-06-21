import axios from "axios";
import Contur from "../constants/contur";

export default {
    get: () => {
        const ENDPOINT = Contur.get().API;
        return axios.get(ENDPOINT + "/api/profile");
    },
    put: (params) => {
        const ENDPOINT = Contur.get().API;
        return axios.put(
            ENDPOINT + "/api/profile",
            {params}
        );
    },
};
