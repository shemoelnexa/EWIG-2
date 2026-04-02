import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import IntroSection from "@/components/home/IntroSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertyShowcase from "@/components/home/PropertyShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioGrid from "@/components/home/PortfolioGrid";
import StatsSection from "@/components/home/StatsSection";
import LocationsSection from "@/components/home/LocationsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <IntroSection />
      <FeaturedProperties />
      <PropertyShowcase />
      <ServicesSection />
      <PortfolioGrid />
      <StatsSection />
      <LocationsSection />
      <CTASection />
    </>
  );
}
