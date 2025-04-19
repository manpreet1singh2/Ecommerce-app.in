"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useCurrency } from "@/lib/currency-context";
import { useCart } from "@/lib/cart-context";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { currency, formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const images = product.images ?? [];
  const mainImage = images[0] ?? '';
  const hoverImage = images.length > 1 ? images[1] : mainImage;
  
  return (
    <Card className="overflow-hidden transition-all duration-200 group h-full flex flex-col">
      <Link href={`/products/${product.id}`} className="block">
        <div 
          className="relative h-[240px] overflow-hidden bg-secondary/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${isHovered ? hoverImage : mainImage})` }}
          />
          
          {product.isNew && (
            <Badge className="absolute top-3 left-3">New</Badge>
          )}
          
          {product.discount > 0 && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              {product.discount}% OFF
            </Badge>
          )}
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add wishlist functionality here
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>
      
      <CardContent className="flex-grow pt-4">
        <div className="space-y-1">
          <Link href={`/products/${product.id}`} className="block">
            <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-muted-foreground line-clamp-1">
            {product.categoryName}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="flex items-center gap-2">
          <p className="font-semibold">
            {formatPrice(product.price)}
          </p>
          {product.discount > 0 && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(product.price * (1 + product.discount / 100))}
            </p>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}