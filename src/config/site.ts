/** Canonical business WhatsApp for all wa.me links and displayed contact */
export const businessWhatsApp = {
  e164: "254791429938",
  display: "+254 791 429 938",
} as const;

export const siteConfig = {
  name: "Vee's Luxe Foundry",
  tagline: "For the Scent. The Skin. The Statement. The Standard.",
  description: "Nairobi's premier destination for authentic luxury Arabic perfumes, designer fragrances, and refined body care.",
  homeHero: {
    headline: "Discover Your Signature Scent",
    intro:
      "Explore curated Arabic perfumes, designer fragrances and Bath & Body Works favourites — authentic, premium and ready to order in Nairobi.",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://veesluxe.co.ke",
  whatsappNumber: businessWhatsApp.e164,
  whatsappDisplay: businessWhatsApp.display,
  email: "concierge@veesluxe.co.ke",
  instagram: "https://www.instagram.com/vees_luxe_foundry/",
  instagramHandle: "@vees_luxe_foundry",
  location: "Nairobi, Kenya",
  operatingHours: "Monday – Saturday: 9:00 AM – 7:00 PM EAT",
  currency: "KES",
  currencySymbol: "KES",
  mainNav: [
    { title: "Home", href: "/" },
    {
      title: "Shop All",
      href: "/shop",
    },
    {
      title: "Arabic Perfumes",
      href: "/shop/arabic-perfumes",
    },
    {
      title: "Lattafa",
      href: "/lattafa",
    },
    {
      title: "Designer",
      href: "/shop/designer-perfumes",
    },
    {
      title: "Bath & Body Works",
      href: "/shop/bath-and-body-works",
    },
    { title: "About Us", href: "/about" },
    { title: "Journal", href: "/journal" },
    { title: "Contact", href: "/contact" },
  ],
  footerLinks: {
    shop: [
      { title: "All Perfumes", href: "/shop" },
      { title: "Arabic Perfumes", href: "/shop/arabic-perfumes" },
      { title: "Designer Fragrances", href: "/shop/designer-perfumes" },
      { title: "Bath & Body Works", href: "/shop/bath-and-body-works" },
      { title: "Bestsellers", href: "/shop?sort=bestseller" },
      { title: "New Arrivals", href: "/shop?sort=featured" },
    ],
    brands: [
      { title: "Lattafa", href: "/lattafa" },
      { title: "Afnan", href: "/brands/afnan" },
      { title: "Paris Corner", href: "/brands/paris-corner" },
      { title: "Maison Alhambra", href: "/brands/maison-alhambra" },
      { title: "Khadlaj", href: "/brands/khadlaj" },
      { title: "Armaf", href: "/brands/armaf" },
    ],
    customerCare: [
      { title: "Cart & Checkout", href: "/cart" },
      { title: "Delivery & Returns", href: "/delivery-returns" },
      { title: "Frequently Asked Questions", href: "/faq" },
      { title: "Contact", href: "/contact" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
};