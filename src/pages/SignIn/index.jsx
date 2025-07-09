import React from 'react'
import { Layout } from '../../Components/Layout'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingContext } from '../../Context'
import {createAccount} from '../../api/accounts'


function SignIn() {
  const {
    account,
    saveAccount,
    saveSignOut,
    setAccountData
  } = React.useContext(ShoppingContext);

  const [render, setRender] = React.useState('user-info')

  const form = React.useRef(null)

  const hasUserAnAccount = Object.keys(account).length > 0 ? true : false;

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
    console.log(data);
    const response = await createAccount(data)
    console.log(response);
    
    setAccountData(response);
    saveAccount(response);
    saveSignOut(false);
  }

  const handleSignIn = ()=>{
    saveSignOut(false);

    return <Navigate replace to='/' />
  }

  const renderLogIn = ()=>{
    return(
      <div className='flex flex-col w-80'>
    <p>
      <span className='font-light text-sm '>Email: </span> 
      <span>{account?.email}</span>
    </p>
    <p>
    <span className='font-light text-sm'>Password: </span>
    <span>{account?.password}</span>
    </p>

  
    <Link to='/'>
      <button 
      className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2' 
      disabled={!hasUserAnAccount}
      onClick={()=> handleSignIn()}>
        Log in
      </button>
    </Link>
    <div className='text-center'>
      <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
    </div>

      <button className='border border-black disabled:border-black/40 disabled:text-black/40 rounded-lg mt-6 py-3' disabled={hasUserAnAccount}
      onClick={()=> setRender('createUserInfo')}>
        Sign up
      </button>

  </div>
    )
  }
  
  const renderCreateUserInfo = ()=>{
    return(
      <form ref={form} className='flex flex-col gap-4 w-80'>
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
        <Link to='/'>
          <button 
          className='bg-black text-white rounded-lg w-full py-3'
          onClick={()=> saveNewAccount()}>
            Create
          </button>
        </Link>
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