import axios from "axios";


const api = axios.create({
    baseURL: "https://localhost:7220/apigateway",
    headers: {
        "Content-Type": "application/json",
    }
});

export const getAllPersonAsync = async () => {
    try{        
        const response = await api.get("/PersonServices");
        console.log(response.data);
        return response.data
    }
    catch (err){
        console.log(err);
    }
}