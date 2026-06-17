import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:8080/usuarios',
});

export default api;