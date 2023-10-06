import axios from 'axios';

const updateAxiosConfig = async (request, headers) => {
  const {contentType, data} = headers ?? false;

  request.interceptors.request.use(function (config) {
    config.baseURL = 'https://liercesantos.com/api/tasks';
    config.headers = {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType || 'application/json',
      'Cache-Control': 'no-store',
    };

    if(data){
      config.data = data;
    }

    return config;
  });

  request.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      // console.log('INTERCEPT:', response);
      return response;
    },
    function (error) {
      return Promise.reject(error?.response);
    },
  );
};

const apiPost = async (url, data, headers = {}) => {
  const api = axios.create();
  await updateAxiosConfig(api, headers);
  return await api.post(url, data);
};

const apiGet = async (url, headers = {}) => {
  const api = axios.create();
  await updateAxiosConfig(api, headers);
  return await api.get(url);
};

export {apiPost, apiGet};
