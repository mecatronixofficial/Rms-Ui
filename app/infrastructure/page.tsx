import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ClipboardCheck, CircleGauge, Factory, Gauge, Layers3, PackageCheck, ScanLine, Settings2, SlidersHorizontal } from "lucide-react";
import { CTA } from "@/components/Shared";
import { fabrics, machineRows } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Infrastructure & Process",
  description: "Explore RMS Textile Mills circular knitting infrastructure, Pailung machine setup and production workflow in Tiruppur.",
};

const stages = [
  [ClipboardCheck, "Requirement review", "The intended construction, yarn, GSM, stretch, width and quantity establish the production brief."],
  [Settings2, "Machine planning", "Diameter, feeder count, track design and Lycra configuration are considered against the brief."],
  [Factory, "Circular knitting", "The selected machine setup is used to develop and run the agreed knitted construction."],
  [ScanLine, "Fabric review", "Fabric appearance and construction are visually reviewed during production handling."],
  [PackageCheck, "Handover or dispatch", "Completed fabric is prepared for the next stage agreed with the customer."],
] as const;

const controlPoints = [
  [ClipboardCheck, "A defined brief", "Known fabric requirements are collected before machine suitability is discussed."],
  [SlidersHorizontal, "Aligned configuration", "Machine diameter, feeders and Lycra capability are considered together."],
  [Gauge, "Production attention", "The running construction remains the focus during knitting and handling."],
  [ScanLine, "Visible review", "Fabric appearance is reviewed before the agreed handover or dispatch stage."],
] as const;

export default function Infrastructure() {
  const totalMachines = machineRows.reduce((sum, row) => sum + row.machines, 0);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
        <div className="textile-noise absolute inset-0 opacity-20" />
        <div className="container-pad relative grid min-h-[650px] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative z-10 flex flex-col justify-center py-16 lg:pr-14">
            <span className="inline-flex w-fit items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-300"><Factory size={14} /> Infrastructure &amp; process</span>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[.97] tracking-[-.055em] sm:text-6xl md:text-7xl">A production setup shaped around <span className="text-teal-300">precision.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">Imported circular knitting machinery, practical configuration options and a clear workflow from requirement review to fabric handover.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#production-flow" className="inline-flex items-center gap-2 bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300">Follow the process <ArrowDownRight size={16} /></a><Link href="/machines" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">View machine details</Link></div>
          </div>
          <figure className="relative min-h-[430px] lg:min-h-full">
            <Image src="/knitting-floor-hero.webp" alt="Visual representation of a circular knitting production environment" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/15 to-transparent" />
            <figcaption className="absolute bottom-6 right-6 bg-slate-950/85 px-4 py-3 text-xs font-bold uppercase tracking-[.16em] text-teal-200 backdrop-blur">Visual representation</figcaption>
          </figure>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-px">
        <div className="grid border-x border-b border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {[[String(totalMachines), "Pailung machines"], ["24 GG", "Gauge configuration"], ["4 track", "Design capability"], ["26-40", "Diameter range"]].map(([value, label], index) => <div key={label} className={`p-6 sm:p-7 ${index < 3 ? "lg:border-r lg:border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}><p className="font-display text-3xl font-bold text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-slate-950">
            <Image src="/knitting-floor-hero.webp" alt="Close-up visual representation of circular knitting machinery" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-right" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white sm:p-9"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Machine environment</p><h2 className="mt-3 max-w-lg font-display text-3xl font-bold">A focused circular knitting floor.</h2></div><CircleGauge className="hidden text-teal-300 sm:block" size={36} /></div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">The production environment</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Equipment range with practical flexibility.</h2>
            <p className="mt-5 leading-8 text-slate-600">The documented RMS setup includes ten imported Pailung circular knitting machines. Seven diameter options are paired with feeder counts from 78 to 120, giving the team a structured range for discussing fabric requirements.</p>
            <p className="mt-4 leading-8 text-slate-600">All listed machines use a 24-gauge, four-track configuration with all-feeder Lycra attachment. The final machine choice depends on the intended construction, yarn, width, GSM and quantity.</p>
            <div className="mt-7 grid grid-cols-2 gap-px bg-slate-200">{[["78-120", "Feeders"], [String(fabrics.length), "Fabric directions"], [String(machineRows.length), "Diameters"], ["All feeder", "Lycra"]].map(([value, label]) => <div key={label} className="bg-teal-50 p-4"><strong className="block font-display text-xl text-slate-950">{value}</strong><span className="text-xs font-semibold text-slate-500">{label}</span></div>)}</div>
            <Link href="/machines" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-800">See full machine configuration <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section id="production-flow" className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container-pad">
          <div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">Production flow</span><h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Five connected stages. One clear brief.</h2></div><p className="leading-8 text-slate-400">The exact activities vary by program. This working sequence shows how a requirement can move from initial discussion toward production and handover.</p></div>
          <div className="relative mt-12 grid gap-px bg-white/10 lg:grid-cols-5">
            {stages.map(([Icon, title, copy], index) => <article key={title} className="group relative bg-slate-950 p-6 transition hover:bg-white/5"><div className="flex items-center justify-between"><div className="grid size-11 place-items-center border border-white/10 text-teal-300"><Icon size={20} /></div><span className="font-display text-4xl font-bold text-white/10">0{index + 1}</span></div><h3 className="mt-7 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>{index < stages.length - 1 && <ArrowRight className="absolute -right-3 top-10 z-10 hidden rounded-full bg-teal-400 p-1 text-slate-950 lg:block" size={24} />}</article>)}
          </div>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="mx-auto max-w-3xl text-center"><span className="inline-flex border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800">Process focus</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Practical control points through the workflow.</h2><p className="mt-5 leading-8 text-slate-600">These are the working principles reflected in the production sequence, not third-party certification claims.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{controlPoints.map(([Icon, title, copy], index) => <article key={title} className="group border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-950/[.05]"><div className="flex items-center justify-between"><div className="grid size-12 place-items-center bg-teal-700 text-white"><Icon size={21} /></div><span className="font-display text-4xl font-bold text-slate-100">0{index + 1}</span></div><h3 className="mt-6 font-display text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div>
      </section>

      <section className="bg-teal-50 py-20 md:py-24">
        <div className="container-pad grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-teal-700"><Layers3 size={15} /> Before production</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Details that help move the conversation forward.</h2><p className="mt-5 leading-8 text-slate-600">Share what is known. A reference swatch or garment can add useful context where written specifications are still developing.</p></div>
          <div className="grid gap-px bg-teal-200 sm:grid-cols-2">{["Fabric construction or physical reference", "Yarn count and composition", "Target GSM and finished width", "Stretch or Lycra requirement", "Approximate production quantity", "Expected timeline or next stage"].map((item, index) => <div key={item} className="flex gap-4 bg-white p-5"><span className="grid size-7 shrink-0 place-items-center bg-slate-950 font-display text-xs font-bold text-white">{index + 1}</span><p className="text-sm font-semibold leading-6 text-slate-700">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="container-pad pt-20 md:pt-24">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[1fr_auto] lg:items-center"><div className="p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Explore the output</p><h2 className="mt-3 font-display text-3xl font-bold text-slate-950">See the fabric directions supported by the setup.</h2></div><Link href="/products" className="flex h-full min-h-24 items-center justify-between gap-8 bg-teal-700 px-7 font-bold text-white transition hover:bg-slate-950 sm:px-9">View fabric capabilities <ArrowRight size={18} /></Link></div>
      </section>

      <CTA />
    </>
  );
}
