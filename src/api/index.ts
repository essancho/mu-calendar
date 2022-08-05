import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_BASE_URL || '',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY || '',
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST || '',
  },
};

const apiInstance = axios.create(config);

export default apiInstance;
