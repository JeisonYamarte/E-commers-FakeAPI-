import axios from 'axios';



const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})



const setAuthToken = (token) => {
    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
}

export {api, setAuthToken};