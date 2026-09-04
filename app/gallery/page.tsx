import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, BadgeCheck, Camera, Factory, FileCheck2, Layers3, ScanLine } from "lucide-react";
import { CTA } from "@/components/Shared";
import { fabrics } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore RMS Textile Mills company details, circular knitting capability visuals and fabric representations.",
};

export default function Gallery() {
  return (
    <>
      <section className="fabric-grid relative overflow-hidden border-b border-slate-200 pt-32">
        <div className="absolute -right-24 top-20 size-80 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="container-pad relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800"><Camera size={14} /> Gallery</span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-[-.05em] text-slate-950 sm:text-6xl md:text-7xl">Inside the world of <span className="text-teal-700">circular knitting.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">Explore the machinery, fabric surfaces and documented company details behind the RMS knitting division.</p>
          </div>
          <div className="border-l-2 border-teal-700 bg-white p-6 shadow-lg shadow-slate-950/[.04]">
            <div className="flex items-center gap-3"><BadgeCheck className="text-teal-700" /><p className="font-display text-lg font-bold text-slate-950">Clear image context</p></div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Concept images are labelled as visual representations. The company card is the original supplied RMS reference.</p>
            <a href="#gallery" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800">Explore the gallery <ArrowDownRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="gallery" className="container-pad section-pad">
        <div className="grid gap-5 lg:grid-cols-12">
          <figure className="group relative min-h-[520px] overflow-hidden bg-slate-950 lg:col-span-8">
            <Image src="/knitting-floor-hero.webp" alt="Visual representation of a circular knitting production floor" fill priority sizes="(max-width: 1024px) 100vw, 67vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white sm:p-8">
              <div><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-teal-300"><Factory size={14} /> Visual representation</span><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">The knitting floor</h2><p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">A representation of an organized circular knitting production environment.</p></div>
              <span className="hidden font-display text-6xl font-bold text-white/15 sm:block">01</span>
            </figcaption>
          </figure>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            <figure className="group relative min-h-[250px] overflow-hidden bg-slate-950">
              <Image src="/knitting-floor-hero.webp" alt="Close-up visual representation of a circular knitting machine" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover object-right transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 p-6 text-white"><span className="text-xs font-bold uppercase tracking-[.16em] text-teal-300">Machine detail</span><h2 className="mt-2 font-display text-2xl font-bold">Feeder ring &amp; yarn path</h2></figcaption>
            </figure>
            <div className="flex min-h-[250px] flex-col justify-between bg-teal-700 p-7 text-white">
              <div className="flex items-center justify-between"><ScanLine /><span className="font-display text-5xl font-bold text-white/15">02</span></div>
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-100">Production focus</p><h2 className="mt-2 font-display text-2xl font-bold">Setup, monitor, review.</h2><p className="mt-3 text-sm leading-6 text-teal-50">The working sequence keeps fabric construction and machine configuration in view.</p></div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[1.15fr_.85fr]">
          <figure className="relative min-h-[420px] overflow-hidden">
            <Image src="/fabric-swatches.webp" alt="Visual representation of assorted knitted fabric structures" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
            <figcaption className="absolute bottom-5 left-5 bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-teal-300"><Layers3 className="mr-2 inline" size={15} /> Visual representation</figcaption>
          </figure>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Fabric capability</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Texture you can see. Requirements we can discuss.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">The image represents the variety of surfaces possible in circular knits. Confirm yarn, GSM, hand feel and final construction with the RMS team.</p>
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-200 pt-6">{fabrics.map((fabric, index) => <div key={fabric.name} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><span className="font-display text-xs font-bold text-teal-700">0{index + 1}</span>{fabric.name}</div>)}</div>
            <Link href="/products" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-800">Explore fabric capabilities <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-24">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-teal-300"><FileCheck2 size={15} /> Original reference</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">Company and machine details, documented.</h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">The supplied RMS company card records the management contacts, Tiruppur address, GSTIN, fabric list and complete diameter-to-feeder machine configuration used throughout this website.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold"><span className="border border-white/10 px-3 py-2">10 machines</span><span className="border border-white/10 px-3 py-2">24 GG</span><span className="border border-white/10 px-3 py-2">26-40 diameter</span></div>
          </div>
          <figure className="relative min-h-[600px] overflow-hidden bg-white">
            <Image src="/company-details.jpg" alt="Original RMS Textile Mills company and machine details card" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain p-4 sm:p-8" />
            <figcaption className="absolute bottom-4 left-4 bg-teal-700 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white">Supplied RMS company card</figcaption>
          </figure>
        </div>
      </section>

      <section className="container-pad pt-20 md:pt-24">
        <div className="grid bg-teal-50 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-7 sm:p-10"><Camera className="text-teal-700" /><h2 className="mt-5 font-display text-3xl font-bold text-slate-950">Want to discuss the facility or a fabric brief?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Contact the management team to discuss your requirement and confirm mill-visit availability.</p></div>
          <Link href="/contact" className="flex h-full min-h-28 items-center justify-between gap-8 bg-teal-700 px-7 text-lg font-bold text-white transition hover:bg-slate-950 sm:px-10">Contact RMS <ArrowRight /></Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
