import React from 'react'
import Vipads from '../components/Vipads'
import Findtxt from '../components/Findtxt'
import Buttons from '../components/Buttons'

const Feature = () => {
  return (
    <div className='m-0 pt-5 w-full bg-[#F1F1F2] py-16'>
        <div className='flex flex-col justify-evenly w-[77%] h-auto items-center mx-auto'>
            <div>
                <Vipads />
            </div>
            <div>
                <Findtxt />
            </div>
            <div className='w-full'>
                <Buttons />
            </div>
        </div>
    </div>
  )
}

export default Feature