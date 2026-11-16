import { initialBrands } from "@/data/brands";
import { initialProducts } from "@/data/products";
import { Brand } from "@/types/brand";

export interface BrandRepository {
  getAll(): Promise<Brand[]>;
  getBySlug(slug: string): Promise<Brand | null>;
  getFeatured(): Promise<Brand[]>;
}

class LocalBrandRepository implements BrandRepository {
  private brands: Brand[] = initialBrands;

  async getAll(): Promise<Brand[]> {
    return this.brands.map((b) => {
      const count = initialProducts.filter(
        (p) => p.published && (p.brandSlug === b.slug || p.brand === b.name)
      ).length;
      return { ...b, productCount: count };
    });
  }

  async getBySlug(slug: string): Promise<Brand | null> {
    const brand = this.brands.find(
      (b) => b.slug === slug || b.slug.toLowerCase() === slug.toLowerCase()
    );
    if (!brand) return null;
    const count = initialProducts.filter(
      (p) => p.published && (p.brandSlug === brand.slug || p.brand === brand.name)
    ).length;
    return { ...brand, productCount: count };
  }

  async getFeatured(): Promise<Brand[]> {
    const brands = await this.getAll();
    return brands.filter((b) => b.featured);
  }
}

export const brandRepository: BrandRepository = new LocalBrandRepository();
