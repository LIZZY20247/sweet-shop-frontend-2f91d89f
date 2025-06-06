
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductGrid } from "@/components/products/ProductGrid";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
          <CategorySection />
          
          {/* All Products Section */}
          <section className="py-16 md:py-24">
            <div className="container px-6">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">All Products</h2>
                <p className="text-xl text-muted-foreground">
                  Browse our complete collection of premium products
                </p>
              </div>
              <ProductGrid />
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-secondary/20 py-12">
          <div className="container px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">EliteStore</h3>
                <p className="text-sm text-muted-foreground">
                  Your premium destination for quality products and exceptional service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Shipping Info</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Electronics</li>
                  <li>Fashion</li>
                  <li>Accessories</li>
                  <li>New Arrivals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Customer Service</li>
                  <li>Returns</li>
                  <li>Track Order</li>
                  <li>Size Guide</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 EliteStore. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
