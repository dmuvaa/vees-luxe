"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";

type GenderFilter = "all" | "Men" | "Women" | "Unisex";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "bestseller", label: "Bestsellers" },
] as const;

interface LattafaProductGridProps {
  products: Product[];
  scentFamilies: string[];
}

export function LattafaProductGrid({ products, scentFamilies }: LattafaProductGridProps) {
  const [gender, setGender] = useState<GenderFilter>("all");
  const [families, setFamilies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("featured");

  const toggleFamily = (family: string) => {
    setFamilies((prev) => (prev.includes(family) ? prev.filter((f) => f !== family) : [...prev, family]));
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (gender !== "all") {
      result = result.filter((p) => p.gender === gender);
    }

    if (families.length > 0) {
      result = result.filter((p) => p.scentFamily.some((f) => families.includes(f)));
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "bestseller":
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [products, gender, families, sortBy]);

  return (
    <div id="lattafa-shop" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <p className="text-sm text-muted">
          Showing <span className="font-semibold text-ink">{filtered.length}</span> of {products.length} Lattafa
          fragrances in our catalogue
        </p>
        <label className="flex items-center gap-2 text-sm text-body">
          <span className="text-muted">Sort</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-sand bg-white px-3 py-2 text-sm text-ink rounded-lg focus:outline-none focus:border-gold"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-muted font-semibold">Fragrance profile</p>
        <div className="flex flex-wrap gap-2">
          {(["all", "Men", "Women", "Unisex"] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGender(g)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                gender === g
                  ? "bg-bottle-green text-ivory border-bottle-green"
                  : "bg-white text-body border-sand hover:border-bottle-green"
              }`}
            >
              {g === "all" ? "All" : g === "Men" ? "Men's" : g === "Women" ? "Women's" : "Unisex"}
            </button>
          ))}
        </div>
      </div>

      {scentFamilies.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted font-semibold">Scent family (from catalogue)</p>
          <div className="flex flex-wrap gap-2">
            {scentFamilies.map((family) => {
              const active = families.includes(family);
              return (
                <button
                  key={family}
                  type="button"
                  onClick={() => toggleFamily(family)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    active
                      ? "bg-gold-pale text-ink border-gold"
                      : "bg-white text-body border-sand hover:border-gold"
                  }`}
                >
                  {family}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-sm text-muted py-8 text-center border border-dashed border-sand rounded-lg bg-white">
          No fragrances match these filters. Clear a filter or browse all Lattafa products.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}