"use client";

import Script from "next/script";
import { motion } from "framer-motion";

const LISTINGS_IFRAME_SRC =
  "https://rentengine.io/c/rentallink?desktopViewStartAs=grid&mobileViewStartAs=grid&sortBy=id&defaultSortDirection=asc&multifamilyPropertyIds=3643d5ef-f183-4672-a411-cab4a6b9e54f";

export function AvailableUnits() {
  return (
    <section id="available-units" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-bimini-primary mb-4"
          >
            Available Units
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-bimini-secondary max-w-2xl mx-auto"
          >
            Browse current openings and find the residence that fits your lifestyle.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-gray-50"
        >
          <iframe
            src={LISTINGS_IFRAME_SRC}
            width="100%"
            height="600"
            id="listings-iframe"
            frameBorder={0}
            allow="camera https://app.rentengine.io; web-share https://www.rentengine.io;"
            title="Bimini Square Available Units"
            className="w-full min-h-[600px] border-0"
          />
        </motion.div>
      </div>

      <Script
        src="https://app.rentengine.io/embed/listings-widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
