import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Eyewear",
    description: "Stylish sunglasses and frames",
    slug: "eyewear",
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: 2,
    name: "Accessories",
    description: "Essential add-ons for every occasion",
    slug: "accessories",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: 3,
    name: "Electronics",
    description: "Cutting-edge gadgets and tech",
    slug: "electronics",
    image: "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: 4,
    name: "Home Decor",
    description: "Beautiful items for your living space",
    slug: "home-decor",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
];

export default function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <Card className="overflow-hidden group transition-all duration-200 hover:shadow-md">
            <div className="relative h-[200px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-200 group-hover:bg-black/30" />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-xl">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}