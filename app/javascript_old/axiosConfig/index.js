import axios from 'axios';
import { API_URL } from '../utils/constants';
import { getAccessToken, getClient, getUID } from '../utils/utils';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    Accept: 'application/json',
    "access-token": (function() {
      return `${getAccessToken()}`;
    })(),
    "client": (function() {
      return `${getClient()}`;
    })(),
    "uid": (function() {
      return `${getUID()}`;
    })(),

  }
});

// instance.interceptors.request.use(
//   function(config) {
//     const token = getAccessToken();
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

instance.interceptors.response.use(
    function(response) {
      if(response && response.headers && response.headers["access-token"]){
        localStorage.setItem("access-token",response.headers["access-token"])
        localStorage.setItem("client",response.headers["client"])
      }

     
      return response;
    },
    function(error) {
          return Promise.reject(error);
        }
)

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // const originalRequest = error.config;
    if (error && error.response && error.response.status === 401) {
      // if (error.response.data && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   axios({
      //     method: 'POST',
      //     url: API_URL + '/token',
      //     headers: {
      //       Authorization: (function() {
      //         return `Bearer ${getRefreshToken()}`;
      //       })()
      //     }
      //   }).then((response) => {
      //     if (response.data && response.data.success) {
      //       setAccessToken(response.data.data);
      //       window.location.reload();
      //     } else {
            localStorage.clear();
            window.location.href = '/auth/signin';
          // }
          // originalRequest.headers.Authorization =
          //   'Bearer ' + response.data.data.access_token;
          // return axios({ ...originalRequest }).then((res) => {
          //   return res;
          // });
        // });
      // }
    }
    // return Promise.reject(error);
  }
);

export default instance;
