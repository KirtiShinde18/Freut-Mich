"use client"

import { Menu, X } from 'lucide-react';

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: "Home", href: "/" },
  // { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
      const pathname = location.pathname;

  return <>
  {/* <nav className="fixed w-full top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10"> */}
    <nav className="fixed w-full top-0 z-50 backdrop-blur text-black">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <img src="/logo.png" alt="Logo" className="w-12 h-12" /> */}
          <h1 className="md:text-4xl text-2xl font-bold ">
            Freut Mich
          </h1>
          
        </div>

        

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex gap-8 text-lg text-gray-300"> */}
        <div className="hidden md:flex gap-8 text-lg">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-1 group cursor-pointer ${
                //   isActive ? "text-white" : ""
                  isActive ? "bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] bg-clip-text text-transparent" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
        </div>


        {/* Desktop Button */}
        <div className="hidden md:flex gap-3">
          <a 
                href="https://www.instagram.com/trends_ctrl_a?igsh=MzIybWF1bW9kam82" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center mt-5 inline-block"
              >
                <button className="text-lg bg-gradient-to-r from-amber-100 to-amber-900 px-5 py-2 rounded-lg text-black hover:scale-105 hover:opacity-90 transition-all duration-300">
                  Shop On Instagram
                </button>
          </a>
          
        </div>

        {/* Mobile Button */}
        <button
        //   className="md:hidden text-white"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        // <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10 px-6 pb-6 flex flex-col gap-4 text-gray-300">
        <div className="md:hidden  backdrop-blur border-y border-white/10 px-6 pb-6 flex flex-col gap-4 ">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`relative inline-block w-fit mt-3 group ${
                  isActive
                    ? "bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] bg-clip-text text-transparent"
                    : ""
                }`}
            >
                {link.name}

                {/* Animation Line */}
                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] transition-all duration-300 group-hover:w-full"
                ></span>
            </Link>
            );
          })}

          
        </div>
      )}

      
      
    </nav>
  </>
}

export default Navbar