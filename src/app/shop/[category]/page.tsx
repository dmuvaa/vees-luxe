import { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categoryRepository } from "@/lib/data/categories";
import { productRepository } from "@/lib/data/products";
import { brandRepository } from "@/lib/data/brands";
import { ShopContainer } from "@/components/shop/ShopContainer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await categoryRepository.getAll();
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = await categoryRepository.getBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: pageTitle(category.seo.title),
    description: category.seo.description,
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      images: [{ url: category.heroImage }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = await categoryRepository.getBySlug(slug);

  if (!category) {
    notFound();
  }

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
            { name: "Shop", url: "/shop" },
            { name: category.name, url: `/shop/${category.slug}` },
          ]}
        />
      </div>

      <Suspense fallback={<div className="min-h-screen py-20 text-center text-xs text-[#89796F]">Loading category collection...</div>}>
        <ShopContainer
          initialProducts={products}
          categories={categories}
          brands={brands}
          allScentFamilies={allScentFamilies}
          initialCategory={category.slug}
          initialTitle={category.name}
          initialDescription={category.description}
        />
      </Suspense>
    </div>
  );
}
