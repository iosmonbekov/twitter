import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://twitter-42eb0.firebaseio.com/",
});

export default axiosInstance;
