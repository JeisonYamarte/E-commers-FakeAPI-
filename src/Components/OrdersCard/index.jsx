import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function OrdersCard(props) {
    const {timeDate ,totalPrice, totalProducts} = props;

  return (
    <div className='flex justify-between items-center bg-slate-200 p-4 rounded-lg border-black w-80 mb-4'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <span className='font-light'>{timeDate}</span>
            <span className='font-light'>{totalProducts} articles</span>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <span className='font-medium text-2xl'>{totalPrice}</span>
            <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
          </div>
        </div>

    </div>
  )
}

export {OrdersCard}