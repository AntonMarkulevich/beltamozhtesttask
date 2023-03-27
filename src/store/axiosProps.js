import axios from 'axios';

const PROXY_URL = 'https://corsanywhere.herokuapp.com/';
const SERVER_URL = 'http://178.172.137.253:8020/api/avep/dictionary';

export const ROUTES = {
  get: {
    directories: '/list',
    directory: '/list/',
  },
  post: {
    directory: '/list/',
  },
  put: {
    things: '/things',
  },
  delete: {
    record: '/',
  },
};

export const instance = axios.create({
  baseURL: `${PROXY_URL}${SERVER_URL}`,
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});
