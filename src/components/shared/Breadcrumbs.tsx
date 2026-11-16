import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

interface BreadcrumbsProps {
  items: { name: string; url: string }[];
  /** Use on deep-brown / dark hero backgrounds */
  onDark?: boolean;
}

export function Breadcrumbs({ items, onDark = false }: BreadcrumbsProps) {
  const jsonLd = generateBreadcrumbJsonLd(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`py-3 text-xs ${onDark ? "text-[#D9C2B8]" : "text-muted"}`}
      >
        <ol className="flex items-center space-x-1.5 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center space-x-1.5">
                {index === 0 && <Home className="w-3.5 h-3.5 mr-0.5 text-gold" />}
                {isLast ? (
                  <span
                    className={`font-medium truncate max-w-[200px] sm:max-w-none ${
                      onDark ? "text-ivory" : "text-ink"
                    }`}
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className={`transition-colors ${
                        onDark ? "text-[#D9C2B8] hover:text-ivory" : "text-muted hover:text-ink"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <ChevronRight className={`w-3 h-3 ${onDark ? "text-[#C6A46A]/80" : "text-sand"}`} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
