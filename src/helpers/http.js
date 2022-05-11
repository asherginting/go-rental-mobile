import axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: '192.168.159.195:5000',
    headers,
  });
};

export default http
