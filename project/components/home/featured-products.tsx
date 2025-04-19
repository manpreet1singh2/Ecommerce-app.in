"use client";

import { ProductCard } from "@/components/products/product-card";
import { mockProducts } from "@/lib/mock-data";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedProducts() {
  // Filter to featured products (first 8 products)
  const featuredProducts = mockProducts.slice(0, 8);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {featuredProducts.map((product) => (
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