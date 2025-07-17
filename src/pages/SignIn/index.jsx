import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../../Components/Layout'
import { ShoppingContext } from '../../Context'
import {createAccount, logInAccount} from '../../api/accounts'
import { setAuthToken } from '../../api/axiosConfig';


function SignIn() {
  const {
    saveAccount,
    saveSignOut,
    setEmail
  } = React.useContext(ShoppingContext);

  const [render, setRender] = React.useState('user-info')
  const [showInvalidCredentials, setShowInvalidCredentials] = React.useState(false);

  const form = React.useRef(null)
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

  const renderLogIn = ()=>{
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
  
  const renderCreateUserInfo = ()=>{
    return(
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

  const renderView = ()=> {
    if(render === 'user-info'){
      return (renderLogIn())
    } else{
      return (renderCreateUserInfo())
    } 
  }


  return (
    <Layout>
      <h1  className='text-center font-medium text-xl w-80 mb-6'>welcome</h1>
      {renderView()}
    </Layout>
  )
}

export {SignIn}