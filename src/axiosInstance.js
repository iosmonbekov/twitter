import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://twitter-42eb0.firebaseio.com/",
});

export const UserAPI = {
    getArticles: () => axiosInstance.get("posts.json"),
    getAnArticle: (id) => axiosInstance.get("posts/" + id + ".json"),
    deleteAnArticle: (id) => axiosInstance.delete("posts/" + id + ".json"),
    postAnArticle: (post) => axiosInstance.post("posts.json", post),
    putAnArticle: (id, post) =>
        axiosInstance.put("posts/" + id + ".json", post),
};

export default axiosInstance;
