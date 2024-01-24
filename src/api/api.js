import axios from "axios";

const baseURL = "https://workintech-fe-ecommerce.onrender.com";

const api = axios.create({
  baseURL: baseURL,
});

const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.common["Authorization"] = token;
}

export default api;
