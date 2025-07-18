import React from 'react'
import { ShoppingContext } from '../../../Context'



function MyAccountInfo ({setRender}){
    const {
        accountData
    } = React.useContext(ShoppingContext)

    return(
        <div className='flex flex-col w-80'>
        <p>
            <span className='font-light text-sm '>Name: </span> 
            <span>{accountData?.customer?.name}</span>
        </p>
        <p>
            <span className='font-light text-sm '>Last Name: </span> 
            <span>{accountData?.customer?.lastName}</span>
        </p>
        <p>
            <span className='font-light text-sm '>Phone: </span> 
            <span>{accountData?.customer?.phone}</span>
        </p>
        <p>
            <span className='font-light text-sm '>Address: </span> 
            <span>{accountData?.customer?.address}</span>
        </p>
        <p>
        <span className='font-light text-sm'>Email: </span>
        <span>{accountData?.email}</span>
        </p>

        <button className='border border-black disabled:border-black/40 disabled:text-black/40 rounded-lg mt-6 py-3'
        onClick={()=> setRender('EditUserInfo')}>
            Edit 
        </button>

    </div>
    )
}

export {MyAccountInfo}