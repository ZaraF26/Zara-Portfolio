'use client'
import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si';

import Tilt from 'react-parallax-tilt';

const skills=[
    {
        name:'JavaScript',
        icon:<SiJavascript/>,
        percentage: 89,
    },

     {
        name:'React',
        icon:<SiReact/>,
        percentage: 92,
    },

     {
        name:'Next.js',
        icon:<SiNextdotjs/>,
        percentage: 90,
    },

     {
        name:'Python',
        icon:<SiPython/>,
        percentage: 88,
    },

     {
        name:'SQL',
        icon:<SiSqlite/>,
        percentage: 94,
    },

     {
        name:'TypeScript',
        icon:<SiTypescript/>,
        percentage: 86,
    }
]

const Skills = () => {
  return <div className='text-black pt-16 pb-16'>
    <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
        My <span className='text-red-900'>Skills</span>
    </h1>
    <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {skills.map((skill,i) => {
            return <Tilt key={skill.name} scale={1.2} transitionSpeed={400}>
            <div data-aos="flip-right" 
            data-aos-anchoir-placement="top-center" 
            data-aos-delay={i * 100}
            className='bg-[#750000] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                <div className='text-5xl mb-4 text-[#eae3d6]'>{skill.icon}</div>
                {/* <p className='text-2xl font-semibold text-[#eae3d6]'>{skill.percentage}%</p> */}
                <p className='text-[#eae3d6] mt-1'>{skill.name}</p>
            </div>
            </Tilt>
        })}
    </div>
  </div>
  
};

export default Skills;