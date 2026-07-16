import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LeeHealthBenefits } from "@/components/LeeHealthBenefits";
import { Amenities } from "@/components/Amenities";
import { FloorPlans } from "@/components/FloorPlans";
import { AvailableUnits } from "@/components/AvailableUnits";
import { ThreeDTours } from "@/components/ThreeDTours";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Hero />
      <LeeHealthBenefits />
      <Amenities />
      <FloorPlans />
      <AvailableUnits />
      <ThreeDTours />
      <Contact />
      <Footer />
    </main>
  );
}
