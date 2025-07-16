import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout'
import {ShoppingContext } from '../../Context'
import { OrderCart } from '../../Components/OrderCart';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';



function MyOrder() {
  const {
    order,
    getOrderToShow
  } = React.useContext(ShoppingContext);
  const params = useParams();
  const indexOrderPath = params.id;


  React.useEffect(()=>{
    if (indexOrderPath !== 'last'){
      getOrderToShow(indexOrderPath);
    }
  },[indexOrderPath])

  
  
  return (
    <Layout>
      <div className='relative flex items-center justify-center w-80 mb-4 '>
        <Link to='/my-orders' className='absolute left-0  '>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 gap-3 rounded-lg'>
        {
          order?.items?.map((product)=>(
            <OrderCart 
              key={product.id}
              id={product.id}
              name={product.name} 
              imageUrl={product.image} 
              price={product.price} 
              quantity={product.OrderProduct.quantity}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export {MyOrder}