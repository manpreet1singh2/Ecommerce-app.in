"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useCurrency } from "@/lib/currency-context";
import { useState } from "react";

export default function CartSummary() {
  const { cart } = useCart();
  const { formatPrice } = useCurrency();
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  
  // Calculate order summary
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );
  
  const shipping = subtotal > 0 ? 10 : 0;
  const discount = 0; // In a real app, this would be calculated based on coupons
  const tax = subtotal * 0.1; // 10% tax rate
  const total = subtotal + shipping + tax - discount;
  
  const handleApplyCoupon = () => {
    setIsApplying(true);
    // Simulate coupon check
    setTimeout(() => {
      setIsApplying(false);
      setCouponCode("");
      // In a real app, this would validate the coupon and apply a discount
    }, 1000);
  };
  
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="p-6">
        <h3 className="font-medium mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>{shipping > 0 ? formatPrice(shipping) : "Free"}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button 
              variant="outline"
              onClick={handleApplyCoupon}
              disabled={!couponCode || isApplying}
            >
              {isApplying ? "Applying..." : "Apply"}
            </Button>
          </div>
          
          <Link href="/checkout" className="w-full">
            <Button className="w-full">
              Checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}