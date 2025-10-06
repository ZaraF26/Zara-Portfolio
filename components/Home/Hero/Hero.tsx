"use client";
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
// import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import DotGrid from './DotBackground';


const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-black overflow-hidden flex-col'>
      {/* DotGrid as background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DotGrid />
      </div>

      {/* Main content on top */}
      <div className='relative z-10 flex flex-col items-center '>
        {/* <Image src="/images/PH1.jpg" alt="heroimage" width={150} height={150} className="circle-full border-3 "/> */}
        <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6-xl mt-6xl text-center font-bold tracking-wide'>Developer.Designer. 
            <span className='text-red-800'>Dreamer</span> 
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-lg px-2 text-center sm:text2xl font-medium flex items-center '>
         I&apos;m Zara - A
            <span className='text-red-800 font-bold'>
                <Typewriter options={{
                    strings:[
                        'Frontend Developer',
                        'Backend Developer',
                        'Web Developer',
                        'UI/UX Designer',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    wrapperClassName: "pl-2"
                }}/>
            </span>
        </h2>
        <button className='mt-6 px-10 py-4 bg-red-800 hover:bg-red-700 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium text-white '>
            <span>See my work</span>
            <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
        </button>
      </div>
    </div>
  );
};

export default Hero;