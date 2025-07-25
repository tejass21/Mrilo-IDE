import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  console.log('Navigation component rendering...');
  const { user, signOut } = useAuth();
  console.log('Navigation auth state:', { user: !!user });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">Mrilo</span>
            <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
              PREVIEW
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#changelog" className="text-muted-foreground hover:text-foreground transition-colors">
              CHANGELOG
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              PRICING
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              DOCS
            </a>
            <div className="relative group">
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                RESOURCES
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Auth Section */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-medium">
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                onClick={() => window.location.href = '/auth'}
                className="text-muted-foreground hover:text-foreground"
              >
                Sign In
              </Button>
              <Button
                onClick={() => window.location.href = '/auth'}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium px-6"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;