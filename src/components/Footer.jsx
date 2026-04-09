import { HandHeartIcon, ShoppingBag } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return <>

  <div className='text-center p-5 bg-[#fef6ef] text-black'>
   <div className='border-b-1 mb-4 flex justify-between p-5 md:justify-evenly md:text-lg text-sm '>
  
    <div className='flex flex-col items-center text-center gap-2'>
      <ShoppingBag size={28} />
      <p>EASY EXCHANGE</p>
    </div>
  
    <div className='flex flex-col items-center text-center gap-2'>
      <HandHeartIcon size={28}/>
      <p>100% HANDPICKED</p>
    </div>
  
    <div className='flex flex-col items-center text-center gap-2'>
      <ShoppingBag size={28}/>
      <p>ASSURED QUALITY</p>
    </div>

  </div>
   © 2026 copyright .  All rights Reserved. Design by <p className="bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] bg-clip-text text-transparent"><b>Kuldeep Websoft Pvt.Ltd.</b></p>
  </div>

  </>
}

export default Footer