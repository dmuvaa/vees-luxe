"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { Product } from "@/types/product";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";
import { ShieldCheck, Truck } from "lucide-react";

interface ProductOrderActionsProps {
  product: Product;
}

export function ProductOrderActions({ product }: ProductOrderActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const whatsAppUrl = getProductWhatsAppUrl(product);

  return (
    <div className="space-y-3">
      <div className="inline-flex items-center border border-sand bg-white">
        <button
          type="button"
          className="p-3 hover:bg-sand"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-4 text-sm font-semibold min-w-[3rem] text-center">{quantity}</span>
        <button
          type="button"
          className="p-3 hover:bg-sand"
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => Math.min(99, q + 1))}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <AddToCartButton product={product} quantity={quantity} />

      <Link
        href="/checkout"
        className="ui-btn ui-btn-block border-gold bg-white text-ink hover:bg-gold/10"
      >
        Go to checkout
      </Link>

      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs text-muted hover:text-bottle-green underline underline-offset-4"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Order only this item on WhatsApp ({formatPrice(product.price)})</span>
      </a>

      <div className="grid grid-cols-2 gap-2 text-sm text-muted pt-2">
        <div className="flex items-center space-x-1.5 bg-white p-2 border border-sand">
          <Truck className="w-4 h-4 text-gold shrink-0" />
          <span>Nairobi delivery</span>
        </div>
        <div className="flex items-center space-x-1.5 bg-white p-2 border border-sand">
          <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
          <span>Carefully sourced bottles</span>
        </div>
      </div>
    </div>
  );
}