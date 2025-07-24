import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import DetailedFeatures from "@/components/DetailedFeatures";
import AdditionalFeatures from "@/components/AdditionalFeatures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureSection />
      <DetailedFeatures />
      <AdditionalFeatures />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
