import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images[0]?.url || "/images/products/asad.jpeg";

  return (
    <article className="group flex h-full flex-col bg-white border border-sand/80 transition-shadow duration-300 hover:shadow-md hover:border-sand">
      <Link href={`/products/${product.slug}`} className="block flex-1 min-h-0">
        <div className="relative aspect-square w-full overflow-hidden bg-white p-5 sm:p-6">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="px-4 pt-1 pb-4 space-y-1.5 text-left">
          <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-gold font-semibold block">
            {product.brand}
          </span>

          <h3 className="font-serif text-xl text-ink font-medium leading-snug line-clamp-2 group-hover:text-bottle-green transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-muted font-normal leading-relaxed">
            {product.categoryName}
            {product.size ? ` · ${product.size}` : ""}
          </p>

          <p className="font-serif text-lg font-semibold text-ink pt-0.5 tabular-nums">{formatPrice(product.price)}</p>
        </div>
      </Link>

      <div className="relative z-10 px-4 pb-4 mt-auto">
        <AddToCartButton product={product} variant="card" />
      </div>
    </article>
  );
}