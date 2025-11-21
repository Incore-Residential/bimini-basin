"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-bimini-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      >
        {/* Enhanced gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bimini-primary/50 via-bimini-primary/20 to-bimini-primary/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "luxe" feel
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-8"
          >
            <span className="py-1.5 px-4 rounded-full bg-bimini-primary/90 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase text-bimini-peach shadow-lg ring-1 ring-white/10">
              Exclusive Leasing for Lee Health Employees
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-tight drop-shadow-xl">
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Waterfront Living
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block font-semibold text-white"
              >
                Redefined.
              </motion.span>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 font-normal leading-relaxed drop-shadow-xl text-shadow-sm text-balance"
          >
            Nestled along the Caloosahatchee River, Bimini Square is the centerpiece of Cape Coral’s premier downtown lifestyle. Where upscale residences meet boutique amenities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link 
              href="https://showmojo.com/57925900f8/l/p/72794"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-10 py-4 bg-bimini-gold text-bimini-primary rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-bimini-gold/20 hover:-translate-y-1 flex items-center gap-2 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Availability
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-bimini-peach transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </Link>
            
            <Link
              href="#contact"
              className="px-10 py-4 bg-white/5 border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-md hover:-translate-y-1 hover:border-white/50"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
