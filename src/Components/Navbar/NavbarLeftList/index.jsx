import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingContext } from '../../../Context'



function NavbarLeftList() {
    const {
        setActiveModalCategory,
        signOut
    } = React.useContext(ShoppingContext)

    const activeStyle = 'bg-hueso/60 rounded-sm ';

    return (
        <>
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
        </>
    )
    
}

export {NavbarLeftList}