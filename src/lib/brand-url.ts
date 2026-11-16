/** Public URL for a brand — Lattafa uses the dedicated /lattafa landing page. */
export function brandPageHref(brandSlug: string): string {
  if (brandSlug === "lattafa") return "/lattafa";
  return `/brands/${brandSlug}`;
}