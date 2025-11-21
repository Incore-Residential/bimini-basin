"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const features = [
  "Waterfront balcony views",
  "Designer kitchens with islands",
  "Smart entry systems",
  "In-unit washer & dryer",
  "High-speed WiFi included",
  "Hurricane-resilient construction"
];

export function FloorPlans() {
  return (
    <section id="floorplans" className="py-24 relative overflow-hidden bg-bimini-primary text-white">
      {/* Deep Ocean Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1e3d42] via-bimini-primary to-[#0f2023]" />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block w-12 h-12 rounded-full border border-bimini-gold/30 flex items-center justify-center mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-bimini-gold" />
            </div>
            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
              Your Private <br />
              <span className="text-bimini-peach font-serif italic">Waterfront Sanctuary</span>
            </h2>
            <p className="text-xl text-gray-300 font-light mb-10 leading-relaxed border-l border-white/10 pl-6">
              Choose from our meticulously designed Studio, 1, 2, and 3-bedroom residences. Each home frames the colorful Cape Coral lifestyle with floor-to-ceiling windows and open-concept layouts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bimini-secondary/50 flex items-center justify-center border border-white/10 group-hover:border-bimini-gold/50 transition-colors">
                    <Check size={14} className="text-bimini-gold" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              href="https://showmojo.com/57925900f8/l/p/72794"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-bimini-primary rounded-full font-medium text-lg hover:bg-bimini-gold hover:text-bimini-primary transition-all shadow-lg hover:shadow-bimini-gold/20 hover:-translate-y-0.5"
            >
              View Floor Plans
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 border border-white/10 relative shadow-2xl group">
               <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('/kitchen-interior.jpg')" }}
              />
              <div className="absolute inset-0 bg-bimini-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
            </div>
            
            {/* Decorative elements - Luxe Glows */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-bimini-gold/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-bimini-peach/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
