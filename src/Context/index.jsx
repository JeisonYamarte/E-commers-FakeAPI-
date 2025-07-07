import React from 'react';
import { useLocalStorage } from './useLocalStorage';

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
    const [isLoading, setIsLoading] = React.useState(false);
    

    const {
        item: account,
        saveItem: saveAccount,
    } = useLocalStorage('ACCOUNT', {});

    const {
        item: signOut,
        saveItem: saveSignOut,
    } = useLocalStorage('SIGN-OUT', true);


    const API = import.meta.env.VITE_BACKEND_URL + '/api/v1/products';
    
    
  
    const changeCategory = (category) =>{
        
        switch (category) {
            case 'clothes':
                React.useEffect(()=>{
                    setIsLoading(true)
                    fetch(API + "/category/men's%20clothing")
                      .then(response => response.json())
                      .then(async data => {
                            setItems(data);
                            setIsLoading(false);
                        });   
                },[category])
                break;
            
            case 'furnitures':
                React.useEffect(()=>{
                    setIsLoading(true)
                    fetch(API + "/category/women's%20clothing")
                      .then(response => response.json())
                      .then(data =>  {
                            setItems(data);
                            setIsLoading(false);
                        });   
                },[category])
                break;

            case 'electronics':
                React.useEffect(()=>{
                    setIsLoading(true)
                    fetch(API + "/category/electronics")
                      .then(response => response.json())
                      .then(data => {
                            setItems(data);
                            setIsLoading(false);
                        });
                },[category])
                break;

            case 'others':
                React.useEffect(()=>{
                    setIsLoading(true)
                    fetch(API + "/category/jewelery")
                      .then(response => response.json())
                      .then(data => {
                            setItems(data);
                            setIsLoading(false);
                        });
                },[category])
                break;
            default:
                React.useEffect(()=>{
                    setIsLoading(true)
                    fetch(API)
                      .then(response => response.json())
                      .then(data => {
                            setItems(data);
                            setIsLoading(false);
                        });
                  },[category])
                break;
        }

    }

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
        return items.filter(item => item.name.toLowerCase().includes(searchByTitle.toLowerCase()));
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
            changeCategory,
            account,
            saveAccount,
            signOut,
            saveSignOut,
            isLoading,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}