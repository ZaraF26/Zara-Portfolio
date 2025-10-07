import React from 'react';
import ResumeCard from './ResumeCard';
import { FaCodepen, FaReact } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import { BiBadge } from 'react-icons/bi';


const Resume = () => {
  return <div className='pt-20 pb-16 '>
    <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Work Section */}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                My Work <span className='text-red-800'>Experience</span>
                </h1>
                <div className='mt-10' 
                    data-aos="zoom-in" 
                    data-aos-anchoir-placement="top-bottom">
                    <ResumeCard Icon={FaCodepen} role="Backend Developer"/>
                    <ResumeCard Icon={FaReact} role="Front-end Developer "/>
                    <ResumeCard Icon={BsDatabase} role="UI/UX Designer"/>

                </div>
        </div>
        {/* Education Section */}
        <div>
              <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                My <span className='text-red-800'>Education</span>
                </h1>
            <div className='mt-10' data-aos="zoom-out" data-aos-anchoir-placement="top-bottom" data-aos-delay="300">
                    <ResumeCard Icon={BiBadge} role="WeThinkCode_" date="Sep 2024 - Present"/>
                    <ResumeCard Icon={FaReact} role="Cambridge AS Levels" date="Jan 2019 - Dec 2020"/>
                    <ResumeCard Icon={BsDatabase} role="Islamia College" date="Jan 2010 - Dec 2013"/>

                </div>
        </div>
    </div>
  </div>
  
};

export default Resume;