"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/context/cart-context";
import { CartDrawer } from "@/components/cart/CartDrawer";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}