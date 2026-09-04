import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, CircleGauge, Info, Layers3, ListChecks, Palette, Ruler, Sparkles, StretchHorizontal } from "lucide-react";
import { CTA } from "@/components/Shared";
import { fabrics } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Fabric Capabilities",
  description: "Explore RMS Textile Mills fabric capabilities including Single Jersey, Pattinai, Air Tex, Honey Comb, Two Thread Fleece and Lycra Jersey.",
};

const fabricTraits = [
  ["Single Jersey", "Smooth face", "Lightweight and drapable", "Everyday apparel"],
  ["Pattinai", "Pattern-led surface", "Visually distinctive", "Fashion and casualwear"],
  ["Air Tex", "Open texture", "Breathable, lighter feel", "Warm-weather apparel"],
  ["Honey Comb", "Cellular texture", "Dimensional and structured", "Polos and detail panels"],
  ["Two Thread Fleece", "Soft inner character", "Warm with added body", "Sweatshirts and joggers"],
  ["Lycra Jersey", "Clean stretch surface", "Movement and recovery", "Fitted garments"],
] as const;

const briefItems = [
  [Layers3, "Construction", "Fabric name, reference swatch or intended knit structure"],
  [Ruler, "Physical target", "Expected GSM, finished width and garment application"],
  [StretchHorizontal, "Performance", "Stretch, recovery, hand feel and breathability needs"],
  [Palette, "Material direction", "Yarn composition, count, colour and approximate quantity"],
] as const;

export default function Products() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#e5f2ef] pt-32">
        <div className="fabric-grid absolute inset-0 opacity-70" />
        <div className="container-pad relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 border border-teal-300 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800"><Sparkles size={14} /> Fabric capabilities</span>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[.97] tracking-[-.055em] text-slate-950 sm:text-6xl md:text-7xl">Knits with <span className="text-teal-700">character.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">From smooth everyday jersey to dimensional textures, warm fleece and stretch-enabled fabrics, our documented range supports varied garment directions.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#fabric-range" className="inline-flex items-center gap-2 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700">Explore the range <ArrowDownRight size={16} /></a><Link href="/contact" className="inline-flex items-center gap-2 border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-teal-700 hover:text-teal-700">Discuss a fabric</Link></div>
          </div>
          <figure className="relative min-h-[430px] overflow-hidden bg-white shadow-2xl shadow-teal-950/10 lg:min-h-[520px]">
            <Image src="/fabric-swatches.webp" alt="Visual representation of six knitted fabric structures" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 pt-24 text-white"><figcaption className="text-xs font-bold uppercase tracking-[.18em] text-teal-200">Visual representation of fabric capability</figcaption></div>
          </figure>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-px">
        <div className="grid border-x border-b border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {[["6", "Documented structures"], ["24 GG", "Machine configuration"], ["4 track", "Design capability"], ["All feeder", "Lycra attachment"]].map(([value, label], index) => <div key={label} className={`p-6 sm:p-7 ${index < 3 ? "lg:border-r lg:border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}><p className="font-display text-3xl font-bold text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}
        </div>
      </section>

      <section id="fabric-range" className="container-pad section-pad">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_.8fr]"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">The fabric range</span><h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Six directions for different garment needs.</h2></div><p className="leading-8 text-slate-600">Each fabric is a starting point. Yarn, GSM, finish, stretch and colour should be confirmed against the intended product and production brief.</p></div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fabrics.map((fabric, index) => { const Icon = fabric.icon; return (
            <article key={fabric.name} className="group flex min-h-[410px] flex-col overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/[.05]">
              <div className={`textile-noise relative flex h-40 items-center justify-between overflow-hidden bg-gradient-to-br ${fabric.tone} p-6 text-white`}>
                <div className="absolute -right-10 -top-10 size-36 rounded-full border border-white/15" /><div className="absolute -right-2 top-4 size-20 rounded-full border border-white/15" />
                <div className="relative grid size-12 place-items-center border border-white/20 bg-white/10 backdrop-blur"><Icon size={22} /></div><span className="relative font-display text-6xl font-bold text-white/15">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold text-slate-950">{fabric.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{fabric.description}</p>
                <div className="mt-auto border-t border-slate-200 pt-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">Indicative applications</p><div className="mt-3 flex flex-wrap gap-2">{fabric.applications.map((item) => <span key={item} className="inline-flex items-center gap-1.5 bg-teal-50 px-2.5 py-1.5 text-xs font-semibold text-teal-800"><Check size={12} />{item}</span>)}</div></div>
              </div>
            </article>
          ); })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-24">
        <div className="container-pad">
          <div className="grid items-end gap-8 md:grid-cols-2"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-300">Quick comparison</span><h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Find a useful starting point.</h2></div><div className="flex gap-3 border-l-2 border-teal-400 pl-5 text-sm leading-7 text-slate-400"><Info className="mt-1 shrink-0 text-teal-300" size={18} /><p>These descriptions are indicative, not finished-fabric specifications. Confirm development details with the RMS team.</p></div></div>
          <div className="mt-10 overflow-x-auto border border-white/10"><table className="w-full min-w-[820px]"><caption className="sr-only">Comparison of RMS knitted fabric capabilities</caption><thead className="bg-teal-700 text-left text-xs uppercase tracking-[.14em] text-white"><tr><th className="p-5">Fabric</th><th className="p-5">Surface direction</th><th className="p-5">Indicative character</th><th className="p-5">Application direction</th></tr></thead><tbody>{fabricTraits.map(([name, surface, character, use], index) => <tr key={name} className={`${index < fabricTraits.length - 1 ? "border-b border-white/10" : ""} transition hover:bg-white/5`}><td className="p-5 font-display text-lg font-bold text-white">{name}</td><td className="p-5 text-sm text-slate-300">{surface}</td><td className="p-5 text-sm text-slate-300">{character}</td><td className="p-5 text-sm text-slate-300">{use}</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div className="lg:sticky lg:top-36 lg:self-start"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-teal-700"><ListChecks size={15} /> Prepare your brief</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Better inputs create a better production conversation.</h2><p className="mt-5 leading-8 text-slate-600">You do not need every detail finalized. Share what is known, along with a physical reference where available, so the team can discuss a practical next step.</p></div>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">{briefItems.map(([Icon, title, copy], index) => <article key={title} className="bg-white p-7"><div className="flex items-center justify-between"><div className="grid size-11 place-items-center bg-teal-50 text-teal-700"><Icon size={20} /></div><span className="font-display text-3xl font-bold text-slate-100">0{index + 1}</span></div><h3 className="mt-6 font-display text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="container-pad">
        <div className="grid overflow-hidden border border-teal-200 bg-teal-50 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="hidden h-full min-w-36 place-items-center bg-teal-700 text-white lg:grid"><CircleGauge size={34} /></div>
          <div className="p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Need machine context?</p><h2 className="mt-3 font-display text-3xl font-bold text-slate-950">Explore the 24 GG machine configuration behind the range.</h2></div>
          <Link href="/machines" className="flex h-full min-h-24 items-center justify-between gap-8 bg-slate-950 px-7 font-bold text-white transition hover:bg-teal-700 sm:px-9">View machines <ArrowRight size={18} /></Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
