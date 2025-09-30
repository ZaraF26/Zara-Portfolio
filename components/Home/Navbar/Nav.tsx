import {NavLinks} from '@/constant/constant';
import React from 'react';
import { FaCode } from "react-icons/fa";
import Link from 'next/link';


const Nav = () => {
  return (
  <div className='transition-all duration-200 h-[12vh] z-[10000] fixed w-full'>
    <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-centre justify-center flex-col'>
            <FaCode className='w-5 h-5 text-black'/>
       </div> 
          <h1 className='text-xl hidden sm:block mdtext-2xl text-black font-bold'>Zara</h1>
     </div> 
     {/* navlinks */} 
    <div className='hidden lg:flex items-center space-x-10'>
        {NavLinks.map((link)=> {
           return (
           <Link key={link.id} 
           href={link.url} 
           className="text-base hover:text-red-800 text-black font-medium transition-all duration-200" >
               
                <p>{link.label}</p>
           </Link>
        );
        })}
    </div>
    {/* buttons*/}
<div className='flex items-center space-x-4'>
    {/*CV BUtton*/}
    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-red-800 hover:bg-red-800'></button>
</div>
    </div>
  </div>    
    );
};

export default Nav;