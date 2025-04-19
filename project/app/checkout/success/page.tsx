import { Button } from "@/components/ui/button";
import { CheckCircle, Package } from "lucide-react";
import Link from "next/link";

export default function OrderSuccessPage() {
  const orderNumber = "GM" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return (
    <div className="container px-4 py-16 md:px-6 flex flex-col items-center justify-center">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-green-100 mx-auto flex items-center justify-center">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold">Order Confirmed!</h1>
        
        <p className="text-muted-foreground">
          Thank you for your order. We've received your order and will begin processing it soon.
          You'll receive an email confirmation shortly.
        </p>
        
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm font-medium">Order Number</p>
          <p className="text-2xl font-bold">{orderNumber}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link href="/products">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
          
          <Link href="/track-order">
            <Button>
              <Package className="mr-2 h-4 w-4" />
              Track Order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}