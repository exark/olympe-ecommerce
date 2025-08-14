import { useState } from "react";
import { Search, User, ShoppingBag, Heart, Settings, LogOut } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Command = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCommand = (command: string) => {
    setOpen(false);
    switch (command) {
      case "home":
        navigate("/");
        break;
      case "cart":
        navigate("/cart");
        break;
      case "product-1":
        navigate("/product/1");
        break;
      case "search":
        // In a real app, this would open search
        console.log("Opening search...");
        break;
      default:
        console.log(`Executing command: ${command}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Command Center</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Navigate quickly through your Olympus Attire experience
          </p>
          
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            variant="outline"
            className="w-full max-w-md mx-auto flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-center">
              <Search className="h-5 w-5 mr-3" />
              <span className="text-muted-foreground">Search commands...</span>
            </div>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              ⌘K
            </kbd>
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <User className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Account</h3>
              <p className="text-sm text-muted-foreground">
                Manage your profile and preferences
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <ShoppingBag className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Orders</h3>
              <p className="text-sm text-muted-foreground">
                Track your orders and purchase history
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Wishlist</h3>
              <p className="text-sm text-muted-foreground">
                Save your favorite items for later
              </p>
            </div>
          </div>
        </div>
      </main>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => handleCommand("home")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Go to Home</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("cart")}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span>View Cart</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Products">
            <CommandItem onSelect={() => handleCommand("product-1")}>
              <span>Classical Tunic Dress</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("search")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Search Products</span>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Account">
            <CommandItem onSelect={() => handleCommand("profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
            <CommandItem onSelect={() => handleCommand("logout")}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <Footer />
    </div>
  );
};

export default Command;