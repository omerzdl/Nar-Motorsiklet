import { LucideIcon } from 'lucide-react';

export interface ProductItem {
  name: string;
  image: string;
  priceDisplay?: string; // Optional: "Stok Sorunuz" or price
}

export interface ProductCategory {
  title: string;
  subtitle: string;
  tags: string[];
  products: ProductItem[];
}

export interface Brand {
  name: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  mapLink: string;
  email?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}