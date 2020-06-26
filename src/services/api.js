import axios from "axios";

const headers = new Headers({
  "Content-Type": "application/json",
});

const api = axios.create({
  baseURL: "https://core.ac.uk:443/api-v2/articles/search/",
  headers,
});

export default api;
