import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 
    import.meta.env.MODE === "development" 
    ? "http://localhost:5000/api/v1" 
    : "https://chat-application-backend-w1nr.onrender.com",
withCredentials: true,
});