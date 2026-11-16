import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function BrandStoryFull() {
  return (
    <section className="py-16 sm:py-20 bg-ivory border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-white border border-sand/80 shadow-sm order-2 lg:order-1">
            <Image
              src="/images/products/her-confession.jpeg"
              alt="The Vee's Luxe Foundry story"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <span className="ui-eyebrow text-gold block">Foundry Philosophy</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink font-medium leading-tight">
              A love for fragrance. A standard for luxury.
            </h2>
            <div className="w-10 h-0.5 bg-gold" />

            <div className="space-y-4 text-sm sm:text-[0.9375rem] text-body leading-relaxed max-w-2xl">
              <p>
                Vee&apos;s Luxe Foundry was created around an appreciation for fragrance, personal style, and the
                details that make an experience memorable.
              </p>
              <p>
                We bring together a considered selection of Arabic perfumes, designer fragrances, and body care
                favourites — so discovery feels easy, authentic, and personal.
              </p>
              <p>
                Whether you are drawn to bold Arabian compositions or fresh everyday scents, we want you to feel
                confident finding fragrances that fit your lifestyle.
              </p>
            </div>

            <p className="font-serif italic text-base text-gold border-l-2 border-gold/40 pl-4 max-w-xl">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>

            <Link
              href="/about"
              className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover shadow-sm"
            >
              Get to know us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}