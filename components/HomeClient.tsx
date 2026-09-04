import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, BadgeCheck, ClipboardList, Factory, Gauge, Layers3, MapPin, ScanLine, Settings2, Sparkles } from "lucide-react";
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
  [Factory, "Infrastructure", "See how requirement review, machine planning, knitting and fabric handover connect.", "/infrastructure", "View process"],
] as const;

export default function HomeClient() {
  const totalMachines = machineRows.reduce((total, row) => total + row.machines, 0);

  return (
    <>
      <section className="relative min-h-[780px] overflow-hidden bg-slate-950 pt-28 text-white">
        <Image src="/knitting-floor-hero.webp" alt="Visual representation of a circular knitting production floor" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="image-shade absolute inset-0" />
        <div className="container-pad relative grid min-h-[670px] items-center gap-10 py-16 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-200 backdrop-blur"><Sparkles size={14} /> Imported knitting division / Tiruppur</span>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[.94] tracking-[-.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">Precision in every <span className="text-teal-300">loop we knit.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">RMS Textile Mills combines imported Pailung circular knitting machinery with practical configuration options and direct production communication.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/products" className="inline-flex items-center gap-2 bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300">Explore fabric capabilities <ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">Discuss a requirement</Link></div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-200"><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-teal-300" /> 24 GG machines</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-teal-300" /> Four-track design</span><span className="flex items-center gap-2"><BadgeCheck size={17} className="text-teal-300" /> All-feeder Lycra</span></div>
          </div>
          <div className="hidden border-l-2 border-teal-300 bg-slate-950/75 p-6 backdrop-blur lg:block"><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">At a glance</p><div className="mt-5 grid gap-4"><div><strong className="font-display text-4xl">{totalMachines}</strong><span className="ml-3 text-sm text-slate-400">Machines</span></div><div className="border-y border-white/10 py-4"><strong className="font-display text-4xl">26-40</strong><span className="ml-3 text-sm text-slate-400">Diameter</span></div><div><strong className="font-display text-4xl">78-120</strong><span className="ml-3 text-sm text-slate-400">Feeders</span></div></div><a href="#overview" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-teal-200">Discover RMS <ArrowDownRight size={15} /></a></div>
          <p className="absolute bottom-4 right-5 text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Visual representation</p>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-px">
        <div className="grid border-x border-b border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {[[String(totalMachines), "Circular knitting machines"], [String(machineRows.length), "Diameter options"], ["24 GG", "Machine gauge"], [String(fabrics.length), "Fabric directions"]].map(([value, label], index) => <div key={label} className={`p-6 sm:p-7 ${index < 3 ? "lg:border-r lg:border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}><p className="font-display text-4xl font-bold text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}
        </div>
      </section>

      <section id="overview" className="container-pad section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">RMS Textile Mills</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-.04em] text-slate-950 md:text-5xl">A focused knitting partner in the Tiruppur textile ecosystem.</h2>
            <p className="mt-5 leading-8 text-slate-600">Our imported knitting division is built around ten Pailung circular knitting machines across seven diameters. This documented range supports production discussions for smooth, textured, fleece and stretch-enabled constructions.</p>
            <p className="mt-4 leading-8 text-slate-600">Each enquiry begins with the intended fabric and garment need, helping connect yarn, GSM, width, stretch and quantity to a practical machine configuration.</p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 border-b border-teal-700 pb-1 text-sm font-bold text-teal-800">Learn more about RMS <ArrowRight size={16} /></Link>
          </div>
          <figure className="relative min-h-[470px] overflow-hidden bg-slate-100">
            <Image src="/fabric-swatches.webp" alt="Visual representation of multiple knitted fabric structures" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <figcaption className="absolute bottom-5 left-5 bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-teal-200">Visual representation of fabric capability</figcaption>
          </figure>
        </div>
      </section>

      <section className="container-pad pb-20 md:pb-28">
        <div className="grid gap-px bg-slate-200 lg:grid-cols-3">
          {pathways.map(([Icon, title, copy, href, label], index) => <article key={title} className="group flex min-h-[340px] flex-col bg-white p-7 transition hover:bg-teal-50 sm:p-8"><div className="flex items-center justify-between"><div className="grid size-12 place-items-center bg-slate-950 text-teal-300"><Icon size={21} /></div><span className="font-display text-5xl font-bold text-slate-100">0{index + 1}</span></div><h3 className="mt-10 font-display text-2xl font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p><Link href={href} className="mt-auto flex items-center justify-between border-t border-slate-200 pt-5 text-sm font-bold text-teal-800"><span>{label}</span><ArrowRight className="transition group-hover:translate-x-1" size={17} /></Link></article>)}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container-pad">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_.8fr]"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">What we knit</span><h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Six structures. Different garment directions.</h2></div><div><p className="leading-8 text-slate-400">The listed range covers foundational, pattern-led, breathable, textured, fleece and stretch-enabled circular knits.</p><Link href="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-300">Explore all fabrics <ArrowRight size={16} /></Link></div></div>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{fabrics.map((fabric, index) => { const Icon = fabric.icon; return <article key={fabric.name} className="group bg-slate-950 p-6 transition hover:bg-white/5"><div className="flex items-center justify-between"><Icon className="text-teal-300" size={22} /><span className="font-display text-sm font-bold text-white/20">0{index + 1}</span></div><h3 className="mt-7 font-display text-xl font-bold">{fabric.name}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{fabric.short}</p></article>; })}</div>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-36 lg:self-start"><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">Machine range</span><h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">A diameter option for the conversation.</h2><p className="mt-5 leading-8 text-slate-600">The range progresses from 26 to 40 diameter with corresponding feeder counts from 78 to 120.</p><Link href="/machines" className="mt-7 inline-flex items-center gap-2 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700">Full machine schedule <ArrowRight size={16} /></Link></div>
          <div className="border border-slate-200 bg-white p-6 sm:p-8"><div className="grid gap-4">{machineRows.map(({ diameter, feeders, machines }, index) => <div key={diameter} className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"><div className="grid size-12 place-items-center bg-teal-50 font-display text-lg font-bold text-teal-800">{diameter}</div><div><div className="h-1.5 bg-slate-100"><div className="h-full bg-teal-600" style={{ width: `${(feeders / 120) * 100}%` }} /></div><p className="mt-2 text-xs font-semibold text-slate-500">{feeders} feeders</p></div><span className="text-xs font-bold uppercase tracking-wide text-slate-400">{machines} MC</span><span className="sr-only">Position {index + 1}</span></div>)}</div></div>
        </div>
      </section>

      <section className="bg-teal-50 py-20 md:py-24">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center"><span className="inline-flex border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800">How we work</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">A clear path from brief to finished knit.</h2><p className="mt-5 leading-8 text-slate-600">Every program starts with the intended fabric, not just a machine setting.</p></div>
          <div className="mt-12 grid gap-px bg-teal-200 md:grid-cols-2 lg:grid-cols-4">{process.map(([Icon, number, title, copy]) => <article key={number} className="bg-white p-7"><div className="flex items-center justify-between"><div className="grid size-11 place-items-center bg-teal-700 text-white"><Icon size={20} /></div><span className="font-display text-4xl font-bold text-slate-100">{number}</span></div><h3 className="mt-7 font-display text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div>
          <div className="mt-6 text-center"><Link href="/infrastructure" className="inline-flex items-center gap-2 text-sm font-bold text-teal-800">See the complete production flow <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="container-pad pt-20 md:pt-24">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[auto_1fr_auto] lg:items-center"><div className="hidden h-full min-w-36 place-items-center bg-teal-700 text-white lg:grid"><MapPin size={30} /></div><div className="p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Located in Tiruppur</p><h2 className="mt-3 font-display text-3xl font-bold text-slate-950">Connected to a leading textile manufacturing ecosystem.</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{address}</p></div><Link href="/contact" className="flex h-full min-h-24 items-center justify-between gap-8 bg-slate-950 px-7 font-bold text-white transition hover:bg-teal-700 sm:px-9">Contact RMS <ArrowRight size={18} /></Link></div>
      </section>

      <CTA />
    </>
  );
}
