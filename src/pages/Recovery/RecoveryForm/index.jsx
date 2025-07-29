import React from 'react'
import { sendRecoveryEmail } from '../../../api/accounts';
import { CircleXIcon } from 'lucide-react';

function RecoveryForm (){
    const [showMessageError, setShowMessageError] = React.useState(false)

    const form = React.useRef(null)

    const handleRecovery = async () =>{
            const formData = new FormData(form.current);
            const email = formData.get('email').trim();
            
            const response = await sendRecoveryEmail(email);
            
            if(!response) {
                setShowMessageError(true)
                return
            }
            
            
            form.current.reset();
            alert("Recovery email sent successfully!", response);
        }


    return(
        <form ref={form} className="flex flex-col items-center gap-4 w-80 text-hueso" onSubmit={(e)=>{
                e.preventDefault();
                handleRecovery();
            }}>
                <h2 className="text-center font-medium text-xl w-80 mb-6">Recovery Password</h2>
                <p className="text-sm mb-6 text-center">Enter your email to recover your password</p>
                <div className='flex flex-col gap-1'>
                    <label className='font-light text-sm' htmlFor="email">Your email</label>
                    <input 
                    className='border text-black border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                    type="email" 
                    name="email" 
                    id='email'
                    />
                    {showMessageError && <div className='flex gap-1 text-red-500'><CircleXIcon/> <p>email does not exist</p> </div>}
                </div>
                
                <button className='bg-black text-white w-60 rounded-lg py-3 mt-4 mb-2' type="submit">
                    Send recovery email
                </button>
                
            </form>
    )
}


export {RecoveryForm}