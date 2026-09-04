import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleGauge, Factory, Gauge, Layers3, Repeat2, Settings2, SlidersHorizontal } from "lucide-react";
import { CTA } from "@/components/Shared";
import { machineRows } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Machines",
  description: "Explore the Pailung 24 GG circular knitting machine range, diameters, feeder counts and Lycra configuration at RMS Textile Mills.",
};

const machineFeatures = [
  [CircleGauge, "24-gauge configuration", "The documented machine range uses a consistent 24 GG setup across all seven listed diameters."],
  [Layers3, "Four-track design", "Four-track capability supports the listed plain, pattern-led and textured fabric directions."],
  [Repeat2, "All-feeder Lycra", "The supplied machine profile lists all-feeder Lycra attachment for stretch-enabled constructions."],
  [SlidersHorizontal, "Diameter flexibility", "Options from 26 to 40 provide a practical starting point for width and construction planning."],
] as const;

export default function Machines() {
  const totalMachines = machineRows.reduce((sum, row) => sum + row.machines, 0);
  const maximumFeeders = Math.max(...machineRows.map((row) => row.feeders));

  return (
    <>
      <section className="relative min-h-[700px] overflow-hidden bg-slate-950 pt-32 text-white">
        <Image src="/knitting-floor-hero.webp" alt="Visual representation of circular knitting machinery" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="image-shade absolute inset-0" />
        <div className="container-pad relative grid min-h-[580px] items-center gap-12 py-16 lg:grid-cols-[1fr_24rem]">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-200 backdrop-blur"><Settings2 size={14} /> Machine capability</span>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[.96] tracking-[-.055em] sm:text-6xl md:text-7xl">Engineered for a <span className="text-teal-300">versatile knit.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">Imported Pailung circular knitting machinery across seven diameters, configured at 24 gauge with four-track design and all-feeder Lycra attachment.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#configuration" className="inline-flex items-center gap-2 bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300">View configuration <ArrowRight size={16} /></a><Link href="/contact" className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">Discuss machine suitability</Link></div>
          </div>
          <div className="border border-white/15 bg-slate-950/80 p-7 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">Machine profile</p>
            <div className="mt-6 flex items-end justify-between border-b border-white/10 pb-5"><span className="font-display text-6xl font-bold">24</span><span className="pb-2 text-sm font-bold text-slate-400">GAUGE / GG</span></div>
            <div className="grid grid-cols-2 gap-px bg-white/10"><div className="bg-slate-950/80 p-4"><strong className="block font-display text-2xl text-white">4 track</strong><span className="text-xs text-slate-400">Design</span></div><div className="bg-slate-950/80 p-4"><strong className="block font-display text-2xl text-white">All feeder</strong><span className="text-xs text-slate-400">Lycra</span></div></div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-slate-400"><Check size={14} className="text-teal-300" /> Based on the supplied RMS machine schedule</p>
          </div>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-px">
        <div className="grid border-x border-b border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {[[String(totalMachines), "Total machines"], [String(machineRows.length), "Diameter options"], ["26-40", "Diameter range"], [`78-${maximumFeeders}`, "Feeder range"]].map(([value, label], index) => <div key={label} className={`p-6 sm:p-7 ${index < 3 ? "lg:border-r lg:border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}><p className="font-display text-4xl font-bold text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}
        </div>
      </section>

      <section id="configuration" className="container-pad section-pad">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">Configuration map</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Seven diameters. A clear feeder progression.</h2>
            <p className="mt-5 leading-8 text-slate-600">Each documented diameter is paired with a corresponding feeder count. Multiple machines are available in the 28, 30 and 32 diameter groups.</p>
            <div className="mt-7 border-l-2 border-teal-700 bg-teal-50 p-5"><p className="text-sm font-bold text-slate-950">Why this matters</p><p className="mt-2 text-sm leading-6 text-slate-600">Diameter and feeders help frame machine selection, but final suitability also depends on construction, yarn, target width, GSM and production quantity.</p></div>
          </div>

          <div className="border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Feeder comparison</p><h3 className="mt-2 font-display text-2xl font-bold">Diameter-to-feeder range</h3></div><Gauge className="hidden text-teal-700 sm:block" /></div>
            <div className="mt-7 grid gap-6">{machineRows.map(({ diameter, feeders, machines }) => <div key={diameter} className="grid items-center gap-3 sm:grid-cols-[3.5rem_1fr_5rem]"><div><strong className="font-display text-xl text-slate-950">{diameter}</strong><span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Dia</span></div><div><div className="h-2 bg-slate-100"><div className="h-full bg-gradient-to-r from-teal-700 to-teal-400" style={{ width: `${(feeders / maximumFeeders) * 100}%` }} /></div><div className="mt-2 flex justify-between text-xs"><span className="font-bold text-slate-600">{feeders} feeders</span><span className="text-slate-400">{machines} {machines === 1 ? "machine" : "machines"}</span></div></div><div className="hidden justify-end sm:flex"><span className="grid size-11 place-items-center bg-slate-950 font-display text-sm font-bold text-white">{machines}</span></div></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-24">
        <div className="container-pad">
          <div className="grid items-end gap-6 md:grid-cols-2"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">Technical schedule</span><h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">The complete machine lineup.</h2></div><p className="leading-8 text-slate-400">All figures below reproduce the diameter, feeder and machine quantities from the supplied RMS company profile.</p></div>
          <div className="mt-10 overflow-x-auto border border-white/10"><table className="w-full min-w-[760px]"><caption className="sr-only">RMS Textile Mills Pailung circular knitting machine configuration</caption><thead className="bg-teal-700 text-left text-xs uppercase tracking-[.14em] text-white"><tr><th className="p-5">Diameter</th><th className="p-5">Feeders</th><th className="p-5">Machines</th><th className="p-5">Gauge</th><th className="p-5">Design &amp; attachment</th></tr></thead><tbody>{machineRows.map(({ diameter, feeders, machines }, index) => <tr key={diameter} className={`${index < machineRows.length - 1 ? "border-b border-white/10" : ""} transition hover:bg-white/5`}><td className="p-5 font-display text-2xl font-bold text-white">{diameter}</td><td className="p-5 text-slate-300">{feeders}</td><td className="p-5 text-slate-300">{machines}</td><td className="p-5 text-slate-300">24 GG</td><td className="p-5 text-slate-300">Four track / all-feeder Lycra</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="mx-auto max-w-3xl text-center"><span className="inline-flex border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800">Machine fundamentals</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">The documented setup at a glance.</h2></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{machineFeatures.map(([Icon, title, copy], index) => <article key={title} className="group border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-950/[.05]"><div className="flex items-center justify-between"><div className="grid size-12 place-items-center bg-slate-950 text-teal-300"><Icon size={21} /></div><span className="font-display text-4xl font-bold text-slate-100">0{index + 1}</span></div><h3 className="mt-6 font-display text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div>
      </section>

      <section className="container-pad">
        <div className="grid overflow-hidden border border-teal-200 bg-teal-50 lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex min-h-64 items-center justify-center bg-teal-700 p-8 text-white"><div><Factory size={32} className="text-teal-200" /><p className="mt-6 font-display text-5xl font-bold">26-40</p><p className="mt-2 text-sm font-semibold text-teal-100">Documented diameter range</p></div></div>
          <div className="p-7 sm:p-10"><span className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Prepare your enquiry</span><h2 className="mt-4 font-display text-3xl font-bold text-slate-950">Help us understand the intended fabric.</h2><p className="mt-4 leading-7 text-slate-600">Share the construction, yarn count and composition, target GSM, finished width, Lycra requirement and approximate quantity. These details help start a useful machine-suitability discussion.</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700">Send production details <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
