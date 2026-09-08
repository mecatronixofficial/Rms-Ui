/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleGauge,
  Factory,
  Gauge,
  Layers3,
  Orbit,
  Repeat2,
  ScanLine,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Target,
  Waves,
  Zap,
} from "lucide-react";

import { CTA } from "@/components/Shared";
import { machineRows } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Knitting Machines | RMS Textile Mills",
  description:
    "Explore RMS Textile Mills' imported Pailung circular knitting setup, 24 GG configuration, four-track design, all-feeder Lycra capability, diameter range and feeder schedule.",
};

const technologyReferences = [
  {
    title: "High-speed circular knitting",
    eyebrow: "Technology reference",
    copy:
      "Modern circular knitting combines yarn feeding, needle control, fabric formation and take-down in one continuous production system.",
    image:
      "https://textiletoday.com.bd/storage/uploads/2023/7/Pailung-high-speed-knitting-machines-boost-productivity-while-lowering-costs-16902636139000.jpg",
    tag: "Circular Knit",
  },
  {
    title: "Single-knit architecture",
    eyebrow: "Pailung Knitel SK",
    copy:
      "Pailung's current Knitel range includes single-knit circular machines. RMS machine selection should still begin with the required construction, yarn, GSM, width and quantity.",
    image:
      "https://knittingindustry.com/uploads/8485/03-KDAKCJ_open.png",
    tag: "Single Knit",
  },
  {
    title: "Fleece / structured knit context",
    eyebrow: "Application reference",
    copy:
      "Circular platforms can support multiple fabric directions. The practical choice depends on the construction and exact production brief rather than the machine image alone.",
    image:
      "https://vanguardpailung.com/images/products/fleece.png",
    tag: "Fabric Direction",
  },
] as const;

const productionSignals = [
  {
    icon: CircleGauge,
    number: "24",
    unit: "GG",
    title: "Consistent gauge",
    copy:
      "The supplied RMS schedule lists a 24-gauge setup across the documented machine range.",
  },
  {
    icon: Layers3,
    number: "4",
    unit: "TRACK",
    title: "Pattern flexibility",
    copy:
      "The four-track configuration provides a practical base for plain, pattern-led and textured knit planning.",
  },
  {
    icon: Repeat2,
    number: "100%",
    unit: "LYCRA",
    title: "Stretch-ready",
    copy:
      "The supplied profile lists all-feeder Lycra capability for stretch-enabled constructions.",
  },
  {
    icon: SlidersHorizontal,
    number: "26–40",
    unit: "DIA",
    title: "Width planning",
    copy:
      "Seven documented diameter options create a useful range for discussing construction and finished width.",
  },
] as const;

const selectionFlow = [
  {
    step: "01",
    title: "Fabric construction",
    copy:
      "Start with the intended knit structure and end use instead of selecting a machine only by diameter.",
  },
  {
    step: "02",
    title: "Yarn & composition",
    copy:
      "Yarn count, fibre mix and Lycra requirement influence the machine conversation and process settings.",
  },
  {
    step: "03",
    title: "GSM & finished width",
    copy:
      "Target GSM and usable width help narrow the most practical diameter and feeder combination.",
  },
  {
    step: "04",
    title: "Production quantity",
    copy:
      "Approximate order volume helps the team discuss capacity, machine availability and production planning.",
  },
] as const;

