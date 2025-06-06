
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center space-x-3 py-2">
      <img
        src={product.image}
        alt={product.name}
        className="h-16 w-16 rounded-md object-cover"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium truncate">{product.name}</h4>
        <p className="text-sm text-muted-foreground">${product.price}</p>
        
        <div className="flex items-center space-x-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="w-8 text-center text-sm">{quantity}</span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col items-end space-y-2">
        <span className="text-sm font-medium">
          ${(product.price * quantity).toFixed(2)}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive hover:text-destructive"
          onClick={() => removeFromCart(product.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
