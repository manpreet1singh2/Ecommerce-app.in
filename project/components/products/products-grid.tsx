"use client";

import { ProductCard } from "@/components/products/product-card";
import { mockProducts } from "@/lib/mock-data";
import { useSearchParams } from "next/navigation";

export function ProductsGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  
  // Filter products by category if a category filter is applied
  let filteredProducts = category 
    ? mockProducts.filter(p => p.categoryId === category) 
    : mockProducts;
  
  // Sort products if a sort option is selected
  if (sort) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      switch (sort) {
        case "price-low-high":
          return a.price - b.price;
        case "price-high-low":
          return b.price - a.price;
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}