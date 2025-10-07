"use client";
import React, { useState } from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(`Error: ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("An unexpected error occurred.");
    }
  };

  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Text contact */}
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-red-900'>
            Contact Me
          </h1>
          <p className='text-black mt-6 text-base sm:text-lg'>
            Reach out today and let's discuss how I can help you achieve your goals.
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
            <div className='w-14 h-14 bg-red-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300'>
              <FaFacebookF className="text-[#eae3d6] w-6 h-6"/>
            </div>
            <div className='w-14 h-14 bg-red-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-all duration-300'>
              <FaInstagram className="text-[#eae3d6] w-6 h-6"/>
            </div>
            <div className='w-14 h-14 bg-red-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300'>
              <FaLinkedin className="text-[#eae3d6] w-6 h-6"/>
            </div>      
          </div>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          data-aos="zoom-in" 
          data-aos-anchor-placement="top-center" 
          data-aos-delay="0"
          className='md:p-10 p-5 bg-red-900 rounded-lg flex flex-col'
        >
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name' 
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full placeholder:text-black/70' 
            required
          />
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address' 
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full placeholder:text-black/70' 
            required
          />
          {/* <input 
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Mobile Number' 
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full placeholder:text-black/70' 
          /> */}
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            className='px-4 py-3.5 mt-6 bg-[#eae3d6] text-black outline-none rounded-md w-full placeholder:text-black/70 h-[10rem]' 
            required
          ></textarea>
          <button 
            type="submit"
            className='mt-8 px-12 py-4 bg-[#eae3d6] hover:bg-black transition-all duration-300 cursor-pointer text-red-900 rounded-full'
          >
            Send Message
          </button>
          {status && <p className='mt-4 text-white'>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
