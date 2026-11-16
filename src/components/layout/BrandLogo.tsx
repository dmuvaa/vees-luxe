import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <Image
        src="/brand/logo-bright.png"
        alt=""
        width={48}
        height={48}
        className="w-10 h-10 sm:w-11 sm:h-11 object-contain contrast-[1.12] saturate-[1.15] drop-shadow-[0_1px_2px_rgba(42,24,16,0.25)] drop-shadow-[0_0_14px_rgba(245,195,55,0.45)]"
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