import React from 'react';


export const ShoppingContext = React.createContext();


export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = React.useState(0);
    const [ifProductDetailOpen, setIfProductDetailOpen] = React.useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false);
    const [showProduct, setShowProduct] = React.useState({});
    const [cartProducts, setCartProducts] = React.useState([]);
    const [order, setOrder] = React.useState([]);
    const [items, setItems] = React.useState(null);
    const [filteredItems, setFilteredItems] = React.useState([]);
    const [searchByTitle, setSearchByTitle] = React.useState('');
    



    const API = 'https://fakestoreapi.com/products';
  

    React.useEffect(()=>{
      fetch(API)
        .then(response => response.json())
        .then(data => setItems(data));
    },[])
  

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

    const filterItemsByTitle = (items, searchByTitle) =>{
        return items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    React.useEffect(()=>{
            if (searchByTitle.length > 0) {
                setFilteredItems(filterItemsByTitle(items, searchByTitle));
            } else {
                setFilteredItems(items);
            }
    },[items, searchByTitle])

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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}