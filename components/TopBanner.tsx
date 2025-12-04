"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-bimini-gold text-bimini-primary py-2.5 px-4 text-center relative z-50">
      <p className="text-xs sm:text-sm font-semibold tracking-wide pr-8">
        Special pricing for Lee Health Employees: <span className="font-bold">20% off published rates</span>
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-black/5 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}


