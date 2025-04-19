"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCurrency } from "@/lib/currency-context";

interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  deliveryTime: string;
}

interface ShippingMethodProps {
  onComplete: () => void;
}

export default function ShippingMethod({ onComplete }: ShippingMethodProps) {
  const { currency, formatPrice } = useCurrency();
  const [selectedShipping, setSelectedShipping] = useState<string>("standard");
  
  // Different shipping options based on currency/region
  const shippingOptions: ShippingOption[] = currency === "INR" 
    ? [
        {
          id: "standard",
          name: "Standard Shipping",
          description: "Delivery within India",
          price: 99,
          deliveryTime: "3-5 business days",
        },
        {
          id: "express",
          name: "Express Shipping",
          description: "Faster delivery within India",
          price: 199,
          deliveryTime: "1-2 business days",
        },
      ]
    : [
        {
          id: "standard",
          name: "International Standard",
          description: "Standard international shipping",
          price: 15,
          deliveryTime: "7-14 business days",
        },
        {
          id: "express",
          name: "International Express",
          description: "Faster international shipping",
          price: 30,
          deliveryTime: "4-7 business days",
        },
      ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save shipping method selection
    onComplete();
  };
  
  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipping Method</h3>
            <p className="text-sm text-muted-foreground">
              Select the shipping method you prefer
            </p>
            
            <RadioGroup
              value={selectedShipping}
              onValueChange={setSelectedShipping}
              className="space-y-3"
            >
              {shippingOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label
                    htmlFor={option.id}
                    className="flex flex-1 justify-between cursor-pointer p-2 rounded-md hover:bg-muted"
                  >
                    <div>
                      <p className="font-medium">{option.name}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <p className="text-xs text-muted-foreground">{option.deliveryTime}</p>
                    </div>
                    <div className="font-medium">
                      {formatPrice(option.price)}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <Button type="submit" className="w-full">
            Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}