import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section data-motion-skip className="relative overflow-hidden bg-ivory">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <p className="hero-in ui-eyebrow text-gold" style={{ ["--i" as string]: 0 }}>
            Error 404
          </p>
          <p className="hero-in nf-number text-gold-foil" style={{ ["--i" as string]: 1 }} aria-hidden="true">
            404
          </p>
          <h1 className="hero-in font-serif text-3xl sm:text-4xl text-ink font-medium leading-tight" style={{ ["--i" as string]: 2 }}>
            This scent has evaporated.
          </h1>
          <p className="hero-in text-muted leading-relaxed max-w-md mx-auto md:mx-0" style={{ ["--i" as string]: 3 }}>
            The page you&apos;re looking for has moved or no longer exists. The rest of the collection is right where you
            left it.
          </p>
          <div className="hero-in flex flex-wrap gap-3 justify-center md:justify-start" style={{ ["--i" as string]: 4 }}>
            <Link href="/shop" className="ui-btn hero-cta bg-bottle-green text-ivory hover:bg-bottle-green-hover">
              Browse the collection
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link href="/" className="ui-btn border-sand text-ink hover:border-bottle-green hover:text-bottle-green bg-white/60">
              Back home
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="hero-glow" aria-hidden="true" />
          <Image
            src="/images/his-confession-bg-free.png"
            alt=""
            width={420}
            height={525}
            className="nf-bottle relative h-[300px] sm:h-[420px] w-auto object-contain drop-shadow-[0_30px_40px_rgba(42,24,16,0.2)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
