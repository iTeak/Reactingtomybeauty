import React from "react";
import image1 from "../../src/images/img1.jpeg"
const Hero =() => {
    return(
        <div className="text-white"> 
        
        <div className="max-w-[800px] mt-[px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p2 ">Damn....</p>
        <h1 className="md:text-7xl sm:text-6xl">yeah I would hire me</h1>
        <img src={image1} alt="" />
        <div>
            <p className="md:text-7xl sm:text-6xl"></p>
        </div>
        </div>
        </div>
        
    )
    
    
}
export default Hero