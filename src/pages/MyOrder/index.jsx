import React from 'react'
import { Layout } from '../../Components/Layout'
import {ShoppingContext } from '../../Context'
import { OrderCart } from '../../Components/OrderCart';


function MyOrder() {
  const {
    order,
  } = React.useContext(ShoppingContext);
  return (
    <Layout>
      <div className='flex flex-col w-80 gap-3 rounded-lg'>
        {
          order?.slice(-1)[0].products.map((product)=>(
            <OrderCart 
              key={product.id}
              id={product.id}
              title={product.title} 
              imageUrl={product.image} 
              price={product.price} 
              quantity={product.quantity}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export {MyOrder}