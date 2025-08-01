import React from 'react';
import { useSessionStorage } from './useSessionStorage';
import { getProducts, getSearchProducts } from '../api/products';
import { getAccountData } from '../api/accounts';
import { getMyOrders, getOrder } from '../api/orders';


export const ShoppingContext = React.createContext();


export const ShoppingCartProvider = ({children}) =>{
    const [count, setCount] = React.useState(0);
    const [ifProductDetailOpen, setIfProductDetailOpen] = React.useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false);
    const [showProduct, setShowProduct] = React.useState({});
    const [cartProducts, setCartProducts] = React.useState([]);
    const [order, setOrder] = React.useState([]);
    const [itemsToShow, setItemsToShow] = React.useState(null);// handle for home
    const [filteredItems, setFilteredItems] = React.useState([]);
    const [searchByTitle, setSearchByTitle] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [category, setCategory] = React.useState('all');
    const [yourOrders, setYourOrders] = React.useState([]);

    const [email, setEmail] = React.useState('');

    const [activeModalSession, setActiveModalSession] = React.useState(false)
    const [activeModalCategory, setActiveModalCategory] = React.useState(false)

    const [debounceSearchValue, setDebounceSearchValue] = React.useState('');
    

    const [accountData, setAccountData] = React.useState({});
    

    const {
        item: account,
        saveItem: saveAccount,
    } = useSessionStorage('TOKEN', {});

    const {
        item: signOut,
        saveItem: saveSignOut,
    } = useSessionStorage('SIGN-OUT', true);



    const getOrders = async ()=>{
        const data = await getMyOrders();
        setYourOrders(data);
    }

    const getOrderToShow = async (id) =>{
        try {
            const response = await getOrder(id);
            setOrder(response.data);
        } catch (error) {
            console.error("Error fetching order to show:", error);
            throw error;
        }
    }


React.useEffect(() => {
    setIsLoading(true);
    
    getProducts(category)
        .then((data)=>{
            setItemsToShow(data);
            setFilteredItems(data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [category]);

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

    React.useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceSearchValue(searchByTitle)
        }, 500)

        return () => clearTimeout(handler);
    }, [searchByTitle]);
    

    React.useEffect(()=>{
            setIsLoading(true);
            if (searchByTitle) {
                getSearchProducts(debounceSearchValue)
                .then((data)=>{
                    setFilteredItems(data);
                })
                .catch((error) => {
                    console.error("Error fetching search products:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
            } else {
                getProducts(category)
                .then((data)=>{
                    setFilteredItems(data);
                })
                .catch((error) => { 
                    console.error("Error fetching products:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
            }
    },[debounceSearchValue])

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
            itemsToShow,
            setItemsToShow,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setCategory,
            account,
            saveAccount,
            signOut,
            saveSignOut,
            isLoading,
            accountData,
            setAccountData,
            getOrders,
            yourOrders,
            getOrderToShow,
            activeModalSession,
            setActiveModalSession,
            activeModalCategory,
            setActiveModalCategory,
            setEmail,
            email
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}