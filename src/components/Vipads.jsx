import React from 'react'
import viplogo from '../assets/images/vip_logo.webp'

const Vipads = () => {
  return (
    <div className='bg-[#201530] flex flex-col md:flex-row justify-evenly p-4 md:p-2 md:px-4 rounded-2xl w-[95%] md:w-[90%] m-auto'>
        <div className='flex flex-col justify-evenly text-center md:text-left'>
            <h1 className='text-2xl md:text-[32px] font-extrabold text-[#D2B17C]'>Exclusive & Personalised MatchMaking by Shaddi.com</h1>
            <h5 className='text-white text-lg md:text-xl mt-4 flex flex-col md:flex-row gap-2 md:gap-0'> <span>Top Rated Consultants</span> <span className='hidden md:inline'>|</span> <span>5 times higher success rates</span> <span className='hidden md:inline'>|</span> <span>100% Privacy</span></h5>
        </div>
        <div className='hidden md:block bg-[#D2B17C] p-[1px] my-4 md:my-0 md:mx-2'></div>
        <div className='justify-evenly mt-6 md:m-5 relative'>
            <img src={viplogo} alt="VIP logo" className='w-[200px] md:w-[300px] mb-4 md:mb-7 mx-auto'/>
            <button className='p-2 bg-[#D2B17C] font-bold w-full m-auto rounded-md text-lg md:text-xl'>Get Invented</button>
        </div>
    </div>
  )
}

export default Vipads