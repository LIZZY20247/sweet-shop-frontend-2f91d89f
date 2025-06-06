
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartSheet } from "@/components/cart/CartSheet";

export function Header() {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <Button variant="ghost" className="justify-start">Home</Button>
                <Button variant="ghost" className="justify-start">Products</Button>
                <Button variant="ghost" className="justify-start">Categories</Button>
                <Button variant="ghost" className="justify-start">About</Button>
                <Button variant="ghost" className="justify-start">Contact</Button>
              </nav>
            </SheetContent>
          </Sheet>
          
          <h1 className="text-xl font-bold text-primary">EliteStore</h1>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Categories</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </nav>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <CartSheet />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
