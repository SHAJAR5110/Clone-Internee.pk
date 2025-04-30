import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import DarkModeToggle from './DarkModeToggle';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
   

    return (
        <div>
        <div className='w-full top-0 z-50 shadow-md bg-white p-3 fixed flex justify-between items-center '>
            <div className='w-[200px] ml-5 tablet-max:ml-0' >
                {/* logo */}
                <a href="/"> 
                <img src="/logo2.png" alt="logo" />
                </a>
                </div>

            <div className='w-[25%] flex justify-between laptop-max:hidden'>
                {/* Navigation */}
                <a className='hover:text-[#43A724]' href="/">Home</a>
                <Link className='hover:text-[#43A724]' to="/Internship">Internship</Link>
                <Link className='hover:text-[#43A724]' to="/Graduate">Graduate</Link>
                <a className='hover:text-[#43A724] hidden' href="/">Dashboard</a>
            </div>

            <div className='w-[25%] flex laptop-max:justify-end justify-between items-center mr-5'>
                {/* Other section */}
                <button type="button" className='laptop-max:hidden transition-all duration-300 bg-[#43A724] text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black border border-[#43A724]'>
                       Job Portal
                </button>
                <button
                className='laptop-max:hidden transition-all duration-300 bg-white text-black px-6 py-2 rounded-lg hover:bg-[#43A724] hover:text-white border border-[#43A724]'>
                    Dashboard
                </button>
                <div >
                {/* Light and Dark mode */}
               <DarkModeToggle />
                </div>
                {/* Hamburger menu */}
                <div onClick={()=>setIsOpen(!isOpen)} className='laptop-max:block bg-[#43A724] ml-5 p-2 rounded-lg hidden '>
                    {isOpen ?(  
                    <RxHamburgerMenu className='text-2xl cursor-pointer h-[2rem] w-[2rem] text-white  text-[28px]' /> )
                        :(
                    <IoMdClose className='text-2xl cursor-pointer h-[2rem] w-[2rem] text-white  text-[28px]'/>)
                    }
                </div>
            </div>
        </div>
        {/* mobile menu */}
        {
            !isOpen && (
                <div className='h-[30vh] w-full flex flex-col justify-between items-start p-5 shadow-lg'>
                    <a className='hover:text-[#43A724] text-xl' href="/">Home</a>
                    <a className='hover:text-[#43A724] text-xl' href="/">Intership</a>
                    <a className='hover:text-[#43A724] text-xl' href="/">Job Portal</a>
                    <a className='hover:text-[#43A724] text-xl' href="/">Graduate Program</a>
                    <a className='hover:text-[#43A724] text-xl' href="/">Sign in</a>
                </div>
            )
            }
        </div>  
        
    );
}

export default Header;

