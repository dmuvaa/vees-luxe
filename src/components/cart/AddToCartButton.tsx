"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/cart-context";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  variant?: "primary" | "compact" | "card";
  className?: string;
}

export function AddToCartButton({
  product,
  quantity = 1,
  variant = "primary",
  className = "",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  if (variant === "card") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`ui-btn ui-btn-block min-h-12 h-12 px-4 rounded-full bg-bottle-green text-ivory hover:bg-bottle-green-hover active:scale-[0.99] text-xs uppercase tracking-[0.12em] ${className}`}
      >
        {added ? <Check className="w-4 h-4" aria-hidden /> : <ShoppingBag className="w-4 h-4" aria-hidden />}
        <span>{added ? "Added" : "Add to cart"}</span>
      </button>
    );
  }

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`ui-btn ui-btn-sm ui-btn-block bg-bottle-green text-ivory hover:bg-bottle-green-hover active:scale-[0.99] ${className}`}
      >
        {added ? <Check className="w-4 h-4" aria-hidden /> : <ShoppingBag className="w-4 h-4" aria-hidden />}
        <span>{added ? "Added" : "Add to cart"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`ui-btn ui-btn-block bg-bottle-green text-ivory hover:bg-bottle-green-hover active:scale-[0.99] shadow-sm ${className}`}
    >
      {added ? <Check className="w-4 h-4" aria-hidden /> : <ShoppingBag className="w-4 h-4" aria-hidden />}
      <span>{added ? "Added to cart" : "Add to cart"}</span>
    </button>
  );
}