import React from 'react'

const Contact = () => {
  return <>
  <section id="men" className="py-25 md:py-32 px-6 min-h-screen">
    <div className="max-w-7xl mx-auto text-center">
      Contact


          
    <div className="max-w-7xl  rounded-2xl w-full 
        grid grid-cols-1 lg:grid-cols-2 items-center mx-auto
        py-6 px-4 md:py-10 md:px-8">

  {/* left */}
  <div className="md:ms-20 w-full text-center lg:text-left flex flex-col ">

    <h1 className="text-3xl md:text-6xl font-bold leading-tight  bg-gradient-to-r from-[#713827] via-[#bc7d49] to-[#d3aa82] bg-clip-text text-transparent">
      SHOP THE LATEST TRENDS
    </h1>

    <p className=" mt-2 text-lg md:text-2xl">
      Stylish tees elevate your vibes.
    </p>

    <div className="flex gap-4 justify-center lg:justify-start mt-6">
      <img src={WhatsAppLogoIntegration} width={50} />
      <img src={InstaAppLogoIntegration} width={50} />
    </div>

  </div>

  {/* image */}
  <div className="flex justify-center  items-center">
    <img
  src={HeroBg}
  alt=""
  className="w-32 sm:w-44 md:w-64 lg:w-[320px] object-contain 
  drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
/>
  </div>

  

</div>


    </div>
  </section>
  </>
}

export default Contact