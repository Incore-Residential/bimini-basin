"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section id="floorplans" className="py-24 bg-bimini-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">
              Your Private <br />
              <span className="text-bimini-peach">Waterfront Sanctuary</span>
            </h2>
            <p className="text-xl text-gray-300 font-light mb-10 leading-relaxed">
              Choose from our meticulously designed Studio, 1, 2, and 3-bedroom residences. Each home frames the colorful Cape Coral lifestyle with floor-to-ceiling windows and open-concept layouts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bimini-secondary/50 flex items-center justify-center border border-white/10">
                    <Check size={14} className="text-bimini-gold" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-white text-bimini-primary rounded-full font-medium text-lg hover:bg-bimini-gold hover:text-bimini-primary transition-all shadow-lg">
              View Floor Plans
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 border border-white/10 relative shadow-2xl">
               <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512918760532-3ed64bc80409?q=80&w=2940&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-bimini-primary/20 mix-blend-multiply" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-bimini-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-bimini-peach/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
