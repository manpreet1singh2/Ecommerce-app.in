"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useCurrency } from "@/lib/currency-context";
import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import { useState } from "react";
import EmptyCart from "@/components/cart/empty-cart";

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const { currency } = useCurrency();
  const [couponCode, setCouponCode] = useState("");
  
  if (cart.items.length === 0) {
    return <EmptyCart />;
  }
  
  return (
    <div className="container px-4 py-10 md:px-6">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-muted-foreground">
          Review your items and proceed to checkout
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">
                  Cart Items ({cart.items.length})
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground h-auto p-0"
                  onClick={clearCart}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-6">
                {cart.items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link href="/products">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
            
            <Link href="/checkout">
              <Button>
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}