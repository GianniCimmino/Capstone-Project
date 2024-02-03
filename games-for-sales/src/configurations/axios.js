import axios from "axios";

// Definisci l'URL base per tutte le chiamate Axios
const baseURL = "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Interceptor per inserire il token JWT negli headers di ogni richiesta
axiosInstance.interceptors.request.use(
  (config) => {
    // Ottieni il token dallo storage locale
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
