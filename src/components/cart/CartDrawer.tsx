"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, itemCount, removeItem, setQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-[#1A1512]/55 backdrop-blur-[2px]"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory shadow-2xl flex flex-col border-l border-sand">
        <div className="flex items-center justify-between px-5 py-4 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-xl text-ink">Your cart</h2>
            <span className="text-xs text-muted">({itemCount})</span>
          </div>
          <button type="button" onClick={closeCart} className="p-2 text-muted hover:text-ink" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-sm text-body">Your cart is empty.</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="inline-block text-xs uppercase tracking-widest text-bottle-green font-semibold hover:underline"
              >
                Browse fragrances
              </Link>
            </div>
          ) : (
            items.map((line) => (
              <div key={line.productId} className="flex gap-3 border border-sand p-3 bg-white">
                <Link
                  href={`/products/${line.slug}`}
                  onClick={closeCart}
                  className="relative w-20 h-20 shrink-0 bg-sand overflow-hidden"
                >
                  <Image src={line.imageUrl} alt={line.name} fill className="object-cover" sizes="80px" />
                </Link>
                <div className="flex-1 min-w-0 space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold">{line.brand}</p>
                  <Link
                    href={`/products/${line.slug}`}
                    onClick={closeCart}
                    className="font-serif text-sm text-ink line-clamp-2 hover:text-bottle-green"
                  >
                    {line.name}
                  </Link>
                  <p className="text-xs text-muted">{line.size}</p>
                  <p className="font-serif text-sm font-semibold text-ink">{formatPrice(line.price)}</p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="inline-flex items-center border border-sand">
                      <button
                        type="button"
                        className="p-1.5 hover:bg-sand"
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity(line.productId, line.quantity - 1)}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-medium min-w-[2rem] text-center">{line.quantity}</span>
                      <button
                        type="button"
                        className="p-1.5 hover:bg-sand"
                        aria-label="Increase quantity"
                        onClick={() => setQuantity(line.productId, line.quantity + 1)}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(line.productId)}
                      className="p-1.5 text-muted hover:text-red-700"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-sand p-5 space-y-3 bg-ivory">
            <div className="flex justify-between items-baseline text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Delivery and M-Pesa details are confirmed on checkout, then you complete the order on WhatsApp.
            </p>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="ui-btn ui-btn-block bg-bottle-green text-ivory hover:bg-bottle-green-hover"
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full text-center py-2.5 text-xs uppercase tracking-widest text-bottle-green font-semibold hover:underline"
            >
              View full cart
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}