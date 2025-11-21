"use client";

import { motion } from "framer-motion";

const amenities = [
  {
    title: "Infinity Rooftop Pool",
    description: "Drink up panoramic water views from our resort-style pool.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2940&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2940&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Pet Friendly",
    description: "Dog park and indoor pet spa for your furry friends.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=2940&auto=format&fit=crop",
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
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-bimini-primary mb-6">
            Curated for <span className="font-serif italic text-bimini-secondary">Relaxation</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl">
            Slip into a life of effortless luxury. From sunrise yoga to sunset cocktails, every detail is designed to nurture your well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl bg-gray-100 ${item.className}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bimini-primary/80 via-bimini-primary/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl text-white font-medium mb-2">{item.title}</h3>
                <p className="text-bimini-peach font-light text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
