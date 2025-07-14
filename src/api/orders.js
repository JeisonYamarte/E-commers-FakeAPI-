import {api} from './axiosConfig';

const createOrder = async (status)=>{
    try {
        const response = await api.post('/orders', status);
        return response.data
    } catch (error){
        console.error("Error creating order:", error);
        throw error;
    }
}

const addItemToOrder = async (order, orderId) =>{
    try {
        order.forEach(async (order) => {
            await api.post('orders/add-item',{
                orderId: orderId,
                productId: order.id,
                quantity: order.quantity
            })
        }); 
    } catch (error) {
        console.error("Error adding item to order:", error);
        throw error;
    }
}

export const getOrder = async (orderId)=>{
    try {
        const response = await api.get(`/orders/${orderId}`);
        return response;
    } catch (error){
        console.error("Error fetching order:", error);
        throw error;
    }
}

export const cheackoutOrder = async (cart) =>{
    try {
        const order = await createOrder({status: 'completed'});
        await addItemToOrder(cart, order.id);
        const response = await getOrder(order.id);
        return response.data;
    } catch (error){
        console.error("Error during checkout:", error);
        throw error;
    }
}

export const getMyOrders = async () =>{
    try {
        const response = await api.get('profile/my-orders');
        return response.data;
    } catch (error){
        console.error("Error fetching my orders:", error);
        throw error;
    }
}