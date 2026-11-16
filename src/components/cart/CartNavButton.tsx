"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";

export function CartNavButton() {
  const { itemCount, openCart } = useCart();

  return (
  <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={openCart}
        className="relative p-2 text-ink hover:text-gold transition-colors"
        aria-label={`Open cart, ${itemCount} items`}
      >
        <ShoppingBag className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[1.1rem] h-[1.1rem] px-1 flex items-center justify-center rounded-full bg-gold text-xs font-bold text-deep-brown leading-none">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </button>
      <Link
        href="/cart"
        className="hidden sm:inline ui-nav text-ink hover:text-gold"
      >
        Cart
      </Link>
    </div>
  );
}