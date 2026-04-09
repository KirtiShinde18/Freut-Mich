import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-coverflow";

// Images
import slide_image_1 from "../assets/img1.jpeg";
import slide_image_2 from "../assets/img2.jpeg";
import slide_image_3 from "../assets/img3.jpeg";
import slide_image_4 from "../assets/img4.jpeg";

// women Images 
import slide_image_5 from "../assets/wtshirt1.avif";
import slide_image_6 from "../assets/wtshirt2.avif";
import slide_image_7 from "../assets/wtshirt3.avif";
import slide_image_8 from "../assets/wtshirt4.avif";
import slide_image_9 from "../assets/wtshirt5.avif";


const images = [slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7, slide_image_8, slide_image_9];

const text = "About Freut Mich";

const About = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-[#ededed] min-h-screen flex flex-col justify-center overflow-hidden">
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

        {/* Optional: Description below slider */}
        <p 
          className="mt-12 text-center text-[#713827]/70 text-xl max-w-3xl mx-auto "

        >
          Made for the modern hustler, <b>Freut Mich</b> is all about premium quality, stylish T-shirts at unbeatable prices. We believe in keeping you looking sharp without the heavy price tag .
        </p>

        {/* Swiper Wrapper */}
        <div className="relative px-4 sm:px-12 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            // No Autoplay module or prop here
            modules={[EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".nav-next",
              prevEl: ".nav-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            className="!py-14"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="!w-[280px] sm:!w-[350px] md:!w-[400px]">
                <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle dark gradient overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Precise Navigation Controls */}
          <div className="flex justify-center items-center gap-10 mt-2">
            <button className="nav-prev group flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg border border-[#bc7d49]/20 hover:bg-[#713827] transition-all duration-300">
              <ArrowLeft className="text-[#713827] group-hover:text-white" size={24} />
            </button>
            
            <button className="nav-next group flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg border border-[#bc7d49]/20 hover:bg-[#713827] transition-all duration-300">
              <ArrowRight className="text-[#713827] group-hover:text-white" size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;