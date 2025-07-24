import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kiro-ide-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Introducing Kiro Badge */}
          <div className="mb-8 text-center">
            <a 
              href="#intro" 
              className="inline-flex items-center space-x-2 bg-secondary/50 border border-border rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Introducing Kiro</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              The AI IDE for<br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                prototype to production
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kiro helps you do your best work by bringing structure to AI coding with spec-driven development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-8 py-4 text-lg shadow-glow"
            >
              Join Waitlist
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary/50 text-foreground px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-primary p-1 rounded-3xl shadow-card">
              <div className="bg-card rounded-3xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Kiro IDE Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;