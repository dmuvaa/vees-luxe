import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Arabic Perfumes",
    tagline: "Rich. Expressive. Unforgettable.",
    description:
      "Warm woods, amber, musk and florals from houses in our verified catalogue.",
    href: "/shop/arabic-perfumes",
    cta: "Shop Arabic perfumes",
    image: "/images/products/his-confession.jpeg",
    imagePosition: "object-[center_45%]",
  },
  {
    title: "Designer Perfumes",
    tagline: "Recognisable character. Timeless appeal.",
    description:
      "Designer-inspired and signature-style fragrances for everyday wear and special occasions.",
    href: "/shop/designer-perfumes",
    cta: "Shop designer perfumes",
    image: "/images/products/delilah-pour-femme.jpeg",
    imagePosition: "object-center",
  },
  {
    title: "Bath & Body Works",
    tagline: "Make every layer count.",
    description:
      "Body care and mists that layer with your signature scent — for daily rituals and gifting.",
    href: "/shop/bath-and-body-works",
    cta: "Shop Bath & Body Works",
    image: "/images/products/khair-pistachio.jpeg",
    imagePosition: "object-center",
  },
];

export function CategoryCards() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="ui-eyebrow text-gold">Collections</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-medium">Explore the collection</h2>
          <p className="text-sm text-muted leading-relaxed">
            Choose a path — Arabic signatures, designer styles, or body care favourites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group flex flex-col h-full bg-white border border-sand/80 rounded-lg overflow-hidden transition-shadow hover:shadow-md hover:border-sand"
            >
              <Link href={cat.href} className="block relative aspect-[4/3] overflow-hidden bg-sand/40">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${cat.imagePosition} transition-transform duration-500 group-hover:scale-[1.03]`}
                />
              </Link>

              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="space-y-1.5">
                  <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-gold font-semibold">
                    {cat.tagline}
                  </p>
                  <h3 className="font-serif text-xl text-ink font-medium leading-snug">
                    <Link href={cat.href} className="hover:text-bottle-green transition-colors">
                      {cat.title}
                    </Link>
                  </h3>
                </div>

                <p className="text-sm text-body leading-relaxed flex-1">{cat.description}</p>

                <Link
                  href={cat.href}
                  className="ui-btn ui-btn-block rounded-full bg-bottle-green text-ivory hover:bg-bottle-green-hover mt-1"
                >
                  {cat.cta}
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}