import { Metadata } from "next";
import { Suspense } from "react";
import { productRepository } from "@/lib/data/products";
import { categoryRepository } from "@/lib/data/categories";
import { brandRepository } from "@/lib/data/brands";
import { ShopContainer } from "@/components/shop/ShopContainer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Shop Luxury Fragrances Nairobi | Vee's Luxe Foundry",
  description: "Browse authentic Arabic perfumes, designer fragrances, and luxury body mists in Nairobi Kenya. Filter by brand, scent notes, and price with WhatsApp ordering.",
};

export default async function ShopPage() {
  const [products, categories, brands, allScentFamilies] = await Promise.all([
    productRepository.getAll(),
    categoryRepository.getAll(),
    brandRepository.getAll(),
    productRepository.getAllScentFamilies(),
  ]);

  return (
    <div className="bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Shop Fragrances", url: "/shop" },
          ]}
        />
      </div>

      <Suspense fallback={<div className="min-h-screen py-20 text-center text-xs text-[#89796F]">Loading fragrance catalogue...</div>}>
        <ShopContainer
          initialProducts={products}
          categories={categories}
          brands={brands}
          allScentFamilies={allScentFamilies}
          initialTitle="All Luxury Fragrances"
          initialDescription="Browse our verified catalogue of 30 luxury Arabic perfumes — Lattafa, Afnan, Paris Corner, Maison Alhambra, Khadlaj, Armaf and more. Order on WhatsApp with delivery in Nairobi and Kenya."
        />
      </Suspense>
    </div>
  );
}
