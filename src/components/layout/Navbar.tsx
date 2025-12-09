"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = ["Home", "Services", "Portfolio", "Pricing", "About", "Contact"];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 w-full"
      >
        {/* 1. Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-white/10 group-hover:border-studio-cyan/50 transition-colors">
              <Image 
                  src="/logo.jpg" 
                  alt="EyesOn Logo" 
                  fill 
                  className="object-cover"
              />
          </div>
        </Link>

        {/* 2. Desktop Menu */}
        <nav className="hidden lg:flex w-[560px] h-[50px] items-center justify-evenly px-1 rounded-full bg-white/5 backdrop-blur-md border border-white/5 absolute left-1/2 -translate-x-1/2 shadow-[0_5px_25px_-5px_rgba(0,169,189,0.3)]">
          {NAV_ITEMS.map((item) => {
            const isActive = item === "Home";
            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group flex flex-col items-center justify-center ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {item}
                <span className={`absolute -bottom-0.5 w-12 h-2 bg-linear-to-t from-studio-cyan to-transparent transition-all duration-300 ease-out [clip-path:polygon(0%_0%,100%_0%,50%_100%)] ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"}`} />
              </Link>
            );
          })}
        </nav>

        {/* 3. Right Section */}
        <div className="flex items-center gap-4 z-50">
          <button className="hidden lg:flex w-[136px] h-10 items-center justify-center text-sm font-bold text-white bg-studio-cyan/5 border-[3px] border-studio-cyan rounded-full shadow-[0_0_25px_0px_#00A9BD,inset_0_0_15px_0px_rgba(0,169,189,0.5)] hover:bg-studio-cyan/20 hover:shadow-[0_0_50px_5px_#00A9BD] hover:scale-105 transition-all duration-300 cursor-pointer">
            Book a Call
          </button>
          
          <button 
            className="lg:hidden text-white p-2 relative z-50 hover:text-studio-cyan transition-colors cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* 4. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: { 
                opacity: 0, 
                y: "-100%",
                transition: { duration: 0.5, ease: "easeInOut" }
              },
              open: { 
                opacity: 1, 
                y: 0, 
                transition: { type: "spring", stiffness: 300, damping: 30 } 
              }
            }}
            className="fixed inset-0 z-40 bg-studio-black/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="text-3xl font-bold text-zinc-300 hover:text-studio-cyan transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <button className="w-[200px] h-[50px] flex items-center justify-center text-lg font-bold text-white bg-studio-cyan/10 border-2 border-studio-cyan rounded-full shadow-[0_0_20px_-5px_#00A9BD] hover:bg-studio-cyan/20 active:scale-95 transition-all cursor-pointer">
                  Book a Call
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}