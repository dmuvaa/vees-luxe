export interface Brand {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
  heroTagline?: string;
  logoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  productCount?: number;
  seo: {
    title: string;
    description: string;
  };
}
