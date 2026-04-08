import React from 'react'
import { motion } from "framer-motion";

// images 
import watch1 from "../assets/w1.avif"
import watch2 from "../assets/w2.avif"
import watch3 from "../assets/w3.avif"
import watch4 from "../assets/w4.avif"
import watch5 from "../assets/w5.avif"
import watch6 from "../assets/w6.avif"

const watches = [watch1, watch2, watch3, watch4, watch5, watch6];

const text = "Trending Now";

const WomenWatch = () => {
  return <>
   <section id="hero" className=" bg-[#ededed] min-h-screen px-4 sm:px-6 flex items-center">
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

        

        <div className="flex gap-6 flex-wrap justify-center mt-10">
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

export default WomenWatch