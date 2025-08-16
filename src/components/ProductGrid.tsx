import ProductCard from "./ProductCard";
import SearchFilters from "./SearchFilters";
import { useState, useMemo } from "react";
import products from "@/data/products.json";
import { getProductImage } from "@/lib/productAssets";

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000] as [number, number],
    sizes: [],
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      const matchesPrice = product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1];
      const matchesSize = filters.sizes.length === 0 || 
        product.sizes.some(size => filters.sizes.includes(size));

      return matchesSearch && matchesCategory && matchesPrice && matchesSize;
    });
  }, [searchQuery, filters, products]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each piece is carefully designed to capture the essence of ancient Greek beauty 
            while embracing modern comfort and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={getProductImage(product.imageKey as any)}
                  title={product.title}
                  price={`$${product.price}`}
                  originalPrice={product.originalPrice ? `$${product.originalPrice}` : undefined}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products match your current filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;