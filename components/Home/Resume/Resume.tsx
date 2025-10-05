import React from 'react';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return <div className='pt-20 pb-16 '>
    <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Work Section */}
        <div>
            <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                My Work <span className='text-red-800'>Experience</span>
                </h1>
                <div className='mt-10'>jh</div>
        </div>
        {/* Education Section */}
        <div>EDUCATION PART</div>
    </div>
  </div>
  
};

export default Resume;