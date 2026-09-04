import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="container-pad mt-16 md:mt-24">
      <div className="relative overflow-hidden border border-teal-200 bg-white shadow-xl shadow-teal-950/[.06]">
        <div className="absolute -left-20 -top-24 size-56 rounded-full bg-teal-100/60" />
        <div className="relative grid md:grid-cols-[1fr_19rem] lg:grid-cols-[1fr_22rem]">
          <div className="p-7 sm:p-9 md:p-12">
            <span className="inline-flex border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800">Production enquiry</span>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Have a fabric brief in mind?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">Share the fabric structure, yarn, GSM, diameter and quantity you need. Our team will discuss machine suitability and the next practical step.</p>
          </div>
          <div className="textile-noise flex flex-col justify-center bg-slate-950 p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Speak with our team</p>
            <a href="tel:+919843419599" className="mt-4 inline-flex items-center justify-between border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:border-teal-300 hover:bg-white/5"><span className="flex items-center gap-2"><Phone size={16} /> Call now</span><span className="text-slate-400">01</span></a>
            <Link href="/contact" className="mt-3 inline-flex items-center justify-between bg-teal-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-teal-300"><span>Send an enquiry</span><ArrowRight size={17} /></Link>
            <p className="mt-4 text-xs leading-5 text-slate-400">Direct contact with the RMS management team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
