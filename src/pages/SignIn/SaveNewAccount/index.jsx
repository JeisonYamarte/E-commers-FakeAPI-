import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../Context";
import { setAuthToken } from "../../../api/axiosConfig";
import { createAccount } from "../../../api/accounts";


function SaveNewAccount (){
    const {
        saveAccount,
        saveSignOut,
        setEmail
    } = React.useContext(ShoppingContext)

    const form = React.useRef(null); 
    const navigate = useNavigate();

    const saveNewAccount = async ()=>{
    
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name').trim(),
            lastName: formData.get('lastName').trim(),
            address: formData.get('address').trim(),
            phone: formData.get('phone').trim(),
            user: {
                email: formData.get('email').trim(),
                password: formData.get('password') 
            }
        }
        
        const response = await createAccount(data)
        
        
        saveAccount(response);
        saveSignOut(false);
        setAuthToken(response);
        setEmail(data.user.email);
        navigate('/');
    }

    return (
        <form ref={form} className='flex flex-col gap-4 w-80' onSubmit={(e)=> {
        e.preventDefault();
        saveNewAccount();
        }
        }>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="name">Your name:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="name" 
                id='name' 
                placeholder='Alejandro' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="lastName">Your last name:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="lastName" 
                id='lastName'  
                placeholder='Rodriguez' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="address">Your address:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="address" 
                id='address'  
                placeholder='carrera 560' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="phone">Your phone:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="phone" 
                id='phone'  
                placeholder='097965175' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="email">Your email</label>
                <input 
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="email" 
                name="email" 
                id='email'  
                placeholder='tuCorreo@gmail.com' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="password">Your password</label>
                <input 
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="password" 
                name="password" 
                id='password' 
                placeholder='********' />
            </div>
            
            <button 
                className='bg-black text-white rounded-lg w-full py-3'
                type='submit'>
                Create
            </button>
        </form>
    )
}

export {SaveNewAccount}