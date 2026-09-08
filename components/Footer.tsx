import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { address, contacts } from "./site-data";

const companyLinks = [
  ["About RMS", "/about"],

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
    <footer className="mt-10 overflow-hidden bg-forest-950 text-forest-300 md:mt-14">
  
      <div className="container-pad grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_.65fr_.75fr_1.2fr] lg:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="RMS Textile Mills home">
            <span className="grid size-12 place-items-center bg-leaf-600 font-display text-sm font-bold text-white">RMS</span>
            <span>
              <span className="block font-display text-lg font-bold leading-none text-white">RMS Textile Mills</span>
              <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[.2em] text-leaf-300">Imported Knitting Division</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-forest-400">True to Knits, True to Quality. Circular knitting capability backed by imported Pailung machinery in Tiruppur.</p>
          <div className="mt-6 grid max-w-sm grid-cols-3 border border-white/10 text-center">
            <div className="p-3"><strong className="block font-display text-lg text-white">10</strong><span className="text-[10px] uppercase tracking-wide text-forest-500">Machines</span></div>
            <div className="border-x border-white/10 p-3"><strong className="block font-display text-lg text-white">24 GG</strong><span className="text-[10px] uppercase tracking-wide text-forest-500">Gauge</span></div>
            <div className="p-3"><strong className="block font-display text-lg text-white">26-40</strong><span className="text-[10px] uppercase tracking-wide text-forest-500">Diameter</span></div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-leaf-300">Company</h3>
          <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer company links">
            {companyLinks.map(([label, href]) => <Link key={label} href={href} className="group inline-flex items-center gap-2 transition hover:text-white"><span className="h-px w-3 bg-forest-700 transition group-hover:w-5 group-hover:bg-leaf-400" />{label}</Link>)}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-leaf-300">Capabilities</h3>
          <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer capability links">
            {capabilityLinks.map(([label, href]) => <Link key={label} href={href} className="group inline-flex items-center gap-2 transition hover:text-white"><span className="h-px w-3 bg-forest-700 transition group-hover:w-5 group-hover:bg-leaf-400" />{label}</Link>)}
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-leaf-300">Find us</h3>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="group mt-5 flex gap-3 text-sm leading-7 text-forest-400 transition hover:text-white">
            <MapPin className="mt-1 shrink-0 text-leaf-400" size={17} />
            <span>{address}<span className="mt-2 flex items-center gap-1 font-bold text-white">Open map <ArrowUpRight size={13} /></span></span>
          </a>
          <div className="mt-5 grid gap-2">
            {contacts.map((contact) => <a key={contact.tel} href={`tel:${contact.tel}`} className="flex items-center justify-between border-t border-white/10 pt-3 text-sm transition hover:text-white"><span><span className="block font-semibold text-white">{contact.name}</span><span className="text-xs text-forest-500">{contact.role}</span></span><ArrowRight size={15} className="text-leaf-400" /></a>)}
          </div>
        </div>
      </div>

      <div className="container-pad">
        <div className="border-t border-white/10 py-5 text-xs text-forest-500 sm:flex sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} RMS Textile Mills. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">GSTIN: 33DBIPR9169F1Z6</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
