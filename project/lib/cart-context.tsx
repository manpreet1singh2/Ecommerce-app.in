"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Cart, CartItem, Product } from "./types";

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number, variant?: { color?: string; size?: string }) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: { items: [] },
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] });
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (
    product: Product,
    quantity: number = 1,
    variant?: { color?: string; size?: string }
  ) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.product.id === product.id
      );
      
      if (existingItemIndex !== -1) {
        // Update existing item
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        
        return {
          ...prevCart,
          items: updatedItems,
        };
      } else {
        // Add new item
        return {
          ...prevCart,
          items: [
            ...prevCart.items,
            { product, quantity, variant },
          ],
        };
      }
    });
  };
  
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.product.id !== productId),
    }));
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      
      return {
        ...prevCart,
        items: updatedItems,
      };
    });
  };
  
  const clearCart = () => {
    setCart({ items: [] });
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);