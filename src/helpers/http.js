import axios from 'axios';
import API_URL from './AppApi';

const http = token => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: API_URL,
    headers,
  });
};

export default http;
