import React from 'react'
import logo from '../assets/images/webLogo.png'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-1 sm:pl-1 w-[90%]'>
        <img src={logo} alt="shaadi logo" />
        <div className=' flex flex-row gap-3'>
            <button className=' text-xl p-2 text-white' > Login </button>
            <button className=' text-xl p-2 text-white'> Help </button>
        </div>
    </div>
  )
}

export default Navbar