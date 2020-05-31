import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.16:3333' //aqui eh o id do meu pc
})

export default api;