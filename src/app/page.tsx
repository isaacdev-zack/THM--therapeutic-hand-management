import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FacilityMaskSection } from "@/components/FacilityMaskSection";
import { ImpactStrip } from "@/components/ImpactStrip";
import { CurriculumSection } from "@/components/CurriculumSection";
import { VibeSection } from "@/components/VibeSection";
import { ChancenSection } from "@/components/ChancenSection";
import { CareerSection } from "@/components/CareerSection";
import { MomentsSection } from "@/components/MomentsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AdmissionsSection } from "@/components/AdmissionsSection";
import { Footer } from "@/components/Footer";
import { CurveDivider, AngleDivider } from "@/components/SectionDividers";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CurveDivider fillColor="#FCF8E6" className="-mt-12 z-20" />
      <AboutSection />
      <FacilityMaskSection />
      <ImpactStrip />
      <CurriculumSection />
      <CurveDivider fillColor="#0F172A" className="-mt-8 z-20" />
      <VibeSection />
      <ChancenSection />
      <AngleDivider fillColor="#FCF8E6" className="z-20" />
      <CareerSection />
      <MomentsSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <Footer />
    </main>
  );
}
