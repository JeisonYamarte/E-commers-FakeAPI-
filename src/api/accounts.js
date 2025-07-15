import {api} from './axiosConfig';

export const createAccount = async (userData) => {
    try {
        await api.post('/customers', userData);
        const response = await this.logInAccount({
            email: userData.user.email,
            password: userData.user.password
        });
        return response;
    } catch (error){
        console.error("Error creating user:", error);
        throw error;
    }
}

export const logInAccount = async (data) =>{
    try {
        const response = await api.post('/auth/login', data);
        return response.data.token;
    } catch (error){
        console.error("Error logging in:", error);
        if (error.response.status >= 400 && error.response.status < 500) {
            return null; // Return null for unauthorized access
        }
        throw error;
    }
}

export const getAccountData = async () => {
    try {
        
        const response = await api.get('/profile/my-data');
        
        return response.data;
        
    } catch (error){
        console.error("Error fetching account data:", error);
        throw error;
    }

}

export const updateAccountData = async (data, id) => {
    try {
        
        const response = await api.put(`/customers/${id}`, data);
        return response;
    } catch (error) {
        console.error("Error updating account data:", error);
        throw error;
    }
}

export const sendRecoveryEmail = async (email) => {
    try{
        const response = await api.post('/auth/recovery', {email});
        return response.date;
    } catch (error){
        console.error("Error sending recovery email:", error);
        throw error;
    }
}