export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  seo: {
    title: string;
    description: string;
  };
}
