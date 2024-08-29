import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingContext } from '../../Context'

function ProductDetail() {
    const {
        closeProductDetail,
        showProduct,
        ifProductDetailOpen
    } = React.useContext(ShoppingContext); 
    
  return (
    <aside className={`${ ifProductDetailOpen ? 'flex' : 'hidden'} flex-col  fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-70px)]`}>
        <div className='flex flex-col justify-between items-center p-6'>
            <div className='flex justify-between w-full'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button
                onClick={() => closeProductDetail()}
                ><XMarkIcon className='w-7 h-7 '/></button>
            </div>
            <div className='p-5'>
                <figure className='w-full h-[300px]'>
                    <img className='w-full h-full rounded-lg object-contain' 
                    src={showProduct.image} 
                    alt={showProduct.title}/>
                </figure>
                <p className='flex flex-col'>
                    <span className='font-medium text-2xl'>${showProduct.price}</span>
                    <span className='font-medium text-md'>{showProduct.title}</span>
                    <span className='font-light text-sm'>{showProduct.description}</span>
                </p>
            </div>
        </div>
    </aside>
  )
}

export {ProductDetail}