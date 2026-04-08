import React from 'react'
import { motion } from "framer-motion";

// images 
import shoe from "../assets/wshoe.avif"
import shoe1 from "../assets/wshoe1.avif"
import shoe2 from "../assets/wshoe2.avif"
import shoe3 from "../assets/wshoe3.avif"
import shoe4 from "../assets/wshoe4.avif"
import shoe6 from "../assets/wshoe6.avif"

const watches = [shoe, shoe1, shoe2, shoe3, shoe4, shoe6];

const text = "Trending Now";

const Womenshoe = () => {
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

export default Womenshoe