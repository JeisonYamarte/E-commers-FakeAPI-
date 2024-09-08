import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrders } from '../MyOrders'
import { MyOrder } from '../MyOrder'
import { SignIn } from '../SignIn'
import { NotFound } from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import { ProductDetail } from '../../Components/ProductDetail';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/:id', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound />}
  ])

  return routes;
}


function App() {
  
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <ProductDetail />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
