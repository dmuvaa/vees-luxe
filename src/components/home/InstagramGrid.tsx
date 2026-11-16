import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/shared/Icons";

const instaPhotos = [
  { src: "/images/products/asad.jpeg", alt: "Lattafa Asad bottle" },
  { src: "/images/products/yara.jpeg", alt: "Lattafa Yara bottle" },
  { src: "/images/products/her-confession.jpeg", alt: "Her Confession luxury box" },
  { src: "/images/products/vintage-radio.jpeg", alt: "Vintage Radio Lattafa Pride" },
  { src: "/images/products/teriaq.jpeg", alt: "Lattafa Teriaq serpent bottle" },
  { src: "/images/products/khair-pistachio.jpeg", alt: "Paris Corner Khair Pistachio" },
  { src: "/images/products/delilah-pour-femme.jpeg", alt: "Delilah Pour Femme" },
  { src: "/images/products/9pm.jpeg", alt: "Afnan 9pm bottle" },
  { src: "/images/products/badee-al-oud-amethyst.jpeg", alt: "Bade'e Al Oud Amethyst" },
  { src: "/images/products/his-confession.jpeg", alt: "Lattafa His Confession" },
];

export function InstagramGrid() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Social Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Follow the World of Vee&apos;s Luxe Foundry
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Discover new arrivals, fragrance highlights, collection updates and a closer look at the scents we love. Follow Vee&apos;s Luxe Foundry on Instagram for product features, fragrance inspiration and updates from our collection.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {instaPhotos.map((item, idx) => (
            <a
              key={idx}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#241915] border border-[#E5DCD3]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#241915]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <InstagramIcon className="w-6 h-6 text-[#F9F6F0]" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-4">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
