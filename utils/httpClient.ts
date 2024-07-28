import AxiosConfig from "../config/axios";

//* Create HTTP Client with Axios
const HttpClient = async (
  url: string,
  data = {},
  method = "get",
  headers = {}
) => {
  const config: any = {
    method,
    url,
    headers,
  };

  if (method === "get") {
    config.params = data;
  } else {
    config.data = data;
  }

  try {
    return await AxiosConfig(config);
  } catch (e: any) {
    if (e.response.status === 401) {
      localStorage.clear();
      return Promise.reject(e.response);
    } else if (e.response.status === 403) {
      return Promise.reject(e.response);
    } else {
      throw e;
    }
  }
};
export default HttpClient;
