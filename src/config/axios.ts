import axios, { AxiosRequestConfig } from "axios";
const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_URL as string,
};
const AxiosConfig = axios.create(config);

AxiosConfig.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (error?.code === "ERR_NETWORK") {
      return Promise.reject(error);
    }

    /*  const status = error.response.status;
    if (
      status !== 401 ||
      (status === 401 && window.location.pathname === "/")
    ) {
      return Promise.reject(error);
    } */
  }
);

export default AxiosConfig;
