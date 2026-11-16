import { Search, MessageSquare, Truck } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Explore the Collection",
    description: "Browse our catalogue by brand, category, or olfactory family. Read our detailed notes pyramids (top, heart, base) to choose your ideal fragrance.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Click 'Order on WhatsApp'",
    description: "Your product choice, bottle size, and price are prefilled into a private WhatsApp chat with Virginia. We confirm stock in real time and answer any questions.",
  },
  {
    step: "03",
    icon: Truck,
    title: "M-Pesa & Swift Dispatch",
    description: "Complete payment conveniently via M-Pesa. Your sealed perfume is immediately dispatched with same-day Nairobi delivery or trusted countrywide courier.",
  },
];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="py-20 bg-[#FFFDF9] border-b border-[#D9C2B8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Seamless Commerce
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            How to Order in 3 Simple Steps
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#89796F] font-light">
            Luxury perfume shopping made personal, transparent, and effortlessly fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-8 bg-[#F8F4ED]/60 border border-[#D9C2B8]/50 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#38251F] text-[#C6A46A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-3xl text-[#D9C2B8] font-light">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#38251F]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-3 px-8 py-3.5 bg-[#38251F] text-[#F8F4ED] text-xs uppercase tracking-widest font-semibold hover:bg-[#241915] transition-all"
          >
            Start Browsing Perfumes
          </Link>
        </div>
      </div>
    </section>
  );
}
