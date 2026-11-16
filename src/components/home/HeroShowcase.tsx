"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroEditorialSlide } from "@/data/hero-slides";
import { siteConfig } from "@/config/site";

const AUTO_MS = 7000;

interface HeroShowcaseProps {
  slides: HeroEditorialSlide[];
}

export function HeroShowcase({ slides }: HeroShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = slides.length;
  const active = slides[index] ?? slides[0];

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reduceMotion || count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, count]);

  if (!active || count === 0) return null;

  return (
    <section
      className="relative bg-white border-b border-sand/50"
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        const end = e.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start == null || end == null) return;
        const delta = end - start;
        if (Math.abs(delta) < 48) return;
        if (delta < 0) goNext();
        else goPrev();
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-[3.75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-9 items-center">
          {/* Copy */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <p className="ui-eyebrow text-muted text-[0.75rem] tracking-[0.18em]">
              Vee&apos;s Luxe Foundry · Nairobi
            </p>

            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.8125rem] text-ink font-medium leading-tight tracking-tight">
                {siteConfig.homeHero.headline}
              </h1>
              <p className="text-base text-muted leading-relaxed max-w-lg">
                {siteConfig.homeHero.intro}
              </p>
              <p className="text-sm sm:text-base text-body/90 leading-snug max-w-lg border-l-2 border-gold/50 pl-4">
                {siteConfig.tagline}
              </p>
            </div>

            <Link
              href="/shop"
              className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover shadow-sm"
            >
              Shop the collection
            </Link>
          </div>

          {/* Product visual */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative flex items-center justify-center min-h-[300px] sm:min-h-[390px] lg:min-h-[450px]">
            <div className="relative w-full max-w-[420px] sm:max-w-md lg:max-w-xl mx-auto h-[min(57vh,480px)] sm:h-[min(63vh,510px)] lg:h-[450px] flex items-center justify-center">
              {slides.map((slide, i) => (
                <div
                  key={slide.slug}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={slide.imageUrl}
                    alt={`${slide.product.brand} ${slide.product.name}`}
                    width={600}
                    height={750}
                    priority={i === 0}
                    className="w-auto h-full max-h-full object-contain object-center drop-shadow-[0_24px_48px_rgba(42,24,16,0.12)]"
                  />
                </div>
              ))}
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border border-sand/80 bg-white text-ink shadow-sm hover:border-bottle-green hover:text-bottle-green flex items-center justify-center transition-colors"
                  aria-label="Previous fragrance"
                >
                  <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 border border-sand/80 bg-white text-ink shadow-sm hover:border-bottle-green hover:text-bottle-green flex items-center justify-center transition-colors"
                  aria-label="Next fragrance"
                >
                  <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}