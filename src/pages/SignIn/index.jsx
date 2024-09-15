import React from 'react'
import { Layout } from '../../Components/Layout'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingContext } from '../../Context'


function SignIn() {
  const {
    account,
    saveAccount,
    signOut,
    saveSignOut
  } = React.useContext(ShoppingContext);

  const [render, setRender] = React.useState('user-info')

  const form = React.useRef(null)

  const hasUserAnAccount = Object.keys(account).length > 0 ? true : false;

  const saveNewAccount = ()=>{
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    saveAccount(data);
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
      onClick={handleSignIn()}>
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
          defaultValue={account?.name} 
          placeholder='Alejandro Caldera' />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-light text-sm' htmlFor="email">Your email</label>
          <input 
          className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          type="email" 
          name="email" 
          id='email' 
          defaultValue={account?.email} 
          placeholder='tuCorreo@gmail.com' />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-light text-sm' htmlFor="password">Your password</label>
          <input 
          className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          type="password" 
          name="password" 
          id='password' 
          defaultValue={account?.password} 
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