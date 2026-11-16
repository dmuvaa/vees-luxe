import { Sparkles, Compass, Award, MessageCircle } from "lucide-react";

const propositions = [
  {
    icon: Sparkles,
    title: "A Curated Fragrance Collection",
    description: "Explore fragrances selected for their character, appeal and distinctive scent profiles.",
  },
  {
    icon: Compass,
    title: "Something for Every Occasion",
    description: "Discover scents for everyday wear, special occasions, evenings and everything in between.",
  },
  {
    icon: Award,
    title: "Premium Fragrance Selection",
    description: "Shop a growing collection of recognised fragrance houses and carefully selected favourites.",
  },
  {
    icon: MessageCircle,
    title: "Personalised Assistance",
    description: "Need help choosing a fragrance? Get in touch with us for assistance with your selection.",
  },
];

export function TrustStrip() {
  return (
    <section className="py-14 border-y border-sand bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {propositions.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-4">
                <div className="w-11 h-11 bg-gold-pale border border-sand flex items-center justify-center text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-ink font-medium leading-snug">{item.title}</h3>
                <p className="text-sm text-body font-normal leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}