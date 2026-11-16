export function UnderstandingNotes() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Olfactory Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Understanding Top, Heart and Base Notes
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Have you ever noticed that a perfume smells different a few minutes after applying it? This is part of how fragrance develops. Many perfumes are structured around three layers known as top notes, heart notes and base notes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top Notes */}
          <div className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold block">
              Layer 01
            </span>
            <h3 className="font-serif text-2xl text-[#241915]">
              Top Notes: The First Impression
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              Top notes are usually the first scents you notice after applying a perfume. They help introduce the fragrance and create its initial character.
            </p>
            <div className="pt-2">
              <span className="text-sm uppercase tracking-wider text-[#241915] font-semibold block mb-2">Common notes:</span>
              <div className="flex flex-wrap gap-1.5">
                {["Bergamot", "Lemon", "Orange", "Grapefruit", "Apple", "Aromatic herbs"].map((n) => (
                  <span key={n} className="text-xs bg-[#F0EAE1] px-2.5 py-1 text-[#241915]">{n}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Heart Notes */}
          <div className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold block">
              Layer 02
            </span>
            <h3 className="font-serif text-2xl text-[#241915]">
              Heart Notes: The Character
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              As the opening notes begin to fade, the heart notes become more noticeable. These notes form an important part of the fragrance&apos;s identity.
            </p>
            <div className="pt-2">
              <span className="text-sm uppercase tracking-wider text-[#241915] font-semibold block mb-2">Common notes:</span>
              <div className="flex flex-wrap gap-1.5">
                {["Rose", "Jasmine", "Lavender", "Cinnamon", "Cardamom", "Geranium"].map((n) => (
                  <span key={n} className="text-xs bg-[#F0EAE1] px-2.5 py-1 text-[#241915]">{n}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Base Notes */}
          <div className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C6A46A] font-semibold block">
              Layer 03
            </span>
            <h3 className="font-serif text-2xl text-[#241915]">
              Base Notes: The Deeper Foundation
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              Base notes contribute depth and warmth to a fragrance. They often become more noticeable as the perfume develops over time.
            </p>
            <div className="pt-2">
              <span className="text-sm uppercase tracking-wider text-[#241915] font-semibold block mb-2">Common notes:</span>
              <div className="flex flex-wrap gap-1.5">
                {["Oud", "Sandalwood", "Cedarwood", "Musk", "Amber", "Vanilla", "Patchouli"].map((n) => (
                  <span key={n} className="text-xs bg-[#F0EAE1] px-2.5 py-1 text-[#241915]">{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
