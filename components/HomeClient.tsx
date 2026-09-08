"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardList, Gauge, Layers3, MapPin, ScanLine, Settings2, Sparkles } from "lucide-react";
import { BannerCards } from "./BannerCards";
import { StatsSection } from "./StatsSection";
import { CTA } from "./Shared";
import { address, fabrics, machineRows } from "./site-data";

const process = [
  [ClipboardList, "01", "Understand the brief", "Construction, yarn, GSM, stretch, width and quantity establish the starting point."],
  [Settings2, "02", "Plan the machine", "Diameter, feeders, track design and Lycra setup are considered against the fabric."],
  [Gauge, "03", "Run the construction", "The selected setup is used to develop and produce the agreed knitted structure."],
  [ScanLine, "04", "Review and prepare", "Fabric appearance is reviewed before the agreed handover or dispatch stage."],
] as const;

const pathways = [
  [Layers3, "Fabric capabilities", "Explore six documented directions across jersey, texture, fleece and stretch knits.", "/products", "View fabrics"],
  [Gauge, "Machine range", "Review all seven diameters, feeder counts and the complete 24 GG Pailung setup.", "/machines", "View machines"],

] as const;

/**
 * Mouse-tracked 3D tilt wrapper with a moving glare highlight.
 * Used for the pathways cards.
 */
function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.5 });
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

