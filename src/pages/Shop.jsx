import React from 'react'
import { motion } from "framer-motion";

// images 
import img1 from "../assets/couple1.png";
import img2 from "../assets/watch3.avif";
import img3 from "../assets/shoe1.avif";
import img4 from "../assets/shades1.avif";
import img5 from "../assets/belts1.avif";
import { Link } from 'react-router-dom';

const text = "BEST FOR YOUR CATEGORIES";

const data = [
  { img: img1, text: "Fashions", link: "/fashion" },
  { img: img2, text: "Watches", link: "/watches"},
  { img: img3, text: "Shoes", link: "/shoe"},
  { img: img4, text: "Shades", link: "/shades" },
  { img: img5, text: "Belts", link: "/belts"  },
];

const Shop = () => {
  return <>
    <section className="py-20 md:py-32 px-4 bg-[#eee9e4] min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
            {/* HEADING */}           
            <motion.h1 className="sm:text-lg mt-5 text-xl md:text-5xl font-bold mb-4 leading-tight text-center">
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
        </div>


        {/* categories card */}
        <div className="flex my-5 justify-center items-center gap-10 flex-wrap mt-10">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              
              <Link to={item.link}>
                <img
                src={item.img}
                alt={item.text}
                className="mx-auto w-28 h-28 md:w-50 md:h-50 rounded-full object-cover border-2 border-[#d3aa82] shadow-md hover:scale-110 transition duration-300"
              />
              </Link>
        
              <p className="mt-3 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

    </section>
  </>
}

export default Shop