import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 5_000,
});
