import axios from "axios";

const http = axios.create({
  baseURL: "https://api.uomg.com",
  timeout: 1000 * 1000,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  // 请求成功的回调
  (response) => {
    return response.data;
  },
  // 请求失败的回调
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
