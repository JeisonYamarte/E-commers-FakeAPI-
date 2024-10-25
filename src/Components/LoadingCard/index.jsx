import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingCard() {
  return (
    <div     className='w-224 h-240 rounded-lg'>
       <Skeleton width={224} height={200} />
       <Skeleton width={224} height={40} />
    </div>
  )
}

export {LoadingCard}