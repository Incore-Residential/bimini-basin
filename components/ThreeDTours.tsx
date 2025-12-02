"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Maximize2, Play, Map, X, ZoomIn } from "lucide-react";
import Image from "next/image";

type Tour = {
  id: string;
  title: string;
  subtitle: string;
  urlId: string;
  floorPlanImage: string;
};

const tours: Tour[] = [
  {
    id: "b3-deluxe",
    title: "B3 Deluxe",
    subtitle: "2 Bedroom / 2 Bath",
    urlId: "erbfPZ8ZCgs",
    floorPlanImage: "/bs_b3.png"
  },
  {
    id: "b2",
    title: "B2 Residence",
    subtitle: "2 Bedroom",
    urlId: "9sexf6oPFvG",
    floorPlanImage: "/bs_b2.png"
  },
  {
    id: "a1",
    title: "A1 Residence",
    subtitle: "1 Bedroom",
    urlId: "6fBvaxRUFTK",
    floorPlanImage: "/bs_a1.png"
  },
];

export function ThreeDTours() {
  const [activeTour, setActiveTour] = useState<Tour>(tours[0]);
  const [viewMode, setViewMode] = useState<"tour" | "plan">("tour");
  const [isFullScreen, setIsFullScreen] = useState(false);

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
            Virtual Tours & 3D Floor Plans
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
        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Residence Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
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

          {/* View Mode Toggle */}
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-100 flex gap-1">
            <button
              onClick={() => setViewMode("tour")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === "tour"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Play className="w-4 h-4" />
              Virtual Tour
            </button>
            <button
              onClick={() => setViewMode("plan")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === "plan"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Map className="w-4 h-4" />
              3D Floor Plan
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <motion.div
          layout
          className={`relative w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 ${
            viewMode === "plan" ? "aspect-square md:aspect-video" : "aspect-video"
          }`}
        >
          <AnimatePresence mode="wait">
            {viewMode === "tour" ? (
              <motion.div
                key="tour"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://my.matterport.com/show/?m=${activeTour.urlId}&play=1&brand=0&dh=0&gt=0&hr=0&search=0&mls=1`}
                  allow="fullscreen"
                  className="w-full h-full"
                  title={`Matterport 3D Tour - ${activeTour.title}`}
                />
                
                {/* Overlay Hint */}
                <div className="absolute bottom-6 right-6 pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <Maximize2 className="w-3 h-3" />
                    <span>Click to explore</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="plan"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full relative bg-gray-50 group cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                <Image
                  src={activeTour.floorPlanImage}
                  alt={`3D Floor Plan - ${activeTour.title}`}
                  fill
                  className="object-contain p-4 md:p-8 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                
                {/* Zoom Hint */}
                <div className="absolute bottom-6 right-6 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <ZoomIn className="w-3 h-3" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 gap-8 opacity-40">
           <div className="flex items-center gap-2">
             <Box className="w-5 h-5 text-bimini-primary" />
             <span className="text-sm text-bimini-secondary font-medium">High-Fidelity 3D</span>
           </div>
        </div>
      </div>

      {/* Full Screen Lightbox */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullScreen(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={activeTour.floorPlanImage}
                alt={`3D Floor Plan - ${activeTour.title}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


