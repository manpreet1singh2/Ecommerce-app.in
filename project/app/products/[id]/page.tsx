import { Button } from "@/components/ui/button";
import { 
  Check, 
  ArrowLeft, 
  Star, 
  TruckIcon, 
  RefreshCcw,
  ShoppingCart,
  Heart 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductInfo } from "@/components/products/product-info";
import { ProductAddToCart } from "@/components/products/product-add-to-cart";
import { mockProducts } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import RelatedProducts from "@/components/products/related-products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, this would fetch from an API
  const product = mockProducts.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container px-4 py-10 md:px-6">
      <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <ProductGallery product={product} />
        
        <div className="flex flex-col">
          <ProductInfo product={product} />
          <Separator className="my-6" />
          <ProductAddToCart product={product} />
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <TruckIcon className="h-4 w-4 text-muted-foreground" />
              <span>
                <span className="font-medium">Fast shipping:</span>{" "}
                {product.region === "india" ? "3-5 days in India" : "7-14 days international"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <RefreshCcw className="h-4 w-4 text-muted-foreground" />
              <span>
                <span className="font-medium">Easy returns:</span>{" "}
                30-day return policy
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-muted-foreground" />
              <span>
                <span className="font-medium">In stock:</span>{" "}
                Ready to ship
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <p className="mt-4">
                Our products are sourced directly from manufacturers in China, ensuring 
                both quality and competitive pricing. Every item undergoes rigorous 
                quality inspection before shipping to our customers in India and the USA.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-sm mb-2">Product Details</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Material</span>
                    <span>{product.details?.material || "Premium"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Color</span>
                    <span>{product.details?.color || "Various"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Weight</span>
                    <span>{product.details?.weight || "0.5 kg"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span>{product.details?.dimensions || "10 x 5 x 2 cm"}</span>
                  </li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-sm mb-2">Shipping Information</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Ships From</span>
                    <span>India</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Delivery (India)</span>
                    <span>3-5 Business Days</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Delivery (USA)</span>
                    <span>7-14 Business Days</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Tracking</span>
                    <span>Provided for all orders</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="font-medium">4.0</span>
                <span className="text-muted-foreground">({product.reviews?.length || 23} reviews)</span>
              </div>
              <Button variant="outline" size="sm">Write a Review</Button>
            </div>
            
            <div className="space-y-6">
              {(product.reviews || Array(3).fill(0)).map((_, i) => (
                <div key={i} className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="font-medium">Customer Name</p>
                      <div className="flex items-center mt-1">
                        {Array(5).fill(0).map((_, j) => (
                          <Star 
                            key={j} 
                            className={`h-4 w-4 ${j < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">2 months ago</span>
                  </div>
                  <p className="text-sm mt-2">
                    Great product! The quality is excellent and shipping was faster than expected. 
                    Would definitely recommend to others.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <RelatedProducts categoryId={product.categoryId} currentProductId={product.id} />
      </div>
    </div>
  );
}