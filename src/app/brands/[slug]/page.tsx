import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { brandRepository } from "@/lib/data/brands";
import { productRepository } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles, ArrowRight } from "lucide-react";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const brands = await brandRepository.getAll();
  return brands.filter((b) => b.slug !== "lattafa").map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = await brandRepository.getBySlug(slug);

  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: brand.seo.title,
    description: brand.seo.description,
    openGraph: {
      title: brand.seo.title,
      description: brand.seo.description,
      images: brand.imageUrl ? [{ url: brand.imageUrl }] : undefined,
    },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;

  if (slug === "lattafa") {
    redirect("/lattafa");
  }

  const brand = await brandRepository.getBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = await productRepository.getByBrand(brand.slug);

  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      {/* Brand Hero Header */}
      <div className="surface-dark relative bg-[#241915] text-[#F8F4ED] py-16 sm:py-20 overflow-hidden">
        {brand.imageUrl && (
          <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
            <Image
              src={brand.imageUrl}
              alt={brand.name}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241915] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            onDark
            items={[
              { name: "Home", url: "/" },
              { name: "Brands", url: "/shop" },
              { name: brand.name, url: `/brands/${brand.slug}` },
            ]}
          />

          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-medium pt-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Origin: {brand.country}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#F8F4ED]">
            {brand.name}
          </h1>

          <p className="text-sm sm:text-base text-[#D9C2B8] max-w-2xl font-light leading-relaxed">
            {brand.description}
          </p>

          <p className="text-xs text-[#C6A46A] tracking-wider uppercase">
            Showing {brandProducts.length} Authenticated Fragrances
          </p>
        </div>
      </div>

      {/* Brand Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {brandProducts.length === 0 ? (
          <div className="p-12 text-center bg-[#FFFDF9] border border-[#D9C2B8]/40 space-y-4">
            <p className="text-sm text-[#89796F]">
              New shipments of {brand.name} are currently clearing Dubai customs. Check back shortly.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 bg-[#38251F] text-[#F8F4ED]"
            >
              <span>Explore All Perfumes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
