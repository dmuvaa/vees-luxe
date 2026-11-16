import { ShieldCheck, Truck, Sparkles, Smartphone } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "100% Sealed Authenticity",
    description: "Every flacon is strictly sourced directly from verified Dubai distributors and manufacturer hubs, arriving with intact batch codes.",
  },
  {
    icon: Truck,
    title: "Nairobi & Countrywide Delivery",
    description: "Enjoy prompt same-day dispatch across Nairobi and reliable 24–48 hour delivery via trusted courier partners across Kenya.",
  },
  {
    icon: Sparkles,
    title: "Handpicked Luxury Curation",
    description: "We bypass generic scents to bring you viral sensations and timeless Middle Eastern masterpieces with 10+ hour longevity.",
  },
  {
    icon: Smartphone,
    title: "Direct WhatsApp Ordering",
    description: "Skip complex forms. Chat directly with Virginia, confirm stock in real time, and pay securely via M-Pesa upon confirmation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#FFFDF9] border-y border-[#D9C2B8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            The Vee&apos;s Luxe Promise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Why Fragrance Lovers Choose Us
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#89796F] font-light">
            Luxury perfumery backed by uncompromising authenticity, personalized concierge care, and effortless Kenyan commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 bg-[#F8F4ED]/60 border border-[#D9C2B8]/40 hover:border-[#C6A46A] transition-all duration-300 space-y-4 hover:shadow-sm"
              >
                <div className="w-12 h-12 bg-[#38251F] flex items-center justify-center text-[#C6A46A]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-[#38251F]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
