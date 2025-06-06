
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "./CartItem";
import { ShoppingCart } from "lucide-react";

export function CartSheet() {
  const { items, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
        <SheetHeader>
          <SheetTitle>Your cart is empty</SheetTitle>
        </SheetHeader>
        <p className="text-muted-foreground mt-2">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
      </SheetHeader>
      
      <div className="flex-1 overflow-auto py-4">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
          <Button variant="outline" className="w-full" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
