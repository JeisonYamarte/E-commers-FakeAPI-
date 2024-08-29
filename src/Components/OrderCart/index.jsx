import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCart(props) {
    const {title, imageUrl, price} = props;
  return (
    <div className='flex justify-between items-center bg-slate-200 p-2'>
        <div className='flex items-center gap-2'>
            <figure className='bg-white w-20 h-20 shrink-0'>
                <img className='w-full h-full rounded-lg object-contain '  src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
            <button>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
            </button>
        </div>

    </div>
  )
}

export {OrderCart}