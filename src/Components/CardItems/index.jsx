import React from 'react'
import { PlusIcon } from '@heroicons/react/16/solid'
import { ShoppingContext } from '../../Context'
import { ImageState } from '../ImageState'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"


function CardItems({data}) {
  const {
    count,
    setCount,
    openProductDetail,
    setShowProduct,
    setCartProducts,
    cartProducts,
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
  }

  return (
    <Card 
    className='bg-salvia cursor-pointer lg:w-56 lg:h-60 w-30 h-25 rounded-lg p-2'
    onClick={()=> setProductToShow()}
    >
        <figure className='relative mb-2 w-full h-4/5 '>
            <CardDescription className='absolute bottom-0 left-0 bg-white/20 rounded-lg text-hueso text-xs m-2 px-3 py-0.5'>{data?.category.name}</CardDescription>
            <ImageState src={data?.image} alt={data?.name}/>
            <Button className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-salvia' 
            onClick={(event)=> {
              event.stopPropagation();
              addProductsToCart(data);
              }}>
                <PlusIcon />
            </Button>
        </figure>
        <CardFooter className='flex justify-between items-center w-full px-0 text-hueso'>
            <span className='text-sm font-light '>{data.name}</span>
            <span className='text-lg font-medium '>{`$${data.price}`}</span>
        </CardFooter>
    </Card>
  )
}

export {CardItems}