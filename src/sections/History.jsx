import React, { useState, useRef } from 'react'
import Successheading from '../components/Successheading'
import Photogrid from '../components/Photogrid'
import Dots from '../components/Dots'
import '../style/scrollbar.css'

const History = () => {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  return (
    <div className='mt-7 pt-4 h-[500px] relative'>
      <div className='w-full max-w-[1200px] m-auto px-4'>
        <div className='mb-8'>
          <Successheading />
        </div>
        <div className='relative'>
          <button onClick={() => scroll('left')}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div
            ref={sliderRef}
            className='overflow-x-auto scrollbar-hide scroll-smooth md:max-w-[90%] max-w-full m-auto'
          >
            <Photogrid />
          </div>
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className='mt-8'>
          <Dots />
        </div>
      </div>
    </div>
    
  )
}

export default History