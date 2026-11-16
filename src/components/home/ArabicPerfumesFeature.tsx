import Link from "next/link";
import Image from "next/image";

export function ArabicPerfumesFeature() {
  return (
    <section className="py-20 bg-ivory text-body border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-white border border-sand shadow-sm">
            <Image
              src="/images/products/teriaq.jpeg"
              alt="Lattafa Teriaq — Arabic perfumes in Nairobi, Kenya"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block">
              Middle Eastern Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-medium leading-tight">
              Discover the World of Arabic Perfumes in Kenya
            </h2>
            <div className="w-12 h-0.5 bg-gold" />

            <div className="space-y-4 text-sm text-body font-normal leading-relaxed">
              <p>
                Arabic perfumes have become a favourite among fragrance enthusiasts who appreciate bold compositions,
                rich ingredients and distinctive scent profiles.
              </p>
              <p>
                Known for notes such as oud, amber, musk, saffron, rose, vanilla and spices, Arabic fragrances range
                from warm and deep to sweet, fresh, and unmistakably rich.
              </p>
              <p>
                At Vee&apos;s Luxe Foundry, we bring together a curated selection of Arabic perfumes in Nairobi — drawn
                from our verified catalogue of Lattafa, Afnan, Paris Corner, Maison Alhambra, Khadlaj and Armaf.
              </p>
            </div>

            <Link
              href="/shop/arabic-perfumes"
              className="inline-block px-8 py-3.5 bg-bottle-green text-ivory text-xs uppercase tracking-[0.2em] font-bold hover:bg-bottle-green-hover transition-colors"
            >
              Shop Arabic Perfumes in Kenya
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-sand space-y-8">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-ink">What Makes Arabic Perfumes Distinctive?</h3>
            <p className="text-sm text-muted max-w-2xl">
              Depth, layering and contrast — suitable for different preferences and occasions across our collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Rich and woody fragrances",
                body: "Oud, sandalwood, cedar and other woody notes for warm, deep signatures.",
              },
              {
                title: "Warm and amber fragrances",
                body: "Smooth amber with spices, vanilla, woods or musk for enveloping warmth.",
              },
              {
                title: "Sweet and gourmand fragrances",
                body: "Vanilla, caramel, fruity accords and dessert-inspired compositions.",
              },
              {
                title: "Fresh and versatile fragrances",
                body: "Citrus, aromatic and clean options for everyday wear and warmer days.",
              },
              {
                title: "Floral and musky fragrances",
                body: "Rose, jasmine and florals blended with musk and soft amber bases.",
              },
              {
                title: "Curated in Nairobi",
                body: "Browse prices and availability online, then confirm on WhatsApp.",
                link: true,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white border border-sand space-y-2 hover:border-gold/60 transition-colors"
              >
                <h4 className="font-serif text-lg text-ink">{card.title}</h4>
                <p className="text-xs text-body leading-relaxed">{card.body}</p>
                {card.link && (
                  <Link
                    href="/shop/arabic-perfumes"
                    className="text-xs text-bottle-green hover:underline font-semibold pt-2 inline-block"
                  >
                    Browse all Arabic scents &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}