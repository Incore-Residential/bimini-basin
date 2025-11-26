"use client";

import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-bimini-primary mb-6">
          Start Your <span className="font-serif italic text-bimini-secondary">New Chapter</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Ready to experience Bimini Square? Connect with our leasing team to schedule a private tour 
          or learn more about our exclusive Lee Health employee offers.
        </p>
        
        <div className="flex justify-center">
          <Link 
            href="https://showmojo.com/57925900f8/l/p/72794"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 bg-bimini-primary text-white text-lg font-medium rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-white transition-colors">Let's Talk</span>
            <div className="absolute inset-0 bg-bimini-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
