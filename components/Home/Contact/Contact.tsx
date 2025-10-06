import React from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebook, FaFacebookF, FaFax, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return <div className='pt-16 pb-16'>
    <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Text contact */}
        <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-red-900'>
                Contact Me
            </h1>
            <p className='text-black mt-6 text-base sm:text-lg'>
                Reach out today and lets discuss how I can help you achieve your goals.
                </p>
                {/* Contact info */}
                <div className='mt-7'>
                     <div className='flex items-center space-x-3 mb-4'>
                        <BiPhone className='w-9 h-9 text-red-900'/>
                        <p className='text-xl font-bold text-black'>074 691 4901</p>
                    </div>

                     <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-red-900'/>
                        <p className='text-xl font-bold text-black'>i.am.zara.fredericks@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-red-900'/>
                        <p className='text-xl font-bold text-black'>Cape Town, South Africa</p>
                    </div>
                </div>

                {/* Social icons */}
                <div className='flex items-center mt-8 space-x-3'>
                    <div className='w-14 h-14 bg-red-900 rounded-full flex 
                    items-center justify-center cursor-pointer flex-col 
                    hover:bg-blue-800 transition-all duration-300'>
                    <FaFacebookF className="text-[#eae3d6] w-6 h-6"/>
                    </div>

                    <div className='w-14 h-14 bg-red-900 rounded-full flex 
                    items-center justify-center cursor-pointer flex-col 
                    hover:bg-red-800 transition-all duration-300'>
                    <FaInstagram className="text-[#eae3d6] w-6 h-6"/>
                    </div>


                     <div className='w-14 h-14 bg-red-900 rounded-full flex 
                    items-center justify-center cursor-pointer flex-col 
                    hover:bg-blue-800 transition-all duration-300'>
                    <FaLinkedin className="text-[#eae3d6] w-6 h-6"/>
                    </div>      
            </div>
        </div>
        {/* Form */}
        <div className='md:p-10 p-5 bg-red-900 rounded-lg'>
            <input 
            type="text"
            placeholder='Name' 
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full 
            placeholder:text-black/70' />

            <input 
            type="email"
            placeholder='Email Address' 
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full 
            placeholder:text-black/70' />


            <input 
            type="text" 
            placeholder='Mobile Number' 
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full 
            placeholder:text-black/70' />

            <textarea placeholder='Message'className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full 
            placeholder:text-black/70 h-[10rem]'></textarea>
            <button className='mt-8 px-12 py-4 bg-[#eae3d6] hover:bg-black transition-all duration-300
            cursor-pointer text-red-900 rounded-full '>
                Send Message
            </button>
        </div>
    </div>
  </div>
  
};

export default Contact;