import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTA({ compact = false }: { compact?: boolean }) {
  return (
    <section
  className={`container-pad ${
    compact ? "mt-6 md:mt-8" : "mt-10 md:mt-14"
  }`}
>
  <div className="relative overflow-hidden rounded-2xl border border-leaf-200/80 bg-white shadow-lg shadow-leaf-950/[.05]">
    
    {/* soft decorative glow */}
    <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-leaf-100/70 blur-2xl" />

    <div className="relative grid md:grid-cols-[1fr_17rem] lg:grid-cols-[1fr_19rem]">
      
      {/* LEFT CONTENT */}
      <div
        className={
          compact
            ? "p-5 sm:p-6"
            : "p-6 sm:p-7 md:p-8"
        }
      >
        <span className="inline-flex items-center rounded-full border border-leaf-200 bg-leaf-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-leaf-800">
          Fabric Enquiry
        </span>

        <h2
          className={`max-w-2xl font-display font-bold tracking-tight text-forest-950 ${
            compact
              ? "mt-3 text-2xl md:text-[28px]"
              : "mt-4 text-3xl md:text-4xl"
          }`}
        >
          Have a fabric brief in mind?
        </h2>

        <p
          className={`max-w-xl text-forest-600 ${
            compact
              ? "mt-2 text-sm leading-6"
              : "mt-3 text-sm leading-6 md:text-base"
          }`}
        >
          Share your fabric structure, yarn, GSM, diameter and quantity.
          Our team will help you choose the right machine and next step.
        </p>
      </div>

      {/* RIGHT CONTACT PANEL */}
      <div
        className={`textile-noise flex flex-col justify-center bg-forest-950 ${
          compact ? "p-5" : "p-6"
        }`}
      >
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-leaf-300">
          Speak with our team
        </p>

        <a
          href="tel:+919843419599"
          className="group mt-3 inline-flex items-center justify-between rounded-lg border border-white/15 px-4 py-2.5 text-xs font-bold text-white transition hover:border-leaf-300 hover:bg-white/5"
        >
          <span className="flex items-center gap-2">
            <Phone size={14} />
            Call now
          </span>

          <span className="text-forest-500 transition group-hover:text-leaf-300">
            01
          </span>
        </a>

        <Link
          href="/contact"
          className="group mt-2 inline-flex items-center justify-between rounded-lg bg-leaf-400 px-4 py-2.5 text-xs font-bold text-forest-950 transition hover:bg-leaf-300"
        >
          <span>Send enquiry</span>

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <p className="mt-3 text-[10px] leading-4 text-forest-400">
          Direct contact with RMS management.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