export default function MachinesPage() {
  const totalMachines = machineRows.reduce(
    (sum, row) => sum + row.machines,
    0
  );

  const maximumFeeders = Math.max(...machineRows.map((row) => row.feeders));
  const minimumFeeders = Math.min(...machineRows.map((row) => row.feeders));

  return (
    <>
      <style>{`
        .rms-machine-page {
          --ink: #071811;
          --ink-2: #0c241a;
          --leaf: #8dcc5f;
          --leaf-soft: #dff3cf;
          --line: rgba(125,160,139,.22);
          --paper: #f5f8f4;
          --mint: #eef8e9;
        }

        .perspective-stage {
          perspective: 1400px;
          transform-style: preserve-3d;
        }

        .machine-hero-card {
          transform: rotateY(-10deg) rotateX(4deg);
          transform-style: preserve-3d;
          box-shadow:
            0 50px 120px rgba(0,0,0,.45),
            0 15px 40px rgba(125,207,98,.10);
          transition:
            transform .7s cubic-bezier(.2,.8,.2,1),
            box-shadow .7s cubic-bezier(.2,.8,.2,1);
        }

        .machine-hero-card:hover {
          transform: rotateY(-3deg) rotateX(1deg) translateY(-8px);
          box-shadow:
            0 70px 140px rgba(0,0,0,.50),
            0 20px 55px rgba(125,207,98,.16);
        }

        .float-slow {
          animation: floatSlow 6.5s ease-in-out infinite;
        }

        .float-delayed {
          animation: floatSlow 7.5s ease-in-out 1.2s infinite;
        }

        .scan-line {
          position: absolute;
          left: 8%;
          right: 8%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(181,255,137,.85),
            transparent
          );
          box-shadow: 0 0 22px rgba(181,255,137,.55);
          animation: scan 4.8s ease-in-out infinite;
        }

        .grid-field {
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
        }

        .glow-orb {
          filter: blur(1px);
          animation: pulseOrb 5s ease-in-out infinite;
        }

        .depth-card {
          transform-style: preserve-3d;
          transition:
            transform .45s cubic-bezier(.2,.8,.2,1),
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .depth-card:hover {
          transform: translateY(-9px) rotateX(2.5deg) rotateY(-2.5deg);
          box-shadow: 0 26px 70px rgba(7,24,17,.12);
        }

        .depth-card .depth-icon {
          transform: translateZ(28px);
        }

        .depth-card .depth-copy {
          transform: translateZ(15px);
        }

        .machine-photo-card {
          perspective: 1000px;
        }

        .machine-photo-inner {
          transform: rotateX(0deg) rotateY(0deg);
          transform-style: preserve-3d;
          transition:
            transform .6s cubic-bezier(.2,.8,.2,1),
            box-shadow .6s ease;
        }

        .machine-photo-card:hover .machine-photo-inner {
          transform: rotateX(2deg) rotateY(-3deg) translateY(-8px);
          box-shadow: 0 32px 80px rgba(7,24,17,.14);
        }

        .machine-photo-card img {
          transition: transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .machine-photo-card:hover img {
          transform: scale(1.045);
        }

        .config-card {
          transform-style: preserve-3d;
          transition:
            transform .38s cubic-bezier(.2,.8,.2,1),
            box-shadow .38s ease,
            background-color .38s ease;
        }

        .config-card:hover {
          transform: translateY(-7px) rotateX(3deg);
          box-shadow: 0 22px 60px rgba(7,24,17,.10);
        }

        .spec-orbit {
          animation: orbitGlow 8s linear infinite;
        }

        .flow-card {
          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            background .4s ease,
            border-color .4s ease;
        }

        .flow-card:hover {
          transform: translateX(8px);
          border-color: rgba(141,204,95,.6);
          background: rgba(255,255,255,.07);
        }


        .compact-machine-hero {
          min-height: 285px;
        }

        .hero-bg-image {
          transform: scale(1.015);
          transition: transform 1.2s cubic-bezier(.2,.8,.2,1);
          will-change: transform;
        }

        .compact-machine-hero:hover .hero-bg-image {
          transform: scale(1.035);
        }

        .hero-glass-stat {
          transform: translateZ(0);
          transition:
            transform .35s cubic-bezier(.2,.8,.2,1),
            border-color .35s ease,
            background-color .35s ease;
          will-change: transform;
        }

        .hero-glass-stat:hover {
          transform: translateY(-4px);
          border-color: rgba(184,239,145,.28);
          background: rgba(255,255,255,.075);
        }

        .depth-card {
          perspective: 1000px;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .depth-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          opacity: 0;
          background:
            radial-gradient(circle at 22% 18%, rgba(167,229,125,.20), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,.36), transparent 40%);
          transition: opacity .4s ease;
        }

        .depth-card:hover::before {
          opacity: 1;
        }

        .depth-card:hover {
          transform: perspective(1000px) translateY(-7px) rotateX(4deg) rotateY(-3deg);
          box-shadow:
            0 28px 65px rgba(7,24,17,.12),
            0 8px 22px rgba(95,159,66,.08);
          border-color: rgba(112,160,92,.38);
        }

        .machine-photo-card {
          perspective: 1200px;
        }

        .machine-photo-inner {
          position: relative;
          transform: rotateX(0deg) rotateY(0deg) translateZ(0);
          transform-style: preserve-3d;
          will-change: transform;
          transition:
            transform .55s cubic-bezier(.2,.8,.2,1),
            box-shadow .55s ease,
            border-color .55s ease;
        }

        .machine-photo-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          opacity: 0;
          background:
            linear-gradient(125deg, rgba(255,255,255,.24), transparent 32%),
            radial-gradient(circle at 78% 18%, rgba(167,229,125,.20), transparent 28%);
          transition: opacity .45s ease;
        }

        .machine-photo-card:hover .machine-photo-inner {
          transform: rotateX(4deg) rotateY(-5deg) translateY(-7px) translateZ(6px);
          border-color: rgba(103,153,82,.35);
          box-shadow:
            0 34px 78px rgba(7,24,17,.15),
            0 10px 25px rgba(95,159,66,.08);
        }

        .machine-photo-card:hover .machine-photo-inner::after {
          opacity: 1;
        }

        .machine-photo-card img {
          transform: translateZ(12px) scale(1);
          will-change: transform;
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }

        .machine-photo-card:hover img {
          transform: translateZ(24px) scale(1.04);
        }

        .machine-photo-copy {
          transform: translateZ(24px);
        }

        .config-card {
          perspective: 1000px;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .config-card:hover {
          transform: perspective(1000px) translateY(-6px) rotateX(4deg) rotateY(-2deg);
          box-shadow:
            0 24px 58px rgba(7,24,17,.11),
            0 7px 18px rgba(95,159,66,.07);
          border-color: rgba(103,153,82,.35);
        }

        .reveal-up {
          animation: revealUp .9s both;
          animation-timeline: view();
          animation-range: entry 8% cover 30%;
        }

        @keyframes floatSlow {
          0%,100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(0,-12px,0); }
        }

        @keyframes scan {
          0%,100% { top: 17%; opacity: .25; }
          50% { top: 82%; opacity: .9; }
        }

        @keyframes pulseOrb {
          0%,100% { transform: scale(1); opacity: .55; }
          50% { transform: scale(1.08); opacity: .85; }
        }

        @keyframes orbitGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1024px) {
          .machine-hero-card,
          .machine-hero-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .float-slow,
          .float-delayed,
          .scan-line,
          .glow-orb,
          .spec-orbit,
          .reveal-up {
            animation: none !important;
          }

          .machine-hero-card,
          .machine-hero-card:hover,
          .depth-card,
          .depth-card:hover,
          .machine-photo-inner,
          .machine-photo-card:hover .machine-photo-inner,
          .machine-photo-card img,
          .machine-photo-card:hover img,
          .config-card,
          .config-card:hover,
          .flow-card,
          .flow-card:hover,
          .hero-bg-image,
          .compact-machine-hero:hover .hero-bg-image,
          .hero-glass-stat,
          .hero-glass-stat:hover {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <main className="rms-machine-page overflow-hidden bg-[#f5f8f4] text-[#071811]">
        {/* HERO - COMPACT BACKGROUND IMAGE ONLY */}
        <section className="compact-machine-hero relative isolate overflow-hidden bg-[#071811] pt-20 text-white md:min-h-[320px] md:pt-24">
          {/* Full-width banner background */}
          <div className="absolute inset-0 -z-30 overflow-hidden">
            <img
              src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788843757/2148828309_bypym2.jpg"
              alt="Circular knitting production floor at RMS Textile Mills"
              className="hero-bg-image h-full w-full object-cover object-center"
            />
          </div>

          {/* Readability overlays */}
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061710]/95 via-[#071811]/82 to-[#071811]/35" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#061710]/78 via-transparent to-[#061710]/28" />

          {/* Very subtle graphics */}
          <div className="grid-field absolute inset-0 -z-10 opacity-35" />
          <div className="absolute -left-20 top-14 -z-10 size-64 rounded-full bg-[#8dcc5f]/10 blur-3xl" />
          <div className="absolute right-16 top-16 -z-10 size-56 rounded-full bg-[#b8ef91]/8 blur-3xl" />

          <div className="container-pad relative z-10 flex min-h-[205px] items-center py-8 md:min-h-[230px]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#071811]/45 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#c9f4aa] backdrop-blur-xl">
                <Orbit size={13} />
                RMS / Knitting Machine Lab
              </div>

              <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-none tracking-[-.045em] sm:text-4xl md:text-5xl">
                Circular knitting,
                <span className="block text-[#b8ef91]">
                  engineered for production.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 md:text-base md:leading-7">
                Diameter, feeders, 24 GG, four-track design and all-feeder
                Lycra capability — planned around the fabric requirement.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href="#machine-grid"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#a7e57d] px-4 py-2.5 text-xs font-extrabold text-[#071811] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c8f2aa]"
                >
                  Explore configurations
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#071811]/35 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-xl transition duration-300 hover:border-white/30 hover:bg-white/[.09]"
                >
                  Discuss your fabric
                  <ArrowUpRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        <section className="container-pad py-3">
              {/* Machine totals */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  [String(totalMachines), "Machines"],
                  [String(machineRows.length), "Diameters"],
                  [`${minimumFeeders}–${maximumFeeders}`, "Feeders"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="hero-glass-stat rounded-xl border border-[#dce7dc] bg-white px-3 py-2.5 backdrop-blur-md"
                  >
                    <strong className="font-display text-lg font-bold text-[#071811] sm:text-xl">
                      {value}
                    </strong>
                    <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[.13em] text-[#607468] sm:text-[9px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
        </section>

        {/* COMPACT 3D CARDS */}
        <section className="container-pad relative z-20">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {productionSignals.map(
              ({ icon: Icon, number, unit, title, copy }, index) => (
                <article
                  key={title}
                  className="depth-card reveal-up relative rounded-[1.25rem] border border-[#dce7dc] bg-white p-4 shadow-[0_10px_32px_rgba(7,24,17,.05)]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="depth-icon flex items-start justify-between gap-4">
                    <div className="grid size-10 place-items-center rounded-xl bg-[#0b2118] text-[#a7e57d]">
                      <Icon size={18} />
                    </div>

                    <div className="text-right">
                      <strong className="font-display text-3xl font-bold tracking-tight">
                        {number}
                      </strong>
                      <span className="ml-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#688174]">
                        {unit}
                      </span>
                    </div>
                  </div>

                  <div className="depth-copy mt-3">
                    <h2 className="font-display text-base font-bold">{title}</h2>
                    <p className="mt-1.5 text-[12px] leading-5 text-[#607468]">
                      {copy}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* MACHINE REFERENCE VISUALS */}
        <section className="container-pad py-8 md:py-10">
          <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe3c5] bg-white px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#416a4d]">
                <Sparkles size={13} />
                Circular knitting technology
              </span>

              <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-[-.04em] md:text-4xl">
                See the machine as a{" "}
                <span className="text-[#5f9f42]">production system.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#607468] lg:justify-self-end">
              Pailung currently groups its circular technology under Knitel,
              including single-knit and double-knit platforms. These references
              provide technology context; RMS machine suitability should still
              be confirmed against the actual fabric brief.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologyReferences.map((item, index) => (
              <article
                key={item.title}
                className={`machine-photo-card reveal-up ${
                  index === 1 ? "lg:-translate-y-6" : ""
                }`}
              >
                <div className="machine-photo-inner h-full overflow-hidden rounded-[1.45rem] border border-[#dce7dc] bg-white shadow-[0_14px_45px_rgba(7,24,17,.07)]">
                  <div className="relative h-[162px] overflow-hidden bg-[#eaf1e9]">
                    <img
                      src={item.image}
                      alt={`${item.title} circular knitting machine reference`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071811]/60 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071811]/75 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.15em] text-white backdrop-blur-xl">
                      {item.tag}
                    </div>

                    <span className="absolute bottom-4 right-4 font-display text-5xl font-bold text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="machine-photo-copy p-4">
                    <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#6b9c53]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-5 text-[#607468]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-[#708279]">
            The three machine photographs are external reference imagery used
            for this design mock-up. For the live RMS website, replace them with
            RMS-owned or properly licensed machine photographs.
          </p>
        </section>

        {/* CONFIGURATION DECK */}
        <section
          id="machine-grid"
          className="relative overflow-hidden bg-[#eef5eb] py-8 md:py-10"
        >
          <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#aac9a1] to-transparent" />

          <div className="container-pad">
            <div className="grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#5b9146]">
                  <Settings2 size={14} />
                  RMS configuration deck
                </span>

                <h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-[1.04] tracking-[-.04em] md:text-4xl">
                  Seven machine diameters.
                  <span className="block text-[#6a9e54]">
                    One visual system.
                  </span>
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#607468]">
                  Instead of starting with a flat table, each diameter is shown
                  as a compact 3D configuration tile. The feeder bar compares
                  each row with the highest documented feeder count.
                </p>

                <div className="perspective-stage mt-3 max-w-sm">
                  <div className="relative overflow-hidden rounded-[22px] border border-[#d4e2d2] bg-[#0b2118] p-4 text-white shadow-[0_30px_80px_rgba(7,24,17,.18)]">
                    <div className="spec-orbit absolute -right-14 -top-14 size-44 rounded-full border border-[#b8ef91]/20">
                      <div className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-[#b8ef91] shadow-[0_0_18px_rgba(184,239,145,.9)]" />
                    </div>

                    <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#b8ef91]">
                      Core setup
                    </p>

                    <div className="mt-5 flex items-end gap-2">
                      <strong className="font-display text-5xl font-bold leading-none">
                        24
                      </strong>
                      <span className="pb-2 text-sm font-extrabold text-white/45">
                        GG
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="rounded-2xl bg-white/[.06] p-4">
                        <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/40">
                          Track
                        </span>
                        <strong className="mt-1 block font-display text-xl">
                          Four
                        </strong>
                      </div>

                      <div className="rounded-2xl bg-white/[.06] p-4">
                        <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/40">
                          Lycra
                        </span>
                        <strong className="mt-1 block font-display text-xl">
                          All feeder
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {machineRows.map(
                  ({ diameter, feeders, machines }, index) => (
                    <article
                      key={diameter}
                      className={`config-card reveal-up rounded-[1.35rem] border border-[#d3e0d1] bg-white p-4 ${
                        index === machineRows.length - 1
                          ? "sm:col-span-2 sm:grid sm:grid-cols-[1fr_.8fr] sm:items-center sm:gap-8"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#6b8d77]">
                              Diameter
                            </p>
                            <div className="mt-1 flex items-end gap-1.5">
                              <strong className="font-display text-4xl font-bold tracking-tight">
                                {diameter}
                              </strong>
                              <span className="pb-1 text-xs font-bold text-[#7a9184]">
                                inch
                              </span>
                            </div>
                          </div>

                          <div className="grid size-11 place-items-center rounded-2xl bg-[#edf6e9] text-[#5c9444]">
                            <CircleGauge size={20} />
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-[#425c4d]">
                              {feeders} feeders
                            </span>
                            <span className="text-[#7f9187]">
                              {machines}{" "}
                              {machines === 1 ? "machine" : "machines"}
                            </span>
                          </div>

                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf1ed]">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#3d6e4a] via-[#73ad54] to-[#a7df7e]"
                              style={{
                                width: `${(feeders / maximumFeeders) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {index === machineRows.length - 1 && (
                        <div className="mt-5 rounded-2xl bg-[#f1f6ef] p-4 sm:mt-0">
                          <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#6a8d77]">
                            Maximum documented feed
                          </p>
                          <p className="mt-2 font-display text-3xl font-bold">
                            {maximumFeeders}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-[#708279]">
                            Highest feeder count in the supplied RMS schedule.
                          </p>
                        </div>
                      )}
                    </article>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* MACHINE SELECTION FLOW */}
        <section className="relative overflow-hidden bg-[#071811] py-8 text-white md:py-10">
          <div className="grid-field absolute inset-0 opacity-60" />
          <div className="absolute left-1/3 top-20 size-72 rounded-full bg-[#7dcc59]/10 blur-3xl" />

          <div className="container-pad relative">
            <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#b8ef91]">
                  <Target size={14} />
                  Machine suitability
                </span>

                <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[1.03] tracking-[-.04em] md:text-4xl">
                  Choose from the fabric backwards.
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/50">
                  Diameter and feeders are only part of the decision. A useful
                  production enquiry begins with what the fabric needs to
                  become.
                </p>

                <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3">
                  <div className="grid size-9 place-items-center rounded-xl bg-[#a7e57d]/10 text-[#b8ef91]">
                    <Zap size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      Faster first discussion
                    </p>
                    <p className="text-[11px] text-white/40">
                      Send construction + GSM + width + quantity
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10">
                {selectionFlow.map((item) => (
                  <article
                    key={item.step}
                    className="flow-card grid gap-4 border-b border-white/10 py-4 sm:grid-cols-[3.6rem_1fr_auto] sm:items-center"
                  >
                    <span className="font-display text-sm font-bold text-[#a7e57d]">
                      {item.step}
                    </span>

                    <div>
                      <h3 className="font-display text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-white/45">
                        {item.copy}
                      </p>
                    </div>

                    <ChevronRight
                      size={18}
                      className="hidden text-white/25 sm:block"
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MACHINE VARIABLES */}
        <section className="container-pad py-8 md:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf5e5] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#5f924b]">
              <Waves size={13} />
              Production logic
            </span>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-[-.04em] md:text-4xl">
              What each machine variable helps you discuss.
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: CircleGauge,
                title: "Diameter",
                copy:
                  "A key starting point for tube size, fabric-width planning and the intended construction.",
              },
              {
                icon: Gauge,
                title: "Gauge",
                copy:
                  "Needle density is discussed together with yarn, fabric hand-feel and target construction.",
              },
              {
                icon: Settings2,
                title: "Feeders",
                copy:
                  "Feeder configuration influences the production conversation and differs across the RMS diameter schedule.",
              },
              {
                icon: Repeat2,
                title: "Lycra",
                copy:
                  "Stretch requirements should be shared early so composition and process expectations are clear.",
              },
            ].map(({ icon: Icon, title, copy }, index) => (
              <article
                key={title}
                className="depth-card reveal-up group relative rounded-[1.35rem] border border-[#dce7dc] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="depth-icon grid size-11 place-items-center rounded-2xl bg-[#0b2118] text-[#a7e57d]">
                    <Icon size={19} />
                  </div>
                  <span className="font-display text-4xl font-bold text-[#e4ebe3]">
                    0{index + 1}
                  </span>
                </div>

                <div className="depth-copy">
                  <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-5 text-[#607468]">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container-pad pb-2">
          <div className="perspective-stage">
            <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#0a2117] via-[#103120] to-[#1e4b2b] p-4 text-white shadow-[0_35px_100px_rgba(7,24,17,.18)] sm:p-5 lg:p-6">
              <div className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 size-56 rounded-full border border-[#b8ef91]/15" />
              <div className="absolute right-12 top-12 hidden size-4 rounded-full bg-[#b8ef91] shadow-[0_0_35px_rgba(184,239,145,.9)] md:block" />

              <div className="relative grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#b8ef91]">
                    <Factory size={14} />
                    Prepare your production enquiry
                  </span>

                  <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.04] tracking-[-.04em] md:text-4xl">
                    Send the fabric requirement.
                    <span className="block text-[#b8ef91]">
                      RMS can discuss the machine fit.
                    </span>
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                    Share knit construction, yarn count and composition, target
                    GSM, finished width, Lycra requirement and approximate
                    quantity for a more useful machine-suitability discussion.
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-white/[.06] p-5 backdrop-blur-xl">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {[
                      "Construction",
                      "Yarn / composition",
                      "Target GSM",
                      "Finished width",
                      "Lycra need",
                      "Approx. quantity",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl bg-black/10 px-3 py-2.5 text-xs font-semibold text-white/75"
                      >
                        <Check size={14} className="text-[#b8ef91]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 flex items-center justify-between rounded-xl bg-[#a7e57d] px-4 py-3.5 text-sm font-extrabold text-[#071811] transition hover:bg-[#c7f1a9]"
                  >
                    Send production details
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA compact />
      </main>
    </>
  );
}
