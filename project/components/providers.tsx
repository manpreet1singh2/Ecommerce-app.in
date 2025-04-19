"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/lib/cart-context";
import { CurrencyProvider } from "@/lib/currency-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <CurrencyProvider>
        <CartProvider>{children}</CartProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}