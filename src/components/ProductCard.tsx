import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
}

const ProductCard = ({ image, title, price, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-border hover:shadow-elevated transition-all duration-300 overflow-hidden bg-card">
      <div className="aspect-square overflow-hidden bg-marble">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-medium text-foreground text-lg group-hover:text-silver-dark transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-medium text-foreground">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;