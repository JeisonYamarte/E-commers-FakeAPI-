import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingContext } from '../../Context'
import { OrderCart } from '../OrderCart';
import './style.css'

function CheckoutSideMenu() {
    const {
        cartProducts,
        setCartProducts,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
    } = React.useContext(ShoppingContext); 

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col  fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-70px)] pb-1`}>
        <div className='flex flex-col justify-between items-center p-4 h-full rounded-lg'>
            <div className='flex justify-between w-full'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button
                onClick={() => closeCheckoutSideMenu()}
                ><XMarkIcon className='w-7 h-7 '/></button>
            </div>
            <div className=' grid grid-cols-1 grid-col auto-rows-max gap-2 scrollable-cards w-full h-[100vh]'>
                {
                    cartProducts.map((product)=>(
                        <OrderCart 
                        key={product.id}
                        title={product.title} 
                        imageUrl={product.image} 
                        price={product.price} />
                    ))
                }
                </div>
        </div>
    </aside>
  )
}

export {CheckoutSideMenu}