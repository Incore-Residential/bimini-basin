"use client";

import { motion } from "framer-motion";
import { Heart, Clock, MapPin, Coffee } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Zero Commute",
    description: "Your new home is just steps away from work. Reclaim hours of your week and enjoy a stress-free 1-minute walk to the Lee Health outpatient clinic."
  },
  {
    icon: Heart,
    title: "Walkable Wellness",
    description: "Located in the heart of the town square, giving you immediate access to adult and pediatric primary care, specialty services, and behavioral health."
  },
  {
    icon: Coffee,
    title: "Morning Rituals",
    description: "Start your shift refreshed. Grab a casual brunch at House of Omelets or a quick coffee before walking over. No traffic, no parking hassles."
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "After work, unwind at Bimini Basin Seafood & Cocktails or take a stroll to Four Freedoms Park. Everything you need is right outside your door."
  }
];

export function LeeHealthBenefits() {
  return (
    <section id="health" className="py-24 relative overflow-hidden">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 bg-gray-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-bimini-peach/30 via-transparent to-transparent opacity-70" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-bimini-gold/5 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-bimini-gold font-medium tracking-widest uppercase text-xs mb-3 block">Exclusive Convenience</span>
            <h2 className="text-3xl md:text-5xl font-light text-bimini-primary mb-6">
              Designed for <span className="font-semibold text-bimini-secondary">Lee Health Professionals</span>
            </h2>
          </motion.div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Experience the ultimate convenience of living where you work. Bimini Square offers exclusive proximity to Lee Health facilities, creating a seamless work-life balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-bimini-primary/5 rounded-xl flex items-center justify-center mb-6 text-bimini-primary group-hover:bg-bimini-primary group-hover:text-bimini-gold transition-colors shadow-sm">
                  <benefit.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-bimini-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[640px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          >
            <div 
              className="absolute inset-0 bg-gray-200"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop')", 
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bimini-primary/90 via-bimini-primary/20 to-transparent flex items-end p-10">
              <div className="text-white relative z-10">
                <div className="w-12 h-1 bg-bimini-gold mb-6" />
                <div className="text-sm font-bold uppercase tracking-widest mb-2 text-bimini-gold">Town Square</div>
                <div className="text-3xl font-light leading-tight">Direct Access to <br />Lee Health Services</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
