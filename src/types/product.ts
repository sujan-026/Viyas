
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  featured?: boolean;
  screenSize?: number; 
  resolution?: string; 
  smartFeatures?: string[]; 
  connectivity?: string[]; 
}
