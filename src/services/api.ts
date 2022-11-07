import axios from "axios";

const api = axios.create({
  baseURL: "https://api-sgs-28.herokuapp.com"
});

export default api;
