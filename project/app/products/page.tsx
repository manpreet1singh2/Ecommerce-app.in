import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductsGrid } from "@/components/products/products-grid";
import { ProductFilter } from "@/components/products/product-filter";

export default function ProductsPage() {
  return (
    <div className="container px-4 py-10 md:px-6">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground">
            Browse our collection of high-quality products
          </p>
        </div>
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-[240px] flex-shrink-0">
            <ProductFilter />
          </aside>
          
          <div className="flex-1">
            <ProductsGrid />
            
            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="mx-auto">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}