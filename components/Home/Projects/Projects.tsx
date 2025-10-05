import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return <div className='pt016 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>Recent
        <span className='text-red-800'> Projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* Project 1 */}
            <div>
                <Image 
                src='/images/p1.jpg' 
                alt='img' 
                width={800} height={650} 
                className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-black'>
                    Modern Finance Dashboard UI
                    </h1>
                    <h1 className='pt-2 font-medium text-red-800/80 '>Apps , UI/UX</h1>
            </div>

             {/* Project 2 */}
            <div>
                <Image 
                src='/images/p2.jpg' 
                alt='img' 
                width={800} height={650} 
                className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-black'>
                    Portfolio Website Design
                    </h1>
                    <h1 className='pt-2 font-medium text-red-800/80 '>Branding , Motion</h1>
            </div>

            {/* Project 3*/}
            <div>
                <Image 
                src='/images/p3.jpg' 
                alt='img' 
                width={800} height={650} 
                className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-black'>
                    Brand Identity for Startups
                    </h1>
                    <h1 className='pt-2 font-medium text-red-800/80 '>Branding , UI/UX</h1>
            </div>


            {/* Project 4*/}
             <div>
                <Image 
                src='/images/p1.jpg' 
                alt='img' 
                width={800} height={650} 
                className='rounded-lg'/>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-black'>
                    Saas Dashbard Development
                    </h1>
                    <h1 className='pt-2 font-medium text-red-800/80 '>Apps , UI/UX</h1>
            </div>

        </div>
    </div>
  
};

export default Projects;