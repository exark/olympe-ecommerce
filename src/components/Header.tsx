import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-serif font-bold text-foreground">
            OLYMPUS
          </div>
          <div className="text-sm font-light text-muted-foreground tracking-wider">
            ATTIRE
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-silver-dark transition-colors font-medium">
            Collections
          </a>
          <a href="#" className="text-foreground hover:text-silver-dark transition-colors font-medium">
            Dresses
          </a>
          <a href="#" className="text-foreground hover:text-silver-dark transition-colors font-medium">
            Accessories
          </a>
          <a href="#" className="text-foreground hover:text-silver-dark transition-colors font-medium">
            About
          </a>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/command">
            <Button variant="ghost" size="icon" className="hover:bg-marble">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="hover:bg-marble">
            <User className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="hover:bg-marble relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;