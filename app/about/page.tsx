import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Compass, Eye, Factory, Gauge, Handshake, Layers3, MapPin, Phone, Quote, ReceiptText, Settings2, Target, UserRound } from "lucide-react";
import { CTA } from "@/components/Shared";
import { address, contacts, fabrics, machineRows } from "@/components/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about RMS Textile Mills, its management, circular knitting capabilities and imported Pailung machine setup in Tiruppur.",
};

const principles = [
  ["01", "Start with the application", "The intended garment, fabric performance and construction guide the production conversation."],
  ["02", "Configure with purpose", "Diameter, feeders, track design and Lycra capability are considered against the fabric brief."],
  ["03", "Keep communication direct", "Customers can discuss requirements directly with the RMS management team."],
  ["04", "Stay focused on the knit", "Setup, production handling and visual review remain centred on the agreed construction."],
] as const;

const businessInfo = [
  ["Business name", "RMS Textile Mills"],
  ["Division", "Imported Knitting Division"],
  ["Business activity", "Circular knitting and knitted fabric production"],
  ["Primary machinery", "Imported Pailung circular knitting machines"],
  ["Machine profile", "10 machines / 24 GG / 4-track design"],
  ["Diameter & feeders", "26-40 diameter / 78-120 feeders"],
  ["Location", "Karaipudur Village, Tiruppur, Tamil Nadu"],
  ["GSTIN", "33DBIPR9169F1Z6"],
] as const;

