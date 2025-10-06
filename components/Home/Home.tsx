"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; //
import { once } from 'events';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false, // <-- animate every time the element comes into view
      anchorPlacement: 'top-bottom',
    });

    // Refresh AOS on scroll or click (for nav links)
    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', refreshAOS);
    window.addEventListener('hashchange', refreshAOS); // optional for smooth nav links

    return () => {
      window.removeEventListener('scroll', refreshAOS);
      window.removeEventListener('hashchange', refreshAOS);
    };
  }, []);

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