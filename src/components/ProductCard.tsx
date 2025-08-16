import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
}

const ProductCard = ({ id, image, title, price, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-border hover:shadow-elevated transition-all duration-300 overflow-hidden bg-card">
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square overflow-hidden bg-marble">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <div className="p-6 space-y-4">
        <div>
          <Link to={`/product/${id}`} className="hover:no-underline">
            <h3 className="font-medium text-foreground text-lg group-hover:text-silver-dark transition-colors">
              {title}
            </h3>
          </Link>
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
          onClick={(e) => {
            // prevent navigating to details when adding to cart
            e.preventDefault();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;