// api.js
import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7220/apigateway",
    headers: {
        "Content-Type": "application/json",
    }
});

// Attach Token Automatically
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export const getAllPersonAsync = async () => {
    try {
        const response = await api.get('/PersonServices');
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error('Fetching Person Data failed:', err);
    }
};

export default api;
