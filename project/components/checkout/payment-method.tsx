"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Check, CreditCard, Loader2 } from "lucide-react";
import { useCurrency } from "@/lib/currency-context";

interface PaymentMethodProps {
  onPlaceOrder: () => void;
  isProcessing: boolean;
}

export default function PaymentMethod({ onPlaceOrder, isProcessing }: PaymentMethodProps) {
  const { currency } = useCurrency();
  const [paymentMethod, setPaymentMethod] = useState(
    currency === "INR" ? "razorpay" : "stripe"
  );
  
  // Different payment methods based on currency/region
  const paymentOptions = currency === "INR"
    ? [
        { id: "razorpay", name: "Razorpay", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968299.png" },
        { id: "cashfree", name: "Cashfree", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpabQUdMqMh1YI5vbVf1PVnNaYSUTBJqnn9SsNFw&s" },
        { id: "cod", name: "Cash on Delivery", logo: "" },
      ]
    : [
        { id: "stripe", name: "Credit Card (Stripe)", logo: "https://cdn-icons-png.flaticon.com/512/196/196578.png" },
        { id: "paypal", name: "PayPal", logo: "https://cdn-icons-png.flaticon.com/512/196/196565.png" },
      ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder();
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Payment Method</h3>
            <p className="text-sm text-muted-foreground">
              Select your preferred payment method
            </p>
            
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-3"
            >
              {paymentOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label
                    htmlFor={option.id}
                    className="flex flex-1 items-center justify-between cursor-pointer p-2 rounded-md hover:bg-muted"
                  >
                    <span className="font-medium">{option.name}</span>
                    {option.logo && (
                      <img src={option.logo} alt={option.name} className="h-8" />
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {(paymentMethod === "stripe" || paymentMethod === "razorpay") && (
            <div className="space-y-4">
              <Separator />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    required
                    className="mt-1"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Place Order
              </>
            )}
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t flex items-center justify-center space-x-2 text-xs text-muted-foreground bg-muted/50">
        <Check className="h-3 w-3" />
        <span>All transactions are secure and encrypted</span>
      </CardFooter>
    </Card>
  );
}