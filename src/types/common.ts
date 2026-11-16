export interface FAQItem {
  id: string;
  category: 'Orders & WhatsApp' | 'Authenticity & Fragrance' | 'Delivery in Kenya' | 'Returns & Payment';
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  productPurchased: string;
  rating: number;
  quote: string;
  verified: boolean;
  date: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featuredImage: string;
  relatedProductSlugs: string[];
  seo: {
    title: string;
    description: string;
  };
}
