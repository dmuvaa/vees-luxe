"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/types/product";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fallback = "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000";
  const currentImage = images[selectedIndex]?.url || fallback;

  return (
    <div className="space-y-4">
      {/* Primary Display Frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FFFDF9] border border-[#D9C2B8]/60 shadow-sm">
        <Image
          src={currentImage}
          alt={images[selectedIndex]?.alt || productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-300"
        />
      </div>

      {/* Thumbnails (when multiple images are available) */}
      {images.length > 1 && (
        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 flex-shrink-0 border-2 overflow-hidden bg-[#FFFDF9] transition-all ${
                selectedIndex === idx
                  ? "border-[#C6A46A] shadow-sm scale-95"
                  : "border-[#D9C2B8]/50 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt || `${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
