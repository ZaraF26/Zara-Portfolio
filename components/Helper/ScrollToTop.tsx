"use client";
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // show and hide scroll button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ✅ This return should be here, not inside scrollToTop
  return (
    <div className='fixed bottom-4 right-4 animate-pulse'>
      {isVisible && (
        <button
          className='bg-red-900 cursor-pointer text-[#eae3d6] rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
