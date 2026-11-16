import { initialProducts } from "@/data/products";
import { Product, ProductFilterOptions } from "@/types/product";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getBySlug(slug: string): Promise<Product | null>;
  getByCategory(category: string): Promise<Product[]>;
  getByBrand(brandSlug: string): Promise<Product[]>;
  getFeatured(): Promise<Product[]>;
  getBestsellers(): Promise<Product[]>;
  getRelated(product: Product, limit?: number): Promise<Product[]>;
  filter(options: ProductFilterOptions): Promise<{ products: Product[]; total: number }>;
  getAllScentFamilies(): Promise<string[]>;
}

class LocalProductRepository implements ProductRepository {
  private products: Product[] = initialProducts;

  async getAll(): Promise<Product[]> {
    return this.products.filter((p) => p.published);
  }

  async getBySlug(slug: string): Promise<Product | null> {
    const product = this.products.find(
      (p) => p.slug === slug || p.slug.toLowerCase() === slug.toLowerCase()
    );
    return product || null;
  }

  async getByCategory(category: string): Promise<Product[]> {
    return this.products.filter(
      (p) => p.published && (p.category === category || p.category.toLowerCase() === category.toLowerCase())
    );
  }

  async getByBrand(brandSlug: string): Promise<Product[]> {
    return this.products.filter(
      (p) => p.published && (p.brandSlug === brandSlug || p.brand.toLowerCase() === brandSlug.toLowerCase())
    );
  }

  async getFeatured(): Promise<Product[]> {
    return this.products.filter((p) => p.published && p.featured);
  }

  async getBestsellers(): Promise<Product[]> {
    return this.products.filter((p) => p.published && p.bestseller);
  }

  async getRelated(product: Product, limit = 4): Promise<Product[]> {
    return this.products
      .filter((p) => p.published && p.id !== product.id)
      .map((p) => {
        // Calculate similarity score based on brand, category, and shared scent families
        let score = 0;
        if (p.brand === product.brand) score += 3;
        if (p.category === product.category) score += 2;
        const sharedFamilies = p.scentFamily.filter((f) =>
          product.scentFamily.includes(f)
        );
        score += sharedFamilies.length * 2;
        return { product: p, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((item) => item.product);
  }

  async filter(options: ProductFilterOptions): Promise<{ products: Product[]; total: number }> {
    let result = this.products.filter((p) => p.published);

    // Filter by Category
    if (options.category && options.category !== "all") {
      result = result.filter((p) => p.category === options.category);
    }

    // Filter by Brands (OR logic within brands group)
    if (options.brands && options.brands.length > 0) {
      result = result.filter((p) => options.brands!.includes(p.brandSlug) || options.brands!.includes(p.brand));
    }

    // Filter by Scent Families (OR logic within families group)
    if (options.scentFamilies && options.scentFamilies.length > 0) {
      result = result.filter((p) =>
        p.scentFamily.some((fam) => options.scentFamilies!.includes(fam))
      );
    }

    // Filter by Price Range
    if (typeof options.minPrice === "number") {
      result = result.filter((p) => p.price >= options.minPrice!);
    }
    if (typeof options.maxPrice === "number") {
      result = result.filter((p) => p.price <= options.maxPrice!);
    }

    // Filter by In-Stock Only
    if (options.inStockOnly) {
      result = result.filter((p) => p.availability === "in_stock");
    }

    // Filter by Search Query (Case-insensitive, partial matching on name, brand, notes, scentFamily)
    if (options.search && options.search.trim() !== "") {
      const q = options.search.toLowerCase().trim();
      result = result.filter((p) => {
        const inName = p.name.toLowerCase().includes(q);
        const inBrand = p.brand.toLowerCase().includes(q);
        const inDesc = p.shortDescription.toLowerCase().includes(q);
        const inFamily = p.scentFamily.some((f) => f.toLowerCase().includes(q));
        const inNotes =
          p.notes?.top.some((n) => n.toLowerCase().includes(q)) ||
          p.notes?.heart.some((n) => n.toLowerCase().includes(q)) ||
          p.notes?.base.some((n) => n.toLowerCase().includes(q));
        return inName || inBrand || inDesc || inFamily || inNotes;
      });
    }

    // Sorting
    if (options.sortBy) {
      switch (options.sortBy) {
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
          result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
      }
    }

    return {
      products: result,
      total: result.length,
    };
  }

  async getAllScentFamilies(): Promise<string[]> {
    const familySet = new Set<string>();
    this.products.forEach((p) => {
      p.scentFamily.forEach((fam) => familySet.add(fam));
    });
    return Array.from(familySet).sort();
  }
}

// Singleton export of the repository
export const productRepository: ProductRepository = new LocalProductRepository();
