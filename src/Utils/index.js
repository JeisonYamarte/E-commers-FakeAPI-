/**
 * This funtion calculate total price of a new orden
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} total price
 */

export const totalPrice = (products)=>{
    return products.reduce((sum, product) =>
        sum + product.price,0).toFixed(2)
}