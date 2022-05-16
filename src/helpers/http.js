import axios from 'axios';
const {API_URL} = process.env

const http = token => {
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: API_URL,
    headers,
  });
};

export default http
