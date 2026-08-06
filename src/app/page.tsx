import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ImpactStrip } from "@/components/ImpactStrip";
import { CurriculumSection } from "@/components/CurriculumSection";
import { VibeSection } from "@/components/VibeSection";
import { ChancenSection } from "@/components/ChancenSection";
import { CareerSection } from "@/components/CareerSection";
import { MomentsSection } from "@/components/MomentsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AdmissionsSection } from "@/components/AdmissionsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactStrip />
      <CurriculumSection />
      <VibeSection />
      <ChancenSection />
      <CareerSection />
      <MomentsSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <Footer />
    </main>
  );
}
