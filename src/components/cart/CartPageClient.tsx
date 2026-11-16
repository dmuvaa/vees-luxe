"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartPageClient() {
  const { items, subtotal, removeItem, setQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="border border-sand bg-white p-10 text-center space-y-4">
        <p className="text-body text-sm">No fragrances in your cart yet.</p>
        <Link
          href="/shop"
          className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover"
        >
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ul className="divide-y divide-sand border border-sand bg-white">
        {items.map((line) => (
          <li key={line.productId} className="p-4 sm:p-5 flex gap-4">
            <Link href={`/products/${line.slug}`} className="relative w-24 h-24 shrink-0 bg-sand overflow-hidden">
              <Image src={line.imageUrl} alt={line.name} fill className="object-cover" sizes="96px" />
            </Link>
            <div className="flex-1 min-w-0 space-y-2">
              <p className="text-xs uppercase tracking-wider text-gold font-semibold">{line.brand}</p>
              <Link href={`/products/${line.slug}`} className="font-serif text-lg text-ink hover:text-bottle-green">
                {line.name}
              </Link>
              <p className="text-xs text-muted">{line.size}</p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-serif font-semibold text-ink">{formatPrice(line.price * line.quantity)}</p>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center border border-sand">
                    <button
                      type="button"
                      className="p-2 hover:bg-sand"
                      onClick={() => setQuantity(line.productId, line.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-sm font-medium">{line.quantity}</span>
                    <button
                      type="button"
                      className="p-2 hover:bg-sand"
                      onClick={() => setQuantity(line.productId, line.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(line.productId)}
                    className="p-2 text-muted hover:text-red-700"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="border border-sand bg-white p-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted">Subtotal</span>
          <span className="font-serif text-2xl font-semibold text-ink">{formatPrice(subtotal)}</span>
        </div>
        <p className="text-xs text-muted">Pay with M-Pesa after confirming your order on WhatsApp at checkout.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/checkout"
            className="ui-btn ui-btn-block flex-1 bg-bottle-green text-ivory hover:bg-bottle-green-hover"
          >
            Proceed to checkout
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="ui-btn ui-btn-block flex-1 border-sand bg-white text-body hover:border-bottle-green hover:text-bottle-green"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}