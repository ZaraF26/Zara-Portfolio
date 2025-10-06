import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
  return <div className='pt-16 pb-16'>
    <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>
       My latest
        <span className='text-red-900'> Blogs</span>
    </h1>
    <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items center mt-16'>
        <div 
        data-aos="fade-right" 
        data-aos-anchoir-placement="top-center" 
        data-aos-delay="0">
            <BlogCard 
            image="/images/b1.jpg" 
            title="Learning how to make a portfolio website with Next.js"/>
        </div>

        <div
        data-aos="fade-right" 
        data-aos-anchoir-placement="top-center" 
        data-aos-delay="100" >
            <BlogCard 
            image="/images/b2.jpg" 
            title="Attending a Hackthon for the first time"/>
        </div>

        <div
        data-aos="fade-right" 
        data-aos-anchoir-placement="top-center" 
        data-aos-delay="200">
            <BlogCard 
            image="/images/b3.jpg" 
            title="Imposter syndrome is more common than you think"/>
        </div>

    </div>
  </div>
  
};

export default Blog;