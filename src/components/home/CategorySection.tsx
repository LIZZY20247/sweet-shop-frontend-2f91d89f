
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categoryData = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop",
    description: "Latest gadgets and tech",
    productCount: 150
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    description: "Trendy clothing and style",
    productCount: 200
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    description: "Perfect finishing touches",
    productCount: 80
  }
];

export function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
          <p className="text-xl text-muted-foreground">
            Explore our diverse range of premium products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryData.map((category) => (
            <Card key={category.name} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-2">{category.description}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.productCount}+ products
                </p>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Explore {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
