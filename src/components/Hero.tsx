import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ancient Greek inspired fashion" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Timeless
            <br />
            <span className="text-silver-dark">Elegance</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Discover the beauty of Ancient Greece through our carefully curated collection 
            of contemporary clothing inspired by classical design.
          </p>
          
          <div className="flex space-x-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;