"use client";

import { Fragment, useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HeroEditorialSlide } from "@/data/hero-slides";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";

const AUTO_MS = 6500;
const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduceMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCE_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

// Fixed values so server and client render the same motes.
const MOTES = [
  { l: 12, d: 0, s: 9, z: 4 },
  { l: 24, d: 3.2, s: 11, z: 3 },
  { l: 37, d: 6.1, s: 8, z: 5 },
  { l: 51, d: 1.4, s: 12, z: 3 },
  { l: 63, d: 4.7, s: 10, z: 4 },
  { l: 74, d: 2.3, s: 9, z: 6 },
  { l: 86, d: 5.5, s: 13, z: 3 },
  { l: 44, d: 7.8, s: 10, z: 4 },
  { l: 18, d: 8.6, s: 12, z: 5 },
  { l: 80, d: 9.4, s: 11, z: 4 },
];

interface HeroShowcaseProps {
  slides: HeroEditorialSlide[];
}

type SlideState = "active" | "exit-left" | "exit-right" | "stage-left" | "stage-right";

export function HeroShowcase({ slides }: HeroShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReduceMotion,
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false
  );
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const count = slides.length;
  const active = slides[index] ?? slides[0];

  const goTo = useCallback(
    (next: number, direction: 1 | -1) => {
      if (count === 0) return;
      const target = ((next % count) + count) % count;
      if (target === index) return;
      setPrev(index);
      setDir(direction);
      setIndex(target);
    },
    [count, index]
  );

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Pointer + scroll driven 3D rig, eased in a rAF loop.
  useEffect(() => {
    if (reduceMotion) return;
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const target = { rx: 0, ry: 0, s: 0 };
    const cur = { rx: 0, ry: 0, s: 0 };
    let raf = 0;
    let running = true;

    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      target.ry = x * 26;
      target.rx = -y * 16;
    };
    const onLeave = () => {
      target.rx = 0;
      target.ry = 0;
    };
    const onScroll = () => {
      const r = section.getBoundingClientRect();
      target.s = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height)));
    };

    const tick = () => {
      cur.rx += (target.rx - cur.rx) * 0.08;
      cur.ry += (target.ry - cur.ry) * 0.08;
      cur.s += (target.s - cur.s) * 0.12;
      stage.style.setProperty("--rx", `${cur.rx.toFixed(2)}deg`);
      stage.style.setProperty("--ry", `${cur.ry.toFixed(2)}deg`);
      stage.style.setProperty("--sp", cur.s.toFixed(3));
      if (running) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      const visible = entry?.isIntersecting ?? false;
      if (visible && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(section);

    if (fine) {
      section.addEventListener("pointermove", onMove);
      section.addEventListener("pointerleave", onLeave);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduceMotion]);

  if (!active || count === 0) return null;

  const slideState = (i: number): SlideState => {
    if (i === index) return "active";
    if (i === prev) return dir === 1 ? "exit-left" : "exit-right";
    return dir === 1 ? "stage-right" : "stage-left";
  };

  const words = siteConfig.homeHero.headline.split(" ");
  const accentFrom = Math.max(0, words.length - 2);

  return (
    <section
      ref={sectionRef}
      data-motion-skip
      className="hero relative overflow-hidden border-b border-sand/50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
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
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:py-12 lg:py-[3.75rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-9 items-center">
          {/* Copy */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 space-y-5 sm:space-y-6 relative z-10">
            <p className="hero-in ui-eyebrow text-muted text-[0.75rem] tracking-[0.18em]" style={{ "--i": 0 } as CSSProperties}>
              Vee&apos;s Luxe Foundry · Nairobi
            </p>

            <div className="space-y-3 sm:space-y-4">
              <h1
                className="font-serif text-[2.4rem] sm:text-5xl lg:text-[3.6rem] text-ink font-medium leading-[1.05] tracking-tight"
                aria-label={siteConfig.homeHero.headline}
              >
                {words.map((word, i) => (
                  <Fragment key={`${word}-${i}`}>
                    <span className="hero-word" aria-hidden="true">
                      <span
                        className={`hero-word-inner ${i >= accentFrom ? "text-gold-foil italic" : ""}`}
                        style={{ "--i": i + 1 } as CSSProperties}
                      >
                        {word}
                      </span>
                    </span>
                    {i < words.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </h1>
              <p className="hero-in text-base text-muted leading-relaxed max-w-lg" style={{ "--i": words.length + 1 } as CSSProperties}>
                {siteConfig.homeHero.intro}
              </p>
              <p
                className="hero-in font-serif italic text-lg sm:text-xl text-body/90 leading-snug max-w-lg"
                style={{ "--i": words.length + 2 } as CSSProperties}
              >
                {siteConfig.tagline}
              </p>
            </div>

            <div className="hero-in flex flex-wrap items-center gap-3" style={{ "--i": words.length + 3 } as CSSProperties}>
              <Link href="/shop" data-magnetic className="ui-btn hero-cta bg-bottle-green text-ivory hover:bg-bottle-green-hover shadow-sm">
                Shop the collection
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/shop/arabic-perfumes"
                className="ui-btn border-sand text-ink hover:border-bottle-green hover:text-bottle-green bg-white/60 backdrop-blur"
              >
                Arabic signatures
              </Link>
            </div>
          </div>

          {/* 3D stage */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 relative flex flex-col items-center">
            <div
              ref={stageRef}
              className="hero-stage relative w-full max-w-[460px] sm:max-w-lg lg:max-w-xl h-[min(52vh,400px)] sm:h-[min(58vh,470px)] lg:h-[500px]"
            >
              <div className="hero-glow" aria-hidden="true" />

              {MOTES.map((m, i) => (
                <span
                  key={i}
                  className="hero-mote"
                  aria-hidden="true"
                  style={{ "--l": `${m.l}%`, "--d": `${m.d}s`, "--s": `${m.s}s`, "--z": `${m.z}px` } as CSSProperties}
                />
              ))}

              <div className="hero-rig">
                <div className="hero-ring hero-ring--a" aria-hidden="true">
                  <span className="hero-ring-dot" />
                </div>
                <div className="hero-ring hero-ring--b" aria-hidden="true">
                  <span className="hero-ring-dot" />
                </div>

                <div className="hero-float">
                  {slides.map((slide, i) => (
                    <div key={slide.slug} className="hero-slide" data-state={slideState(i)} aria-hidden={i !== index}>
                      <div className="hero-bottle">
                        <Image
                          src={slide.imageUrl}
                          alt={`${slide.product.brand} ${slide.product.name}`}
                          width={600}
                          height={750}
                          priority={i === 0}
                          sizes="(max-width: 1024px) 80vw, 560px"
                          className="h-full w-auto max-w-full object-contain"
                        />
                        <span
                          className="hero-sheen"
                          aria-hidden="true"
                          style={{ maskImage: `url(${slide.imageUrl})`, WebkitMaskImage: `url(${slide.imageUrl})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hero-floor" aria-hidden="true" />
              </div>
            </div>

            {/* Caption + controls */}
            <div className="relative z-10 mt-2 sm:mt-4 w-full max-w-md flex items-center justify-between gap-4">
              {count > 1 && (
                <button type="button" onClick={goPrev} className="hero-nav" aria-label="Previous fragrance">
                  <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                </button>
              )}

              <Link
                key={active.slug}
                href={`/products/${active.product.slug}`}
                className="hero-caption group flex-1 text-center"
                aria-live="polite"
              >
                <span className="block ui-eyebrow text-gold">{active.product.brand}</span>
                <span className="block font-serif text-xl sm:text-2xl text-ink leading-tight group-hover:text-bottle-green transition-colors">
                  {active.product.name}
                </span>
                <span className="block text-sm text-muted tabular-nums">{formatPrice(active.product.price)}</span>
              </Link>

              {count > 1 && (
                <button type="button" onClick={goNext} className="hero-nav" aria-label="Next fragrance">
                  <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                </button>
              )}
            </div>

            {count > 1 && (
              <div className="relative z-10 mt-4 flex items-center gap-2" role="tablist" aria-label="Featured fragrances">
                {slides.map((slide, i) => (
                  <button
                    key={slide.slug}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${slide.product.name}`}
                    onClick={() => goTo(i, i > index ? 1 : -1)}
                    className={`hero-dot ${i === index ? "is-active" : ""}`}
                  >
                    {i === index && !reduceMotion && (
                      <span
                        key={index}
                        className="hero-dot-fill"
                        style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                        onAnimationEnd={goNext}
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
