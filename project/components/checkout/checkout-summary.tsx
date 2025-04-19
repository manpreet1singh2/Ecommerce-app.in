"use client";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { useCurrency } from "@/lib/currency-context";
import Link from "next/link";

export default function CheckoutSummary() {
  const { cart } = useCart();
  const { formatPrice } = useCurrency();
  
  // Calculate order summary
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );
  
  const shipping = subtotal > 0 ? 10 : 0;
  const discount = 0; 
  const tax = subtotal * 0.1; // 10% tax rate
  const total = subtotal + shipping + tax - discount;
  
  return (
    <div className="rounded-lg border shadow-sm">
      <div className="p-6">
        <h3 className="font-medium mb-4">Order Summary</h3>
        
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div key={item.product.id} className="flex justify-between text-sm">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>{formatPrice(item.product.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        
        <Separator className="my-4" />
        
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
        
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        
        <div className="mt-6 text-xs text-muted-foreground">
          <p className="mb-2">
            By placing your order, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}