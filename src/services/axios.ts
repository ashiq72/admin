import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://base360.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
