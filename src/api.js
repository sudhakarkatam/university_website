import axios from 'axios';

const api = axios.create({
  baseURL: 'https://university-backend-production-2bed.up.railway.app/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default api;
