
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">Trusted by 10,000+ customers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Premium Quality
                <span className="text-primary block">Products</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-md">
                Discover our curated collection of premium products designed to elevate your lifestyle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Collections
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-muted-foreground">Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Premium Products"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-background rounded-lg shadow-lg p-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">On orders over $50</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">24h</span>
                </div>
                <div>
                  <div className="font-semibold">Fast Delivery</div>
                  <div className="text-sm text-muted-foreground">Quick & reliable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
