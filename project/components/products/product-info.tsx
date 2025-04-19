"use client";

import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";
import { useCurrency } from "@/lib/currency-context";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { formatPrice } = useCurrency();
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2 items-center">
          {product.isNew && <Badge>New Arrival</Badge>}
          {product.isBestseller && <Badge variant="secondary">Bestseller</Badge>}
          {product.region === "india" && <Badge variant="outline">Ships from India</Badge>}
        </div>
        
        <h1 className="text-3xl font-bold">{product.name}</h1>
        
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            (23 reviews)
          </span>
        </div>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">
          {formatPrice(product.price)}
        </span>
        
        {product.discount > 0 && (
          <>
            <span className="text-lg text-muted-foreground line-through">
              {formatPrice(product.price * (1 + product.discount / 100))}
            </span>
            <Badge variant="destructive" className="ml-2">
              {product.discount}% OFF
            </Badge>
          </>
        )}
      </div>
      
      <p className="text-muted-foreground">
        {product.description}
      </p>
      
      {product.variants && (
        <div className="space-y-2">
          <span className="text-sm font-medium">Colors:</span>
          <div className="flex flex-wrap gap-2">
            {product.variants.colors?.map((color) => (
              <div
                key={color.value}
                className="h-8 w-8 rounded-full border cursor-pointer"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}
      
      {product.variants && product.variants.sizes && (
        <div className="space-y-2">
          <span className="text-sm font-medium">Sizes:</span>
          <div className="flex flex-wrap gap-2">
            {product.variants.sizes.map((size) => (
              <Badge
                key={size}
                variant="outline"
                className="cursor-pointer hover:bg-secondary"
              >
                {size}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}