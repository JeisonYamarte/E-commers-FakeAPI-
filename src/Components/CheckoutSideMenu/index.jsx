import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingContext } from '../../Context'
import { OrderCart } from '../OrderCart';
import { totalPrice} from '../../Utils';
import { cheackoutOrder } from '../../api/orders';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button} from "@/components/ui/button"



function CheckoutSideMenu() {
    const {
        cartProducts,
        setCartProducts,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        count, 
        setCount,
        setOrder,
    } = React.useContext(ShoppingContext); 

    const handleDelete = (id, quant)=>{
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts);
        setCount(count - quant);
    }

    const handleCheackout = async ()=>{
        
        const response = await cheackoutOrder(cartProducts);
        setOrder(response);
        setCartProducts([]);
        setCount(0);
        closeCheckoutSideMenu();
    }

  return (
    <Sheet open={isCheckoutSideMenuOpen} onOpenChange={closeCheckoutSideMenu} >
        <SheetContent className='flex flex-col justify-between items-center p-4 h-full rounded-lg bg-menta [&>button]:bg-hueso [&>button]:w-6 [&>button]:h-6 [&>button]:rounded-full [&>button]:p-1'>
            <SheetHeader className='w-full sm:justify-start'>
                <SheetTitle className='font-medium text-xl'>My Order</SheetTitle>
                
            </SheetHeader>
            <div className=' grid grid-cols-1 grid-col auto-rows-max gap-2 overflow-y-auto w-full h-[100vh] bg-salvia p-1 rounded-lg'>
                {
                    cartProducts.map((product)=>(
                        <OrderCart 
                        key={product.id}
                        id={product.id}
                        name={product.name} 
                        imageUrl={product.image} 
                        price={product.price} 
                        quantity={product.quantity}
                        handleDelete={handleDelete}/>
                    ))
                }
                </div>
            <div className='w-full px-6'>
                <p className='flex justify-between items-center '>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
            </div>
            <Link className='w-full' to='/my-orders/last'>
            <button onClick={()=>handleCheackout()} className='w-full bg-black py-3 text-white rounded-lg'>Checkout</button>
            </Link>
        </SheetContent>
    </Sheet>
    )
}

export {CheckoutSideMenu}