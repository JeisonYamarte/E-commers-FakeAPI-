import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrdersCard(props) {
    const {totalPrice, totalProducts} = props;

  return (
    <div className='flex justify-between items-center bg-slate-200 p-2 rounded-lg border-black'>
        <p>
            <span>01.02.2023</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>

    </div>
  )
}

export {OrdersCard}