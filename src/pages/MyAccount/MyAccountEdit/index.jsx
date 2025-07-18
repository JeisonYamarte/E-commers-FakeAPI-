import React from 'react'
import { ShoppingContext } from '../../../Context';
import { updateAccountData } from '../../../api/accounts';
import { getAccountData } from '../../../api/accounts';



function MyAccountEdit ({setRender}){
    const {
        accountData,
        setAccountData
    } = React.useContext(ShoppingContext)

    const form = React.useRef(null)

    const saveNewAccount = async ()=>{
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            address: formData.get('address')
        }

        await updateAccountData(data, accountData?.customer?.id);

        const newUserInfo = await getAccountData();

        setAccountData(newUserInfo)

        
        setRender('user-info')
    }

    return (
        <form ref={form} onSubmit={(e)=>{
        e.preventDefault();
        saveNewAccount()
        }} className='flex flex-col gap-4 w-80'>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="name">name:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="name" 
                defaultValue={accountData?.customer?.name || ''}
                id='name' 
                placeholder={accountData?.customer?.name || ''} />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="LastName">Last Name</label>
                <input 
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="lastName" 
                id='lastName' 
                defaultValue={accountData?.customer?.lastName || ''}
                placeholder={accountData?.customer?.lastName || ''} />
                </div>
                <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="phone">Phone</label>
                <input 
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="phone" 
                id='phone' 
                defaultValue={accountData?.customer?.phone || ''}
                placeholder={accountData?.customer?.phone || ''} />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="address">Address</label>
                <input 
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="address" 
                id='address' 
                defaultValue={accountData?.customer?.address || ''}
                placeholder={accountData?.customer?.address || ''} />
            </div>
            
            <button 
            className='bg-black text-white rounded-lg w-full py-3'
            type='submit'>
                Create
            </button>
    </form>
    )
}


export {MyAccountEdit}