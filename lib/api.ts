import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.mystellarterm.com/api/v1",
  withCredentials: true, // Crucial for sending/receiving HttpOnly refresh tokens
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Automatically attach access token from memory if you store it there
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});