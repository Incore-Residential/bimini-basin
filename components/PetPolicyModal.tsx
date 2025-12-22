"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface PetPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PetPolicyModal({ isOpen, onClose }: PetPolicyModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              <div className="relative p-8 md:p-10">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-bimini-primary"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <div className="text-center">
                  <h2 className="text-3xl font-light text-bimini-primary mb-6">
                    Pet Policy
                  </h2>
                  
                  <div className="space-y-6 text-bimini-secondary leading-relaxed">
                    <p className="text-lg">
                      Bimini Square is a <span className="font-semibold text-bimini-primary">pet-friendly community!</span>
                    </p>
                    
                    <div className="bg-bimini-primary/5 p-6 rounded-xl border border-bimini-primary/10">
                      <p className="mb-2">
                        We allow pets with a <span className="font-semibold text-bimini-primary">$300 per pet fee</span>
                      </p>
                      <p>
                        and additional <span className="font-semibold text-bimini-primary">$25/month pet rent</span>.
                      </p>
                    </div>

                    <p className="text-sm text-gray-500 italic">
                      Contact us to learn more about breed restrictions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Gold accent line at bottom */}
              <div className="h-2 w-full bg-gradient-to-r from-bimini-gold to-bimini-peach" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


