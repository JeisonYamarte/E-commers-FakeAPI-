import React from 'react';


export const ShoppingContext = React.createContext();


export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = React.useState(0);
    const [ifProductDetailOpen, setIfProductDetailOpen] = React.useState(false);
    const [showProduct, setShowProduct] = React.useState({});

    const openProductDetail = () => setIfProductDetailOpen(true);

    const closeProductDetail = () => setIfProductDetailOpen(false);
    

    return(
        <ShoppingContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            ifProductDetailOpen,
            showProduct,
            setShowProduct,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}