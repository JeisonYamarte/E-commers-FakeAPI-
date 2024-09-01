import React from 'react';


export const ShoppingContext = React.createContext();


export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = React.useState(0);
    const [ifProductDetailOpen, setIfProductDetailOpen] = React.useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false);
    const [showProduct, setShowProduct] = React.useState({});
    const [cartProducts, setCartProducts] = React.useState([]);
    const [order, setOrder] = React.useState([]);
    


    const openProductDetail = () => {
        setIfProductDetailOpen(true);
        closeCheckoutSideMenu();
    }

    const closeProductDetail = () => setIfProductDetailOpen(false);

    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true);
        closeProductDetail();
    }

    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    

    return(
        <ShoppingContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            ifProductDetailOpen,
            showProduct,
            setShowProduct,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            closeCheckoutSideMenu,
            openCheckoutSideMenu,
            order,
            setOrder,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}