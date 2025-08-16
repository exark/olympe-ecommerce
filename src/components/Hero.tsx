import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Responsive tuning
  const isMobile = viewportWidth < 640; // < sm
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024; // sm–lg
  // Mobile: no parallax, focus top-right statue, fit by height for a vertical crop
  const parallaxFactor = isMobile ? 0.5 : isTablet ? 0.45 : 0.7;
  const backgroundSize = isMobile ? "auto 110%" : isTablet ? "105% auto" : "100% auto";
  const backgroundPosition = isMobile ? "right 18% center" : isTablet ? "center 20%" : "center 15%";

  return (
    <section className="relative min-h-[90vh] md:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * parallaxFactor}px)`,
            backgroundPosition,
            backgroundSize,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Timeless
            <br />
            <span className="text-silver-dark">Elegance</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Discover the beauty of Ancient Greece through our carefully curated collection 
            of contemporary clothing inspired by classical design.
          </p>
          
          <div className="flex space-x-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 text-base md:text-lg font-medium"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 md:px-8 py-3 text-base md:text-lg font-medium"
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