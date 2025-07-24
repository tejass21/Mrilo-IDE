import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've been blown away by Kiro's capabilities. The agentic experience is really transformative. From the multimodal inputs that understand context to the complete lifecycle control within the IDE, it feels like I'm working with a senior developer.",
      name: "Vivek Velso",
      title: "Cloud Engineering Lead",
      avatar: "VV"
    },
    {
      quote: "Most tools are great at generating code, but Kiro gives structure to the chaos before you write a single line.",
      name: "Farah Abdirahman",
      title: "Cloud & AI Engineer",
      avatar: "FA"
    },
    {
      quote: "In roughly two days, I built a secure file sharing application from scratch. By simply sharing my requirements with Kiro, I was able to create a fully secure application that incorporates encryption and various security coding practices—no additional prompts needed.",
      name: "Ihor Sasovets",
      title: "Lead Security Engineer",
      avatar: "IS"
    },
    {
      quote: "I often forget to add unit tests, or update documentation when pushing changes, but with Kiro I can create a hook and it will automatically run those tasks in the background for me, never having to think twice.",
      name: "Darya Petrashka",
      title: "Senior Data Scientist",
      avatar: "DP"
    },
    {
      quote: "As an open source developer, I typically don't build games, but last night I was able to create one using Kiro. I didn't have to think too hard about implementation since Kiro handled the logic and enabled me to write code quickly and accurately.",
      name: "Michael Walmsley",
      title: "Serverless Application Architect",
      avatar: "MW"
    },
    {
      quote: "Kiro lowers the barrier to entry, whether that be, you don't even know how to code, you're new to coding, or you're like me and you're just learning a new tech stack. If something doesn't make sense to you, or you feel like you are asking a silly question, ask Kiro anyway!",
      name: "Danielle Heberling",
      title: "Founding Infrastructure Engineer",
      avatar: "DH"
    },
    {
      quote: "Kiro comes equipped with all the best practices that I would put in my specs, and builds me the application I want, faster.",
      name: "Blake Romano",
      title: "Senior Software Engineer",
      avatar: "BR"
    },
    {
      quote: "Thanks to Kiro's spec-driven development, I was able to go from concept to working prototype in a single weekend.",
      name: "Dakota Lewallen",
      title: "Software Engineer",
      avatar: "DL"
    },
    {
      quote: "In just four lines into a spec, Kiro was able to write user stories like a product manager and capture so many details that I didn't even need to mention, saving me several days of work.",
      name: "Sathiesh Veera",
      title: "Principal Software Engineer",
      avatar: "SV"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by engineers worldwide
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-border p-6 hover:shadow-card transition-all duration-300">
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;