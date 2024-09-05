import React from 'react'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShoppingContext } from '../../Context'
import { Link } from 'react-router-dom'

function MyOrders() {
  const { order} = React.useContext(ShoppingContext);

  return (
    <Layout>
      <div className='relative flex items-center justify-center w-80 mb-4 '>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      
      {
        order.map((ord)=>(
          <Link key={ord.id} to={`/my-orders/${ord.id}`}>
          <OrdersCard  
            timeDate={ord.date}
            totalPrice={ord.totalPrice} 
            totalProducts={ord.totalProducts} />
            </Link>
        ))
      }
    </Layout>
  )
}

export {MyOrders}