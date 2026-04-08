import React from 'react'
import { motion } from "framer-motion";

// images 
import belt1 from "../assets/belt1.avif"
import belt2 from "../assets/belt2.avif"
import belt3 from "../assets/belt3.avif"
import belt4 from "../assets/belt4.avif"
import belt5 from "../assets/belt5.avif"
import belt6 from "../assets/belt6.avif"

const watches = [belt1, belt2, belt3, belt4, belt5, belt6];

const text = "Trending Now";

const Belts = () => {
  return <>
   <section id="hero" className=" bg-[#ededed] min-h-screen px-4 sm:px-6 flex items-center">
     <div className="max-w-6xl mx-auto w-full ">
        {/* HEADING */}
        <motion.h1 className="sm:text-5xl mt-25 md:mt-30 md:my-5 text-3xl md:text-5xl font-bold mb-4 leading-tight text-center">
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

        

        <div className="flex gap-6 flex-wrap justify-center my-10">
          {watches.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-80 h-80 object-cover rounded-xl cursor-pointer"
              
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
        
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

     </div>
   </section>
  </>
}

export default Belts