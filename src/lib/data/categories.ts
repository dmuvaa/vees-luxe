import { initialCategories } from "@/data/categories";
import { Category } from "@/types/category";

export interface CategoryRepository {
  getAll(): Promise<Category[]>;
  getBySlug(slug: string): Promise<Category | null>;
}

class LocalCategoryRepository implements CategoryRepository {
  private categories: Category[] = initialCategories;

  async getAll(): Promise<Category[]> {
    return this.categories;
  }

  async getBySlug(slug: string): Promise<Category | null> {
    const category = this.categories.find(
      (c) => c.slug === slug || c.slug.toLowerCase() === slug.toLowerCase()
    );
    return category || null;
  }
}

export const categoryRepository: CategoryRepository = new LocalCategoryRepository();
