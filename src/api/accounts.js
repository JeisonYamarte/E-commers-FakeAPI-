import api from './axiosConfig';

export const createAccount = async (userData) => {
    try {
        console.log("Creating user with data:", userData);
        const response = await api.post('/customers', userData);
        return response.data;
    } catch (error){
        console.error("Error creating user:", error);
        throw error;
    }
}