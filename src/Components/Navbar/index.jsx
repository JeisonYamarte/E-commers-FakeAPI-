import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Modal } from "../Modal";



function Navbar (){
    const {
        count,
        account,
        openCheckoutSideMenu,
        setSearchByTitle,
        searchByTitle,
        saveSignOut,
        signOut,
        accountData,
    } = React.useContext(ShoppingContext);

    const [view, setView] = React.useState(null)
    const [activeModalSession, setActiveModalSession] = React.useState(false)
    const [activeModalCategory, setActiveModalCategory] = React.useState(false)

    const activeStyle = 'underline underline-offset-4';

    /*React.useEffect(()=>{
        getAccount();
    },[account])*/
    

    React.useLayoutEffect(()=>{
        const renderView = ()=>{
            if(signOut){
                return(
                    <li onClick={()=> setActiveModalSession(false)}>
                        <NavLink
                        to='/sign-in'
                        className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>{saveSignOut(true);}}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                )
            } else{
                return(
                    <>
                    <li className="text-black/60">
                        {accountData?.email}
                    </li>
                    <li onClick={()=> setActiveModalSession(false)}>
                        <NavLink
                        to='/my-orders'
                        className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            My Orders
                        </NavLink>
                    </li>
                    <li onClick={()=> {
                        setActiveModalSession(false)
                        }
                    }>
                        <NavLink
                        to='/my-account'
                        className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            My account
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalSession(false)}>
                        <NavLink
                        to='/sign-in'
                        className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }
                        onClick={()=>{
                                saveSignOut(true);
                        }}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                </>
                )
            }
        }
    
       setView(renderView());
    }, [signOut])
    



    return(
        <nav className="flex justify-between items-center  w-full py-5 lg:px-8 px-3 text-sm font-light bg-white">
            <ul className="lg:flex items-center gap-3 hidden">
                <li className="font-semibold text-lg">
                    <NavLink
                    to={`${ signOut ? "/sign-in" : "/" }`}>
                        shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    className={({isActive})=>
                    isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="lg:hidden cursor-pointer flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                    to={`${ signOut ? "/sign-in" : "/" }`}>
                        shopi
                    </NavLink>
                </li>
                <li className="flex font-medium text-sm" onClick={()=> setActiveModalCategory(!activeModalCategory)}>
                    Categorias <ChevronDownIcon className="w-5 h-5" />
                </li>
            </ul>

            {activeModalCategory && <Modal>
                    <ul className=" bg-white flex flex-col items-center w-1/4 gap-3 w-200 h-auto m-auto p-2 rounded-lg">
                    <li onClick={()=> setActiveModalCategory(false)} className="font-semibold text-lg">
                        <NavLink
                        to={`${ signOut ? "/sign-in" : "/" }`}>
                            shopi
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalCategory(false)}>
                        <NavLink
                        to='/'
                        className={({isActive})=>
                        isActive ? activeStyle : undefined
                        }>
                            All
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalCategory(false)}>
                        <NavLink
                        to='/clothes'
                        className={({isActive})=>
                        isActive ? activeStyle : undefined
                        }>
                            Clothes
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalCategory(false)}>
                        <NavLink
                        to='/electronics'
                        className={({isActive})=>
                        isActive ? activeStyle : undefined
                        }>
                            Electronics
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalCategory(false)}>
                        <NavLink
                        to='/furnitures'
                        className={({isActive})=>
                        isActive ? activeStyle : undefined
                        }>
                            Furnitures
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalCategory(false)}>
                        <NavLink
                        to='/toys'
                        className={({isActive})=>
                        isActive ? activeStyle : undefined
                        }>
                            Toys
                        </NavLink>
                    </li>
                    <li onClick={()=> setActiveModalCategory(false)}>
                        <NavLink
                        to='/others'
                        className={({isActive})=>
                        isActive ? activeStyle : undefined
                        }>
                            Others
                        </NavLink>
                    </li>
                </ul>
            </Modal>}

            <div className="flex items-center gap-1">
                <MagnifyingGlassIcon className='w-4 h-4' />
                <input 
                onChange={(event)=> setSearchByTitle(event.target.value)
                }
                className=' bg-slate-200 rounded-lg w-40 h-8 p-4 focus:outline-none'
                value={searchByTitle}
                type="text" 
                placeholder="Search a product" />
            </div>

            <ul className="lg:hidden cursor-pointer flex items-center gap-3">
                
                <li className="flex font-medium text-sm" onClick={()=> setActiveModalSession(!activeModalSession)}>
                    Sesion <ChevronDownIcon className="w-5 h-5" />
                </li>


            </ul>

            {activeModalSession && <Modal>
                <ul className=" bg-white flex flex-col items-center gap-3 w-200 h-auto m-auto p-2 rounded-lg">
                    {  
                    view
                    }
                    <li onClick={()=> {
                        openCheckoutSideMenu();
                        setActiveModalSession(false);
                    }} className='flex cursor-pointer'>
                        <ShoppingCartIcon className='w-4 h-4'  /> <span className=' flex items-center justify-center w-4 h-4 rounded-full bg-slate-300'>{count}</span>
                    </li>
                </ul>
            </Modal>}
            
            <ul className="lg:flex items-center gap-3 hidden">
                {  
                view
                }
                <li onClick={()=> openCheckoutSideMenu()} className='flex cursor-pointer'>
                    <ShoppingCartIcon className='w-4 h-4'  /> <span className=' flex items-center justify-center w-4 h-4 rounded-full bg-slate-300'>{count}</span>
                </li>
            </ul>
        </nav>
    )
}


export {Navbar}