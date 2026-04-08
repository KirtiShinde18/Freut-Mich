import { motion } from "framer-motion";

import { useState } from "react";

import Womenshoe from "./Womenshoe";
import Menshoe from "./Menshoe";



const Shoe = () => {
    const [activeTab, setActiveTab] = useState("men");

  return <>
   <section className="py-20 md:py-32 px-4 bg-[#ededed] min-h-screen flex flex-col items-center">

      {/* Tabs Glass Container */}
      <div className="flex gap-4 mb-12 px-3 py-2 rounded-full backdrop-blur-md bg-white/30 border border-white/40 shadow-lg">

        {/* Men Tab */}
        <button
          onClick={() => setActiveTab("men")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300
          ${activeTab === "men"
            ? "bg-white/50 text-black shadow-md backdrop-blur-md scale-105"
            : "text-black hover:bg-white/30"}`}
        >
          Men
        </button>

        {/* Women Tab */}
        <button
          onClick={() => setActiveTab("women")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300
          ${activeTab === "women"
            ? "bg-white/50 text-black shadow-md backdrop-blur-md scale-105"
            : "text-black hover:bg-white/30"}`}
        >
          Women
        </button>

      </div>

      {/* Content */}
      <div className="w-full max-w-6xl transition-all duration-500">
        {activeTab === "men" ? <Menshoe /> : <Womenshoe />}
      </div>

    </section>
  </>
}

export default Shoe