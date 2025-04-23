import React,{ useState } from 'react'
import '../style/Hero.css'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Details from '../components/Details'


const Hero = () => {

  return (
<div className="hero-content md:w-[75%] w-full h-full flex flex-col justify-between py-8">
    <div>
      <Navbar />
    </div>

    <div className="pb-5">
        <Heading />
        <Details />
    </div>
</div>
)}

export default Hero