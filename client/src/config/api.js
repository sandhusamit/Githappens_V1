// src/config/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // sends your cookie automatically
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      console.log("Not authenticated or session expired");
    }

    return Promise.reject(error);
  }
);

export default api;