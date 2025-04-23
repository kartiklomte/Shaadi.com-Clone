import React from 'react'
import Img1 from '../assets/images/Img1.jpg'
import Img2 from '../assets/images/Img2.jpg'
import Img3 from '../assets/images/Img3.jpg'

const Photogrid = () => {

  return (
    <div className='grid grid-flow-col auto-cols-[300px] md:auto-cols-[320px] gap-6 px-4 m-auto'>
      <div className='w-[320px] md:w-[300px] flex-shrink-0 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden'>
        <img src={Img1} alt="Nitin and Karuna" className='w-full h-[200px] object-cover'/>
        <h1 className='text-xl md:text-2xl text-gray-700 mt-4 p-3'>Nitin & Karuna</h1>
        <p className='mt-2 text-sm md:text-base text-[#72727D] p-3'>We met on Shaadi.com recently and our families spoke one another. Soon later, our partially arranged marriage has turned into a love marriage.</p>
      </div>
      <div className='w-[320px] md:w-[300px] flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden'>
        <img src={Img2} alt="Abhinav and Sakshi" className='w-full h-[200px] object-cover'/>
        <h1 className='text-xl md:text-2xl text-gray-700 mt-4 p-3'>Abhinav & Sakshi</h1>
        <p className='mt-2 text-sm md:text-base text-[#72727D] p-3'>Sakshi and I met through Shaadi.com, her profile was managed by her elder sister while mine was handled by my Father. Both of our guardians exchanged contact details and we ...</p>
      </div>
      <div className='w-[320px] md:w-[300px] flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden'>
        <img src={Img3} alt="Shanjoy and Mitali" className='w-full h-[200px] object-cover'/>
        <h1 className='text-xl md:text-2xl text-gray-700 mt-4 p-3'>Shanjoy & Mitali</h1>
        <p className='mt-2 text-sm md:text-base text-[#72727D] p-3'>I was looking for my life partner in shaadi.com and within afew days ofopening my profile, Ifound my appropriate better half. I am thankful to Shaadi.com for giving me an ...</p>
      </div>
    </div>
  )
}

export default Photogrid