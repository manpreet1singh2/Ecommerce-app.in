"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Premium Products, Global Reach",
    subtitle: "From India to USA, we deliver quality products worldwide",
    ctaText: "Shop Now",
    ctaLink: "/products",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: 2,
    title: "Eyewear Collection 2025",
    subtitle: "Trendy designs imported directly from manufacturers",
    ctaText: "View Collection",
    ctaLink: "/category/eyewear",
    image: "https://images.pexels.com/photos/2811088/pexels-photo-2811088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: 3,
    title: "Electronics That Impress",
    subtitle: "Latest gadgets and accessories at competitive prices",
    ctaText: "Explore",
    ctaLink: "/category/electronics",
    image: "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative h-full px-4 flex flex-col justify-center items-start gap-4 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[800px]">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-[600px] mb-2">
              {slide.subtitle}
            </p>
            <Link href={slide.ctaLink}>
              <Button size="lg" className="mt-4 bg-primary hover:bg-primary/90">
                {slide.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}