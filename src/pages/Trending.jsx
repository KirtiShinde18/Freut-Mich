import React from 'react'
import { motion } from "framer-motion";

// images 
import trend1 from "../assets/trending1.jpeg"
import { Link } from 'react-router-dom';
import trend3 from "../assets/trending3.jpeg"
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img5 from "../assets/img5.jpeg"
import trend4 from "../assets/trending4.jpeg"

const text = "Trending Now";

const Trending = () => {
  return <>
  <section id="hero" className="bg-white min-h-screen px-4 sm:px-6 flex items-center">

      <div className="max-w-6xl mx-auto w-full ">

        {/* HEADING */}
        <motion.h1 className="sm:text-5xl mt-5 md:my-5 text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-b from-[#713827] via-[#bc7d49] to-[#d3aa82] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>


        {/* Grid Photos  */}
        <div className='flex flex-col md:flex-row gap-6 justify-evenly '>

            {/* card 1  */}
            <Link to="#" className="hover-3d mt-12 mx-2 cursor-pointer ">
        
                {/* Content */}
                <div className="card w-80  md:w-120 md:p-10 text-black bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${trend3})` }}>
            
                  <div className="card-body">
                    <div className="flex justify-between mb-3">
                      <div className="font-bold text-xl" md:text-2xl>NEW <br />ARRIVALS</div>

                    </div>
            
                    <div className="text-xs md:text-sm  mb-4 opacity-70">
    
                      <p className='font-bold'> SUMMER '24 COLLECTION </p>
                      <p className=''>Clean Fits. Effortless style.</p>
                    </div>
            
                    <div className="flex justify-between">
                      <div>
                          <button className=" bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                              Shop Now
                          </button>
                      </div>
                 
                    </div>
                  </div>
                </div>
            
                {/* 3D effect divs */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
        
            </Link>


            {/* card 2  */}
            <div className="hover-3d mt-12">
                {/* content */}
                <figure className=" w-80  md:w-60 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={img2} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </figure>
            
                {/* 3D divs */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* card 3  */}
            <div className="hover-3d mt-12">
                {/* content */}
                <figure className=" w-80  md:w-60 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={img3} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </figure>
            
                {/* 3D divs */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


        </div>

        {/* Grid Photos  */}
        <div className='flex flex-col md:flex-row  justify-evenly '>

            {/* card 1  */}
            <div className="hover-3d mt-12">
                {/* content */}
                <figure className=" w-80  md:w-60 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={img5} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </figure>
            
                {/* 3D divs */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* card 2  */}
            <div className="hover-3d mt-12">
                {/* content */}
                <figure className=" w-80  md:w-60 md:h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={img1} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </figure>
            
                {/* 3D divs */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* card 3  */}
            <Link to="#" className="hover-3d my-12 mx-2 cursor-pointer">

  <div 
    className="card w-80 md:w-120 h-[300px] md:h-[320px] bg-cover bg-center rounded-2xl overflow-hidden"
    style={{ backgroundImage: `url(${trend4})` }}
  >
    {/* Empty body (optional for spacing) */}
    <div className="h-full"></div>
  </div>

  {/* 3D effect divs */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

</Link>


        </div>


        
      </div>

  </section>
  </>
}

export default Trending