import axios from "axios";

const instances = axios.create({
    baseURL: process.env.GATSBY_API_URL,
});

instances.interceptors.request.use(function(config: any) {
    return config;
}, function(error: any) {
    return Promise.reject(error);
});

export default instances;