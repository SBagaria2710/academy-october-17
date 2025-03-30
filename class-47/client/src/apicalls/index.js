import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://scaler-shows.onrender.com",
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
  },
});
