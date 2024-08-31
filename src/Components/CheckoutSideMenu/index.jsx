import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingContext } from '../../Context'
import { OrderCart } from '../OrderCart';
import { totalPrice } from '../../Utils';


function CheckoutSideMenu() {
    const {
        cartProducts,
        setCartProducts,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        count, 
        setCount,
    } = React.useContext(ShoppingContext); 

    const handleDelete = (id, quant)=>{
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts);
        setCount(count - quant);
    }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col  fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-70px)] pb-1`}>
        <div className='flex flex-col justify-between items-center p-4 h-full rounded-lg'>
            <div className='flex justify-between w-full'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button
                onClick={() => closeCheckoutSideMenu()}
                ><XMarkIcon className='w-7 h-7 '/></button>
            </div>
            <div className=' grid grid-cols-1 grid-col auto-rows-max gap-2 overflow-y-scroll w-full h-[100vh]'>
                {
                    cartProducts.map((product)=>(
                        <OrderCart 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.image} 
                        price={product.price} 
                        quantity={product.quantity}
                        handleDelete={handleDelete}e/>
                    ))
                }
                </div>
            <div className='w-full px-6'>
                <p className='flex justify-between items-center '>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>

            </div>
        </div>
    </aside>
  )
}

export {CheckoutSideMenu}