const HOUSES = [
  "Lattafa",
  "Afnan",
  "Paris Corner",
  "Maison Alhambra",
  "Khadlaj",
  "Armaf",
  "Bath & Body Works",
];

const NOTES = ["Oud", "Amber", "Saffron", "Rose", "Vanilla", "Musk", "Sandalwood", "Bergamot", "Pistachio", "Tonka"];

function Track({ items, outline = false }: { items: string[]; outline?: boolean }) {
  // Two identical halves so the loop is seamless at -50%.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-track">
      {doubled.map((item, i) => (
        <span key={`${item}-${i}`} className="marquee-item">
          <span className={outline ? "marquee-outline" : ""}>{item}</span>
          <span className="marquee-gem" />
        </span>
      ))}
    </div>
  );
}

/** Decorative ribbon of houses and notes; the real links live in the sections below. */
export function HouseMarquee() {
  return (
    <section data-motion-skip aria-hidden="true" className="marquee surface-dark bg-deep-brown py-6 sm:py-8 overflow-hidden">
      <div className="marquee-row">
        <Track items={HOUSES} />
      </div>
      <div className="marquee-row marquee-row--reverse mt-2 sm:mt-3">
        <Track items={NOTES} outline />
      </div>
    </section>
  );
}
