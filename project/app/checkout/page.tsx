"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { useCurrency } from "@/lib/currency-context";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerInfo from "@/components/checkout/customer-info";
import ShippingMethod from "@/components/checkout/shipping-method";
import PaymentMethod from "@/components/checkout/payment-method";
import CheckoutSummary from "@/components/checkout/checkout-summary";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { currency } = useCurrency();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState("customer-info");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Redirect to cart if cart is empty
  if (cart.items.length === 0) {
    router.push("/cart");
    return null;
  }
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      toast.success("Order placed successfully!");
      router.push("/checkout/success");
    }, 2000);
  };
  
  return (
    <div className="container px-4 py-10 md:px-6">
      <Link href="/cart" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to cart
      </Link>
      
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-muted-foreground">
          Complete your order
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="customer-info">Customer Info</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="customer-info">
              <CustomerInfo onComplete={() => setCurrentStep("shipping")} />
            </TabsContent>
            
            <TabsContent value="shipping">
              <ShippingMethod onComplete={() => setCurrentStep("payment")} />
            </TabsContent>
            
            <TabsContent value="payment">
              <PaymentMethod onPlaceOrder={handlePlaceOrder} isProcessing={isProcessing} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}