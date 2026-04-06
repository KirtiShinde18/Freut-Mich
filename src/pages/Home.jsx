import React from 'react'
import hero from "../assets/herooo.png"
import { DownloadIcon } from 'lucide-react'
import About from './About'
import Trending from './Trending'

const Home = () => {
  return <>
<section id="hero" className="min-h-screen bg-white px-4 sm:px-6 flex items-center">

  <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

    {/* TEXT */}
    <div className="flex flex-col mt-25 justify-center text-center md:text-left max-w-xl mx-auto">
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight 
      bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] bg-clip-text text-transparent">
        SHOP THE <br /> LATEST TRENDS
      </h1>

      <p className="mt-2 text-base sm:text-lg md:text-2xl text-black/60">
        Stylish tees elevate your vibes.
      </p>

      {/* Button */}
      <a href="https://www.instagram.com/trends_ctrl_a?igsh=MzIybWF1bW9kam82" className="w-full sm:w-auto my-5">
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl 
        bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] 
        text-black text-base sm:text-lg font-semibold 
        hover:scale-105 transition duration-300 shadow-lg">
          Shop Now
        </button>
      </a>

    </div>

    {/* IMAGE */}
    <div className="flex items-end justify-center md:mt-30">
      <img
        src={hero}
        alt=""
        className="h-[450px] sm:h-[550px] md:h-[500px] lg:h-[710px] object-contain 
        drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
      />
    </div>

  </div>

</section>
<About/>
<Trending/>
  </>
}

export default Home