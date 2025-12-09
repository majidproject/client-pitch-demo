"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// --- Types & Variants ---
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

interface Particle {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1 + "px",
      height: Math.random() * 3 + 1 + "px",
      top: Math.random() * 80 + "%",
      left: Math.random() * 100 + "%",
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));

    const timer = setTimeout(() => {
      setParticles(items);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start items-center overflow-hidden bg-studio-black pt-24 md:pt-36">
      
      {/* 1. The Glowing Arc Container */}
      <div className="absolute left-1/2 -translate-x-1/2 rounded-[100%] bg-black z-0 pointer-events-none 
        border-t border-studio-cyan/30
        shadow-[
            0_-100px_300px_-50px_#00A9BD,
            inset_0_20px_50px_0px_rgba(0,169,189,0.6)
        ]
        w-[250%] h-[800px] bottom-[-300px]
        md:w-[180%] md:h-[1000px] md:bottom-[-680px]
        lg:w-[130%] lg:h-[1200px] lg:bottom-[-920px]
        after:content-[''] after:absolute after:inset-0 after:rounded-[100%] after:shadow-[0_-50px_100px_#46B6A0] after:opacity-40" 
      >
          {/* The "Flash Point" */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
            w-[700px] h-[100px]
            bg-[radial-gradient(closest-side,#ffffff_10%,#00A9BD_50%,transparent_100%)]
            blur-[30px] opacity-90
            shadow-[0_0_100px_30px_rgba(0,169,189,0.4)]"
          />
      </div>
      
      {/* 2. Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full opacity-20"
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* 3. Main Content */}
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
        }}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center"
      >
        
        {/* Headline */}
        <h1 className="flex flex-col items-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-5xl mt-8 md:mt-0">
          <motion.div 
            variants={fadeUpVariants} 
            className="flex flex-col sm:flex-row items-center justify-center gap-x-3"
          >
            <span className="text-white font-light">Premium</span>
            <span className="text-gradient-cyan drop-shadow-[0_0_30px_rgba(0,169,189,0.3)] text-center">
              Content & Motion Studio
            </span>
          </motion.div>
          <motion.div variants={fadeUpVariants} className="text-white font-light text-center">
            for Modern Brands
          </motion.div>
        </h1>

        {/* Subtext */}
        <motion.p 
          variants={fadeUpVariants} 
          className="text-sm md:text-base text-zinc-400 font-light px-4 mt-2 max-w-4xl mx-auto text-balance leading-relaxed"
        >
          Premium motion graphics, video editing, and brand animation that captivates audiences and drives results.
        </motion.p>

        {/* --- Buttons Section --- */}
        <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-24 md:mt-[168px]">
          
          {/* Button 1: Start a Project (اصلی) */}
          <button className="w-[253px] h-[50px] flex items-center justify-center rounded-full text-white font-bold transition-all duration-500 cursor-pointer relative z-10 overflow-hidden
            bg-[linear-gradient(90deg,#00A9BD_0%,#020612_70%,#020612_100%)]
            border-2 border-studio-cyan
            shadow-[0_0_20px_-5px_#00A9BD]
            hover:scale-105 hover:shadow-[0_0_40px_0px_#00A9BD] bg-studio-cyan"
          >
            Start a Project
          </button>
          
          <button className="w-[253px] h-[50px] flex items-center justify-center gap-2 rounded-full text-white font-medium transition-all duration-500 cursor-pointer
            bg-[#020612]
            border-2 border-studio-cyan
            shadow-[0_0_20px_-5px_#00A9BD]
            hover:scale-105 hover:shadow-[0_0_30px_0px_#00A9BD] hover:bg-studio-cyan/10"
          >
            View Services
          </button>
          
        </motion.div>

        {/* Stats Section */}
        <motion.div 
            variants={fadeUpVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center border-t border-white/5 pt-8 w-full max-w-4xl"
        >
             <div className="flex flex-col items-center gap-2">
                <div className="flex -space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-studio-black" />
                    <div className="w-10 h-10 rounded-full bg-zinc-600 border-2 border-studio-black" />
                    <div className="w-10 h-10 rounded-full bg-zinc-500 border-2 border-studio-black" />
                </div>
                <span className="text-white font-bold text-lg">500+ Happy Clients</span>
             </div>

             <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">1000+</span>
                <span className="text-sm text-zinc-400 uppercase tracking-wider mt-1">Projects Delivered</span>
             </div>

             <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">15+</span>
                <span className="text-sm text-zinc-400 uppercase tracking-wider mt-1">Countries Served</span>
             </div>
        </motion.div>

      </motion.div>
    </section>
  );
}