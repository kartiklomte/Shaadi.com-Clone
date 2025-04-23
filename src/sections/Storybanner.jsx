import React from 'react'

const Storybanner = () => {
  return (
    <div className="w-full bg-[#FF5A60] py-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-7">
        <h2 className="text-white text-xl md:text-2xl font-normal">
          Your story is waiting to happen!
        </h2>
        <button className="border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-[#FF5A60] transition-colors text-xl">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Storybanner