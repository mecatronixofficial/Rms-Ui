"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "./nav-links";

export { navLinks };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,.06)] backdrop-blur-xl">
      <div className="bg-slate-950 text-white">
        <div className="container-pad flex h-8 items-center justify-between text-[11px] font-semibold tracking-wide">
          <p className="flex items-center gap-2 text-slate-300">
            <MapPin size={12} className="text-teal-300" />
            <span className="hidden sm:inline">Karaipudur, Tiruppur — 641605</span>
            <span className="sm:hidden">Tiruppur, Tamil Nadu</span>
          </p>
          <a href="tel:+919843419599" className="flex items-center gap-2 text-teal-200 transition hover:text-white">
            <Phone size={12} /> +91 98434 19599
          </a>
        </div>
      </div>

      <div className="container-pad flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="RMS Textile Mills home">
          <div className="grid size-11 place-items-center bg-teal-700 font-display text-sm font-bold tracking-tight text-white transition group-hover:bg-slate-950">
            RMS
          </div>
          <div>
            <div className="font-display text-base font-bold leading-none tracking-tight text-slate-950">RMS Textile Mills</div>
            <div className="mt-1.5 hidden text-[9px] font-bold uppercase tracking-[.22em] text-teal-700 sm:block">Imported Knitting Division</div>
          </div>
        </Link>

        <nav className="hidden h-full items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`relative flex h-full items-center text-sm font-semibold transition after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-teal-700 after:transition-transform ${
                isActive(href)
                  ? "text-slate-950 after:scale-x-100"
                  : "text-slate-500 after:scale-x-0 hover:text-slate-950 hover:after:scale-x-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden items-center gap-2 bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700 md:flex">
          Get a quote <ArrowUpRight size={15} />
        </Link>

        <button
          className="grid size-11 place-items-center border border-slate-200 text-slate-950 transition hover:border-teal-700 hover:text-teal-700 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-pad grid grid-cols-2 gap-px bg-slate-200 py-px" aria-label="Mobile navigation">
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`bg-white px-4 py-3.5 text-sm font-semibold transition ${isActive(href) ? "text-teal-700" : "text-slate-600 hover:text-slate-950"}`}
              >
                <span className="flex items-center justify-between">{label}{isActive(href) && <span className="size-1.5 rounded-full bg-teal-600" />}</span>
              </Link>
            ))}
          </nav>
          <div className="container-pad flex gap-3 py-3">
            <a href="tel:+919843419599" className="flex flex-1 items-center justify-center gap-2 border border-slate-300 px-4 py-3 text-sm font-bold text-slate-800"><Phone size={15} /> Call now</a>
            <Link href="/contact" className="flex flex-1 items-center justify-center gap-2 bg-teal-700 px-4 py-3 text-sm font-bold text-white">Get a quote <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      )}
    </header>
  );
}

export const Header = Navbar;
export default Navbar;
