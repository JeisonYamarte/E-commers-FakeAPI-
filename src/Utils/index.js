/**
 * This funtion calculate total price of a new orden
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} total price
 */

export const totalPrice = (products)=>{
    return products.reduce((sum, product) =>
        sum + product.price,0).toFixed(2)
}

/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */

export const dateTime = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
        
    return dateTime;
}