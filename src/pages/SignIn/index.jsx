import React from 'react'
import { Layout } from '../../Components/Layout'
import { SaveNewAccount } from './SaveNewAccount'
import { LogIn } from './Login'


function SignIn() {

  const [render, setRender] = React.useState('user-info')
  

  const renderView = ()=> {
    if(render === 'user-info'){
      return <LogIn setRender={setRender} />
    } else{
      return <SaveNewAccount setRender={setRender}/>
    } 
  }


  return (
    <Layout>
      <h1  className='text-center font-medium text-xl mb-6 w-60 bg-duraznoclaro rounded-lg text-hueso'>Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export {SignIn}