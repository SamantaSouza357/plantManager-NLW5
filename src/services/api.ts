import axios from 'axios';

const api = axios.create({
    baseURL: 'http://IpDaMaquinaDoUsuario:3333',
});

export default api;