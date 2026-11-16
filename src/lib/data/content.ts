import { initialFAQs } from "@/data/faqs";
import { initialTestimonials } from "@/data/testimonials";
import { initialArticles } from "@/data/articles";
import { FAQItem, Testimonial, JournalArticle } from "@/types/common";

export async function getFAQs(): Promise<FAQItem[]> {
  return initialFAQs;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return initialTestimonials;
}

export async function getArticles(): Promise<JournalArticle[]> {
  return initialArticles;
}

export async function getArticleBySlug(slug: string): Promise<JournalArticle | null> {
  const article = initialArticles.find(
    (a) => a.slug === slug || a.slug.toLowerCase() === slug.toLowerCase()
  );
  return article || null;
}
