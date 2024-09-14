import React from 'react'
import { Layout } from '../../Components/Layout'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../../Context'


function SignIn() {
  const {
    account
  } = React.useContext(ShoppingContext);

  const [render, setRender] = React.useState('user-info')

  const hasUserAnAccount = Object.keys(account).length > 0 ? true : false;

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
      <button className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2' disabled={!hasUserAnAccount}>
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
    <>
    </>
    )
    //TODO
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