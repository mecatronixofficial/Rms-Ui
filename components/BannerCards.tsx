"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const cards = [
  { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788784755/2149620473_qv7epw.jpg", label: "Single Jersey", alt: "Close view of smooth knitted fabric", position: "18% center" },
  { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788781107/2148350149_cljqiz.jpg", label: "Textured Knit", alt: "Close view of textured knitted fabric", position: "50% center" },
  { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788780258/close-up-knitting-needles-wool_eaebj6.jpg", label: "Stretch Knit", alt: "Close view of stretch knitted fabric", position: "82% center" },
];

export function BannerCards() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="banner-cards relative w-full max-w-[416px] self-end lg:absolute lg:bottom-8 lg:right-8 lg:w-[416px]" role="region" aria-label="Mill highlights" data-paused={paused}>
      <div className="mb-2 flex items-center justify-between px-1">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white [text-shadow:0_1px_5px_#000]">RMS at a glance</p>
        <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play scrolling cards" : "Pause scrolling cards"} className="grid size-7 place-items-center rounded-full border border-white/80 bg-white/80 text-forest-950">
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <div className="banner-cards-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-2 pr-2" aria-hidden={copy === 1 ? true : undefined}>
              {cards.map(({ src, label, alt, position }) => (
                <div key={label} className="w-[128px] rounded-2xl border border-white/90 bg-white/85 p-1.5 text-forest-950 shadow-[0_12px_30px_rgba(0,0,0,.18)] backdrop-blur-xl">
                  <div className="relative h-28 overflow-hidden rounded-xl sm:h-32">
                    <Image
                      src={src}
                      alt={copy === 0 ? alt : ""}
                      fill
                      sizes="116px"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      style={{ objectPosition: position }}
                    />
                  </div>
                  <p className="px-1 pb-1 pt-1 text-[10px] font-semibold text-forest-700">{label}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
