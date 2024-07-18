import axios, { AxiosResponse } from "axios";
import { getToken } from "./storage";

const http = axios.create({
  baseURL: "http://sph-h5-api.atguigu.cn",
  timeout: 1000 * 1000,
});

http.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  // 请求成功的回调
  (response: AxiosResponse<any, any>) => {
    return response.data;
  },
  // 请求失败的回调
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
