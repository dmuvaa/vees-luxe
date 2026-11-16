import type { Metadata } from "next";
import Link from "next/link";
import { CartPageClient } from "@/components/cart/CartPageClient";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your fragrance cart and continue to checkout. Complete your order on WhatsApp with M-Pesa.",
};

export default function CartPage() {
  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Your selection</p>
          <h1 className="font-serif text-3xl sm:text-4xl text-ink">Shopping cart</h1>
        </div>
        <CartPageClient />
        <Link href="/shop" className="text-xs uppercase tracking-widest text-bottle-green font-semibold hover:underline">
          &larr; Continue shopping
        </Link>
      </div>
    </div>
  );
}