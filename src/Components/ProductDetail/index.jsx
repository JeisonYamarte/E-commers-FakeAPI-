import React from 'react'
import { ShoppingContext } from '../../Context'
import { ImageState } from '../ImageState';


import {
    Drawer,
    DrawerContent, 
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"

function ProductDetail() {
    const {
        closeProductDetail,
        showProduct,
        ifProductDetailOpen,
    } = React.useContext(ShoppingContext); 
    
    return (
        <Drawer open={ifProductDetailOpen} onOpenChange={closeProductDetail} >
            <DrawerContent  className='bg-menta'>
                <div className='mx-auto w-full max-w-sm '>
                    <DrawerHeader className='flex flex-row justify-between w-full justify-items-center'>
                        <DrawerTitle className="mt-2">Detail Product</DrawerTitle>
                    </DrawerHeader>
                    <div className='w-full p-5'>
                        <figure className='w-full h-[300px]'>
                            <ImageState src={showProduct.image} alt={showProduct.name} /> 
                        </figure>
                        <DrawerFooter className='grid grid-cols-1 m-2'>
                            <div className='flex justify-between w-full'>
                                <span className='font-medium text-2xl'>${showProduct.price}</span>
                                <span className='font-medium text-md'>{showProduct.name}</span>
                            </div>
                            <span className='font-light text-sm mt-2'>{showProduct.description}</span>
                        </DrawerFooter>
                    </div>
                </div>
                
            </DrawerContent>
        </Drawer>
    )
}

export {ProductDetail}