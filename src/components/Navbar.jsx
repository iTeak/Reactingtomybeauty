import React , {useState} from "react";
import {AiOutlineClear, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
const Navbar=() => {
    const [nav, setNav]= useState(true)

    const handleNav = () =>{
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACTPORTFOLIO.</h1>
            <ul className="hidden sm:flex">
                <li className="p-4">About</li>
                <li className="p-4"> MYProjects</li>
                <li className="p-4">ContactMe</li>
                <li className="p-4">HireMe</li>
            </ul>
            <div onClick={handleNav} className="block sm:hidden">
                { !nav ? <AiOutlineClose size ={20}/>  : <AiOutlineMenu size={20}/>}
                
            </div>
            
            <div className= {!nav ? 'fixed left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#00300]' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
                <ul className="uppercase p-4" >
                <li className="p-4 border-b border-gray-600" >About</li>
                <li className="p-4 border-b border-gray-600"> MYProjects</li>
                <li className="p-4 border-b border-gray-600">HireMe</li>
                <li className="p-4 border-b border-gray-600">ContactMe</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar