import axios, {AxiosResponse, AxiosError} from "axios";

const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (err: AxiosError) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
