import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="container px-4 py-16 md:px-6 flex flex-col items-center justify-center">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center">
          <ShoppingCart className="h-8 w-8 text-muted-foreground" />
        </div>
        
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        
        <p className="text-muted-foreground">
          Looks like you haven't added any products to your cart yet.
          Browse our products and find something you like.
        </p>
        
        <Link href="/products">
          <Button size="lg">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}