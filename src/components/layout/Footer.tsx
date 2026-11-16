import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ShieldCheck, MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";

export function Footer() {
  const conciergeUrl = getConciergeWhatsAppUrl("inquiring about Vee's Luxe Foundry collection");

  return (
    <footer className="surface-dark bg-[#241915] text-[#F8F4ED] pt-16 pb-12 border-t border-[#38251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-[#38251F]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/brand/logo-bright.png"
                alt=""
                width={44}
                height={44}
                className="w-11 h-11 object-contain contrast-[1.12] saturate-[1.15] drop-shadow-[0_0_10px_rgba(245,195,55,0.35)]"
              />
              <span>
                <span className="font-serif text-xl tracking-wider text-[#F8F4ED] uppercase block">
                  Vee&apos;s Luxe
                </span>
                <span className="text-xs tracking-[0.25em] text-[#F5D061] uppercase block font-semibold">
                  Foundry · Nairobi
                </span>
              </span>
            </Link>
            <p className="text-sm text-[#D9C2B8] max-w-sm font-light leading-relaxed">
              Nairobi&apos;s premier boutique for authentic Arabian perfumes, designer fragrances, and refined body care. Sourced directly from certified Dubai distributors.
            </p>
            <p className="font-serif italic text-xs text-[#C6A46A]">
              &ldquo;For the Scent. The Skin. The Statement. The Standard.&rdquo;
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#38251F] flex items-center justify-center text-[#F8F4ED] hover:text-[#C6A46A] hover:bg-[#38251F]/80 transition-all"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={conciergeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#38251F] flex items-center justify-center text-[#F8F4ED] hover:text-[#C6A46A] hover:bg-[#38251F]/80 transition-all"
                aria-label="Chat with our Concierge on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#C6A46A] font-medium">
              Shop Fragrances
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D9C2B8]">
              {siteConfig.footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#F8F4ED] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Brands */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#C6A46A] font-medium">
              Arabic Houses
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D9C2B8]">
              {siteConfig.footerLinks.brands.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#F8F4ED] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care & Nairobi Concierge */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-[#C6A46A] font-medium">
              Concierge & Care
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D9C2B8]">
              {siteConfig.footerLinks.customerCare.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#F8F4ED] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 text-xs text-[#D9C2B8] space-y-1.5">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                <span>Mon – Sat: 9am – 7pm</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A46A] flex-shrink-0" />
                <span>100% Sealed Authenticity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#D9C2B8] space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Vee&apos;s Luxe Foundry. All rights reserved. Nairobi, Kenya.
          </p>
          <div className="flex items-center space-x-6">
            {siteConfig.footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#D9C2B8] transition-colors">
                {link.title}
              </Link>
            ))}
            <span>Currency: KES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
