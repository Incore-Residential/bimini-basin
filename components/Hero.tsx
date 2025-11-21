"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-bimini-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bimini-primary/30 via-bimini-primary/10 to-bimini-primary/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-bimini-primary/80 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase mb-8 text-bimini-peach shadow-lg">
            Exclusive Leasing for Lee Health Employees
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-tight drop-shadow-lg">
            Waterfront Living <br />
            <span className="font-semibold text-white">Redefined.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
            Nestled along the Caloosahatchee River, Bimini Square is the centerpiece of Cape Coral’s premier lifestyle. Where upscale residences meet boutique amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="px-10 py-4 bg-bimini-gold text-bimini-primary rounded-full font-semibold text-lg hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group">
              View Availability
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-white/10 border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/20 transition-all backdrop-blur-md hover:-translate-y-1">
              Explore Amenities
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
