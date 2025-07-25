import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import DetailedFeatures from "@/components/DetailedFeatures";
import AdditionalFeatures from "@/components/AdditionalFeatures";
import Testimonials from "@/components/Testimonials";
import Changelog from "@/components/Changelog";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Index component rendering...');
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureSection />
      <DetailedFeatures />
      <AdditionalFeatures />
      <Testimonials />
      <Changelog />
      <Pricing />
      <Docs />
      <Resources />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
