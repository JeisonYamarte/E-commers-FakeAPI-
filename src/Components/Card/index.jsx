import React from 'react'
import { PlusIcon } from '@heroicons/react/16/solid'
import { ShoppingContext } from '../../Context'

function Card({data}) {
  const {
    count,
    setCount,
    openProductDetail,
    setShowProduct,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
  } = React.useContext(ShoppingContext);


  const setProductToShow = ()=>{
    openProductDetail();
    setShowProduct(data);
  }

  const addProductsToCart = (productData)=>{
    const productIndex = cartProducts.findIndex(product => product.id === productData.id)
    let newCart = []
    if (productIndex >= 0) {
      newCart = [...cartProducts]
      newCart[productIndex].quantity++
      newCart[productIndex].price = productData.price + newCart[productIndex].price
    } else {
      newCart = [...cartProducts, { ...productData, quantity: 1 }]
    }
    setCartProducts(newCart)
    setCount(count + 1);
    openCheckoutSideMenu();
  }

  return (
    <div 
    className='bg-white cursor-pointer lg:w-56 lg:h-60 w-30 h-25 rounded-lg'
    onClick={()=> setProductToShow()}
    >
        <figure className='relative mb-2 w-full h-4/5 ob'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.category.name}</span>
            <img className='w-full h-full object-contain rounded-lg' src={data?.image} alt={data?.name} />
            <button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-blue-500' 
            onClick={(event)=> {
              event.stopPropagation();
              addProductsToCart(data);
              }}>
                <PlusIcon />
            </button>
        </figure>
        <p className='flex justify-between items-center'>
            <span className='text-sm font-light'>{data.name}</span>
            <span className='text-lg font-medium'>{`$${data.price}`}</span>
        </p>
    </div>
  )
}

export {Card}