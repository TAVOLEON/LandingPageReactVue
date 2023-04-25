import React,{useState} from 'react'
import { RiMenuLine, RiCloseCircleLine } from "react-icons/ri";

const Header = () => {

  const [showMenu,setShowMenu]=useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
         <div className="xl:w-1/6 text-center -mt-2">
            <h1 className="text-2xl font-bold relative p-1 bg-white">Logo</h1>
         </div>
         <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full" }  top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-700`}>  
             <h1 className="text-2xl xl:hidden font-bold relative p-1 bg-white">Logo</h1>
             <a href="#" className="">Home</a>
             <a href="#" className="">About Us</a>
             <a href="#" className="">Services</a>
             <a href="#" className="">Products  </a>
         </nav>
         <button onClick={()=> setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2">{showMenu ? <RiCloseCircleLine></RiCloseCircleLine> : <RiMenuLine></RiMenuLine>  }</button>
    </header>
    
  )
}

export default Header