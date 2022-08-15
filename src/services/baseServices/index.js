import axios from 'axios';
import { getCookie, setCookie } from '../../utils';
import { URL_GENERAL, STORAGE_COOKIES } from '../../configs';

const getTokenAuth = () => {
  if (
    getCookie(STORAGE_COOKIES.TOKEN) !== '' &&
    getCookie(STORAGE_COOKIES.TOKEN) !== 'undefined'
  ) {
    return JSON.parse(getCookie(STORAGE_COOKIES.TOKEN));
  }
  return '';
};

const createAxiosInterceptor = (url) => {
  const path = window.location.pathname;
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getTokenAuth()}`,
    },
  });

  axiosCreate.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response.status === 401) {
        setCookie(STORAGE_COOKIES.USER_DATA, '');
        setCookie(STORAGE_COOKIES.TOKEN, '');
        if (path !== URL_GENERAL.LOGIN)
          window.location.replace(URL_GENERAL.LOGIN);
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const baseUrl = `${process.env.REACT_APP_REST_URL}/${process.env.REACT_APP_REST_KEY}`;
const BaseService = createAxiosInterceptor(baseUrl);

export default BaseService;
