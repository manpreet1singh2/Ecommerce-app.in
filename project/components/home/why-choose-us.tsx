import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  TruckIcon, 
  ShieldCheck, 
  CreditCard,
  HeadphonesIcon
} from "lucide-react";

const features = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Shipping",
    description: "Delivery to India and the USA with competitive shipping rates",
  },
  {
    icon: <TruckIcon className="h-10 w-10 text-primary" />,
    title: "Fast Delivery",
    description: "Quick domestic delivery and efficient international shipping",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Quality Assurance",
    description: "All products are inspected for quality before shipping",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Flexible Payments",
    description: "Multiple payment options for both India and international customers",
  },
  {
    icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
    title: "24/7 Support",
    description: "Round-the-clock customer service in multiple languages",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            We pride ourselves on providing exceptional service and quality products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm bg-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}