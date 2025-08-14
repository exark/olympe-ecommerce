const Footer = () => {
  return (
    <footer className="bg-marble border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-serif font-bold text-foreground">
                OLYMPUS
              </div>
              <div className="text-sm font-light text-muted-foreground tracking-wider">
                ATTIRE
              </div>
            </div>
            <p className="text-muted-foreground">
              Timeless elegance inspired by the beauty of Ancient Greece.
            </p>
          </div>
          
          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dresses</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tunics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accessories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sandals</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Olympus Attire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;