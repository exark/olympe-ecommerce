import ProductCard from "./ProductCard";
import SearchFilters from "./SearchFilters";
import productTunic from "@/assets/product-tunic.jpg";
import productToga from "@/assets/product-toga.jpg";
import productSandals from "@/assets/product-sandals.jpg";
import { useState, useMemo } from "react";

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000] as [number, number],
    sizes: [],
  });

  const products = [
    {
      id: 1,
      image: productTunic,
      title: "Classical Tunic Dress",
      price: "$189",
      originalPrice: "$245",
      category: "Dresses",
      sizes: ["XS", "S", "M", "L", "XL"],
      numericPrice: 189
    },
    {
      id: 2,
      image: productToga,
      title: "Elegant Toga Wrap",
      price: "$215",
      category: "Togas",
      sizes: ["S", "M", "L", "XL"],
      numericPrice: 215
    },
    {
      id: 3,
      image: productSandals,
      title: "Grecian Sandals",
      price: "$95",
      originalPrice: "$120",
      category: "Sandals",
      sizes: ["36", "37", "38", "39", "40", "41", "42"],
      numericPrice: 95
    },
    {
      id: 4,
      image: productTunic,
      title: "Flowing Chiton",
      price: "$165",
      category: "Dresses",
      sizes: ["XS", "S", "M", "L"],
      numericPrice: 165
    },
    {
      id: 5,
      image: productToga,
      title: "Draped Evening Dress",
      price: "$295",
      category: "Dresses",
      sizes: ["S", "M", "L", "XL", "XXL"],
      numericPrice: 295
    },
    {
      id: 6,
      image: productSandals,
      title: "Strappy Goddess Sandals",
      price: "$125",
      category: "Sandals",
      sizes: ["36", "37", "38", "39", "40", "41"],
      numericPrice: 125
    }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      const matchesPrice = product.numericPrice >= filters.priceRange[0] && 
        product.numericPrice <= filters.priceRange[1];
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
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
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