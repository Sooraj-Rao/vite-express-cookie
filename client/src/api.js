import axios from "axios";

const api = axios.create({
  baseURL: "https://api-auth.sj1.xyz", // Your Express server URL
  withCredentials: true, // Enable cookies
});

export default api;
