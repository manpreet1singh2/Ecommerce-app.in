import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container px-4 py-10 md:px-6">
      <div className="flex flex-col gap-2 mb-8 text-center">
        <h1 className="text-4xl font-bold">About GlobalMarket</h1>
        <p className="text-muted-foreground max-w-[800px] mx-auto">
          Connecting global markets with premium products
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <div
            className="h-[400px] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/7242745/pexels-photo-7242745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)" }}
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            GlobalMarket was founded in 2020 with a simple mission: to bridge the gap between quality manufacturers in China and customers worldwide, with a focus on India and the USA.
          </p>
          <p className="text-muted-foreground">
            What started as a small operation importing eyewear has now grown into a thriving business offering a wide range of products across multiple categories, all while maintaining our commitment to quality and customer satisfaction.
          </p>
          <p className="text-muted-foreground">
            Our direct relationships with manufacturers allow us to offer premium products at competitive prices, cutting out the middlemen that typically drive up costs.
          </p>
        </div>
      </div>
      
      <div className="my-16 py-16 bg-muted rounded-lg">
        <div className="max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">
            "To provide customers worldwide with access to high-quality products at fair prices, while fostering sustainable trade relationships between global markets."
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Quality First</h3>
          <p className="text-muted-foreground">
            Every product in our catalog undergoes rigorous quality checks before being shipped to our customers.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Global Reach</h3>
          <p className="text-muted-foreground">
            We've built a logistics network that allows us to ship products efficiently to India and the USA, with plans to expand to more countries.
          </p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Customer Focus</h3>
          <p className="text-muted-foreground">
            Our dedicated customer service team provides support in multiple languages to ensure a smooth shopping experience.
          </p>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
          GlobalMarket is powered by a passionate team of professionals dedicated to bringing the best products to our customers.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="h-[150px] w-[150px] rounded-full bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(https://i.pravatar.cc/300?img=${index + 10})` }}
              />
              <h4 className="font-medium">Team Member {index}</h4>
              <p className="text-sm text-muted-foreground">
                {index % 2 === 0 ? "Co-Founder" : "Product Specialist"}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 bg-card rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto mb-6">
          Explore our collection of high-quality products from around the world.
        </p>
        <Link href="/products">
          <Button size="lg">
            Shop Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}