export default function HomeClient() {
  const totalMachines = machineRows.reduce((total, row) => total + row.machines, 0);

  return (
    <>
      <div className="bg-white p-2 sm:p-3">
      <section className="relative min-h-[600px] overflow-hidden rounded-[24px] pt-24 text-white sm:min-h-[620px] sm:rounded-[30px]">
        <Image src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788852239/awqs_p05nvj.png" alt="Visual representation of a circular knitting production floor" fill priority sizes="100vw" className="object-cover object-center" />


        <div className="container-pad relative flex min-h-[500px] flex-col justify-end gap-8 pb-8 pt-32 sm:min-h-[520px] sm:pt-40 lg:pb-12 lg:pt-56">
          <div className="flex w-full max-w-[560px] flex-col items-start gap-2 lg:max-w-[min(560px,calc(100%_-_470px))] [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-leaf-200 backdrop-blur"><Sparkles size={14} /> Imported knitting division / Tiruppur</span>
            <h1 className="font-display text-[28px] font-bold leading-[1.02] tracking-[-.06em] sm:text-[34px] lg:text-[40px]">Precision in every <span className="text-leaf-300">loop we knit.</span></h1>
            <p className="max-w-[500px] text-[13px] leading-[1.4] text-white">RMS Textile Mills combines imported Pailung circular knitting machinery with practical configuration options and direct production communication.</p>
            <div className="flex flex-wrap gap-1.5"><Link href="/products" className="inline-flex items-center gap-2 bg-leaf-400 px-3 py-2 text-xs font-bold text-forest-950 transition hover:bg-leaf-300">Explore fabric capabilities <ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20">Discuss a requirement</Link></div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-[11px] font-semibold text-white"><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-leaf-300" /> 24 GG machines</span><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-leaf-300" /> Four-track design</span><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-leaf-300" /> All-feeder Lycra</span></div>
          </div>
          <BannerCards />
          <p className="absolute bottom-2 left-5 text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Visual representation</p>
        </div>
      </section>
      </div>

      <StatsSection totalMachines={totalMachines} diameterOptions={machineRows.length} fabricCount={fabrics.length} />

      <section id="overview" className="container-pad py-8 md:py-10">
        <div className="relative [perspective:1400px]">
          <div className="absolute inset-x-5 -bottom-3 top-5 rounded-[1.8rem] bg-leaf-200/70 shadow-[0_24px_55px_rgba(16,55,37,.12)]" />
          <TiltCard className="group overflow-hidden rounded-[1.8rem] border border-white/90 bg-gradient-to-br from-white via-[#fbfdf9] to-[#eaf3e6] shadow-[0_28px_80px_rgba(15,50,34,.16)] [transform-style:preserve-3d]">
            <div className="grid items-stretch lg:grid-cols-[.92fr_1.08fr]">
              <div className="relative flex flex-col justify-center p-5 sm:p-6 lg:p-7 [transform:translateZ(26px)]">
                <span className="pointer-events-none absolute -left-20 -top-20 size-52 rounded-full bg-leaf-200/45 blur-3xl" />
                <span className="relative text-[10px] font-bold uppercase tracking-[.22em] text-leaf-700">RMS Textile Mills</span>
                <h2 className="relative mt-2.5 font-display text-3xl font-bold leading-tight tracking-[-.04em] text-forest-950 md:text-[38px]">A focused knitting partner in the Tiruppur textile ecosystem.</h2>
                <p className="relative mt-3 text-sm leading-6 text-forest-600">Our imported knitting division is built around ten Pailung circular knitting machines across seven diameters, supporting smooth, textured, fleece and stretch-enabled constructions.</p>
                <p className="relative mt-2 text-sm leading-6 text-forest-600">Each enquiry connects yarn, GSM, width, stretch and quantity to a practical machine configuration.</p>
                <Link href="/about" className="relative mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-forest-950 px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(8,35,24,.18)] transition duration-300 hover:-translate-y-1 hover:bg-leaf-700">Learn more about RMS <ArrowRight size={15} /></Link>
              </div>
              <figure className="relative min-h-[260px] overflow-hidden border-t border-white/50 bg-forest-100 lg:min-h-[330px] lg:border-l lg:border-t-0 [transform:translateZ(14px)]">
                <Image src="/fabric-swatches.webp" alt="Visual representation of multiple knitted fabric structures" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-white/5" />
                <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-forest-950/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-leaf-200 backdrop-blur">Visual representation of fabric capability</figcaption>
              </figure>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Pathways â€” interactive mouse-tilt 3D cards with a moving glare */}
      <section className="container-pad pb-8 md:pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {pathways.map(([Icon, title, copy, href, label], index) => (
            <TiltCard
              key={title}
              className="overflow-hidden rounded-[22px] border border-forest-100 bg-white shadow-[0_1px_3px_rgba(15,40,30,0.05)] hover:shadow-[0_36px_64px_-30px_rgba(15,60,40,0.4)]"
            >
              <article className="group relative flex min-h-[220px] flex-col p-4">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-leaf-400 via-leaf-600 to-forest-800 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-forest-900 to-forest-950 text-leaf-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon size={21} />
                  </div>
                  <span className="font-display text-3xl font-bold text-forest-100 transition-colors duration-300 group-hover:text-leaf-100">0{index + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-forest-950">{title}</h3>
                <p className="mt-1.5 text-sm leading-5 text-forest-600">{copy}</p>
                <Link href={href} className="mt-3 flex items-center justify-between border-t border-forest-100 pt-2.5 text-xs font-bold text-leaf-800">
                  <span>{label}</span>
                  <ArrowRight className="transition group-hover:translate-x-1" size={17} />
                </Link>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Fabrics â€” flip cards: front shows the icon, back reveals the description */}
      <section className="bg-forest-950 py-8 text-white md:py-12">
        <div className="container-pad">
          <div className="grid items-end gap-4 md:grid-cols-[1fr_.8fr]"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-leaf-300">What we knit</span><h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">Six structures. Different garment directions.</h2></div><div><p className="leading-6 text-forest-400">The listed range covers foundational, pattern-led, breathable, textured, fleece and stretch-enabled circular knits.</p><Link href="/products" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-leaf-300">Explore all fabrics <ArrowRight size={16} /></Link><p className="mt-4 text-xs font-semibold uppercase tracking-[.16em] text-white/30">Hover a card to flip it</p></div></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fabrics.map((fabric, index) => {
              const Icon = fabric.icon;
              return (
                <div key={fabric.name} className="group h-44 [perspective:1200px]">
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front face */}
                    <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 [backface-visibility:hidden]">
                      <div className="flex items-center justify-between">
                        <div className="grid size-10 place-items-center rounded-xl bg-leaf-400/10 text-leaf-300">
                          <Icon size={20} />
                        </div>
                        <span className="font-display text-sm font-bold text-white/20">0{index + 1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold">{fabric.name}</h3>
                    </div>
                    {/* Back face */}
                    <div className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-leaf-400/30 bg-gradient-to-br from-leaf-700 to-forest-900 p-3.5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="font-display text-lg font-bold text-white">{fabric.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-leaf-100/90">{fabric.short}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-pad py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-36 lg:self-start"><span className="text-xs font-bold uppercase tracking-[.2em] text-leaf-700">Machine range</span><h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest-950 md:text-4xl">A diameter option for the conversation.</h2><p className="mt-3 leading-6 text-forest-600">The range progresses from 26 to 40 diameter with corresponding feeder counts from 78 to 120.</p><Link href="/machines" className="mt-4 inline-flex items-center gap-2 bg-forest-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-leaf-700">Full machine schedule <ArrowRight size={16} /></Link></div>
          <div className="rounded-[22px] border border-forest-100 bg-white p-3.5 shadow-[0_1px_3px_rgba(15,40,30,0.05)]">
            <div className="grid gap-3">
              {machineRows.map(({ diameter, feeders, machines }, index) => (
                <div key={diameter} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-forest-100 pb-2 last:border-0 last:pb-0">
                  <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-leaf-100 to-leaf-50 font-display text-lg font-bold text-leaf-800">{diameter}</div>
                  <div>
                    <div className="h-1.5 rounded-full bg-forest-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-leaf-500 to-leaf-700" style={{ width: `${(feeders / 120) * 100}%` }} />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-forest-500">{feeders} feeders</p>
                  </div>
                  <span className="rounded-full bg-leaf-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-leaf-800">{machines} MC</span>
                  <span className="sr-only">Position {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process â€” layered pop-out 3D: icon and text lift off the card plane on hover */}
      <section className="bg-leaf-50 py-8 md:py-12">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center"><span className="inline-flex rounded-full border border-leaf-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-leaf-800">How we work</span><h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest-950 md:text-4xl">A clear path from brief to finished knit.</h2><p className="mt-3 leading-6 text-forest-600">Every program starts with the intended fabric, not just a machine setting.</p></div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([Icon, number, title, copy]) => (
              <div key={number} className="[perspective:1000px]">
                <article className="group relative rounded-2xl border border-leaf-100 bg-white p-4 shadow-[0_1px_3px_rgba(15,40,30,0.05)] transition-transform duration-300 [transform-style:preserve-3d] hover:[transform:rotateX(6deg)_rotateY(-6deg)] hover:shadow-[0_32px_56px_-30px_rgba(15,60,40,0.35)]">
                  <div className="flex items-center justify-between">
                    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-leaf-600 to-forest-800 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:[transform:translateZ(30px)]">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-3xl font-bold text-leaf-100 transition-transform duration-300 group-hover:[transform:translateZ(16px)]">{number}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-forest-950 transition-transform duration-300 group-hover:[transform:translateZ(16px)]">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-forest-600 transition-transform duration-300 group-hover:[transform:translateZ(8px)]">{copy}</p>
                </article>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="container-pad pt-8 md:pt-12">
        <div className="grid overflow-hidden rounded-[22px] border border-forest-100 bg-white shadow-[0_1px_3px_rgba(15,40,30,0.05)] lg:grid-cols-[auto_1fr_auto] lg:items-center"><div className="hidden h-full min-w-20 place-items-center bg-gradient-to-br from-leaf-600 to-forest-800 text-white lg:grid"><MapPin size={27} /></div><div className="p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-leaf-700">Located in Tiruppur</p><h2 className="mt-1.5 font-display text-2xl font-bold text-forest-950">Connected to a leading textile manufacturing ecosystem.</h2><p className="mt-1.5 max-w-3xl text-sm leading-5 text-forest-600">{address}</p></div><Link href="/contact" className="flex h-full min-h-14 items-center justify-between gap-4 bg-forest-950 px-5 text-sm font-bold text-white transition hover:bg-leaf-700">Contact RMS <ArrowRight size={17} /></Link></div>
      </section>

      <CTA compact />
    </>
  );
}
