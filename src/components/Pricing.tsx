import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Mrilo",
      features: [
        "Basic spec-driven development",
        "Up to 3 projects",
        "Community support",
        "Basic AI agent hooks"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For serious developers and small teams",
      features: [
        "Unlimited projects",
        "Advanced AI agent hooks",
        "MCP integrations",
        "Priority support",
        "Advanced collaboration tools",
        "Custom agent steering"
      ],
      cta: "Join Waitlist",
      popular: true
    },
    {
      name: "Team",
      price: "$99",
      period: "per month",
      description: "For teams building at scale",
      features: [
        "Everything in Pro",
        "Team collaboration features",
        "Advanced security controls",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card/50 border-border p-8 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:opacity-90 text-primary-foreground' 
                      : 'variant-outline border-border hover:bg-secondary/50'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <a href="#" className="text-primary hover:text-primary/80 underline">
              View detailed feature comparison →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;