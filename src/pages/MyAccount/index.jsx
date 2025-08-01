import React from 'react'
import { Layout } from '../../Components/Layout'
import { ShoppingContext } from '../../Context'
import { getAccountData } from '../../api/accounts';
import { MyAccountInfo } from './MyAccountInfo';



function MyAccount() {
  const {
    setAccountData,
  } = React.useContext(ShoppingContext);
  
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

  return (
    <Layout>
      <h1  className='text-center font-medium text-xl mb-6  w-60 bg-duraznoclaro rounded-lg text-hueso'>My account</h1>
      <MyAccountInfo />
    </Layout>
  )
}

export {MyAccount}