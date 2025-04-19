"use client";

import { mockProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/products/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedProductsProps {
  categoryId: string;
  currentProductId: string;
}

export default function RelatedProducts({ categoryId, currentProductId }: RelatedProductsProps) {
  // Find products from the same category, excluding the current product
  const relatedProducts = mockProducts
    .filter(p => p.categoryId === categoryId && p.id !== currentProductId)
    .slice(0, 6);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {relatedProducts.map((product) => (
          <CarouselItem key={product.id} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative mr-2 static" />
        <CarouselNext className="relative ml-2 static" />
      </div>
    </Carousel>
  );
}