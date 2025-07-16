import React from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { sendRecoveryEmail } from "../../api/accounts";
import { changePassword } from "../../api/accounts";





function Recovery(){
    //const [token, setToken] = React.useState('');

    const form = React.useRef(null);
    
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token') || '';
    console.log("Token from params:", token);
    

    const handleRecovery = async () =>{
        const formData = new FormData(form.current);
        const email = formData.get('email').trim();
        
        const response = await sendRecoveryEmail(email); 
        
        console.log(response);
        
        form.current.reset();
        alert("Recovery email sent successfully!");
    }

    const handleChangePassword = async () =>{
        const formData = new FormData(form.current);
        const password = formData.get('password').trim();
        
        const response = await changePassword(token, password);
        form.current.reset();
        alert("Password changed successfully!", response );
    }


    const recoveryChangePassword = () =>{
        return (
            <form ref={form} className="flex flex-col items-center gap-4 w-80" onSubmit={(e)=>{
                e.preventDefault();
                handleChangePassword();
            }}>
                <h2 className="text-center font-medium text-xl w-80 mb-6">Recovery Password</h2>
                <p className="text-sm text-black/60 mb-6 text-center">Enter your new password</p>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-sm' htmlFor="password">password</label>
                    <input 
                    className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    type="password" 
                    name="password" 
                    id='password'
                    />
                </div>
                
                <button className='bg-black text-white w-60 rounded-lg py-3 mt-4 mb-2' type="submit">
                    Send new password
                </button>
                
            </form>
        )
    }

    const recoveryForm = () => {
        return (
            <form ref={form} className="flex flex-col items-center gap-4 w-80" onSubmit={(e)=>{
                e.preventDefault();
                handleRecovery();
            }}>
                <h2 className="text-center font-medium text-xl w-80 mb-6">Recovery Password</h2>
                <p className="text-sm text-black/60 mb-6 text-center">Enter your email to recover your password</p>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-sm' htmlFor="email">Your email</label>
                    <input 
                    className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    type="email" 
                    name="email" 
                    id='email'
                    />
                </div>
                
                <button className='bg-black text-white w-60 rounded-lg py-3 mt-4 mb-2' type="submit">
                    Send recovery email
                </button>
                
            </form>
        )
    }

    const renderView = () => {
        if (token !== ''){
        return recoveryChangePassword()
    } else {
        return recoveryForm();
    }
    }
    
    
    return(
        <Layout>
            {renderView()} 
        </Layout>
    )
}

export {Recovery}