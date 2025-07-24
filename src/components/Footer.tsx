const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold text-foreground">KIRO</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The AI IDE for prototype to production. Bringing structure to AI coding with spec-driven development.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#changelog" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
                <li><a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Kiro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;