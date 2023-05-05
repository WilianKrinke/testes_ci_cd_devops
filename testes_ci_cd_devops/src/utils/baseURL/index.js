import axios from "axios";

export default axios.create({
    // Production
    // baseURL: 'https://api-teste-cors.vercel.app/' 

    // DEV
    baseURL: 'http://localhost:8080' 
})