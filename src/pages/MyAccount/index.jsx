import React from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingContext } from '../../Context'
import { getAccountData } from '../../api/accounts';
import { MyAccountInfo } from './MyAccountInfo';
import { MyAccountEdit } from './MyAccountEdit';



function MyAccount() {
  const {
    setAccountData,
  } = React.useContext(ShoppingContext);

  const [render, setRender] = React.useState('user-info')
  
  React.useEffect(() => {
    const fetchAccountData = async () =>{
      try {
        const data = await getAccountData();
        setAccountData(data);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    }
    fetchAccountData();
  },[]);
  
  const renderView = ()=> {
    if(render === 'user-info'){
      return (<MyAccountInfo setRender={setRender} />)
    } else{
      return (<MyAccountEdit setRender={setRender} />)
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