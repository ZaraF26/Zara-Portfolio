"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { once } from 'events';


const Home = () => {

  useEffect(()=> {
    const initAOS = async () => {
      await import ('aos');
      AOS.init({
        duration: 1000,
        easing:'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();

  },[]);
  return <div className='overflow-hidden'>
    <section id="home"><Hero/></section>
    <section id="projects"><Projects/></section>
    <section id="resume"><Resume/></section>
    <section id="skills"><Skills/></section>
    <section id='blog'><Blog/></section>
    <section id="contact"><Contact/></section>
  </div>
};

export default Home;