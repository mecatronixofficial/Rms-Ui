"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

type Trait = readonly [string, string, string, string];

export function FabricComparisonCarousel({ items }: { items: readonly Trait[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => setActive(previous => (previous + 1) % items.length), 1800);
    return () => window.clearInterval(timer);
  }, [hovered, focused, reducedMotion, items.length]);

  function step(direction: number) {
    setActive(previous => (previous + direction + items.length) % items.length);
  }

  return (
    <div className="comparison-coverflow" role="region" aria-roledescription="carousel" aria-label="Fabric quick comparison"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); } if (event.key === "ArrowRight") { event.preventDefault(); step(1); } }}>
      <div className="comparison-coverflow-stage">
        {items.map(([name, surface, character, application], index) => {
          let offset = (index - active + items.length) % items.length;
          if (offset > items.length / 2) offset -= items.length;
          const distance = Math.abs(offset);
          return (
            <article key={name} className="comparison-coverflow-slide" aria-hidden={index !== active} inert={index !== active}
              role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${items.length}: ${name}`}
              style={{ "--offset": offset, "--depth": distance, zIndex: 10 - distance, opacity: distance > 2 ? 0 : 1, pointerEvents: index === active ? "auto" : "none" } as CSSProperties}>
              <div className="relative h-24 overflow-hidden rounded-b-[18px] sm:h-28">
                <Image src="/fabric-swatches.webp" alt="Illustrative knitted fabric textures" fill sizes="280px" className="object-cover" style={{ objectPosition: `${index * 20}% center`, transform: `scale(${1 + index * .13})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
                <span className="absolute bottom-3 left-4 text-[9px] font-semibold uppercase tracking-[.16em] text-white">Fabric study / 0{index + 1}</span>
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg font-bold tracking-tight text-forest-950">{name}</h3>
                <p className="mt-1 text-xs text-forest-500">{surface}</p>
                <dl className="mt-2 grid gap-1.5 border-t border-forest-100 pt-2">
                  <div><dt className="text-[9px] font-semibold uppercase tracking-wider text-forest-400">Character</dt><dd className="mt-0.5 text-xs font-medium text-forest-800">{character}</dd></div>
                  <div><dt className="text-[9px] font-semibold uppercase tracking-wider text-forest-400">Application</dt><dd className="mt-0.5 text-xs font-medium text-forest-800">{application}</dd></div>
                </dl>
                <Link href="/contact" className="mt-2 flex items-center justify-between border-t border-forest-100 pt-2 text-xs font-semibold text-forest-800">Discuss this fabric <span className="grid size-8 place-items-center rounded-full bg-forest-950 text-white"><ArrowRight size={16} /></span></Link>
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
