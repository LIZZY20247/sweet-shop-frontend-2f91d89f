
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium products that our customers love most
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
