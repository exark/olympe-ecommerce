import ProductCard from "./ProductCard";
import productTunic from "@/assets/product-tunic.jpg";
import productToga from "@/assets/product-toga.jpg";
import productSandals from "@/assets/product-sandals.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: productTunic,
      title: "Classical Tunic Dress",
      price: "$189",
      originalPrice: "$245"
    },
    {
      id: 2,
      image: productToga,
      title: "Elegant Toga Wrap",
      price: "$215",
    },
    {
      id: 3,
      image: productSandals,
      title: "Grecian Sandals",
      price: "$95",
      originalPrice: "$120"
    },
    {
      id: 4,
      image: productTunic,
      title: "Flowing Chiton",
      price: "$165",
    },
    {
      id: 5,
      image: productToga,
      title: "Draped Evening Dress",
      price: "$295",
    },
    {
      id: 6,
      image: productSandals,
      title: "Strappy Goddess Sandals",
      price: "$125",
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
      </div>
    </section>
  );
};

export default ProductGrid;