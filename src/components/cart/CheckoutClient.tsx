"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl, generateCartCheckoutMessage } from "@/lib/whatsapp";

export function CheckoutClient() {
  const { items, subtotal } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const canSubmit = items.length > 0 && name.trim() && phone.trim() && location.trim();

  const whatsappHref = useMemo(() => {
    if (!canSubmit) return "#";
    const message = generateCartCheckoutMessage(items, {
      customerName: name.trim(),
      phone: phone.trim(),
      deliveryLocation: location.trim(),
      notes: notes.trim(),
    });
    return createWhatsAppUrl(siteConfig.whatsappNumber, message);
  }, [canSubmit, items, name, phone, location, notes]);

  if (items.length === 0) {
    return (
      <div className="border border-sand bg-white p-8 text-center space-y-4">
        <p className="text-sm text-body">Your cart is empty.</p>
        <Link
          href="/shop"
          className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover"
        >
          Shop fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="border border-sand bg-white divide-y divide-sand">
        {items.map((line) => (
          <div key={line.productId} className="p-4 flex gap-3">
            <div className="relative w-16 h-16 bg-sand shrink-0 overflow-hidden">
              <Image src={line.imageUrl} alt={line.name} fill className="object-cover" sizes="64px" />
            </div>
            <div className="flex-1 text-sm">
              <p className="font-serif text-ink">{line.name}</p>
              <p className="text-muted text-xs">
                {line.brand} · Qty {line.quantity}
              </p>
              <p className="font-semibold text-ink pt-1">{formatPrice(line.price * line.quantity)}</p>
            </div>
          </div>
        ))}
        <div className="p-4 flex justify-between items-baseline">
          <span className="text-muted text-sm">Order subtotal</span>
          <span className="font-serif text-xl font-semibold text-ink">{formatPrice(subtotal)}</span>
        </div>
      </section>

      <form className="border border-sand bg-white p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="checkout-name" className="block text-xs uppercase tracking-wider text-muted mb-1.5">
            Full name
          </label>
          <input
            id="checkout-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-sand px-3 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="checkout-phone" className="block text-xs uppercase tracking-wider text-muted mb-1.5">
            Phone (M-Pesa / WhatsApp)
          </label>
          <input
            id="checkout-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+254..."
            className="w-full border border-sand px-3 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="checkout-location" className="block text-xs uppercase tracking-wider text-muted mb-1.5">
            Delivery area
          </label>
          <input
            id="checkout-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Kilimani, Nairobi"
            className="w-full border border-sand px-3 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="checkout-notes" className="block text-xs uppercase tracking-wider text-muted mb-1.5">
            Notes (optional)
          </label>
          <textarea
            id="checkout-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full border border-sand px-3 py-2.5 text-sm text-ink focus:outline-none focus:border-gold resize-none"
            placeholder="Preferred delivery time, gift message, etc."
          />
        </div>

        <a
          href={whatsappHref}
          className={`ui-btn ui-btn-block ${
            canSubmit
              ? "bg-bottle-green text-ivory hover:bg-bottle-green-hover"
              : "bg-sand text-muted pointer-events-none"
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          Send order on WhatsApp
        </a>
        <p className="text-sm text-muted text-center leading-relaxed">
          Opens WhatsApp to {siteConfig.whatsappDisplay} with your order summary. Payment and delivery are confirmed in
          chat.
        </p>
      </form>
    </div>
  );
}