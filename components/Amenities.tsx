"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const amenities = [
  {
    title: "Infinity Rooftop Pool",
    description: "Drink up panoramic water views from our resort-style pool.",
    image: "/infinity-pool-rooftop.jpg",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Modern Fitness Center",
    description: "Premium equipment and restorative sauna.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Water Access",
    description: "Seamless access via boat slip, kayaks, and paddleboards.",
    image: "/water-acces.jpg",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Pet Friendly",
    description: "Dog park and indoor pet spa for your furry friends.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2940&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Social Spaces",
    description: "Vibrant club rooms and cozy firepits.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  }
];

export function Amenities() {
  const isMobile = useIsMobile();
  
  return (
    <section id="amenities" className="py-24 bg-white relative">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-bimini-peach/20 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-bimini-gold/10 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-bimini-secondary font-medium tracking-widest uppercase text-xs mb-3 block">Lifestyle</span>
            <h2 className="text-3xl md:text-5xl font-light text-bimini-primary mb-6">
              Curated for <span className="font-serif italic text-bimini-secondary">Relaxation</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Slip into a life of effortless luxury. From sunrise yoga to sunset cocktails, every detail is designed to nurture your well-being.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center animate-pulse">
              <span className="block w-2 h-2 bg-bimini-gold rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {amenities.map((item, index) => {
            const CardWrapper = isMobile ? "div" : motion.div;
            const animationProps = isMobile ? {} : {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }
            };
            
            return (
              <CardWrapper
                key={index}
                {...animationProps}
                className={`relative group overflow-hidden rounded-3xl bg-gray-100 ${item.className} shadow-md md:hover:shadow-xl md:transition-shadow md:duration-500`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center md:will-change-transform md:transition-transform md:duration-1000 md:ease-out md:group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${item.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bimini-primary/90 via-bimini-primary/20 to-transparent opacity-80 md:group-hover:opacity-90 md:transition-opacity md:duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full md:transition-transform md:duration-500 md:group-hover:translate-y-[-10px]">
                  <div className="h-0.5 bg-bimini-gold mb-4 w-10" />
                  <h3 className="text-2xl text-white font-medium mb-2 drop-shadow-md">{item.title}</h3>
                  <p className="text-bimini-peach font-light text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
