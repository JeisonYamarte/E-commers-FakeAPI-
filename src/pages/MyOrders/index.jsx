import React from 'react'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShoppingContext } from '../../Context'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrders() {
  const { order} = React.useContext(ShoppingContext);

  return (
    <Layout>
      <div className='relative flex items-center justify-center w-80 '>
        <h1>My Orders</h1>
      </div>
      
      {
        order.map((ord, index)=>{
          <Link key={index} to={`/my-orders/${ord.id}`}>
          <OrdersCard  
            totalPrice={ord.totalPrice} 
            totalProducts={ord.totalProducts} />
            </Link>
        })
      }
    </Layout>
  )
}

export {MyOrders}