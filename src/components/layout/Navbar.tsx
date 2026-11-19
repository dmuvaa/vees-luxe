"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { siteConfig } from "@/config/site";
import { CartNavButton } from "@/components/cart/CartNavButton";
import { Menu, X, Search } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-sand transition-all">
      <div className="bg-deep-brown text-gold-pale ui-eyebrow py-2 px-4 text-center font-medium">
        Delivery across Nairobi &amp; Kenya · M-Pesa · WhatsApp {siteConfig.whatsappDisplay}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-[4.25rem]">
          <BrandLogo className="shrink-0" />

          <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/shop/arabic-perfumes", label: "Arabic" },
              { href: "/lattafa", label: "Lattafa" },
              { href: "/shop/designer-perfumes", label: "Designer" },
              { href: "/shop/bath-and-body-works", label: "Bath & Body" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="ui-nav text-ink hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-1.5">
            <CartNavButton />
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-ink hover:text-gold transition-colors"
              aria-label="Search perfumes"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-gold lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="py-3 border-t border-sand">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-2xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search perfumes, brands…"
                  className="w-full bg-white border border-sand px-3 py-2 pl-9 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold"
                  autoFocus
                />
                <Search className="w-4 h-4 text-muted absolute left-3 top-2.5" />
              </div>
              <button
                type="submit"
                className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover"
              >
                Search
              </button>
              <button type="button" onClick={() => setSearchOpen(false)} className="p-2 text-muted hover:text-ink self-end sm:self-auto">
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[7.5rem] bottom-0 bg-ivory z-40 border-t border-sand overflow-y-auto px-6 py-6">
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop All" },
              { href: "/shop/arabic-perfumes", label: "Arabic Perfumes" },
              { href: "/lattafa", label: "Lattafa" },
              { href: "/cart", label: "Cart" },
              { href: "/checkout", label: "Checkout" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-base text-ink hover:text-gold border-b border-sand pb-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}