"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

/**
 * Mouse-tracked 3D tilt wrapper with a moving glare highlight.
 * Wrap any card content in this to get a subtle interactive tilt on hover.
 */
export function TiltCard({
  children,
  className = "",
  strength = 6,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -strength;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * strength;
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.45 });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4), transparent 55%)`,
        }}
      />
    </div>
  );
}

/**
 * Ambient, slow-drifting decorative rings and dots for the hero background.
 * Purely visual (aria-hidden) and disabled under prefers-reduced-motion.
 */
export function GraphicMotion() {
  return (
    <>
      <style>{`
        @keyframes drift-a { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-14px, 18px) rotate(8deg); } }
        @keyframes drift-b { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(16px, -14px) rotate(-6deg); } }
        @keyframes drift-dot { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-10px); opacity: .95; } }
        @media (prefers-reduced-motion: reduce) {
          .drift-a, .drift-b, .drift-dot { animation: none !important; }
        }
      `}</style>
      <div
        aria-hidden
        className="drift-a pointer-events-none absolute -right-32 top-20 size-[28rem] rounded-full border border-leaf-400/20"
        style={{ animation: "drift-a 14s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="drift-b pointer-events-none absolute -right-16 top-36 size-72 rounded-full border border-leaf-400/20"
        style={{ animation: "drift-b 11s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="drift-dot pointer-events-none absolute right-24 top-56 size-2.5 rounded-full bg-leaf-300/60"
        style={{ animation: "drift-dot 5s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="drift-dot pointer-events-none absolute right-56 top-28 size-1.5 rounded-full bg-leaf-300/50"
        style={{ animation: "drift-dot 6.5s ease-in-out infinite .8s" }}
      />
    </>
  );
}
