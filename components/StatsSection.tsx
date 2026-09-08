"use client";

import { useEffect, useRef, useState } from "react";
import { Factory, Gauge, Layers3, ScanLine, type LucideIcon } from "lucide-react";

type Stat = { icon: LucideIcon; numericTarget: number; label: string; suffix?: string };

function StatCard({ stat, index, isVisible }: { stat: Stat; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(stat.numericTarget);

  useEffect(() => {
    if (!isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let start: number | undefined;
    setCount(0);
    const timer = window.setTimeout(() => {
      const tick = (time: number) => {
        start ??= time;
        const progress = Math.min((time - start) / 1100, 1);
        setCount(Math.round(stat.numericTarget * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }, index * 150);
    return () => { window.clearTimeout(timer); window.cancelAnimationFrame(frame); };
  }, [isVisible, index, stat.numericTarget]);

  const Icon = stat.icon;
  return (
    <div className={`p-3.5 ${index < 3 ? "border-b border-emerald-900/10" : ""} ${index % 2 === 0 ? "sm:border-r" : ""} ${index >= 2 ? "sm:border-b-0" : ""} lg:border-b-0 ${index < 3 ? "lg:border-r" : ""}`}>
      <span className="mb-2 grid size-8 place-items-center rounded-lg bg-emerald-50 text-emerald-800"><Icon size={19} aria-hidden="true" /></span>
      <p className="font-display text-[28px] font-bold tracking-tight text-forest-950">
        <span aria-hidden="true">{count}{stat.suffix}</span>
        <span className="sr-only">{stat.numericTarget}{stat.suffix}</span>
      </p>
      <p className="mt-1 text-xs font-medium text-forest-500">{stat.label}</p>
    </div>
  );
}

export function StatsSection({ totalMachines, diameterOptions, fabricCount }: { totalMachines: number; diameterOptions: number; fabricCount: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const stats: Stat[] = [
    { icon: Factory, numericTarget: totalMachines, label: "Circular knitting machines" },
    { icon: Gauge, numericTarget: diameterOptions, label: "Diameter options" },
    { icon: ScanLine, numericTarget: 24, suffix: " GG", label: "Machine gauge" },
    { icon: Layers3, numericTarget: fabricCount, label: "Fabric directions" },
  ];

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { setIsVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-label="RMS in numbers" className="relative bg-emerald-50/40 px-6 py-6 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-[0_20px_60px_-30px_rgba(6,60,40,0.35)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />)}
      </div>
    </section>
  );
}
