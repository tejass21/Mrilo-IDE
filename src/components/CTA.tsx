import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get started for free
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up">
            Join thousands of developers building better software with AI-powered spec-driven development.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-12 py-6 text-xl shadow-glow animate-pulse-glow hover:animate-bounce-gentle transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;