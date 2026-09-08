"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const cards = [
  { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788855362/1826_hlw8gw.jpg", label: "Single Jersey", alt: "Close view of smooth knitted fabric", position: "18% center" },
  { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788855359/2149305950_pqji1t.jpg", label: "Textured Knit", alt: "Close view of textured knitted fabric", position: "50% center" },
  { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788855359/1949_o1rwq7.jpg", label: "Stretch Knit", alt: "Close view of stretch knitted fabric", position: "82% center" },
   { src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788855356/2149285589_fbq2br.jpg", label: "Stretch Knit", alt: "Close view of stretch knitted fabric", position: "82% center" },
];

export function BannerCards() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="banner-cards relative w-full max-w-[416px] self-end lg:absolute lg:bottom-8 lg:right-8 lg:w-[416px]" role="region" aria-label="Mill highlights" data-paused={paused}>
      <div className="mb-2 flex items-center justify-between px-1">
        <p className="text-[12px] font-bold uppercase tracking-[.18em] text-white [text-shadow:0_1px_5px_#000]">RMS at a glance</p>
       
      </div>
      <div className="overflow-hidden rounded-2xl">
        <div className="banner-cards-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-2 pr-2" aria-hidden={copy === 1 ? true : undefined}>
              {cards.map(({ src, label, alt, position }) => (
                <div key={`${copy}-${label}-${src}`} className="w-[128px] overflow-hidden rounded-2xl border border-white/55 shadow-[0_12px_30px_rgba(0,0,0,.18)]">
                  <div className="relative h-40 overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt={copy === 0 ? alt : ""}
                      fill
                      sizes="116px"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      style={{ objectPosition: position }}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-forest-950/85 to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 px-3 pb-2.5 text-[10px] font-bold uppercase tracking-[.12em] text-white">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
