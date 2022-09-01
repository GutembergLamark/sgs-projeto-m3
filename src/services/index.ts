import axios from "axios";

const api = axios.create({
    baseURL: 'https://git.heroku.com/servidor-sgs.git',
});

export default api;