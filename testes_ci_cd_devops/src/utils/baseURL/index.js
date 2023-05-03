import axios from "axios";

export default axios.create({
    baseURL: 'https://api-teste-cors.vercel.app/'
})