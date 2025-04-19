"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "INR",
  setCurrency: () => {},
  formatPrice: () => "",
  convertPrice: () => 0,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState("INR");
  
  // Load currency preference from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");
    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);
  
  // Save currency preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);
  
  // Exchange rate (simplified for demo)
  // In a real app, you'd fetch this from an API
  const exchangeRates = {
    INR: 1,
    USD: 0.012, // 1 INR = 0.012 USD
  };
  
  // Format price based on currency
  const formatPrice = (price: number): string => {
    const convertedPrice = convertPrice(price);
    
    if (currency === "INR") {
      return `₹${convertedPrice.toFixed(2)}`;
    } else if (currency === "USD") {
      return `$${convertedPrice.toFixed(2)}`;
    }
    
    return `${convertedPrice.toFixed(2)}`;
  };
  
  // Convert price based on currency
  const convertPrice = (price: number): number => {
    if (currency === "INR") {
      return price;
    } else if (currency === "USD") {
      return price * exchangeRates.USD;
    }
    
    return price;
  };
  
  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);