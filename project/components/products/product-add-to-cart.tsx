"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Heart,
  Minus,
  Plus,
} from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

interface ProductAddToCartProps {
  product: Product;
}

export function ProductAddToCart({ product }: ProductAddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };
  
  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-none"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-none"
            onClick={incrementQuantity}
            disabled={quantity >= 10}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <span className="text-sm text-muted-foreground ml-4">
          {product.stock} available
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}