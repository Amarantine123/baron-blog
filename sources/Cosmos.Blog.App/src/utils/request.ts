export interface RequestHeader{
  'content-type':string,
  [key:string]:string
}

import axios from 'axios';
import qs from 'qs'
const instance=axios.create({
  timeout:5000,
  headers:{
    'Content-Type': 'contentType',
    'Access-Control-Allow-Origin': '*',
    'X-Frame-Options': 'allow-from *',
    'Content-Security-Policy': 'img-src self'
  },
  withCredentials:true
})

instance.interceptors.request.use(
  (config) => {
    // if (store.getters['user/accessToken']) {
    //     config.headers[tokenName] = store.getters['user/accessToken']
    //     config.headers['Authorization'] = 'Bearer ' + store.getters['user/accessToken']
    // }
    const header:RequestHeader=config.headers as RequestHeader;

    if (config.data && header['content-type']  === 'application/x-www-form-urlencode;charset=UTF-8') {
        config.data = qs.stringify(config.data);
    }
    // if (debounce.some((item) => (config.url as string).includes(item))) {
    //     // Loading Animatin

    // }
    return config;
},
(error) => {
    return Promise.reject(error);
})

instance.interceptors.response.use(
  (response)=>{
    return response;
  },
  (error)=>{
    return Promise.reject(error);
  }
)
