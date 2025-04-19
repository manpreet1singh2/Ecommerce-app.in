import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/home/featured-products";
import CategoryShowcase from "@/components/home/category-showcase";
import HeroBanner from "@/components/home/hero-banner";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroBanner />
      
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Explore our wide range of premium products sourced directly from manufacturers
          </p>
        </div>
        <CategoryShowcase />
      </section>

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            Discover our top picks, curated just for you
          </p>
        </div>
        <FeaturedProducts />
        <div className="mt-10 flex justify-center">
          <Link href="/products">
            <Button>
              View all products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}