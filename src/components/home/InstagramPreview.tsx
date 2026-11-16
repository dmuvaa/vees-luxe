import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";

const instagramPosts = [
  {
    image: "/images/products/khair-pistachio.jpeg",
    caption: "Paris Corner Khair Pistachio — pistachio gelato vibes, straight from our Nairobi collection.",
  },
  {
    image: "/images/products/club-de-nuit-intense.jpeg",
    caption: "Armaf Club de Nuit Intense — crisp citrus opening, smoky birch heart. Ready for dispatch.",
  },
  {
    image: "/images/products/yara-pink-edition.jpeg",
    caption: "Lattafa Yara Pink Edition and Yara Tous — creamy vanilla vs tropical mango.",
  },
  {
    image: "/images/products/shiyaaka-sky.jpeg",
    caption: "Khadlaj Shiyaaka Sky — fresh marine citrus for sunny Nairobi days.",
  },
];

export function InstagramPreview() {
  return (
    <section className="py-20 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
              Social Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
              Follow Us on Instagram
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />
          </div>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#38251F] hover:text-[#C6A46A] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#C6A46A]" />
            <span>{siteConfig.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, idx) => (
            <a
              key={idx}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#241915] border border-[#D9C2B8]/40"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#241915]/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-[#F8F4ED]">
                <InstagramIcon className="w-5 h-5 text-[#C6A46A] self-end" />
                <p className="text-xs text-[#D9C2B8] line-clamp-3 font-light">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}