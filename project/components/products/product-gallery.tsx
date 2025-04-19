"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Use product.images or fallback to a default array if not available
  const images = product.images || [
    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  ];
  
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      <div className="order-2 md:order-1 md:w-[100px] flex md:flex-col gap-3 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "border rounded-md overflow-hidden cursor-pointer transition-all",
              selectedImage === index 
                ? "border-primary ring-1 ring-primary" 
                : "border-border hover:border-input"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <div
              className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </div>
      
      <div className="order-1 md:order-2 flex-1 rounded-lg overflow-hidden border">
        <div
          className="h-[300px] md:h-[500px] w-full bg-cover bg-center transition-all duration-200"
          style={{ backgroundImage: `url(${images[selectedImage]})` }}
        />
      </div>
    </div>
  );
}