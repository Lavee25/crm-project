import axios from "axios";
//import { toast } from 'react-toastify';

import AuthHelper from "../helper/authhelper";

// Axios HTTP methods
export const APIService = {
  get,
  post,
  put,
  del,
};

// App Base URL
const apiUrl = "http://localhost:8000/api/v1";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + AuthHelper.getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log({ "error": error.message });
    // toast.error(error, {
    //     position: toast.POSITION.TOP_CENTER
    // });
    if (error.response && error.response.data && error.response.data.message === "Unauthenticated.") {

      // Handle unauthenticated error here
    }
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


function appendUrlSearchParams(params, obj, rootKey = null, rootIndex = null) {
  for (let key in obj) {
    const value = obj[key];

    if (Array.isArray(value)) {
      value.map((val, index) => {
        appendUrlSearchParams(params, val, key, index);
        return val;
      });
    } else if (typeof value === "object") {
      appendUrlSearchParams(params, value, key);
    } else {
      let appendKey = key;

      if (rootKey !== null) {
        if (rootIndex !== null) {
          appendKey = `${rootKey}[${rootIndex}][${key}]`;
        } else {
          appendKey = `${rootKey}[${key}]`;
        }
      }

      params.append(appendKey, value);
    }
  }
}

// GET method
function get(path, data) {
  let params = new URLSearchParams();
  appendUrlSearchParams(params, data);
  return axios.get(apiUrl + "/" + path, { params });
}

// POST method
function post(path, data, headers = []) {
  return axios.post(apiUrl + "/" + path, data, headers);
}

// PUT method
function put(path, data) {
  return axios.put(apiUrl + "/" + path, data);
}

// DELETE method
function del(path, data) {
  return axios.delete(apiUrl + "/" + path, data);
}
