import { siteConfig } from "@/config/site";
import { Product } from "@/types/product";
import { FAQItem } from "@/types/common";

export function generateProductJsonLd(product: Product, siteUrl = siteConfig.url) {
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const images = product.images.map((img) => img.url);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: images,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: product.price.toString(),
      availability:
        product.availability === "in_stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[],
  siteUrl = siteConfig.url
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function generateOrganizationJsonLd(siteUrl = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/brand/icon-512.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.whatsappNumber}`,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  };
}

export function generateLocalBusinessJsonLd(siteUrl = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.name,
    image: `${siteUrl}/brand/icon-512.png`,
    url: siteUrl,
    telephone: `+${siteConfig.whatsappNumber}`,
    priceRange: "KES 3,200 - KES 5,000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export function generateFAQJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Page titles that already carry the brand name bypass the root
 * "%s | Vee's Luxe Foundry" template so the suffix isn't doubled.
 */
export function pageTitle(title: string): string | { absolute: string } {
  return /vee['’]s luxe/i.test(title) ? { absolute: title } : title;
}
