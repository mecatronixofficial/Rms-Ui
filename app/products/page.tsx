import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowDownRight,
  ArrowRight,
  CircleGauge,
  Info,
  Layers3,
  ListChecks,
  Palette,
  Ruler,
  Sparkles,
  StretchHorizontal,
} from "lucide-react";

import { FabricComparisonCarousel } from "@/components/FabricComparisonCarousel";
import { FabricSculpture } from "@/components/FabricSculpture";
import { CTA } from "@/components/Shared";
import { fabrics } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Fabric Capabilities",
  description:
    "Explore RMS Textile Mills fabric capabilities including Single Jersey, Pattinai, Air Tex, Honey Comb, Two Thread Fleece and Lycra Jersey.",
};

const fabricTraits = [
  [
    "Single Jersey",
    "Smooth face",
    "Lightweight and drapable",
    "Everyday apparel",
  ],
  [
    "Pattinai",
    "Pattern-led surface",
    "Visually distinctive",
    "Fashion and casualwear",
  ],
  [
    "Air Tex",
    "Open texture",
    "Breathable, lighter feel",
    "Warm-weather apparel",
  ],
  [
    "Honey Comb",
    "Cellular texture",
    "Dimensional and structured",
    "Polos and detail panels",
  ],
  [
    "Two Thread Fleece",
    "Soft inner character",
    "Warm with added body",
    "Sweatshirts and joggers",
  ],
  [
    "Lycra Jersey",
    "Clean stretch surface",
    "Movement and recovery",
    "Fitted garments",
  ],
] as const;

const briefItems = [
  [
    Layers3,
    "Construction",
    "Fabric name, reference swatch or intended knit structure",
  ],
  [
    Ruler,
    "Physical target",
    "Expected GSM, finished width and garment application",
  ],
  [
    StretchHorizontal,
    "Performance",
    "Stretch, recovery, hand feel and breathability needs",
  ],
  [
    Palette,
    "Material direction",
    "Yarn composition, count, colour and approximate quantity",
  ],
] as const;

