"use client";

import { Product } from "@/types/product";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface WhatsAppOrderButtonProps {
  product: Product;
  className?: string;
  showGuarantees?: boolean;
}

export function WhatsAppOrderButton({
  product,
  className = "",
  showGuarantees = true,
}: WhatsAppOrderButtonProps) {
  const whatsAppUrl = getProductWhatsAppUrl(product);

  const handleClick = () => {
    // Analytics tracking hook (GA4 & Meta Pixel)
    if (typeof window !== "undefined") {
      const windowWithGtag = window as unknown as {
        gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
        fbq?: (command: string, action: string, params: Record<string, unknown>) => void;
      };

      if (windowWithGtag.gtag) {
        windowWithGtag.gtag("event", "whatsapp_click", {
          product_id: product.id,
          product_name: product.name,
          brand: product.brand,
          category: product.category,
          price: product.price,
          currency: "KES",
        });
      }

      if (windowWithGtag.fbq) {
        windowWithGtag.fbq("track", "Contact", {
          content_name: product.name,
          content_category: product.category,
          value: product.price,
          currency: "KES",
        });
      }
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="w-full inline-flex items-center justify-center space-x-3 py-4 px-6 bg-[#1e3a2f] text-[#F9F6F0] hover:bg-[#162c23] active:scale-[0.99] transition-all shadow-md group cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 text-[#dfc89f] group-hover:scale-110 transition-transform" />
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase">
          Order on WhatsApp • {formatPrice(product.price)}
        </span>
      </a>

      {showGuarantees && (
        <div className="grid grid-cols-2 gap-2 text-sm text-[#89796F] pt-2">
          <div className="flex items-center space-x-1.5 bg-[#FFFDF9] p-2 border border-[#D9C2B8]/40">
            <Truck className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
            <span>Same-Day Nairobi Delivery</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-[#FFFDF9] p-2 border border-[#D9C2B8]/40">
            <ShieldCheck className="w-4 h-4 text-[#C6A46A] flex-shrink-0" />
            <span>100% Sealed Dubai Import</span>
          </div>
        </div>
      )}
    </div>
  );
}
