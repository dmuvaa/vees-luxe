import { FragranceNotes } from "@/types/product";
import { Sparkles, Heart, Anchor } from "lucide-react";

interface FragrancePyramidProps {
  notes?: FragranceNotes;
}

export function FragrancePyramid({ notes }: FragrancePyramidProps) {
  if (!notes || (!notes.top.length && !notes.heart.length && !notes.base.length)) {
    return null;
  }

  return (
    <div className="bg-[#FFFDF9] border border-[#D9C2B8]/60 p-6 md:p-8 space-y-6">
      <div className="border-b border-[#D9C2B8]/40 pb-4">
        <h3 className="font-serif text-xl text-[#38251F]">
          The Olfactory Pyramid
        </h3>
        <p className="text-xs text-[#89796F] mt-1 font-light">
          Experience the evolution of this luxury fragrance as it unfolds on your skin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Notes */}
        {notes.top.length > 0 && (
          <div className="space-y-2.5 p-4 bg-[#F8F4ED]/60 border-l-2 border-[#C6A46A]">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C6A46A]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Top Notes
              </span>
            </div>
            <p className="text-sm text-[#89796F]">
              First impression (0 – 20 mins)
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {notes.top.map((note) => (
                <span
                  key={note}
                  className="text-xs bg-[#FFFDF9] border border-[#D9C2B8]/70 px-2.5 py-1 text-[#292522]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Heart Notes */}
        {notes.heart.length > 0 && (
          <div className="space-y-2.5 p-4 bg-[#F8F4ED]/60 border-l-2 border-[#38251F]">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-[#38251F]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Heart Notes
              </span>
            </div>
            <p className="text-sm text-[#89796F]">
              Core character (2 – 5 hours)
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {notes.heart.map((note) => (
                <span
                  key={note}
                  className="text-xs bg-[#FFFDF9] border border-[#D9C2B8]/70 px-2.5 py-1 text-[#292522]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Base Notes */}
        {notes.base.length > 0 && (
          <div className="space-y-2.5 p-4 bg-[#F8F4ED]/60 border-l-2 border-[#241915]">
            <div className="flex items-center space-x-2">
              <Anchor className="w-4 h-4 text-[#241915]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#38251F]">
                Base Notes
              </span>
            </div>
            <p className="text-sm text-[#89796F]">
              Enduring sillage (8 – 14+ hours)
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {notes.base.map((note) => (
                <span
                  key={note}
                  className="text-xs bg-[#FFFDF9] border border-[#D9C2B8]/70 px-2.5 py-1 text-[#292522]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
