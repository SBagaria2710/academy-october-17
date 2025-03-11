import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
  },
});
