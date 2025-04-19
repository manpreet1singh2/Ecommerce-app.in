"use client";

import { Button } from "@/components/ui/button";
import { 
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { useCurrency } from "@/lib/currency-context";
import Link from "next/link";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { formatPrice } = useCurrency();
  
  const handleIncrementQuantity = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };
  
  const handleDecrementQuantity = () => {
    updateQuantity(item.product.id, Math.max(1, item.quantity - 1));
  };
  
  const handleRemove = () => {
    removeFromCart(item.product.id);
  };
  
  const totalPrice = item.product.price * item.quantity;
  
  return (
    <div className="flex gap-4">
      <Link href={`/products/${item.product.id}`} className="flex-shrink-0">
        <div 
          className="h-24 w-24 rounded-md border bg-cover bg-center"
          style={{ backgroundImage: `url(${item.product.images?.[0]})` }}
        />
      </Link>
      
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between mb-1">
          <Link href={`/products/${item.product.id}`}>
            <h4 className="font-medium hover:text-primary transition-colors">
              {item.product.name}
            </h4>
          </Link>
          <p className="font-medium">
            {formatPrice(totalPrice)}
          </p>
        </div>
        
        {item.product.variants && (
          <p className="text-sm text-muted-foreground mb-2">
            Color: {item.variant?.color || "Default"} 
            {item.variant?.size && `, Size: ${item.variant.size}`}
          </p>
        )}
        
        <div className="flex justify-between mt-auto items-center">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={handleDecrementQuantity}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={handleIncrementQuantity}
              disabled={item.quantity >= 10}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground h-8 px-2"
            onClick={handleRemove}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}