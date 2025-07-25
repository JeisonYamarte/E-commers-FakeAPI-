import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { NavbarRightList } from "./NavbarRightList";
import { NavbarLeftList } from "./NavbarLeftList";
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog"



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
    const [isAddProduct, setIsAddProduct] = React.useState(false);

    React.useEffect(()=>{
        setIsAddProduct(true);

        const timer = setTimeout(() => {
            setIsAddProduct(false)
        }, 800);

        return ()=> clearTimeout(timer)
    }, [count])




    return(
        <nav className="fixed top-0 left-0 z-10 flex justify-between items-center  w-full py-5 lg:px-8 px-3 text-sm font-light bg-gradient-to-tr from-verdesuave to-hueso rounded-b-3xl shadow-xl text-hueso">
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

            <Dialog open={activeModalCategory} onOpenChange={()=> setActiveModalCategory(false)}>
                
                <DialogContent className=" bg-hueso flex flex-col items-center w-1/3 gap-3 h-auto m-auto p-2 rounded-lg list-none [&>button]:hidden">
                    <NavbarLeftList />
                </DialogContent>
            </Dialog>

            <div className="flex items-center gap-1">
                <MagnifyingGlassIcon className='w-4 h-4' />
                <input 
                onChange={(event)=> setSearchByTitle(event.target.value)
                }
                className=' bg-griscalido rounded-lg lg:w-40 h-8 p-4 focus:outline-none w-20'
                value={searchByTitle}
                type="text" 
                placeholder="Search a product" />
            </div>

            <ul className="lg:hidden cursor-pointer flex items-center gap-3">
                
                <button className="flex font-medium text-sm" onClick={()=> setActiveModalSession(!activeModalSession)}>
                    Session <ChevronDownIcon className="w-5 h-5" />
                </button>


            </ul>

            <Dialog open={activeModalSession} onOpenChange={()=> setActiveModalSession(false)}>
                <DialogContent className="bg-hueso flex flex-col items-center w-1/2 gap-3 h-auto m-auto p-2 rounded-lg list-none [&>button]:hidden">
                    <NavbarRightList />
                </DialogContent>
            </Dialog>
            
            <ul className="lg:flex items-center gap-3 hidden ">
                <NavbarRightList />
                <li onClick={()=> openCheckoutSideMenu()}   className={`flex cursor-pointer ${isAddProduct ? "animate-wobble-ver-left duration-400" : ""}`}>
                    <ShoppingCartIcon className='w-4 h-4 '  /> <span className=' flex items-center justify-center w-4 h-4 rounded-full bg-slate-300'>{count}</span>
                </li>
            </ul>
        </nav>
    )
}


export {Navbar}