import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 5000,
});

export default axiosApi;
