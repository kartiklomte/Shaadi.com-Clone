import './App.css'
import Core from './sections/Core'
import Feature from './sections/Feature'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import History from './sections/History'
import Storybanner from './sections/Storybanner'
import symbol from './assets/images/core-symbol.png'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="hero-container w-full h-screen bg-[#F1F1F2] ">
        <Hero />
      </div>
      <div className="w-full py-16 bg-[#F1F1F2]">
        <Feature />
      </div>
      <div className="w-full py-16">
        <History />
      </div>
      <div className="w-full py-16">
        <Storybanner />
      </div>
      <div className='w-full py-16 flex justify-center items-center'>
        <img src={symbol} alt="Core Symbol" className="max-w-[200px]" />
      </div>
      <div className="w-full py-16">
        <Core />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default App
