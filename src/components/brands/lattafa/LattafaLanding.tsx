import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { brandPageHref } from "@/lib/brand-url";
import { lattafaFaqs } from "@/data/lattafa-faqs";
import { lattafaPopularPicks, lattafaEducationalMentions } from "@/data/lattafa-popular";
import * as copy from "@/data/lattafa-landing-copy";
import { LattafaProductGrid } from "@/components/brands/lattafa/LattafaProductGrid";
import { LattafaFAQAccordion } from "@/components/brands/lattafa/LattafaFAQAccordion";
import { LattafaSection } from "@/components/brands/lattafa/LattafaSection";
import { LattafaProse } from "@/components/brands/lattafa/LattafaProse";
import { LattafaNewsletterBlock } from "@/components/brands/lattafa/LattafaNewsletterBlock";
import { MessageCircle } from "lucide-react";

interface LattafaLandingProps {
  products: Product[];
  scentFamilies: string[];
}

export function LattafaLanding({ products, scentFamilies }: LattafaLandingProps) {
  const whatsappUrl = getConciergeWhatsAppUrl("enquiring about Lattafa perfumes");

  const stockedPopular = lattafaPopularPicks
    .map((pick) => ({ ...pick, product: products.find((p) => p.slug === pick.slug) }))
    .filter((p) => p.product);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Shop", url: "/shop" },
            { name: "Arabic Perfumes", url: "/shop/arabic-perfumes" },
            { name: "Lattafa", url: "/lattafa" },
          ]}
        />
      </div>

      <section className="border-b border-sand/60 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="ui-eyebrow text-gold">{copy.lattafaHero.eyebrow}</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-ink font-medium leading-tight">
                {copy.lattafaHero.title}
              </h1>
              <LattafaProse paragraphs={copy.lattafaHero.paragraphs} />
              <p className="text-sm text-muted max-w-xl">{copy.lattafaHero.supporting}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link href="#lattafa-shop" className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover">
                  {copy.lattafaHero.primaryCta}
                </Link>
                <Link
                  href="/shop/arabic-perfumes"
                  className="ui-btn border-sand bg-white text-ink hover:border-bottle-green hover:text-bottle-green"
                >
                  {copy.lattafaHero.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-sand/80 bg-white shadow-sm">
              <Image
                src="/images/asad-lattafa-bgfree.png"
                alt="Lattafa perfume collection at Vee's Luxe Foundry"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <LattafaSection id="shop" title={copy.lattafaShopIntro.title}>
        <LattafaProse paragraphs={copy.lattafaShopIntro.paragraphs} />
        <LattafaProductGrid products={products} scentFamilies={scentFamilies} />
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaIntro.title}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-lg overflow-hidden border border-sand/80 bg-white">
            <Image
              src="/images/products/yara.jpeg"
              alt="Lattafa perfume bottles displayed together"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <LattafaProse paragraphs={copy.lattafaIntro.paragraphs} />
            <Link href="#lattafa-shop" className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover inline-flex">
              {copy.lattafaIntro.cta}
            </Link>
          </div>
        </div>
      </LattafaSection>

      <LattafaSection title={copy.lattafaWhyExplore.title} intro={copy.lattafaWhyExplore.intro}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {copy.lattafaWhyExplore.cards.map((card) => (
            <div key={card.title} className="p-5 border border-sand/80 rounded-lg bg-white space-y-2">
              <h3 className="font-serif text-lg text-ink">{card.title}</h3>
              <p className="text-sm text-body leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaFragranceFamilies.title} intro={copy.lattafaFragranceFamilies.intro}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.lattafaFragranceFamilies.families.map((family) => (
            <article key={family.title} className="flex flex-col p-5 border border-sand/80 rounded-lg bg-white gap-3 h-full">
              <p className="text-[0.6875rem] uppercase tracking-wider text-gold font-semibold">{family.tag}</p>
              <h3 className="font-serif text-xl text-ink">{family.title}</h3>
              <div className="space-y-3 text-sm text-body leading-relaxed flex-1">
                {family.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link href="#lattafa-shop" className="text-sm font-semibold text-bottle-green hover:underline">
                {family.cta} →
              </Link>
            </article>
          ))}
        </div>
      </LattafaSection>

      <LattafaSection title={copy.lattafaPersonalities.title} intro={copy.lattafaPersonalities.intro}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.lattafaPersonalities.columns.map((col) => (
            <div key={col.title} className="p-5 border border-sand/80 rounded-lg bg-ivory space-y-3">
              <h3 className="font-serif text-lg text-ink">{col.title}</h3>
              {col.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-body leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
        <Link href="#lattafa-shop" className="ui-btn mt-6 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          {copy.lattafaPersonalities.cta}
        </Link>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaNotesEducation.title}>
        <LattafaProse paragraphs={[copy.lattafaNotesEducation.intro]} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {copy.lattafaNotesEducation.layers.map((layer) => (
            <div key={layer.title} className="p-5 bg-white border border-sand/80 rounded-lg space-y-2">
              <h3 className="font-serif text-lg text-ink">{layer.title}</h3>
              <p className="text-sm text-body leading-relaxed">{layer.body}</p>
              <p className="text-xs text-muted">Common examples: {layer.examples}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-3xl space-y-2">
          <h3 className="font-serif text-lg text-ink">{copy.lattafaNotesEducation.evolutionTitle}</h3>
          <p className="text-sm text-body leading-relaxed">{copy.lattafaNotesEducation.evolution}</p>
        </div>
      </LattafaSection>

      <LattafaSection title={copy.lattafaPopularSection.title} intro={copy.lattafaPopularSection.intro}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stockedPopular.map(({ product, title, paragraphs, cta }) => (
            <Link
              key={product!.slug}
              href={`/products/${product!.slug}`}
              className="group block p-5 border border-sand/80 rounded-lg bg-white hover:border-gold transition-all"
            >
              <h3 className="font-serif text-lg text-ink group-hover:text-bottle-green">{title}</h3>
              <div className="mt-2 space-y-2">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-sm text-body leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <span className="inline-block mt-3 text-sm font-semibold text-bottle-green">{cta} →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 space-y-6 max-w-3xl">
          {lattafaEducationalMentions.map((item) => (
            <div key={item.name} className="p-5 border border-dashed border-sand rounded-lg bg-ivory space-y-2">
              <h3 className="font-serif text-lg text-ink">{item.name}</h3>
              {item.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-body leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
          <p className="text-xs text-muted italic">{copy.lattafaPopularSection.publishingNote}</p>
        </div>
        <Link href="#lattafa-shop" className="ui-btn mt-6 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          Shop available Lattafa fragrances
        </Link>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaOccasions.title} intro={copy.lattafaOccasions.intro}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {copy.lattafaOccasions.cards.map((card) => (
            <div key={card.title} className="p-5 bg-white rounded-lg border border-sand/80">
              <h3 className="font-serif text-base text-ink mb-2">{card.title}</h3>
              <p className="text-sm text-body leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </LattafaSection>

      <LattafaSection title={copy.lattafaNairobi.title}>
        <LattafaProse paragraphs={copy.lattafaNairobi.paragraphs} />
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {copy.lattafaNairobi.bullets.map((b) => (
            <li key={b.title} className="p-4 border border-sand/80 rounded-lg bg-ivory">
              <h3 className="font-serif text-base text-ink mb-1">{b.title}</h3>
              <p className="text-sm text-body leading-relaxed">{b.body}</p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-body mt-6 max-w-3xl leading-relaxed">{copy.lattafaNairobi.closing}</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link href="#lattafa-shop" className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover">
            {copy.lattafaNairobi.cta}
          </Link>
          <a href={whatsappUrl} className="ui-btn border-sand bg-white text-ink hover:border-bottle-green inline-flex gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp {siteConfig.whatsappDisplay}
          </a>
        </div>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaPricing.title}>
        <LattafaProse paragraphs={copy.lattafaPricing.paragraphs} />
        <h3 className="font-serif text-xl text-ink mt-8 mb-4">{copy.lattafaPricing.considerationsTitle}</h3>
        <ul className="space-y-4 max-w-3xl">
          {copy.lattafaPricing.considerations.map((item) => (
            <li key={item.title} className="text-sm text-body leading-relaxed">
              <span className="font-semibold text-ink">{item.title}</span> — {item.body}
            </li>
          ))}
        </ul>
        <Link href="#lattafa-shop" className="ui-btn mt-6 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          {copy.lattafaPricing.cta}
        </Link>
      </LattafaSection>

      <LattafaSection title={copy.lattafaHowToChoose.title} intro={copy.lattafaHowToChoose.intro}>
        <div className="space-y-6 max-w-3xl">
          {copy.lattafaHowToChoose.steps.map((step) => (
            <div key={step.title}>
              <h3 className="font-serif text-lg text-ink mb-1">{step.title}</h3>
              <p className="text-sm text-body leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
        <Link href="#lattafa-shop" className="ui-btn mt-6 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          {copy.lattafaHowToChoose.cta}
        </Link>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaWearingTips.title} intro={copy.lattafaWearingTips.intro}>
        <ul className="list-disc pl-5 space-y-3 text-sm text-body max-w-3xl leading-relaxed">
          {copy.lattafaWearingTips.tips.map((tip) => (
            <li key={tip.slice(0, 40)}>{tip}</li>
          ))}
        </ul>
      </LattafaSection>

      <LattafaSection title={copy.lattafaArabicPerfumery.title}>
        <LattafaProse paragraphs={[copy.lattafaArabicPerfumery.intro]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-4xl">
          {copy.lattafaArabicPerfumery.subsections.map((sub) => (
            <div key={sub.title} className="p-4 border border-sand/80 rounded-lg bg-ivory">
              <h3 className="font-serif text-base text-ink mb-1">{sub.title}</h3>
              <p className="text-sm text-body leading-relaxed">{sub.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-body mt-6 max-w-3xl">{copy.lattafaArabicPerfumery.closing}</p>
        <Link href="/shop/arabic-perfumes" className="ui-btn mt-4 border-sand bg-white text-ink hover:border-bottle-green">
          {copy.lattafaArabicPerfumery.cta}
        </Link>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaBrandComparison.title} intro={copy.lattafaBrandComparison.intro}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.lattafaBrandComparison.brands.map((brand) => (
            <Link
              key={brand.slug}
              href={brand.href ?? brandPageHref(brand.slug)}
              className="p-5 border border-sand/80 rounded-lg bg-white hover:border-gold transition-colors block"
            >
              <h3 className="font-serif text-lg text-ink">{brand.name}</h3>
              <p className="text-sm text-body mt-2 leading-relaxed">{brand.body}</p>
            </Link>
          ))}
        </div>
        <p className="text-sm text-body mt-6 max-w-3xl">{copy.lattafaBrandComparison.closing}</p>
        <Link href="/shop/arabic-perfumes" className="ui-btn mt-4 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          {copy.lattafaBrandComparison.cta}
        </Link>
      </LattafaSection>

      <LattafaSection title={copy.lattafaWhyVees.title} intro={copy.lattafaWhyVees.intro}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {copy.lattafaWhyVees.points.map((point) => (
            <div key={point.title} className="p-4 bg-ivory border border-sand/80 rounded-lg">
              <h3 className="font-serif text-base text-ink mb-1">{point.title}</h3>
              <p className="text-sm text-body leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
        <Link href="#lattafa-shop" className="ui-btn mt-6 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          {copy.lattafaWhyVees.cta}
        </Link>
      </LattafaSection>

      <LattafaSection altBg title={copy.lattafaGifts.title} intro={copy.lattafaGifts.intro}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {copy.lattafaGifts.ideas.map((idea) => (
            <div key={idea.title} className="p-4 bg-white border border-sand/80 rounded-lg">
              <h3 className="font-serif text-base text-ink mb-1">{idea.title}</h3>
              <p className="text-sm text-body leading-relaxed">{idea.body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-body mt-6">{copy.lattafaGifts.closing}</p>
        <Link href="#lattafa-shop" className="ui-btn mt-4 bg-bottle-green text-ivory hover:bg-bottle-green-hover">
          {copy.lattafaGifts.cta}
        </Link>
      </LattafaSection>

      <LattafaSection id="faq" title="Lattafa Perfumes Kenya: Frequently Asked Questions">
        <LattafaFAQAccordion faqs={lattafaFaqs} />
      </LattafaSection>

      <section className="py-16 bg-ivory border-b border-sand/60">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-ink">{copy.lattafaFinalCta.title}</h2>
          <LattafaProse paragraphs={copy.lattafaFinalCta.paragraphs} />
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="#lattafa-shop" className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover">
              Shop Lattafa perfumes
            </Link>
            <a href={whatsappUrl} className="ui-btn border-sand bg-white text-ink hover:border-bottle-green inline-flex gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat with us on WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted">{copy.lattafaFinalCta.supporting}</p>
        </div>
      </section>

      <LattafaSection title={copy.lattafaRelatedCollections.title} intro={copy.lattafaRelatedCollections.intro}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {copy.lattafaRelatedCollections.brands.map((brand) => (
            <Link
              key={brand.slug}
              href={brandPageHref(brand.slug)}
              className="p-5 border border-sand/80 rounded-lg bg-white hover:border-gold"
            >
              <h3 className="font-serif text-lg text-ink">{brand.name}</h3>
              <p className="text-sm text-body mt-2">{brand.body}</p>
              <span className="text-sm font-semibold text-bottle-green mt-3 inline-block">Explore {brand.name.split(" ")[0]} →</span>
            </Link>
          ))}
        </div>
      </LattafaSection>

      <LattafaNewsletterBlock />
    </div>
  );
}