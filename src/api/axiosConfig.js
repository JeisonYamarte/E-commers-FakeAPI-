import axios from 'axios';

if (localStorage.getItem('TOKEN') === null) {
    localStorage.setItem('TOKEN', '');
} 

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('TOKEN').replace(/"/g, '') || ''}`
    },
})



const setAuthToken = (token) => {
    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
}

export {api, setAuthToken};