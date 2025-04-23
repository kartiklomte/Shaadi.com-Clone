import React from 'react'
import privacy from '../assets/images/privacy.png'
import matches from '../assets/images/matches.png'
import verify from '../assets/images/verify.png'
import '../style/Middle.css'

const Middlecore = () => {

  return (
    <div className="pt-6 text-center text-sm justify-center content-center w-[40%] m-auto">
        <div className='bg-[#00BCD5] relative m-auto py-2 w-[11rem] rounded-sm'>
            <h2 className='text-white text-lg space-x-1'>Trusted By Millions</h2>
        </div>
        <hr className='bg-gray-500'/>
        <div className='flex flex-row justify-between my-2 w-full m-auto gap-4'>
            <div className='flex md:flex-row flex-col items-center gap-2 '>
                <img src={matches} alt="" className='w-13 h-13 m-auto'/>
                <h2 className='m-auto text-gray-500'>Best Matches</h2>
            </div>
            <div className='flex md:flex-row flex-col items-center gap-2 '>
                <img src={verify} alt="" className='w-13 h-13'/>
                <h2 className='m-auto text-gray-500'>Verify Profile</h2>
            </div>
            <div className='flex md:flex-row flex-col items-center gap-2 '>
                <img src={privacy} alt="" className='w-13 h-13'/>
                <h2 className='m-auto text-gray-500'>100% Privacy</h2>
            </div>
        </div>
        <hr className='bg-gray-500'/>
    </div>
  )
}

export default Middlecore