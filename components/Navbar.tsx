"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative block w-48 h-12">
              <Image 
                src="/bimini-logo.svg" 
                alt="Bimini Square" 
                fill
                className={`object-contain object-left transition-all duration-300 ${scrolled ? "brightness-0" : "brightness-0 invert"}`}
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="#amenities" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-bimini-primary hover:text-bimini-gold" : "text-white/90 hover:text-white"
              }`}
            >
              Amenities
            </Link>
            <Link 
              href="#health" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-bimini-primary hover:text-bimini-gold" : "text-white/90 hover:text-white"
              }`}
            >
              Lee Health Access
            </Link>
            <Link 
              href="#floorplans" 
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-bimini-primary hover:text-bimini-gold" : "text-white/90 hover:text-white"
              }`}
            >
              Residences
            </Link>
            <Link
              href="#contact"
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all shadow-lg hover:shadow-xl ${
                scrolled 
                  ? "bg-bimini-primary text-white hover:bg-bimini-secondary" 
                  : "bg-white text-bimini-primary hover:bg-gray-100"
              }`}
            >
              Schedule Tour
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? "text-bimini-primary" : "text-white"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#amenities"
              className="block px-3 py-2 text-base font-medium text-bimini-secondary hover:text-bimini-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="#health"
              className="block px-3 py-2 text-base font-medium text-bimini-secondary hover:text-bimini-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Lee Health Access
            </Link>
            <Link
              href="#floorplans"
              className="block px-3 py-2 text-base font-medium text-bimini-secondary hover:text-bimini-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Residences
            </Link>
            <Link
              href="#contact"
              className="block w-full text-center mt-4 px-5 py-3 text-base font-medium text-white bg-bimini-primary rounded-lg hover:bg-bimini-secondary"
              onClick={() => setIsOpen(false)}
            >
              Schedule Tour
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
