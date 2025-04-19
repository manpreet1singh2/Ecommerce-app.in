import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">GlobalMarket</h3>
            <p className="text-sm text-muted-foreground">
              Premium products imported from China and delivered worldwide with care and quality assurance.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/category/eyewear" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Eyewear
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/category/electronics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Track Order
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                Customer Support: <br />
                <a href="mailto:support@globalmarket.com" className="hover:text-foreground transition-colors">
                  support@globalmarket.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GlobalMarket. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Visa" className="h-8 opacity-75" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-8 opacity-75" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="h-8 opacity-75" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968299.png" alt="RazorPay" className="h-8 opacity-75" />
          </div>
        </div>
      </div>
    </footer>
  );
}