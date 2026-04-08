import React from 'react'

// image 
import hero from "../assets/Fruet-Mich.png"
import About from './About'
import Shop from './Shop'
import Contact from './Contact'

const Hero = () => {
  return <>
    <section className="py-20 md:py-32 px-4 bg-[#ededed] flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full bg-black h-[500px] md:h-[600px]">
            <img src={hero} alt="" className="w-full h-full object-cover" />
        </div>
   </section>
   <Shop/>
   <About/>
   <Contact/>
  </>
}

export default Hero