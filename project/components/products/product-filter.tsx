"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { id: "eyewear", name: "Eyewear" },
  { id: "accessories", name: "Accessories" },
  { id: "electronics", name: "Electronics" },
  { id: "home-decor", name: "Home Decor" },
  { id: "fashion", name: "Fashion" },
];

export function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  // Get current filter values from URL
  const currentCategory = searchParams.get("category");
  const currentSort = searchParams.get("sort");
  
  // Update filters
  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    
    router.push(`/products?${params.toString()}`);
  };
  
  // Apply price filter
  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    router.push(`/products?${params.toString()}`);
  };
  
  // Clear all filters
  const clearFilters = () => {
    router.push("/products");
  };
  
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Filters</h3>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
        
        <Select
          value={currentSort || ""}
          onValueChange={(value) => updateFilters("sort", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="popularity">Popularity</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`}
                    checked={currentCategory === category.id}
                    onCheckedChange={(checked) => {
                      updateFilters("category", checked ? category.id : null);
                    }}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Button size="sm" onClick={applyPriceFilter}>
                Apply
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <label
                  htmlFor="in-stock"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="out-of-stock" />
                <label
                  htmlFor="out-of-stock"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Out of Stock
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping To</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="shipping-india" defaultChecked />
                <label
                  htmlFor="shipping-india"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  India
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="shipping-usa" defaultChecked />
                <label
                  htmlFor="shipping-usa"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  USA
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}