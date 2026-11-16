import { ReactNode } from "react";

interface LattafaSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  altBg?: boolean;
}

export function LattafaSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  altBg = false,
}: LattafaSectionProps) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-16 border-b border-sand/60 ${altBg ? "bg-ivory" : "bg-white"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="max-w-3xl space-y-3">
          {eyebrow && <p className="ui-eyebrow text-gold">{eyebrow}</p>}
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-medium leading-tight">{title}</h2>
          {intro && <p className="text-sm sm:text-base text-body leading-relaxed">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}