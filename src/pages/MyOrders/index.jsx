import React from 'react'
import { Layout } from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { ShoppingContext } from '../../Context'
import { Link } from 'react-router-dom'

function MyOrders() {
  const { 
    yourOrders,
    getOrders
  } = React.useContext(ShoppingContext);

  React.useEffect(()=>{
    getOrders()
  },[]);

  return (
    <Layout>
      <div className='relative flex items-center justify-center w-80 mb-4 '>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-2 grid-cols-1">
        {
          yourOrders?.map((ord)=>(
            <Link key={ord.id} to={`/my-orders/${ord.id}`}>
            <OrdersCard  
              timeDate={new Date(ord.createdAt).toLocaleDateString()}
              totalPrice={ord.total.toFixed(2)} 
              totalProducts={ord.items.length} />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export {MyOrders}