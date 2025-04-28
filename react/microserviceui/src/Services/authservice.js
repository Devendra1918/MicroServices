// authservice.js
// import api from './api';  // Use same API!
import axios from "axios";
const api = axios.create({
    baseURL: "https://localhost:7067/api",
    headers: {
        "Content-Type": "application/json",
    }
});
// Login service
export const loginAsync = async () => {
    try {
        const response = await api.post('/Auth/login', {  
            username: 'admin', 
            password: '12345' 
        });

        const token = response.data.token;
        localStorage.setItem('token', token); // Token Save
        console.log('Login Success. Token:', token);

        return token;
    } catch (err) {
        console.error('Login failed:', err);
    }
};



