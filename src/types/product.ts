export type ProductCategory = 
  | 'arabic-perfumes' 
  | 'designer-perfumes' 
  | 'bath-and-body-works';

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  category: ProductCategory;
  categoryName: string;
  price: number;
  compareAtPrice?: number;
  currency: 'KES';
  size?: string;
  description: string;
  shortDescription: string;
  scentFamily: string[];
  gender?: 'Unisex' | 'Men' | 'Women';
  concentration?: string;
  notes?: FragranceNotes;
  images: ProductImage[];
  sku: string;
  availability: 'in_stock' | 'out_of_stock';
  featured: boolean;
  bestseller: boolean;
  published: boolean;
  seo: {
    title: string;
    description: string;
  };
}

export interface ProductFilterOptions {
  category?: string;
  brands?: string[];
  scentFamilies?: string[];
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  inStockOnly?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'featured' | 'bestseller';
}
