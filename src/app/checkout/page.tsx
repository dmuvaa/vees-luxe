import type { Metadata } from "next";
import { CheckoutClient } from "@/components/cart/CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Confirm delivery details and send your fragrance order to Vee's Luxe Foundry on WhatsApp.",
};

export default function CheckoutPage() {
  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Checkout</p>
          <h1 className="font-serif text-3xl sm:text-4xl text-ink">Complete on WhatsApp</h1>
          <p className="text-sm text-body max-w-lg">
            Add your delivery details here. We&apos;ll open WhatsApp with your full order so you can confirm stock, M-Pesa payment, and delivery.
          </p>
        </div>
        <CheckoutClient />
      </div>
    </div>
  );
}