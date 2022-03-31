import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_MAIN_HOST}/api/v1`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

export default instance;
