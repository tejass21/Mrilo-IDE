import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Changelog = () => {
  const updates = [
    {
      version: "v1.2.0",
      date: "December 2024",
      type: "Major Release",
      features: [
        "Enhanced AI agent hooks with custom triggers",
        "Improved spec-driven development workflow",
        "Real-time collaboration on specifications",
        "Advanced code diff visualization"
      ]
    },
    {
      version: "v1.1.5",
      date: "November 2024", 
      type: "Update",
      features: [
        "MCP integration improvements",
        "Better context management for large codebases",
        "Bug fixes and performance optimizations"
      ]
    },
    {
      version: "v1.1.0",
      date: "October 2024",
      type: "Feature Release",
      features: [
        "Native MCP (Model Context Protocol) support",
        "Multi-modal chat interface",
        "Enhanced task automation",
        "Improved agent steering capabilities"
      ]
    }
  ];

  return (
    <section id="changelog" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What's New in Mrilo
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest features and improvements
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <Card key={index} className="bg-card/50 border-border p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {update.version}
                    </h3>
                    <p className="text-muted-foreground">{update.date}</p>
                  </div>
                  <Badge 
                    variant={update.type === "Major Release" ? "default" : "secondary"}
                    className="mt-2 md:mt-0"
                  >
                    {update.type}
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  {update.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Changelog;