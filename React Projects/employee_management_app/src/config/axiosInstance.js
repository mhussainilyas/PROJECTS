import axios from "axios";

const api = axios.create({
  baseURL: "https://6aa239afccb3db9689a649da.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
