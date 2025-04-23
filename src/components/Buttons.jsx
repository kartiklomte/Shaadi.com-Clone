import React from 'react'
import signup from '../assets/images/signup.png'
import connect from '../assets/images/connect.png'
import intereact from '../assets/images/intereact.png'

const Buttons = () => {
  return (
    <div className='grid grid-cols-3 gap-10 w-[95%] md:w-[90%] pt-8 wrap-normal m-auto'>
        <div className=' justify-evenly text-center'>
            <img src={signup} alt="" className='w-[125px] m-auto'/>
            <br />
            <a href="#" className='text-[#00BCD5] text-xl'>Sign Up</a>
            <p className='text-gray-500 text-[18px]'>Register for free & put up your Matrimony Profile</p>
        </div>
        <div className=' justify-evenly text-center'>
            <img src={connect} alt="" className='w-[125px] m-auto'/>
            <br />
            <a href="#" className='text-[#00BCD5] text-xl'>Sign Up</a>
            <p className='text-gray-500 text-[18px]'>Select & connect with Matches you like</p>
        </div>
        <div className=' justify-evenly text-center'>
            <img src={intereact} alt="" className='w-[125px] m-auto'/>
            <br />
            <a href="#" className='text-[#00BCD5] text-xl'>Sign Up</a>
            <p className='text-gray-500 text-[18px]'>Become a Premium Member & Staert a Conversation</p>
        </div>
    </div>
  )
}

export default Buttons