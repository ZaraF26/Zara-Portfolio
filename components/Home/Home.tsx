import React from 'react'
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';

const Home = () => {
  return <div className='overflow-hidden'>
    <Hero/>
    <Projects/>
    <Resume/>
  </div>
};

export default Home;