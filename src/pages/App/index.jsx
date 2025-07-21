import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider, ShoppingContext } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrders } from '../MyOrders'
import { MyOrder } from '../MyOrder'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import { ProductDetail } from '../../Components/ProductDetail';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import { Recovery } from '../Recovery'

import './App.css'
import React from 'react'




const AppRoutes = () =>{
  const {
    signOut,
  } = React.useContext(ShoppingContext);
  let routes = useRoutes([
    { path: '/', element: signOut == false ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/:id', element: signOut == false ? <Home /> : <Navigate replace to={'/sign-in'} />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/recovery', element: <Recovery />},
    { path: '/*', element: <NotFound />}
  ])

  return routes;
}


function App() {
  
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-menta to-hueso">
          <Navbar />
          <AppRoutes />
        </div>
        <ProductDetail />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
