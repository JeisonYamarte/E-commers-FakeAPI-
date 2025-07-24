import React from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingContext } from '../../Context'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button} from "@/components/ui/button"

function ProductDetail() {
    const {
        closeProductDetail,
        showProduct,
        ifProductDetailOpen,
        setIfProductDetailOpen
    } = React.useContext(ShoppingContext); 
    
  return (
    <Sheet open={ifProductDetailOpen} onOpenChange={setIfProductDetailOpen} >
        <SheetContent  className='flex flex-col items-center p-6 bg-menta h-full [&>button]:hidden '>
            <SheetHeader className='flex flex-row justify-between w-full justify-items-center'>
                <SheetTitle className="mt-2">Detail Product</SheetTitle>
                <SheetClose asChild>
                    <Button className="flex bg-hueso w-4 h-6 rounded-2xl   " onClick={()=> closeProductDetail() }><XMarkIcon className='items-center'  /></Button>
                </SheetClose>
            </SheetHeader>
            <div className='w-full p-5'>
                <figure className='w-full h-[300px]'>
                    <img className='w-full h-full rounded-lg object-cover' 
                    src={showProduct.image} 
                    alt={showProduct.name}/>
                </figure>
                <SheetFooter className='grid grid-cols-1 m-2'>
                    <div className='flex justify-between w-full'>
                        <span className='font-medium text-2xl'>${showProduct.price}</span>
                        <span className='font-medium text-md'>{showProduct.name}</span>
                    </div>
                    <span className='font-light text-sm mt-2'>{showProduct.description}</span>
                </SheetFooter>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export {ProductDetail}