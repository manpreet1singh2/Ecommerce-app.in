export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  categoryId: string;
  categoryName: string;
  stock: number;
  images?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  region?: "india" | "usa" | "global";
  createdAt: string;
  details?: {
    material?: string;
    color?: string;
    weight?: string;
    dimensions?: string;
  };
  variants?: {
    colors?: { name: string; value: string }[];
    sizes?: string[];
  };
  reviews?: any[]; // Simplified for demo
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: {
    color?: string;
    size?: string;
  };
}

export interface Cart {
  items: CartItem[];
}