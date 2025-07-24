import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Docs = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Set up Mrilo and create your first spec-driven project",
      items: [
        "Installation & Setup",
        "Your First Project",
        "Understanding Specs",
        "Basic AI Agent Hooks"
      ]
    },
    {
      title: "Core Concepts",
      description: "Deep dive into Mrilo's fundamental features",
      items: [
        "Spec-Driven Development",
        "AI Agent Management", 
        "Context Management",
        "Collaboration Workflows"
      ]
    },
    {
      title: "Advanced Features",
      description: "Leverage Mrilo's power features for complex projects",
      items: [
        "MCP Integration",
        "Custom Agent Hooks",
        "Advanced Steering",
        "Team Collaboration"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      items: [
        "REST API",
        "Webhooks",
        "SDK Documentation",
        "CLI Commands"
      ]
    }
  ];

  const quickLinks = [
    { title: "Quick Start Guide", time: "5 min read" },
    { title: "Spec-Driven Development Tutorial", time: "15 min read" },
    { title: "Setting Up Agent Hooks", time: "10 min read" },
    { title: "MCP Integration Guide", time: "20 min read" }
  ];

  return (
    <section id="docs" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Documentation
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to master Mrilo's AI-powered development workflow
            </p>
          </div>

          {/* Quick Start */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Popular Guides
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="bg-card/50 border-border p-6 hover:shadow-card transition-all duration-300 cursor-pointer">
                  <h4 className="font-semibold text-foreground mb-2">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {link.time}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <Card key={index} className="bg-card/50 border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="text-foreground hover:text-primary transition-colors flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-primary/10 border-primary/20 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community or reach out to our support team for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-border hover:bg-secondary/50">
                Join Community
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Contact Support
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Docs;