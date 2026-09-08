"use client";

import { useRef, type CSSProperties, type PointerEvent } from "react";

/** Stylized fabric layers, rendered with CSS perspective and woven textures. */
export function FabricSculpture({ variant = 0, hero = false }: { variant?: number; hero?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty("--turn", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 18}deg`);
    ref.current?.style.setProperty("--lean", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -12}deg`);
  }

  function reset() {
    ref.current?.style.setProperty("--turn", "0deg");
    ref.current?.style.setProperty("--lean", "0deg");
  }

  const palettes = [
    ["#b9c6a4", "#778866", "#3e5443"],
    ["#d4c6ac", "#a29479", "#716b54"],
    ["#c0d5d0", "#85a7a0", "#4e7770"],
    ["#d5b982", "#aa894e", "#786239"],
    ["#c4c6bb", "#8a9184", "#535f55"],
    ["#b6b9cb", "#868aa4", "#535c79"],
  ];

  return (
    <div ref={ref} className={`fabric-sculpture ${hero ? "fabric-sculpture-hero" : ""}`} onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
      <div className="fabric-sculpture-orbit" />
      <div className="fabric-sculpture-stack">
        {palettes[variant % palettes.length].map((color, index) => (
          <div key={color} className={`fabric-sculpture-layer fabric-weave-${variant % 3}`} style={{ "--fabric-color": color, "--layer": index } as CSSProperties} />
        ))}
      </div>
    </div>
  );
}
