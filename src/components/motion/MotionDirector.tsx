"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide motion layer. Mounted once in the root layout, it scans `main section`
 * blocks after each navigation and wires up, without touching section markup:
 *  - staggered scroll reveals (text lifts, cards rise in 3D, images wipe open)
 *  - pointer-driven 3D tilt with a light glare on cards (fine pointers only)
 *  - scroll parallax on large feature images
 *  - magnetic primary buttons and a pointer spotlight on dark sections
 *  - a gold reading-progress bar
 * Everything is skipped under prefers-reduced-motion.
 */

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "TEMPLATE", "BR", "HR"]);
const LEAF_TAGS = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "A", "BUTTON", "IMG", "FORM", "BLOCKQUOTE", "DETAILS", "LABEL", "INPUT", "SELECT"]);

function hasBox(cs: CSSStyleDeclaration) {
  return (
    parseFloat(cs.borderTopWidth) > 0 ||
    parseFloat(cs.borderLeftWidth) > 0 ||
    (cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent")
  );
}

type Kind = "text" | "card" | "media";

function classify(el: HTMLElement, cs: CSSStyleDeclaration, inGrid: boolean): Kind {
  const img = el.tagName === "IMG" ? el : el.querySelector("img");
  if (img && el.children.length <= 2 && cs.overflow === "hidden" && !el.querySelector("h2,h3,p")) return "media";
  if (inGrid && (hasBox(cs) || el.tagName === "ARTICLE")) return "card";
  return "text";
}

function collect(container: Element, out: { el: HTMLElement; kind: Kind }[], depth: number, inGrid: boolean) {
  for (const node of Array.from(container.children)) {
    const el = node as HTMLElement;
    if (SKIP_TAGS.has(el.tagName) || el.hasAttribute("data-motion-skip")) continue;
    const cs = getComputedStyle(el);
    if (cs.position === "absolute" || cs.position === "fixed" || cs.display === "none" || cs.display === "contents") continue;
    if (el.offsetHeight < 4) continue;

    const kids = Array.from(el.children).filter((k) => !SKIP_TAGS.has(k.tagName));
    const isGrid = cs.display === "grid";
    const blockKids = kids.length >= 2 && kids.every((k) => {
      const d = getComputedStyle(k).display;
      return d !== "inline" && d !== "inline-block" && d !== "inline-flex";
    });
    const isRow = cs.display === "flex" && cs.flexDirection.startsWith("row") && !cs.flexWrap.startsWith("wrap");
    const boxed = hasBox(cs) || el.tagName === "ARTICLE";

    const recurse =
      depth < 4 &&
      !LEAF_TAGS.has(el.tagName) &&
      !boxed &&
      !isRow &&
      blockKids;

    if (recurse) {
      collect(el, out, depth + 1, isGrid);
    } else {
      out.push({ el, kind: classify(el, cs, inGrid) });
    }
  }
}

export function MotionDirector() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];
    let frame = 0;

    // --- Reading progress -------------------------------------------------
    const bar = barRef.current;
    const onScrollBar = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    onScrollBar();
    window.addEventListener("scroll", onScrollBar, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScrollBar));

    if (reduce) {
      return () => cleanups.forEach((fn) => fn());
    }

    const setup = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section:not([data-motion-skip])"));
      const units: { el: HTMLElement; kind: Kind }[] = [];
      sections.forEach((section) => collect(section, units, 0, false));

      const vh = window.innerHeight;
      const parallaxImgs: HTMLImageElement[] = [];

      // --- Reveals ---------------------------------------------------------
      const io = new IntersectionObserver(
        (entries) => {
          const entering = entries
            .filter((e) => e.isIntersecting)
            .map((e) => e.target as HTMLElement)
            .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
          entering.forEach((el, i) => {
            el.style.setProperty("--rd", `${Math.min(i * 85, 600)}ms`);
            el.classList.add("is-in");
            io.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      units.forEach(({ el, kind }) => {
        if (el.dataset.reveal) return;
        const rect = el.getBoundingClientRect();
        const alreadyVisible = rect.top < vh * 0.92 && rect.bottom > 0;
        el.dataset.reveal = kind;
        if (alreadyVisible) {
          el.classList.add("is-in");
        } else {
          io.observe(el);
        }
        if (kind === "card" && el.parentElement) el.parentElement.classList.add("reveal-stage");
        if (kind === "media") {
          const img = el.querySelector("img");
          if (img && el.offsetHeight > 240) {
            img.classList.add("parallax-img");
            parallaxImgs.push(img);
          }
        }
        if (kind === "card" && fine) el.dataset.tilt = "";
      });
      cleanups.push(() => io.disconnect());

      // --- Parallax --------------------------------------------------------
      let ticking = false;
      const updateParallax = () => {
        ticking = false;
        const h = window.innerHeight;
        for (const img of parallaxImgs) {
          const r = img.parentElement!.getBoundingClientRect();
          if (r.bottom < -100 || r.top > h + 100) continue;
          const progress = (r.top + r.height / 2 - h / 2) / h; // -1..1 across the viewport
          img.style.translate = `0 ${(progress * -7).toFixed(2)}%`;
        }
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          frame = requestAnimationFrame(updateParallax);
        }
      };
      updateParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));

      if (!fine) return;

      // --- 3D tilt + glare -------------------------------------------------
      const tiltEls = Array.from(document.querySelectorAll<HTMLElement>("main [data-tilt]"));
      tiltEls.forEach((el) => {
        if (getComputedStyle(el).position === "static") el.style.position = "relative";
        let glare = el.querySelector<HTMLElement>(":scope > .tilt-glare");
        if (!glare) {
          glare = document.createElement("span");
          glare.className = "tilt-glare";
          glare.setAttribute("aria-hidden", "true");
          el.appendChild(glare);
        }
        let raf = 0;
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.classList.add("is-tilting");
            el.style.transform = `perspective(1000px) rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 11).toFixed(2)}deg) translateZ(0)`;
            el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
            el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
          });
        };
        const leave = () => {
          cancelAnimationFrame(raf);
          el.classList.remove("is-tilting");
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });

      // --- Magnetic buttons ------------------------------------------------
      const magnets = Array.from(
        document.querySelectorAll<HTMLElement>("main a.ui-btn:not(.ui-btn-block), main [data-magnetic]")
      ).filter((el) => !el.closest("[data-tilt]"));
      magnets.forEach((el) => {
        el.classList.add("magnetic");
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${(x * 0.22).toFixed(1)}px, ${(y * 0.3).toFixed(1)}px)`;
        };
        const leave = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });

      // --- Spotlight on dark sections -------------------------------------
      document.querySelectorAll<HTMLElement>("main section.surface-dark").forEach((el) => {
        el.classList.add("spotlight");
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        el.addEventListener("pointermove", move);
        cleanups.push(() => el.removeEventListener("pointermove", move));
      });
    };

    // Let the new route paint before measuring.
    const start = requestAnimationFrame(() => requestAnimationFrame(setup));
    cleanups.push(() => cancelAnimationFrame(start));

    return () => {
      cancelAnimationFrame(frame);
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
