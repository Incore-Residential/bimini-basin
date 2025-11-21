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

  const NavLink = ({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) => (
    <Link 
      href={href} 
      className={`group relative text-sm font-medium transition-colors ${
        scrolled ? "text-bimini-primary" : "text-white/90"
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
        scrolled ? "bg-bimini-gold" : "bg-white"
      }`} />
    </Link>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-3 border-b border-white/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative block w-48 h-12 group">
              <Image 
                src="/bimini-logo.svg" 
                alt="Bimini Square" 
                fill
                className={`object-contain object-left transition-all duration-500 ${
                  scrolled ? "brightness-0" : "brightness-0 invert"
                } group-hover:opacity-80`}
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="#amenities" scrolled={scrolled}>Amenities</NavLink>
            <NavLink href="#health" scrolled={scrolled}>Lee Health Access</NavLink>
            <NavLink href="#floorplans" scrolled={scrolled}>Residences</NavLink>
            
            <Link
              href="#contact"
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                scrolled 
                  ? "bg-bimini-primary text-white hover:bg-bimini-secondary" 
                  : "bg-white text-bimini-primary hover:bg-gray-50"
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
