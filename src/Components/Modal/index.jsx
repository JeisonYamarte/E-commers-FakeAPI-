import React from 'react'
import {createPortal} from 'react-dom'


function Modal({children}) {
  return createPortal(
    <div className='bg-gray-900 bg-opacity-80 flex flex-col justify-center fixed top-0 left-0 right-0 bottom-0'>
        {children}
    </div>,document.getElementById('modal')
  )
}



export {Modal}
