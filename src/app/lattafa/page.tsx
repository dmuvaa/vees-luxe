import type { Metadata } from "next";
import { productRepository } from "@/lib/data/products";
import { siteConfig } from "@/config/site";
import { LattafaLanding } from "@/components/brands/lattafa/LattafaLanding";

const PAGE_TITLE = "Lattafa Perfumes in Kenya | Shop Lattafa Fragrances in Nairobi";
const PAGE_DESCRIPTION =
  "Discover Lattafa perfumes in Kenya at Vee's Luxe Foundry. Explore distinctive Arabic fragrances, compare scent profiles and find your next signature scent.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.url}/lattafa`,
  },
  alternates: {
    canonical: "/lattafa",
  },
};

function uniqueFamilies(products: Awaited<ReturnType<typeof productRepository.getByBrand>>) {
  return [...new Set(products.flatMap((p) => p.scentFamily))].sort((a, b) => a.localeCompare(b));
}

export default async function LattafaPage() {
  const products = await productRepository.getByBrand("lattafa");
  const scentFamilies = uniqueFamilies(products);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Shop", item: `${siteConfig.url}/shop` },
      { "@type": "ListItem", position: 3, name: "Lattafa", item: `${siteConfig.url}/lattafa` },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Lattafa Perfumes in Kenya",
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.url}/lattafa`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <LattafaLanding products={products} scentFamilies={scentFamilies} />
    </>
  );
}