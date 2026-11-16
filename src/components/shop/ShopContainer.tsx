"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/product";
import { Brand } from "@/types/brand";
import { Category } from "@/types/category";
import { ProductCard } from "@/components/products/ProductCard";
import {
  Filter,
  X,
  RotateCcw,
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

interface ShopContainerProps {
  initialProducts: Product[];
  categories: Category[];
  brands: Brand[];
  allScentFamilies: string[];
  initialCategory?: string;
  initialBrand?: string;
  initialTitle?: string;
  initialDescription?: string;
}

export function ShopContainer({
  initialProducts,
  categories,
  brands,
  allScentFamilies,
  initialCategory,
  initialBrand,
  initialTitle = "All Fragrances",
  initialDescription = "Explore fragrances from our verified catalogue. Filter by brand, scent family, and price.",
}: ShopContainerProps) {
  const searchParams = useSearchParams();

  // Search parameter sync
  const queryParam = searchParams.get("q") || "";
  const categoryParam = initialCategory || searchParams.get("category") || "all";
  const brandParam = initialBrand || searchParams.get("brand") || "";
  const familyParam = searchParams.get("family") || "";
  const sortParam = searchParams.get("sort") || "featured";

  // Filter state
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    brandParam ? [brandParam] : []
  );
  const [selectedFamilies, setSelectedFamilies] = useState<string[]>(
    familyParam ? [familyParam] : []
  );
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<string>(sortParam);

  // Mobile drawer state
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync state if URL query params change
  useEffect(() => {
    if (queryParam) setSearchQuery(queryParam);
    if (familyParam && !selectedFamilies.includes(familyParam)) {
      setSelectedFamilies((prev) => [...prev, familyParam]);
    }
  }, [queryParam, familyParam]);

  // Handle Brand Toggle
  const toggleBrand = (brandSlug: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandSlug)
        ? prev.filter((b) => b !== brandSlug)
        : [...prev, brandSlug]
    );
  };

  // Handle Scent Family Toggle
  const toggleFamily = (family: string) => {
    setSelectedFamilies((prev) =>
      prev.includes(family)
        ? prev.filter((f) => f !== family)
        : [...prev, family]
    );
  };

  // Clear all filters
  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBrands([]);
    setSelectedFamilies([]);
    setMinPrice("");
    setMaxPrice("");
    setInStockOnly(false);
    setSortBy("featured");
  };

  // Filter & Sort calculation
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        const inName = p.name.toLowerCase().includes(q);
        const inBrand = p.brand.toLowerCase().includes(q);
        const inFamily = p.scentFamily.some((fam) =>
          fam.toLowerCase().includes(q)
        );
        const inNotes =
          p.notes?.top.some((n) => n.toLowerCase().includes(q)) ||
          p.notes?.heart.some((n) => n.toLowerCase().includes(q)) ||
          p.notes?.base.some((n) => n.toLowerCase().includes(q));
        return inName || inBrand || inFamily || inNotes;
      });
    }

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Brands filter (OR within group)
    if (selectedBrands.length > 0) {
      result = result.filter(
        (p) =>
          selectedBrands.includes(p.brandSlug) ||
          selectedBrands.includes(p.brand)
      );
    }

    // Scent Families filter (OR within group)
    if (selectedFamilies.length > 0) {
      result = result.filter((p) =>
        p.scentFamily.some((fam) => selectedFamilies.includes(fam))
      );
    }

    // Price range filter
    if (typeof minPrice === "number") {
      result = result.filter((p) => p.price >= minPrice);
    }
    if (typeof maxPrice === "number") {
      result = result.filter((p) => p.price <= maxPrice);
    }

    // In stock filter
    if (inStockOnly) {
      result = result.filter((p) => p.availability === "in_stock");
    }

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
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
  }, [
    initialProducts,
    searchQuery,
    selectedCategory,
    selectedBrands,
    selectedFamilies,
    minPrice,
    maxPrice,
    inStockOnly,
    sortBy,
  ]);

  // Active filter count
  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedBrands.length +
    selectedFamilies.length +
    (minPrice !== "" ? 1 : 0) +
    (maxPrice !== "" ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  return (
    <div className="py-12 bg-[#F8F4ED] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-[#D9C2B8]/40 pb-8 mb-8 space-y-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
                Catalogue Collection
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
                {initialTitle}
              </h1>
              <p className="text-sm text-[#89796F] font-light max-w-2xl">
                {initialDescription}
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-xs text-[#89796F]">
              Showing <span className="font-semibold text-[#38251F]">{filteredProducts.length}</span> of {initialProducts.length} perfumes
            </div>
          </div>
        </div>

        {/* Controls Bar: Search & Sort & Mobile Filter Toggle */}
        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search perfumes, notes, brands..."
              className="w-full bg-[#F8F4ED] border border-[#D9C2B8] pl-9 pr-4 py-2 text-xs text-[#292522] placeholder-[#89796F] focus:outline-none focus:border-[#C6A46A]"
            />
            <Search className="w-4 h-4 text-[#89796F] absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-[#89796F] hover:text-[#38251F]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center space-x-3 justify-between md:justify-end">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center space-x-2 px-4 py-2 border border-[#38251F] text-xs uppercase tracking-wider font-semibold text-[#38251F]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            {/* Sorting Dropdown */}
            <div className="relative flex items-center space-x-2">
              <span className="text-xs text-[#89796F] hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F8F4ED] border border-[#D9C2B8] px-3 py-2 text-xs text-[#38251F] focus:outline-none focus:border-[#C6A46A] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="bestseller">Bestsellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical: A to Z</option>
                <option value="name-desc">Alphabetical: Z to A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-[#89796F] mr-1">Active Filters:</span>

            {selectedCategory !== "all" && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#38251F] text-[#F8F4ED] text-xs">
                <span>Category: {selectedCategory.replace(/-/g, " ")}</span>
                <button onClick={() => setSelectedCategory("all")}><X className="w-3 h-3" /></button>
              </span>
            )}

            {selectedBrands.map((b) => (
              <span key={b} className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#FFFDF9] border border-[#C6A46A] text-[#38251F] text-xs">
                <span>Brand: {b}</span>
                <button onClick={() => toggleBrand(b)}><X className="w-3 h-3" /></button>
              </span>
            ))}

            {selectedFamilies.map((fam) => (
              <span key={fam} className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#FFFDF9] border border-[#C6A46A] text-[#38251F] text-xs">
                <span>Family: {fam}</span>
                <button onClick={() => toggleFamily(fam)}><X className="w-3 h-3" /></button>
              </span>
            ))}

            {searchQuery && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#FFFDF9] border border-[#D9C2B8] text-[#38251F] text-xs">
                <span>Search: &quot;{searchQuery}&quot;</span>
                <button onClick={() => setSearchQuery("")}><X className="w-3 h-3" /></button>
              </span>
            )}

            <button
              onClick={handleClearAll}
              className="text-xs text-[#C6A46A] hover:underline flex items-center space-x-1 ml-2 font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear All</span>
            </button>
          </div>
        )}

        {/* Main Shop Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-[#FFFDF9] border border-[#D9C2B8]/50 p-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-[#D9C2B8]/40 pb-3">
              <h3 className="font-serif text-base text-[#38251F] font-semibold flex items-center space-x-2">
                <Filter className="w-4 h-4 text-[#C6A46A]" />
                <span>Filters</span>
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-xs text-[#C6A46A] hover:underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Category
              </h4>
              <div className="space-y-1.5 text-xs">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "all"}
                    onChange={() => setSelectedCategory("all")}
                    className="accent-[#38251F]"
                  />
                  <span>All Fragrances</span>
                </label>
                {categories.map((cat) => (
                  <label key={cat.slug} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.slug}
                      onChange={() => setSelectedCategory(cat.slug)}
                      className="accent-[#38251F]"
                    />
                    <span>{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands Filter */}
            <div className="space-y-3 pt-4 border-t border-[#D9C2B8]/40">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Brand
              </h4>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 text-xs">
                {brands.map((b) => (
                  <label key={b.slug} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b.slug) || selectedBrands.includes(b.name)}
                        onChange={() => toggleBrand(b.slug)}
                        className="accent-[#38251F]"
                      />
                      <span>{b.name}</span>
                    </div>
                    {b.productCount !== undefined && (
                      <span className="text-xs text-[#89796F]">({b.productCount})</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Scent Families Filter */}
            <div className="space-y-3 pt-4 border-t border-[#D9C2B8]/40">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Scent Family
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {allScentFamilies.map((fam) => {
                  const isSelected = selectedFamilies.includes(fam);
                  return (
                    <button
                      key={fam}
                      type="button"
                      onClick={() => toggleFamily(fam)}
                      className={`text-sm px-2.5 py-1 border transition-all ${
                        isSelected
                          ? "bg-[#38251F] text-[#F8F4ED] border-[#38251F]"
                          : "bg-[#F8F4ED] text-[#292522] border-[#D9C2B8] hover:border-[#C6A46A]"
                      }`}
                    >
                      {fam}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-3 pt-4 border-t border-[#D9C2B8]/40">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Price Range (KES)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="bg-[#F8F4ED] border border-[#D9C2B8] p-2 text-xs focus:outline-none focus:border-[#C6A46A]"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  className="bg-[#F8F4ED] border border-[#D9C2B8] p-2 text-xs focus:outline-none focus:border-[#C6A46A]"
                />
              </div>
            </div>

            {/* In Stock Toggle */}
            <div className="pt-4 border-t border-[#D9C2B8]/40">
              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-[#38251F]"
                />
                <span>In Stock Only</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-12 text-center space-y-4">
                <h3 className="font-serif text-2xl text-[#38251F]">
                  No Fragrances Found
                </h3>
                <p className="text-xs text-[#89796F] max-w-md mx-auto font-light leading-relaxed">
                  We couldn&apos;t find any perfumes matching your exact filter criteria. Try clearing some filters or searching for another note.
                </p>
                <button
                  onClick={handleClearAll}
                  className="px-6 py-3 bg-[#38251F] text-[#F8F4ED] text-xs uppercase tracking-widest font-semibold hover:bg-[#241915] transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs h-full bg-[#FFFDF9] shadow-2xl p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-[#D9C2B8] pb-4">
              <h3 className="font-serif text-lg text-[#38251F]">Filter Perfumes</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-[#38251F]" />
              </button>
            </div>

            {/* Category selection */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#38251F]">
                Category
              </h4>
              <div className="space-y-1 text-xs">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="mobile-category"
                    checked={selectedCategory === "all"}
                    onChange={() => setSelectedCategory("all")}
                    className="accent-[#38251F]"
                  />
                  <span>All</span>
                </label>
                {categories.map((c) => (
                  <label key={c.slug} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === c.slug}
                      onChange={() => setSelectedCategory(c.slug)}
                      className="accent-[#38251F]"
                    />
                    <span>{c.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands selection */}
            <div className="space-y-2 pt-4 border-t border-[#D9C2B8]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#38251F]">
                Brand
              </h4>
              <div className="space-y-1.5 text-xs max-h-40 overflow-y-auto">
                {brands.map((b) => (
                  <label key={b.slug} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(b.slug) || selectedBrands.includes(b.name)}
                      onChange={() => toggleBrand(b.slug)}
                      className="accent-[#38251F]"
                    />
                    <span>{b.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Scent families */}
            <div className="space-y-2 pt-4 border-t border-[#D9C2B8]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#38251F]">
                Scent Family
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {allScentFamilies.map((fam) => (
                  <button
                    key={fam}
                    type="button"
                    onClick={() => toggleFamily(fam)}
                    className={`text-xs px-2 py-1 border ${
                      selectedFamilies.includes(fam)
                        ? "bg-[#38251F] text-[#F8F4ED]"
                        : "bg-[#F8F4ED] text-[#38251F]"
                    }`}
                  >
                    {fam}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-[#38251F] text-[#F8F4ED] text-xs uppercase tracking-widest font-semibold"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
              <button
                onClick={handleClearAll}
                className="w-full py-2 border border-[#D9C2B8] text-xs text-[#89796F]"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
