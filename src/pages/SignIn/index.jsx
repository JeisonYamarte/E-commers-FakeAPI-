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
      return <SaveNewAccount/>
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