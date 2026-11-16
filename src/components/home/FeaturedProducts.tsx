import Link from "next/link";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-20 bg-ivory border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Bestsellers &amp; Signatures
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-medium">
            Discover Our Featured Fragrances
          </h2>
          <div className="w-10 h-0.5 bg-gold mx-auto" />
          <p className="text-sm text-body font-normal leading-relaxed">
            Start with favourites from our verified catalogue — distinctive scents from recognised perfume houses for
            every mood and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}