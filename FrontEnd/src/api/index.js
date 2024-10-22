// for configuring axios
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/bms",
  headers: {
    "Content-Type": "application/json",
  },
});

// attaches the bmstoken before each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("tokenForBMS");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// handles expired token
const handleExpiredToken = (navigate) => {
  alert("Your session has expired. Please log in again.");
  localStorage.removeItem("tokenForBMS");
  navigate("/login");
};

// check for token expiry
export const setupAxiosInterceptors = (navigate) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      const message = response?.data?.message;
      if (message === "Expired Token" || message === "Invalid/Expired Token") {
        handleExpiredToken(navigate);
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        handleExpiredToken(navigate);
      }
      return Promise.reject(error);
    }
  );
};
