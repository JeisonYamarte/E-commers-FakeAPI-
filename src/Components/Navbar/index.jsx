import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Modal } from "../Modal";
import { NavbarRightList } from "./NavbarRightList";
import { NavbarLeftList } from "./NavbarLeftList";



function Navbar (){
    const {
        count,
        openCheckoutSideMenu,
        setSearchByTitle,
        searchByTitle,
        signOut,
        activeModalCategory,
        activeModalSession,
        setActiveModalCategory,
        setActiveModalSession
        
    } = React.useContext(ShoppingContext);




    return(
        <nav className="flex justify-between items-center  w-full py-5 lg:px-8 px-3 text-sm font-light bg-white">
            <ul className="lg:flex items-center gap-3 hidden">
                <NavbarLeftList/>
            </ul>

            <ul className="lg:hidden cursor-pointer flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                    to={`${ signOut ? "/sign-in" : "/" }`}>
                        shopi
                    </NavLink>
                </li>
                <button className="flex font-medium text-sm" onClick={()=> setActiveModalCategory(!activeModalCategory)}>
                    Categorias <ChevronDownIcon className="w-5 h-5" />
                </button>
            </ul>

            {activeModalCategory && <Modal>
                <ul className=" bg-white flex flex-col items-center w-1/4 gap-3 w-200 h-auto m-auto p-2 rounded-lg">
                    <NavbarLeftList />
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
                
                <button className="flex font-medium text-sm" onClick={()=> setActiveModalSession(!activeModalSession)}>
                    Session <ChevronDownIcon className="w-5 h-5" />
                </button>


            </ul>

            {activeModalSession && <Modal>
                <ul className=" bg-white flex flex-col items-center gap-3 w-200 h-auto m-auto p-2 rounded-lg">
                    <NavbarRightList />
                    <li onClick={()=> {
                        openCheckoutSideMenu();
                        setActiveModalSession(false);
                    }} className='flex cursor-pointer'>
                        <ShoppingCartIcon className='w-4 h-4'  /> <span className=' flex items-center justify-center w-4 h-4 rounded-full bg-slate-300'>{count}</span>
                    </li>
                </ul>
            </Modal>}
            
            <ul className="lg:flex items-center gap-3 hidden">
                <NavbarRightList />
                <li onClick={()=> openCheckoutSideMenu()} className='flex cursor-pointer'>
                    <ShoppingCartIcon className='w-4 h-4'  /> <span className=' flex items-center justify-center w-4 h-4 rounded-full bg-slate-300'>{count}</span>
                </li>
            </ul>
        </nav>
    )
}


export {Navbar}