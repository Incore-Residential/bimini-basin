"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Maximize2 } from "lucide-react";

type Tour = {
  id: string;
  title: string;
  subtitle: string;
  urlId: string;
};

const tours: Tour[] = [
  {
    id: "b3-deluxe",
    title: "B3 Deluxe",
    subtitle: "2 Bedroom / 2 Bath",
    urlId: "erbfPZ8ZCgs",
  },
  {
    id: "b2",
    title: "B2 Residence",
    subtitle: "2 Bedroom",
    urlId: "9sexf6oPFvG",
  },
  {
    id: "a1",
    title: "A1 Residence",
    subtitle: "1 Bedroom",
    urlId: "6fBvaxRUFTK",
  },
];

export function ThreeDTours() {
  const [activeTour, setActiveTour] = useState<Tour>(tours[0]);

  return (
    <section id="tours" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-bimini-primary mb-4"
          >
            Virtual Tours
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-bimini-secondary max-w-2xl mx-auto"
          >
            Experience our residences from the comfort of your home. 
            Explore the layout, finishes, and premium details in 3D.
          </motion.p>
        </div>

        {/* Tour Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tours.map((tour) => (
            <button
              key={tour.id}
              onClick={() => setActiveTour(tour)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base font-medium border ${
                activeTour.id === tour.id
                  ? "bg-bimini-primary text-white border-bimini-primary shadow-lg"
                  : "bg-white text-bimini-secondary border-gray-200 hover:border-bimini-primary/50 hover:shadow-md"
              }`}
            >
              <span className="block font-bold">{tour.title}</span>
              <span className={`text-xs block mt-0.5 ${
                activeTour.id === tour.id ? "text-white/80" : "text-gray-500"
              }`}>
                {tour.subtitle}
              </span>
              {activeTour.id === tour.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full border-2 border-bimini-gold"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 3D Viewer */}
        <motion.div
          key={activeTour.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://my.matterport.com/show/?m=${activeTour.urlId}&play=1&brand=0&dh=0&gt=0&hr=0&search=0&mls=1`}
            allow="fullscreen"
            className="w-full h-full"
            title={`Matterport 3D Tour - ${activeTour.title}`}
          />
          
          {/* Overlay Hint (disappears on interaction usually handled by iframe, but good for visual polish) */}
          <div className="absolute bottom-6 right-6 pointer-events-none">
            <div className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
              <Maximize2 className="w-3 h-3" />
              <span>Click to explore</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 gap-8 opacity-40">
           <div className="flex items-center gap-2">
             <Box className="w-5 h-5 text-bimini-primary" />
             <span className="text-sm text-bimini-secondary font-medium">High-Fidelity 3D</span>
           </div>
        </div>
      </div>
    </section>
  );
}


