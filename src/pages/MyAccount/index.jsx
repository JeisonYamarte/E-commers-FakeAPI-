import React from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingContext } from '../../Context'
import { updateAccountData } from '../../api/accounts';



function MyAccount() {
  const {
    account,
    accountData,
    getAccount
  } = React.useContext(ShoppingContext);

  const [render, setRender] = React.useState('user-info')
  
  React.useEffect(() => {
      getAccount();
  }, [render]);
  
  const form = React.useRef(null)

  const hasUserAnAccount = Object.keys(account).length > 0 ? true : false;

  const saveNewAccount = async ()=>{
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      address: formData.get('address')
    }
    const response = await updateAccountData(data, accountData?.customer?.id)
    
    
    setRender('user-info')
  }


  const renderEditView = ()=>{
    return(
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm '>Name: </span> 
          <span>{accountData?.customer?.name}</span>
        </p>
        <p>
          <span className='font-light text-sm '>Last Name: </span> 
          <span>{accountData?.customer?.lastName}</span>
        </p>
        <p>
          <span className='font-light text-sm '>Phone: </span> 
          <span>{accountData?.customer?.phone}</span>
        </p>
        <p>
          <span className='font-light text-sm '>Address: </span> 
          <span>{accountData?.customer?.address}</span>
        </p>
        <p>
        <span className='font-light text-sm'>Email: </span>
        <span>{accountData?.email}</span>
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
      <form ref={form} onSubmit={(e)=>{
        e.preventDefault();
        saveNewAccount()
        }} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label className='font-light text-sm' htmlFor="name">name:</label>
          <input  
          className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          type="text" 
          name="name" 
          defaultValue={accountData?.customer?.name || ''}
          id='name' 
          placeholder={accountData?.customer?.name || ''} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-light text-sm' htmlFor="LastName">Last Name</label>
          <input 
          className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          type="text" 
          name="lastName" 
          id='lastName' 
          defaultValue={accountData?.customer?.lastName || ''}
          placeholder={accountData?.customer?.lastName || ''} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-light text-sm' htmlFor="phone">Phone</label>
          <input 
          className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          type="text" 
          name="phone" 
          id='phone' 
          defaultValue={accountData?.customer?.phone || ''}
          placeholder={accountData?.customer?.phone || ''} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-light text-sm' htmlFor="address">Address</label>
          <input 
          className='border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          type="text" 
          name="address" 
          id='address' 
          defaultValue={accountData?.customer?.address || ''}
          placeholder={accountData?.customer?.address || ''} />
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