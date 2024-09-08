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
  
    const changeCategory = (category) =>{
        switch (category) {
            case 'clothes':
                React.useEffect(()=>{
                    fetch(API + "/category/men's%20clothing")
                      .then(response => response.json())
                      .then(data =>  setItems(data));   
                },[category])
                break;
            
            case 'furnitures':
                React.useEffect(()=>{
                    fetch(API + "/category/women's%20clothing")
                      .then(response => response.json())
                      .then(data =>  setItems(data));   
                },[category])
                break;

            case 'electronics':
                React.useEffect(()=>{
                    fetch(API + "/category/electronics")
                      .then(response => response.json())
                      .then(data => setItems(data));
                },[category])
                break;

            case 'others':
                React.useEffect(()=>{
                    fetch(API + "/category/jewelery")
                      .then(response => response.json())
                      .then(data => setItems(data));
                },[category])
                break;
            default:
                React.useEffect(()=>{
                    fetch(API)
                      .then(response => response.json())
                      .then(data => setItems(data));
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
        return items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    

    React.useEffect(()=>{
            if (searchByTitle.length > 0) {
                setFilteredItems(filterItemsByTitle(items, searchByTitle));
                console.log('filterItemsByTitle console', filterItemsByTitle(items, searchByTitle));
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
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}