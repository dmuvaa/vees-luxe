import { Product } from "@/types/product";

export interface CartLineItem {
  productId: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  size?: string;
  quantity: number;
}

export const CART_STORAGE_KEY = "vees-luxe-cart";

export function productToCartLine(product: Product, quantity = 1): CartLineItem {
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    brand: product.brand,
    price: product.price,
    imageUrl: product.images[0]?.url || "/images/products/asad.jpeg",
    size: product.size,
    quantity: Math.max(1, quantity),
  };
}

export function getCartSubtotal(items: CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartItemCount(items: CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}