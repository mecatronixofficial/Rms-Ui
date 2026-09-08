import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { address, contacts } from "./site-data";
import { navLinks } from "./nav-links";

const capabilityLinks = [
  ["Fabric capabilities", "/products"],
  ["Machine range", "/machines"],
  ["Single Jersey", "/products"],
  ["Lycra Jersey", "/products"],
] as const;

export function Footer() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="mt-6 overflow-hidden bg-forest-950 text-forest-300 md:mt-8">
  
      <div className="container-pad grid items-start gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.85fr_1.25fr] lg:gap-6 lg:py-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="RMS Textile Mills home">
            <span className="relative size-[60px] shrink-0 overflow-hidden rounded-full border border-white bg-white p-1 shadow-[0_10px_30px_rgba(0,0,0,.24)] sm:size-[70px] xl:size-[74px]">
              <Image
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788844795/RMS3_vsgfnw.png"
                alt="RMS Textile Mills logo"
                fill
                sizes="(max-width: 640px) 60px, (max-width: 1280px) 70px, 74px"
                className="object-contain p-0.5"
              />
            </span>
            <span>
              <span className="block font-display text-xl font-black leading-none tracking-[-.04em] text-white">RMS <span className="text-leaf-200">Textile Mills</span></span>
              <span className="mt-1.5 block text-[8px] font-bold uppercase tracking-[.2em] text-leaf-300">Imported Knitting Division</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-forest-400">True to Knits, True to Quality. Circular knitting capability backed by imported Pailung machinery in Tiruppur.</p>
          <div className="mt-4 grid max-w-sm grid-cols-3 border border-white/10 text-center">
            <div className="p-3"><strong className="block font-display text-lg text-white">10</strong><span className="text-[10px] uppercase tracking-wide text-forest-500">Machines</span></div>
            <div className="border-x border-white/10 p-3"><strong className="block font-display text-lg text-white">24 GG</strong><span className="text-[10px] uppercase tracking-wide text-forest-500">Gauge</span></div>
            <div className="p-3"><strong className="block font-display text-lg text-white">26-40</strong><span className="text-[10px] uppercase tracking-wide text-forest-500">Diameter</span></div>
          </div>
        </div>

        <div className="pt-1">
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-leaf-300">Company</h3>
          <nav className="mt-4 grid gap-2.5 text-sm" aria-label="Footer company links">
            {navLinks.map(([label, href]) => <Link key={href} href={href} className="group inline-flex items-center gap-2 transition hover:text-white"><span className="h-px w-3 bg-forest-700 transition group-hover:w-5 group-hover:bg-leaf-400" />{label}</Link>)}
          </nav>
        </div>

        <div className="pt-1">
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-leaf-300">Capabilities</h3>
          <nav className="mt-4 grid gap-2.5 text-sm" aria-label="Footer capability links">
            {capabilityLinks.map(([label, href]) => <Link key={label} href={href} className="group inline-flex items-center gap-2 transition hover:text-white"><span className="h-px w-3 bg-forest-700 transition group-hover:w-5 group-hover:bg-leaf-400" />{label}</Link>)}
          </nav>
        </div>

        <div className="pt-1">
          <h3 className="text-xs font-bold uppercase tracking-[.18em] text-leaf-300">Find us</h3>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="group mt-4 flex gap-3 text-sm leading-6 text-forest-400 transition hover:text-white">
            <MapPin className="mt-1 shrink-0 text-leaf-400" size={17} />
            <span>{address}<span className="mt-2 flex items-center gap-1 font-bold text-white">Open map <ArrowUpRight size={13} /></span></span>
          </a>
          <div className="mt-4 grid gap-2">
            {contacts.map((contact) => <a key={contact.tel} href={`tel:${contact.tel}`} className="flex items-center justify-between border-t border-white/10 pt-3 text-sm transition hover:text-white"><span><span className="block font-semibold text-white">{contact.name}</span><span className="text-xs text-forest-500">{contact.role}</span></span><ArrowRight size={15} className="text-leaf-400" /></a>)}
          </div>
        </div>
      </div>

      <div className="container-pad">
        <div className="border-t border-white/10 py-4 text-xs text-forest-500 sm:flex sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} RMS Textile Mills. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">GSTIN: 33DBIPR9169F1Z6</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
