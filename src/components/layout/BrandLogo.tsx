import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <Image
        src="/brand/logo-mark.svg"
        alt=""
        width={44}
        height={44}
        className="w-9 h-9 sm:w-10 sm:h-10 drop-shadow-[0_0_12px_rgba(245,208,97,0.35)]"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-sm tracking-[0.1em] uppercase text-ink group-hover:text-bottle-green transition-colors">
          Vee&apos;s Luxe
        </span>
        <span className="ui-eyebrow text-gold -mt-0.5">
          Foundry
        </span>
      </span>
    </Link>
  );
}