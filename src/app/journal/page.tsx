import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/lib/data/content";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "The Fragrance Journal | Perfume Guides in Kenya | Vee's Luxe Foundry",
  description: "Explore expert fragrance buying guides, perfume reviews, Arabian scent layering tips, and longevity insights from Vee's Luxe Foundry in Nairobi.",
};

export default async function JournalPage() {
  const articles = await getArticles();

  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "The Fragrance Journal", url: "/journal" },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Editorial & Insights
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38251F]">
            The Fragrance Journal
          </h1>
          <div className="w-12 h-0.5 bg-[#C6A46A]" />
          <p className="text-sm text-[#89796F] font-light leading-relaxed">
            Expert guidance, scent layering secrets, and buying advice curated specifically for the Kenyan climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-[#FFFDF9] border border-[#D9C2B8]/50 overflow-hidden flex flex-col justify-between group hover:border-[#C6A46A] transition-all duration-300"
            >
              <Link href={`/journal/${article.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-[#241915]">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-[#89796F] uppercase tracking-wider">
                    <span className="text-[#C6A46A] font-semibold">{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl text-[#38251F] group-hover:text-[#C6A46A] transition-colors leading-snug">
                    <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#89796F] font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9C2B8]/40 flex items-center justify-between">
                  <span className="text-xs text-[#89796F] font-light">
                    By {article.author}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest font-semibold text-[#38251F] group-hover:text-[#C6A46A]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
