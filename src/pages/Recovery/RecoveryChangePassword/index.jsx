import React from 'react'
import { changePassword } from '../../../api/accounts';


function RecoveryChangePassword ({token}){

    const form = React.useRef(null);

    const handleChangePassword = async () =>{
        const formData = new FormData(form.current);
        const password = formData.get('password').trim();
        
        const response = await changePassword(token, password);
        form.current.reset();
        alert("Password changed successfully!", response );
    }

    return(
        <form ref={form} className="flex flex-col items-center gap-4 w-80 text-hueso " onSubmit={(e)=>{
                e.preventDefault();
                handleChangePassword();
            }}>
                <h2 className="text-center font-medium text-xl w-80 mb-6 ">Recovery Password</h2>
                <p className="text-sm mb-6 text-center">Enter your new password</p>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-sm' htmlFor="password">Password</label>
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

export {RecoveryChangePassword}