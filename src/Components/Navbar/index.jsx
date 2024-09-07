import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";



function Navbar (){
    const {
        count,
        openCheckoutSideMenu,
        setSearchByTitle,
        searchByTitle,
    } = React.useContext(ShoppingContext);
    const activeStyle = 'underline underline-offset-4';
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                    to='/'>
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
            
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    jeisonyamarte9@gmail.com
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sign-in'
                    className={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li onClick={()=> openCheckoutSideMenu()} className='flex cursor-pointer'>
                    <ShoppingCartIcon className='w-4 h-4'  /> <span className=' flex items-center justify-center w-4 h-4 rounded-full bg-slate-300'>{count}</span>
                </li>
            </ul>
        </nav>
    )
}


export {Navbar}