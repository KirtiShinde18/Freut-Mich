import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// integrations image logo
import insta from "../assets/insta.png"
import wp from "../assets/whatsAppLogo.png"

// images collage
import imginsta from "../assets/collage1.jpeg"
import imgwp from "../assets/collage2.jpeg"

const text = "Contact";


const Contact = () => {
  return <>
    <section className="py-20 md:py-32 px-4 bg-[#eee9e4] min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* HEADING */}
        <motion.h1 className="sm:text-5xl mt-5 text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
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


        {/* insta  */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8  p-6 rounded-2xl">

          {/* Left - Card */}
          <div className="card bg-base-100 w-full md:w-1/2 shadow-sm rounded-2xl p-4">
            <div className="card-body">
        
              <div className="flex items-center gap-3">
                <img src={insta} alt="" className="w-15 h-15" />
                <h2 className="card-title text-2xl">Instagram</h2>
              </div>
        
              <p className="text-lg md:text-2xl mt-4">
                New Arrivals. Tap to Shop the Freshest Drop.
              </p>
        
              <p className="text-base md:text-lg mt-3">
                Follow us on Instagram for the latest new drops and exclusive offers!
              </p>
        
              <a 
                href="https://www.instagram.com/trends_ctrl_a?igsh=MzIybWF1bW9kam82" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center mt-5 inline-block "

              >
                <button className="cursor-pointer text-lg bg-gradient-to-r from-amber-100 to-amber-900 px-5 py-2 rounded-lg text-black hover:scale-105 hover:opacity-90 transition-all duration-300">
                  Shop On Instagram
                </button>
              </a>
        
            </div>
          </div>
      
          {/* Right - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={imginsta} 
              alt="" 
              className="w-full max-w-[400px] rounded-2xl object-cover"
            />
          </div>
      
        </div>


        {/* wp integrations  */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8  p-6 rounded-2xl">

          {/* Left - Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={imgwp} 
              alt="" 
              className="w-full max-w-[400px] rounded-2xl object-cover"
            />
          </div>

          {/* Right - Image */}
          <div className="card bg-base-100 w-full md:w-1/2 shadow-sm rounded-2xl p-4">
            <div className="card-body">
        
              <div className="flex items-center gap-3">
                <img src={wp} alt="" className="w-15 h-15" />
                <h2 className="card-title text-2xl">WhatsApp</h2>
              </div>
        
              <p className="text-lg md:text-2xl mt-4">
                Discover the Latest Tees .
              </p>
        
              <p className="text-base md:text-lg mt-3">
                Chat with us on WhatsApp to see the newest arrivals and place your order instantly !
              </p>
        
              <a 
                href="https://wa.me/918766323695?text=Hello%20I%20want%20to%20shop"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center mt-5 inline-block cursor-pointer"
              >
              <button className="cursor-pointer text-lg bg-gradient-to-r from-amber-100 to-amber-900 px-5 py-2 rounded-lg text-black hover:scale-105 hover:opacity-90 transition-all duration-300">
                Shop On WhatsApp
              </button>
            </a>
        
            </div>
          </div>
      
          
      
        </div>


      </div>
    </section>
  </>
}

export default Contact