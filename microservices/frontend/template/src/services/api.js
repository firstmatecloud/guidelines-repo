import axios from "axios";
import qs from "qs";

const baseURL = window._env_.BACKEND_URL || "/api/v1";
const api = axios.create({
    baseURL,
    paramsSerializer: (params) => qs.stringify(params, {indices: false}),
    headers: {
        "Content-Type": "application/json",
    },
});


export default api;