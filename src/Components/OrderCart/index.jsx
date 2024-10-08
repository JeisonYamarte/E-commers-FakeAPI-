import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCart(props) {
    const {id, title, imageUrl, price, quantity, handleDelete} = props;
  return (
    <div className='flex justify-between items-center bg-slate-200 p-2 rounded-lg'>
        <div className='flex items-center gap-2'>
            <figure className=' relative bg-white w-20 h-20 shrink-0 rounded-lg'>
                {quantity>1 &&  <span className=' flex justify-center items-center absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-400 text-sm text-center '>{quantity}</span>}
                <img className='w-full h-full rounded-lg object-contain '  src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>${price.toFixed(2)}</p>
            {handleDelete && <button>
                <XMarkIcon onClick={()=> handleDelete(id, quantity)} className='h-6 w-6 text-black cursor-pointer' />
            </button>
            }
        </div>

    </div>
  )
}

export {OrderCart}