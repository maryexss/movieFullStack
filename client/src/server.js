import axios from "axios";

const instance = axios.create({
    // withCredentials: false,
    baseURL:"http://localhost:3000"
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status >= 400) {
            throw new Error(error.response.data);
        }
        return Promise.reject(error);
    }
);

export default instance;
