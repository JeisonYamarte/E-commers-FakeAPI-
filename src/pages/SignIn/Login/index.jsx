import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../../../Context";
import { logInAccount } from "../../../api/accounts";
import { setAuthToken } from "../../../api/axiosConfig";

function LogIn ({setRender}){
    const {
        saveSignOut,
        saveAccount,
        setEmail,
    } = React.useContext(ShoppingContext)

    const form = React.useRef(null)
    const navigate = useNavigate();
    const [showInvalidCredentials, setShowInvalidCredentials] = React.useState(false);

    const handleSignIn = async ()=>{
        saveSignOut(false);
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email').trim(),
            password: formData.get('password') 
        }

        const response = await logInAccount(data);

        if(!response){
            setShowInvalidCredentials(true);
        } else {
            saveAccount(response);
            setAuthToken(response.replace(/"/g, ''));
            setEmail(data.email);
            navigate('/');
        }
    }

    return(
        <form ref={form} className='flex flex-col w-80' onSubmit={(e)=>{
        e.preventDefault();
        handleSignIn()
        }}>
            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="email">Email:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="text" 
                name="email" 
                id='email' 
                placeholder='example@domain.com' />
            </div>

            <div className='flex flex-col gap-1'>
                <label className='font-light text-sm' htmlFor="password">Password:</label>
                <input  
                className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                type="password" 
                name="password" 
                id='password' 
                placeholder='**********' />
            </div>
            {showInvalidCredentials && (
            <div className='text-red-500 text-sm font-light mt-2'>
                Invalid credentials, please try again.
            </div>
            )}
        
            <button 
            className='bg-black text-white w-full rounded-lg py-3 mt-4 mb-2' 
            type='submit'>
                Log in
            </button>
            
            <div className='text-center'>
                <a className='font-light text-xs underline underline-offset-4' href='/recovery'>Forgot my password</a>
            </div>

            <button className='border border-black  rounded-lg mt-6 py-3' 
            onClick={()=> setRender('createUserInfo')}>
                Sign up
            </button>

        </form>
    )
}

export {LogIn}