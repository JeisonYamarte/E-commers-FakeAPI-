import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../../Context"; 

function NavbarRightList() {
    const {
        saveSignOut,
        signOut,
        setActiveModalSession,
        email
    } = React.useContext(ShoppingContext);


    const activeStyle = 'bg-rosate/60 rounded-lg w-1 px-1';
    
    
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
            <li className="text-duraznoclaro">
                {email}
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

export {NavbarRightList}