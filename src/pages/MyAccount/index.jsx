import React from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingContext } from '../../Context'


function MyAccount() {
  const {
    account,
    saveAccount,
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
    setRender('user-info')
  }


  const renderEditView = ()=>{
    return(
      <div className='flex flex-col w-80'>
    <p>
      <span className='font-light text-sm '>Name: </span> 
      <span>{Object.keys(account).length > 0 ? account?.name : 'No account'}</span>
    </p>
    <p>
    <span className='font-light text-sm'>Email: </span>
    <span>{Object.keys(account).length > 0 ? account?.email : 'No account'}</span>
    </p>

    <button className='border border-black disabled:border-black/40 disabled:text-black/40 rounded-lg mt-6 py-3' disabled={!hasUserAnAccount}
    onClick={()=> setRender('EditUserInfo')}>
      Edit 
    </button>

  </div>
    )
  }
  
  const renderSaveEditInfo = ()=>{
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
        
          <button 
          className='bg-black text-white rounded-lg w-full py-3'
          onClick={()=> saveNewAccount()}>
            Create
          </button>
       
      </form>
    )
    
  }

  const renderView = ()=> {
    if(render === 'user-info'){
      return (renderEditView())
    } else{
      return (renderSaveEditInfo())
    } 
  }


  return (
    <Layout>
      <h1  className='text-center font-medium text-xl w-80 mb-6'>My account</h1>
      {renderView()}
    </Layout>
  )
}

export {MyAccount}