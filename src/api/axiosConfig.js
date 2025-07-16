import axios from 'axios';



const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})



const setAuthToken = (token) => {
    console.log("Setting auth token:", token);
    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(api);
    
}

export {api, setAuthToken};