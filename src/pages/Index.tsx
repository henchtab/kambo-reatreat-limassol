import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import SegmentationSection from "@/components/SegmentationSection";
import WhatItIsSection from "@/components/WhatItIsSection";
import WhySection from "@/components/WhySection";
import ResultsSection from "@/components/ResultsSection";
import WhoSection from "@/components/WhoSection";
import ContactSection from "@/components/ContactSection";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <div className="section-divider" />
        <OfferSection />
        <div className="section-divider" />
        <SegmentationSection />
        <div className="section-divider" />
        <WhatItIsSection />
        <div className="section-divider" />
        <WhySection />
        <div className="section-divider" />
        <ResultsSection />
        <div className="section-divider" />
        <WhoSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
    </LanguageProvider>
  );
};

export default Index;
