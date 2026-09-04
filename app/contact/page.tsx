import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Clock3, Factory, MapPin, MessageCircle, Navigation, Phone, UserRound } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { address, contacts } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact RMS Textile Mills in Tiruppur for circular knitting and fabric production enquiries.",
};

export default function Contact() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
        <div className="textile-noise absolute inset-0 opacity-30" />
        <div className="absolute -right-32 top-20 size-[28rem] rounded-full border border-teal-400/20" />
        <div className="absolute -right-16 top-36 size-72 rounded-full border border-teal-400/20" />
        <div className="container-pad relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-200">
              <MessageCircle size={14} /> Contact RMS
            </span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-6xl md:text-7xl">
              Let&apos;s discuss your <span className="text-teal-300">next knit.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Share your fabric structure, yarn, GSM, diameter, stretch requirement and approximate quantity directly with our management team.
            </p>
          </div>
          <div className="border-l-2 border-teal-400 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Helpful details to include</p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-300">
              {["Fabric structure", "Yarn composition", "Target GSM", "Required quantity"].map((item) => <span key={item} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-teal-300" />{item}</span>)}
            </div>
            <a href="#enquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white">Start your enquiry <ArrowDownRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-7">
        <div className="grid overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-950/5 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <article key={contact.tel} className={`group flex items-center gap-5 p-6 sm:p-7 ${index === 0 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""}`}>
              <div className="grid size-14 shrink-0 place-items-center bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white"><UserRound size={23} /></div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-teal-700">{contact.role}</p>
                <h2 className="mt-1 font-display text-xl font-bold text-slate-950">{contact.name}</h2>
                <a className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-teal-700" href={`tel:${contact.tel}`}><Phone size={15} /> {contact.phone} <ArrowUpRight size={13} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="enquiry" className="container-pad section-pad grid items-start gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <EnquiryForm />

        <aside className="order-first grid gap-5 lg:order-none lg:sticky lg:top-32">
          <article className="relative overflow-hidden border border-teal-200 bg-white p-7 text-slate-950 shadow-xl shadow-teal-950/[.06] sm:p-8">
            <div className="absolute -right-14 -top-14 size-40 rounded-full bg-teal-100/70" />
            <div className="flex items-center justify-between">
              <div className="relative grid size-12 place-items-center bg-teal-700 text-white"><Factory size={22} /></div>
              <span className="relative text-xs font-bold uppercase tracking-[.18em] text-teal-700">Tiruppur</span>
            </div>
            <h2 className="relative mt-7 font-display text-3xl font-bold">Visit the mill</h2>
            <p className="relative mt-4 flex gap-3 text-sm font-medium leading-7 text-slate-600"><MapPin className="mt-1 shrink-0 text-teal-700" size={18} /><span>{address}</span></p>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="relative mt-7 inline-flex items-center gap-2 bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-700">Open in Google Maps <Navigation size={15} /></a>
          </article>

          <div className="border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <div className="flex gap-3"><Clock3 className="mt-0.5 shrink-0" size={19} /><div><h3 className="font-display font-bold">Planning a visit?</h3><p className="mt-1 text-sm leading-6 text-amber-900/80">Please call ahead to confirm meeting and visit availability.</p></div></div>
          </div>

          <Link href="/machines" className="group flex items-center justify-between border border-slate-200 bg-white p-5 transition hover:border-teal-600">
            <span><span className="block text-xs font-bold uppercase tracking-[.16em] text-teal-700">Before you enquire</span><span className="mt-1 block font-display text-lg font-bold">Review our machine range</span></span>
            <ArrowUpRight className="text-slate-400 transition group-hover:text-teal-700" />
          </Link>
        </aside>
      </section>
    </>
  );
}