export default function Products() {
  return (
    <div className="products-page bg-[#f7f8f4]">
      {/* =========================================================
          PREMIUM COMPACT FABRIC HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#062018] pt-24 text-white">
        {/* =====================================================
            HERO BACKGROUND
        ====================================================== */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788784277/2148859263_xhs2tx.jpg"
            alt="RMS Textile Mills fabric production"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Background image intentionally darker only for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051812]/95 via-[#06251c]/90 to-[#08291f]/70" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#051812]/50 via-transparent to-[#04130f]/15" />
        </div>

        {/* =====================================================
            SUBTLE GRAPHICS
        ====================================================== */}
        <div className="pointer-events-none absolute -left-24 top-4 h-64 w-64 rounded-full bg-[#bcd7a1]/10 blur-[90px]" />

        <div className="pointer-events-none absolute right-[22%] top-8 h-52 w-52 rounded-full bg-[#7fa36a]/5 blur-[80px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="container-pad relative z-10 grid min-h-[300px] items-center gap-8 py-8 lg:grid-cols-[1.03fr_.97fr] lg:gap-10">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 backdrop-blur-md">
              <Sparkles size={13} className="text-[#c4dca8]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.21em] text-white/80">
                Fabric capabilities
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-[54px]">
              Knits with{" "}
              <span className="text-[#c2dba5]">
                character.
              </span>
            </h1>

            <p className="mt-4 max-w-[680px] text-sm leading-7 text-white/65 md:text-base">
              From smooth everyday jersey to dimensional textures, warm
              fleece and stretch-enabled fabrics, our documented range
              supports varied garment directions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#fabric-range"
                className="group inline-flex items-center gap-2 rounded-full bg-[#c4dda6] px-5 py-3 text-sm font-bold text-[#092219] transition-colors duration-300 hover:bg-[#d6e9bf]"
              >
                Explore the range

                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.14]"
              >
                Discuss a fabric

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT - CLEAR FABRIC IMAGE CARD
          ================================================= */}
          <div className="relative">
            {/* Back depth card */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-[26px] border border-[#bfd5a5]/20 bg-[#bfd5a5]/[0.06]" />

            {/* Second subtle layer */}
            <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-full w-full rounded-[26px] border border-white/[0.05]" />

            {/* Main image card */}
            <div className="group relative h-[210px] w-full overflow-hidden rounded-[26px] border border-white/15 bg-[#16392d] shadow-[0_24px_65px_rgba(0,0,0,.28)] sm:h-[235px] lg:h-[250px]">
              {/* =================================================
                  CLEAR IMAGE

                  IMPORTANT:
                  Use high-resolution image.
                  Recommended: 1600x900 or larger.
              ================================================= */}
              <Image
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788784755/2149620473_qv7epw.jpg"
                alt="Close-up circular knitted fabric"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="transform-gpu object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* =================================================
                  VERY LIGHT OVERLAY
                  Keeps the fabric clear
              ================================================= */}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#04140e]/85 via-transparent to-[#04140e]/10" />

              {/* slight side gradient */}
              <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-transparent via-transparent to-[#04140e]/10" />

              {/* =================================================
                  TOP LABEL
              ================================================= */}
              <div className="absolute left-4 top-4 z-20 sm:left-5 sm:top-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061b14]/65 px-3.5 py-2 shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c2dda5]" />

                  <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.19em] text-white sm:text-[9px]">
                    Material study / 01
                  </span>
                </div>
              </div>

              {/* =================================================
                  TOP RIGHT ICON
              ================================================= */}
              <div className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-[#061b14]/55 text-[#c2dda5] shadow-sm backdrop-blur-md sm:right-5 sm:top-5">
                <Layers3 size={15} />
              </div>

              {/* =================================================
                  BOTTOM TEXT
              ================================================= */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-white sm:text-xl md:text-[22px]">
                      Texture. Depth. Possibility.
                    </h2>

                    <p className="mt-1.5 text-[10px] font-medium text-white/70 sm:text-[11px]">
                      Circular knitted fabric range
                    </p>
                  </div>

                  <div className="hidden shrink-0 sm:block">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[9px] font-bold text-white/80 backdrop-blur-md">
                      06 structures
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  SMALL BOTTOM LINE GRAPHIC
              ================================================= */}
              <div className="pointer-events-none absolute bottom-0 left-5 right-5 z-10 h-px bg-gradient-to-r from-transparent via-[#c2dda5]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MACHINE / FABRIC STATS
      ========================================================= */}
      <section className="container-pad relative z-20">
        <div className="grid overflow-hidden rounded-b-[22px] border border-forest-200 bg-white shadow-[0_10px_30px_rgba(15,40,25,.025)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["6", "Documented structures"],
            ["24 GG", "Machine configuration"],
            ["4 track", "Design capability"],
            ["All feeder", "Lycra attachment"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`
                px-5 py-5
                ${index < 3 ? "lg:border-r lg:border-forest-200" : ""}
                ${
                  index < 2
                    ? "border-b border-forest-200 lg:border-b-0"
                    : ""
                }
              `}
            >
              <p className="font-display text-3xl font-bold tracking-[-0.03em] text-forest-950">
                {value}
              </p>

              <p className="mt-1 text-sm text-forest-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FABRIC RANGE
      ========================================================= */}
      <section
        id="fabric-range"
        className="container-pad py-10 md:py-12"
      >
        <div className="grid items-end gap-5 md:grid-cols-[1fr_.8fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-leaf-700">
              The fabric range
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest-950 md:text-4xl">
              Six directions for different garment needs.
            </h2>
          </div>

          <p className="leading-6 text-forest-600">
            Each fabric is a starting point. Yarn, GSM, finish, stretch
            and colour should be confirmed against the intended product
            and production brief.
          </p>
        </div>

        {/* Fabric Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fabrics.map((fabric, index) => {
            const Icon = fabric.icon;

            return (
              <article
                key={fabric.name}
                className="product-fabric-card group flex flex-col overflow-hidden rounded-[22px] border border-forest-950/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,40,25,.08)]"
              >
                {/* Fabric Graphic */}
                <div className="relative border-b border-forest-950/5 bg-[#edf0e8] px-4 pt-3">
                  <div className="absolute inset-x-4 top-3 z-10 flex items-center justify-between text-forest-600">
                    <span className="text-[10px] font-semibold uppercase tracking-[.16em]">
                      Fabric / 0{index + 1}
                    </span>

                    <Icon size={17} />
                  </div>

                  <FabricSculpture variant={index} />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight text-forest-950">
                      {fabric.name}
                    </h3>

                    <span className="size-2 shrink-0 rounded-full bg-leaf-600" />
                  </div>

                  <p className="text-sm leading-5 text-forest-600">
                    {fabric.description}
                  </p>

                  {/* Application Tags */}
                  <div className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {fabric.applications.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-forest-100 bg-[#f7f8f4] px-2 py-1 text-[10px] font-medium text-forest-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    aria-label={`Discuss ${fabric.name}`}
                    className="group/link mt-1 flex items-center justify-between border-t border-forest-100 pt-2 text-xs font-semibold text-forest-800"
                  >
                    Discuss this fabric

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          QUICK COMPARISON
      ========================================================= */}
      <section className="bg-white py-10 text-forest-950 md:py-12">
        <div className="container-pad grid items-center gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,.85fr)] lg:gap-10">
          <div className="min-w-0">
            <FabricComparisonCarousel items={fabricTraits} />
          </div>

          <div className="max-w-lg">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-leaf-700">
              Quick comparison
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-forest-950 md:text-4xl">
              Find a useful starting point.
            </h2>

            <p className="mt-4 text-sm leading-6 text-forest-600">
              Explore six knit structures side by side. Compare the
              surface, fabric character and intended application to
              find a direction for your next garment.
            </p>

            <div className="mt-5 flex gap-3 border-l-2 border-leaf-400 pl-4 text-xs leading-6 text-forest-500">
              <Info
                className="mt-1 shrink-0 text-leaf-700"
                size={16}
              />

              <p>
                These descriptions are indicative, not finished-fabric
                specifications. Confirm development details with the
                RMS team.
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-5 inline-flex min-h-11 items-center gap-3 rounded-full bg-leaf-300 px-5 py-2.5 text-xs font-bold text-forest-950 transition-colors duration-300 hover:bg-leaf-200"
            >
              Discuss your fabric brief

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREPARE YOUR BRIEF
      ========================================================= */}
      <section className="container-pad py-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-36 lg:self-start">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-leaf-700">
              <ListChecks size={15} />

              Prepare your brief
            </span>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest-950 md:text-4xl">
              Better inputs create a better production conversation.
            </h2>

            <p className="mt-3 leading-6 text-forest-600">
              You do not need every detail finalized. Share what is
              known, along with a physical reference where available,
              so the team can discuss a practical next step.
            </p>
          </div>

          {/* Brief Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {briefItems.map(([Icon, title, copy], index) => (
              <article
                key={title}
                className="group rounded-2xl border border-forest-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(15,40,25,.07)]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-leaf-50 text-leaf-700 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} />
                  </div>

                  <span className="font-display text-3xl font-bold text-forest-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-forest-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-forest-600">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MACHINE CTA
      ========================================================= */}
      <section className="container-pad">
        <div className="grid overflow-hidden rounded-2xl border border-leaf-200 bg-leaf-50 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="hidden h-full min-w-16 place-items-center bg-leaf-700 text-white lg:grid">
            <CircleGauge size={24} />
          </div>

          <div className="px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[.14em] text-leaf-700">
              Need machine context?
            </p>

            <h2 className="mt-1 font-display text-base font-bold leading-snug text-forest-950 sm:text-lg">
              Explore the 24 GG machine configuration behind the range.
            </h2>
          </div>

          <Link
            href="/machines"
            className="group flex h-full min-h-11 items-center justify-between gap-3 bg-forest-950 px-4 py-2 text-xs font-bold text-white transition-colors duration-300 hover:bg-leaf-700 sm:px-5"
          >
            View machines

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

     
    </div>
  );
}