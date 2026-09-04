import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { address, contacts } from "./site-data";

const companyLinks = [
  ["About RMS", "/about"],
  ["Infrastructure", "/infrastructure"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

const capabilityLinks = [
  ["Fabric capabilities", "/products"],
  ["Machine range", "/machines"],
  ["Single Jersey", "/products"],
  ["Lycra Jersey", "/products"],
] as const;

export function Footer() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="mt-20 overflow-hidden bg-slate-950 text-slate-300 md:mt-28">
      <div className="bg-teal-700">
        <div className="container-pad grid gap-6 py-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-teal-100">Start a conversation</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Have a fabric requirement to discuss?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919843419599" className="inline-flex items-center gap-2 border border-white/30 px-4 py-3 text-sm font-bold transition hover:bg-white/10">
              <Phone size={16} /> Call RMS
            </a>
            <a href="https://wa.me/919843419599" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-50">
              <MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-pad grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_.65fr_.75fr_1.2fr] lg:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="RMS Textile Mills home">
            <span className="grid size-12 place-items-center bg-teal-600 font-display text-sm font-bold text-white">RMS</span>
            <span>
              <span className="block font-display text-lg font-bold leading-none text-white">RMS Textile Mills</span>
              <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[.2em] text-teal-300">Imported Knitting Division</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">True to Knits, True to Quality. Circular knitting capability backed by imported Pailung machinery in Tiruppur.</p>
          <div className="mt-6 grid max-w-sm grid-cols-3 border border-white/10 text-center">
            <div className="p-3"><strong className="block font-display text-lg text-white">10</strong><span className="text-[10px] uppercase tracking-wide text-slate-500">Machines</span></div>
            <div className="border-x border-white/10 p-3"><strong className="block font-display text-lg text-white">24 GG</strong><span className="text-[10px] uppercase tracking-wide text-slate-500">Gauge</span></div>
            <div className="p-3"><strong className="block font-display text-lg text-white">26-40</strong><span className="text-[10px] uppercase tracking-wide text-slate-500">Diameter</span></div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Company</h3>
          <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer company links">
            {companyLinks.map(([label, href]) => <Link key={label} href={href} className="group inline-flex items-center gap-2 transition hover:text-white"><span className="h-px w-3 bg-slate-700 transition group-hover:w-5 group-hover:bg-teal-400" />{label}</Link>)}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Capabilities</h3>
          <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer capability links">
            {capabilityLinks.map(([label, href]) => <Link key={label} href={href} className="group inline-flex items-center gap-2 transition hover:text-white"><span className="h-px w-3 bg-slate-700 transition group-hover:w-5 group-hover:bg-teal-400" />{label}</Link>)}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Find us</h3>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="group mt-5 flex gap-3 text-sm leading-7 text-slate-400 transition hover:text-white">
            <MapPin className="mt-1 shrink-0 text-teal-400" size={17} />
            <span>{address}<span className="mt-2 flex items-center gap-1 font-bold text-white">Open map <ArrowUpRight size={13} /></span></span>
          </a>
          <div className="mt-5 grid gap-2">
            {contacts.map((contact) => <a key={contact.tel} href={`tel:${contact.tel}`} className="flex items-center justify-between border-t border-white/10 pt-3 text-sm transition hover:text-white"><span><span className="block font-semibold text-white">{contact.name}</span><span className="text-xs text-slate-500">{contact.role}</span></span><ArrowRight size={15} className="text-teal-400" /></a>)}
          </div>
        </div>
      </div>

      <div className="container-pad">
        <div className="border-t border-white/10 py-5 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} RMS Textile Mills. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">GSTIN: 33DBIPR9169F1Z6</p>
        </div>
      </div>
      <div className="pointer-events-none select-none overflow-hidden text-center font-display text-[18vw] font-bold leading-[.72] tracking-[-.08em] text-white/[.025]">RMS</div>
    </footer>
  );
}

export default Footer;