export default function About() {
  const totalMachines = machineRows.reduce((total, row) => total + row.machines, 0);

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
        <div className="container-pad grid min-h-[650px] lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative z-10 flex flex-col justify-center py-16 lg:pr-14">
            <span className="inline-flex w-fit items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-300"><Factory size={14} /> About RMS</span>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[.97] tracking-[-.055em] sm:text-6xl md:text-7xl">Built around the <span className="text-teal-300">fabric brief.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">RMS Textile Mills is an imported circular knitting division in Tiruppur, combining Pailung machinery, practical configuration options and direct management communication.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/machines" className="inline-flex items-center gap-2 bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300">Explore our machines <ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Contact the team</Link></div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-full">
            <Image src="/knitting-floor-hero.webp" alt="Visual representation of a circular knitting production environment" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 border-l-2 border-teal-300 bg-slate-950/85 p-5 backdrop-blur sm:left-auto sm:max-w-sm"><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Our promise</p><p className="mt-2 font-display text-2xl font-bold">True to Knits, True to Quality.</p></div>
          </div>
        </div>
      </section>

      <section className="container-pad relative z-10 -mt-px">
        <div className="grid border-x border-b border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {[[String(totalMachines), "Circular knitting machines"], [String(machineRows.length), "Diameter options"], ["24 GG", "Machine gauge"], ["120", "Maximum feeders"]].map(([value, label], index) => <div key={label} className={`p-6 sm:p-7 ${index < 3 ? "lg:border-r lg:border-slate-200" : ""} ${index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""}`}><p className="font-display text-4xl font-bold text-slate-950">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">Who we are</span><div className="mt-5 h-px w-16 bg-teal-700" /></div>
          <div><h2 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-[-.04em] text-slate-950 md:text-5xl">A focused production partner from one of India&apos;s key textile centres.</h2><div className="mt-8 grid gap-6 text-base leading-8 text-slate-600 md:grid-cols-2"><p>RMS Textile Mills operates from Karaipudur Village in Tiruppur, Tamil Nadu. The division is centred on circular knitting and a documented machine range designed to support essential, textured, fleece and stretch constructions.</p><p>The setup includes ten imported Pailung machines in diameters from 26 to 40, with feeder configurations from 78 to 120. All machines are listed at 24 gauge with four-track design and all-feeder Lycra capability.</p></div></div>
        </div>
      </section>

      <section className="container-pad pb-20 md:pb-28">
        <div className="grid overflow-hidden lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative bg-teal-700 p-8 text-white sm:p-10 md:p-14">
            <Quote className="absolute right-8 top-8 text-white/10" size={92} strokeWidth={1.2} />
            <p className="relative text-xs font-bold uppercase tracking-[.2em] text-teal-100">Managing Director&apos;s note</p>
            <blockquote className="relative mt-8 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              &ldquo;Our focus is to understand the fabric requirement, choose a suitable machine configuration and keep communication direct throughout the production conversation.&rdquo;
            </blockquote>
            <div className="relative mt-9 border-t border-white/20 pt-6"><p className="font-display text-xl font-bold">P. Ramasamy</p><p className="mt-1 text-sm text-teal-100">Managing Director, RMS Textile Mills</p></div>
          </div>
          <div className="flex flex-col justify-between bg-slate-950 p-8 text-white sm:p-10 md:p-12">
            <div className="grid size-14 place-items-center border border-white/10 text-teal-300"><UserRound size={24} /></div>
            <div className="mt-16"><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Leadership contact</p><p className="mt-3 font-display text-3xl font-bold">Talk directly with the management team.</p><a href="tel:+919843419599" className="mt-7 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-bold text-white transition hover:border-teal-300 hover:text-teal-300"><Phone size={15} /> +91 98434 19599 <ArrowUpRight size={13} /></a></div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden border border-teal-200 bg-teal-50 p-7 sm:p-9"><div className="absolute -right-12 -top-12 size-36 rounded-full border border-teal-200" /><div className="relative grid size-12 place-items-center bg-teal-700 text-white"><Compass size={22} /></div><p className="relative mt-7 text-xs font-bold uppercase tracking-[.18em] text-teal-700">Our mission</p><h2 className="relative mt-3 font-display text-3xl font-bold text-slate-950">Make every production conversation practical.</h2><p className="relative mt-4 leading-8 text-slate-600">To support garment and textile businesses with dependable circular-knitting capability, thoughtful machine selection and clear communication from brief to handover.</p></article>
          <article className="relative overflow-hidden border border-slate-200 bg-white p-7 sm:p-9"><div className="absolute -right-12 -top-12 size-36 rounded-full border border-slate-200" /><div className="relative grid size-12 place-items-center bg-slate-950 text-teal-300"><Eye size={22} /></div><p className="relative mt-7 text-xs font-bold uppercase tracking-[.18em] text-teal-700">Our vision</p><h2 className="relative mt-3 font-display text-3xl font-bold text-slate-950">Grow as a trusted Tiruppur knitting partner.</h2><p className="relative mt-4 leading-8 text-slate-600">To build lasting customer relationships through adaptable machine capability, disciplined production thinking and a consistent focus on the intended knit.</p></article>
        </div>
      </section>

      <section className="bg-teal-50 py-20 md:py-24">
        <div className="container-pad">
          <div className="grid items-end gap-6 md:grid-cols-2"><div><span className="inline-flex border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-teal-800">What defines the setup</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Capability with a clear purpose.</h2></div><p className="leading-8 text-slate-600">The machinery, fabric range and communication structure are intended to make production discussions practical and specific.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[[Settings2, "Configurable range", "Seven diameters and matching feeder counts help frame different construction and width requirements."], [Gauge, "24-gauge setup", "The documented machine floor uses a consistent 24 GG configuration across the listed diameter range."], [Layers3, "Six fabric directions", `${fabrics.length} listed capabilities span jersey, patterned, breathable, textured, fleece and stretch knits.`], [Handshake, "Direct access", "Production enquiries can be discussed with the Managing Director or General Manager."]].map(([Icon, title, copy], index) => { const ItemIcon = Icon as typeof Settings2; return <article key={String(title)} className="group bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/[.06]"><div className="flex items-center justify-between"><div className="grid size-12 place-items-center bg-slate-950 text-teal-300"><ItemIcon size={21} /></div><span className="font-display text-4xl font-bold text-slate-100">0{index + 1}</span></div><h3 className="mt-6 font-display text-xl font-bold text-slate-950">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{String(copy)}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="container-pad grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:sticky lg:top-36 lg:self-start"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-teal-300"><Target size={15} /> How we approach production</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">Clear thinking before the machine runs.</h2><p className="mt-5 max-w-lg leading-8 text-slate-400">Every requirement carries different construction, performance and quantity needs. These principles shape the initial discussion and machine planning.</p></div>
          <div className="border-t border-white/10">{principles.map(([number, title, copy]) => <article key={number} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[4rem_1fr]"><span className="font-display text-sm font-bold text-teal-300">{number}</span><div><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">{copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className="container-pad section-pad">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="text-xs font-bold uppercase tracking-[.2em] text-teal-700">Management</span><h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Direct contacts for production conversations.</h2></div><p className="leading-8 text-slate-600">Speak with the RMS management team about machine suitability, fabric development and production requirements.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contacts.map((contact, index) => <article key={contact.tel} className="group relative overflow-hidden border border-slate-200 bg-white p-7 sm:p-8"><span className="absolute right-5 top-3 font-display text-8xl font-bold text-slate-50">0{index + 1}</span><div className="relative"><div className="grid size-12 place-items-center bg-teal-700 text-white"><UserRound size={22} /></div><p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-teal-700">{contact.role}</p><h3 className="mt-2 font-display text-3xl font-bold text-slate-950">{contact.name}</h3><a href={`tel:${contact.tel}`} className="mt-5 inline-flex items-center gap-2 border-b border-slate-300 pb-1 text-sm font-bold text-slate-700 transition hover:border-teal-700 hover:text-teal-700"><Phone size={15} /> {contact.phone} <ArrowUpRight size={13} /></a></div></article>)}
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-24">
        <div className="container-pad">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
            <div><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-teal-700"><ReceiptText size={15} /> Business information</span><h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">The company at a glance.</h2><p className="mt-5 max-w-lg leading-8 text-slate-600">Key identity and capability details reproduced from the supplied RMS company profile.</p><div className="mt-7 flex items-center gap-3 text-sm font-bold text-teal-800"><Building2 size={18} /> Imported Knitting Division</div></div>
            <dl className="grid gap-px bg-slate-300 sm:grid-cols-2">{businessInfo.map(([label, value]) => <div key={label} className="bg-white p-5 sm:p-6"><dt className="text-[10px] font-bold uppercase tracking-[.16em] text-teal-700">{label}</dt><dd className="mt-2 text-sm font-semibold leading-6 text-slate-800">{value}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      <section className="container-pad">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-5 p-7 sm:p-9"><div className="grid size-12 shrink-0 place-items-center bg-teal-50 text-teal-700"><MapPin size={21} /></div><div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal-700">Our location</p><h2 className="mt-2 font-display text-2xl font-bold text-slate-950">RMS Textile Mills, Tiruppur</h2><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{address}</p></div></div>
          <Link href="/contact" className="flex min-h-24 items-center justify-between gap-8 bg-slate-950 px-7 font-bold text-white transition hover:bg-teal-700 sm:px-9">Plan a conversation <ArrowRight size={18} /></Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
