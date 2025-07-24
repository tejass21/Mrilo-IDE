import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const blogPosts = [
    {
      title: "The Future of AI-Driven Development",
      description: "How spec-driven development is revolutionizing the way we build software",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Engineering"
    },
    {
      title: "Building Better Prompts for Code Generation",
      description: "Best practices for writing effective prompts that generate production-ready code",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Tutorial"
    },
    {
      title: "MCP Integration: Connecting Your World",
      description: "Deep dive into Model Context Protocol and how it enhances AI development",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      category: "Technical"
    }
  ];

  const tutorials = [
    {
      title: "Building a Full-Stack App with Mrilo",
      description: "Complete walkthrough from spec to deployment",
      duration: "45 minutes",
      level: "Intermediate"
    },
    {
      title: "Setting Up Agent Automation",
      description: "Configure intelligent agents for your workflow",
      duration: "20 minutes", 
      level: "Beginner"
    },
    {
      title: "Advanced Spec Writing Techniques",
      description: "Master the art of creating detailed specifications",
      duration: "30 minutes",
      level: "Advanced"
    }
  ];

  const tools = [
    {
      name: "Mrilo CLI",
      description: "Command-line interface for project management",
      link: "Download"
    },
    {
      name: "VS Code Extension", 
      description: "Integrate Mrilo with your favorite editor",
      link: "Install"
    },
    {
      name: "Spec Templates",
      description: "Pre-built templates for common project types",
      link: "Browse"
    },
    {
      name: "API SDK",
      description: "Software development kit for custom integrations",
      link: "Download"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn, explore, and master AI-driven development with Mrilo
            </p>
          </div>

          {/* Blog Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Latest from the Blog
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="bg-card/50 border-border p-6 hover:shadow-card transition-all duration-300 cursor-pointer">
                  <div className="mb-4">
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-3">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {post.description}
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tutorials Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Video Tutorials
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="bg-card/50 border-border p-6">
                  <div className="aspect-video bg-gradient-primary/20 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M13 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {tutorial.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {tutorial.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {tutorial.duration}
                    </span>
                    <span className="bg-secondary/50 text-foreground px-2 py-1 rounded text-xs">
                      {tutorial.level}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Developer Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-card/50 border-border p-6 text-center">
                  <h4 className="font-bold text-foreground mb-3">
                    {tool.name}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {tool.description}
                  </p>
                  <Button variant="outline" size="sm" className="border-border hover:bg-secondary/50">
                    {tool.link}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <Card className="bg-gradient-primary/10 border-primary/20 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the Mrilo Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect with developers, share experiences, and get help from the community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-border hover:bg-secondary/50">
                Discord Community
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary/50">
                GitHub Discussions
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Newsletter
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;