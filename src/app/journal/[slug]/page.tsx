import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getArticles } from "@/lib/data/content";
import { productRepository } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Clock, Calendar, ArrowLeft } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      images: [{ url: article.featuredImage }],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Fetch mentioned products
  const relatedProducts = await Promise.all(
    article.relatedProductSlugs.map((s) => productRepository.getBySlug(s))
  );
  const validProducts = relatedProducts.filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Journal", url: "/journal" },
            { name: article.title, url: `/journal/${article.slug}` },
          ]}
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Block */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs text-[#89796F] uppercase tracking-wider">
            <span className="text-[#C6A46A] font-semibold">{article.category}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38251F] leading-tight">
            {article.title}
          </h1>

          <p className="text-sm text-[#89796F] font-light">
            By <strong className="text-[#38251F]">{article.author}</strong>
          </p>
        </div>

        {/* Hero Featured Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#241915] border border-[#D9C2B8]/60">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        {/* Content Body */}
        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/60 p-6 sm:p-10 space-y-6 text-sm text-[#292522] leading-relaxed font-light">
          {article.content.split("\n\n").map((para, idx) => {
            if (para.startsWith("### ")) {
              return (
                <h3 key={idx} className="font-serif text-2xl text-[#38251F] pt-4 font-normal">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n- ");
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#38251F]">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            if (para.startsWith("1. ") || para.startsWith("2. ")) {
              const items = para.split(/\n\d+\.\s/);
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#38251F]">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^\d+\.\s/, "")}</li>
                  ))}
                </ol>
              );
            }
            return <p key={idx}>{para}</p>;
          })}
        </div>

        {/* Cross-linked Mentioned Fragrances */}
        {validProducts.length > 0 && (
          <div className="pt-8 border-t border-[#D9C2B8]/40 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold">
                Mentioned in This Article
              </span>
              <h2 className="font-serif text-2xl text-[#38251F]">
                Featured Fragrances
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
              {validProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}

        <div className="pt-8">
          <Link
            href="/journal"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#38251F] hover:text-[#C6A46A]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
