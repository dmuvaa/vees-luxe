import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { productRepository } from "@/lib/data/products";
import { ProductGallery } from "@/components/products/ProductGallery";
import { FragrancePyramid } from "@/components/products/FragrancePyramid";
import { ProductOrderActions } from "@/components/products/ProductOrderActions";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { formatPrice } from "@/lib/utils";
import { generateProductJsonLd } from "@/lib/seo";
import { brandPageHref } from "@/lib/brand-url";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Share2,
  Clock,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await productRepository.getAll();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await productRepository.getBySlug(slug);

  if (!product) {
    return {
      title: "Fragrance Not Found",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: product.images.map((img) => ({ url: img.url, alt: img.alt })),
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await productRepository.getBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await productRepository.getRelated(product, 4);
  const productJsonLd = generateProductJsonLd(product);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: product.categoryName, url: `/shop/${product.category}` },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  return (
    <>
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="bg-[#F8F4ED] min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Product Primary Grid (Gallery + Core Details) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Gallery (5 cols) */}
            <div className="lg:col-span-6 sticky top-28">
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Right Column: Details & Ordering (7 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Brand & Badges */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={brandPageHref(product.brandSlug)}
                    className="text-xs uppercase tracking-[0.2em] text-[#C6A46A] hover:underline font-semibold"
                  >
                    {product.brand}
                  </Link>

                  {product.bestseller && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-[#38251F] text-[#F8F4ED] text-xs uppercase tracking-widest">
                      <Sparkles className="w-2.5 h-2.5 text-[#C6A46A]" />
                      <span>Bestseller</span>
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
                  {product.name}
                </h1>

                {/* Subtitle / Attributes */}
                <div className="flex items-center space-x-3 text-xs text-[#89796F]">
                  {product.size && <span>{product.size}</span>}
                  {product.concentration && (
                    <>
                      <span>•</span>
                      <span>{product.concentration}</span>
                    </>
                  )}
                  {product.gender && (
                    <>
                      <span>•</span>
                      <span>For {product.gender}</span>
                    </>
                  )}
                  <span>•</span>
                  <span>SKU: {product.sku}</span>
                </div>
              </div>

              {/* Price Block */}
              <div className="p-4 bg-[#FFFDF9] border border-[#D9C2B8]/60 space-y-1">
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif text-3xl font-semibold text-[#38251F]">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-[#89796F] line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                  {product.compareAtPrice && (
                    <span className="text-xs text-emerald-800 font-medium px-2 py-0.5 bg-emerald-50">
                      Save {formatPrice(product.compareAtPrice - product.price)}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-emerald-800 font-medium pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>In Stock • Ready for Immediate Nairobi Dispatch</span>
                </div>
              </div>

              {/* Scent Family Tags */}
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider text-[#89796F] block">
                  Olfactory Family
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.scentFamily.map((fam) => (
                    <Link
                      key={fam}
                      href={`/shop?family=${encodeURIComponent(fam)}`}
                      className="text-xs bg-[#FFFDF9] border border-[#D9C2B8] px-3 py-1 text-[#38251F] hover:border-[#C6A46A] transition-colors"
                    >
                      {fam}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-[#292522] leading-relaxed font-light">
                {product.shortDescription}
              </p>

              <div className="pt-2">
                <ProductOrderActions product={product} />
              </div>

              {/* Trust Details & Local Delivery Assurances */}
              <div className="space-y-2 pt-4 border-t border-[#D9C2B8]/40 text-xs text-[#89796F]">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
                  <span>
                    <strong>Nairobi Delivery:</strong> Same-day or next-day courier to your doorstep.
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
                  <span>
                    <strong>Countrywide Kenya:</strong> Dispatched via G4S / Fargo Courier (24–48 hours).
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
                  <span>
                    <strong>100% Authentic Guarantee:</strong> Factory sealed with manufacturer batch codes.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scent Pyramid (Top, Heart, Base Notes) */}
          <div className="pt-6">
            <FragrancePyramid notes={product.notes} />
          </div>

          {/* Full Detailed Description Section */}
          <div className="bg-[#FFFDF9] border border-[#D9C2B8]/60 p-6 sm:p-8 space-y-4">
            <h2 className="font-serif text-2xl text-[#38251F]">
              About the Fragrance
            </h2>
            <div className="w-10 h-0.5 bg-[#C6A46A]" />
            <p className="text-sm text-[#292522] leading-relaxed font-light whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t border-[#D9C2B8]/40 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A46A] font-semibold">
                  Complementary Profiles
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#38251F]">
                  You May Also Admire
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
