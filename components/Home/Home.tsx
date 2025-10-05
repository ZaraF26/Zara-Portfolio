import React from 'react'
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const Home = () => {
  return <div className='overflow-hidden'>
    <Hero/>
    <Projects/>
    <Resume/>
    <Skills/>
    <Blog/>
    <Contact/>
  </div>
};

export default Home;