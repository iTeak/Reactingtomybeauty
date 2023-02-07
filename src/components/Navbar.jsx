import React from "react";
import {AiOutlineclose, AiOutlineMenu} from 'react-icons/ai';
const Navbar=() => {
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className="flex hidden">
                <li className="p-4">About</li>
                <li className="p-4"> MYProjects</li>
                <li className="p-4">yike</li>
                <li className="p-4">Home</li>
            </ul>
            <div>
                <AiOutlineMenu size={20}/>
            </div>
            <div className="fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#00300]">
                <ul className="pt-24 uppercase p-4 " >
                <li className="p-4">About</li>
                <li className="p-4"> MYProjects</li>
                <li className="p-4">yike</li>
                <li className="p-4">Home</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar