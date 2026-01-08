import axios from 'axios';

// __API_URL__ is defined in vite.config.js at build time
const apiUrl = __API_URL__;

const api = axios.create({
    baseURL: apiUrl,
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export default api;
