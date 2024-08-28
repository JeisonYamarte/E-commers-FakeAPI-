import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingContext } from '../../Context'

function CheckoutSideMenu() {
    const {
        cartProducts,
        setCartProducts,
        closeCheckoutSideMenu,
        IsCheckoutSideMenuOpen
    } = React.useContext(ShoppingContext); 

  return (
    <aside className={` ${IsCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-70px)]`}>
        <div className='flex flex-col justify-between items-center p-6'>
            <div className='flex justify-between w-full'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button
                onClick={() => closeCheckoutSideMenu()}
                ><XMarkIcon className='w-7 h-7 '/></button>
            </div>
            <div className='p-5'>
                
            </div>
        </div>
    </aside>
  )
}

export {CheckoutSideMenu}