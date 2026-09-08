"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ClipboardList, Gauge, Layers3, MapPin, Phone, Quote, ScanLine, Settings2, Sparkles, UserRound } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { BannerCards } from "./BannerCards";
import { StatsSection } from "./StatsSection";
import { CTA } from "./Shared";
import { address, fabrics, machineRows } from "./site-data";

const process = [
  [ClipboardList, "01", "Understand the brief", "Construction, yarn, GSM, stretch, width and quantity establish the starting point."],
  [Settings2, "02", "Plan the machine", "Diameter, feeders, track design and Lycra setup are considered against the fabric."],
  [Gauge, "03", "Run the construction", "The selected setup is used to develop and produce the agreed knitted structure."],
  [ScanLine, "04", "Review and prepare", "Fabric appearance is reviewed before the agreed handover or dispatch stage."],
] as const;

const pathways = [
  [Layers3, "Fabric capabilities", "Explore six documented directions across jersey, texture, fleece and stretch knits.", "/products", "View fabrics"],
  [Gauge, "Machine range", "Review all seven diameters, feeder counts and the complete 24 GG Pailung setup.", "/machines", "View machines"],

] as const;

/**
 * Mouse-tracked 3D tilt wrapper with a moving glare highlight.
 * Used for the pathways cards.
 */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({
  children,
  className = "",
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -intensity;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * intensity;
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.5 });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4), transparent 55%)`,
        }}
      />
    </div>
  );
}

export default function HomeClient() {
  const totalMachines = machineRows.reduce((total, row) => total + row.machines, 0);

  return (
    <>
      <div className="bg-white p-2 sm:p-3">
      <section className="relative min-h-[600px] overflow-hidden rounded-[24px] pt-24 text-white sm:min-h-[620px] sm:rounded-[30px]">
        <Image src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788852239/awqs_p05nvj.png" alt="Visual representation of a circular knitting production floor" fill priority sizes="100vw" className="object-cover object-center" />


        <div className="container-pad relative flex min-h-[500px] flex-col justify-end gap-8 pb-8 pt-32 sm:min-h-[520px] sm:pt-40 lg:pb-12 lg:pt-56">
          <div className="flex w-full max-w-[560px] flex-col items-start gap-2 lg:max-w-[min(560px,calc(100%_-_470px))] [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-leaf-200 backdrop-blur"><Sparkles size={14} /> Imported knitting division / Tiruppur</span>
            <h1 className="font-display text-[28px] font-bold leading-[1.02] tracking-[-.06em] sm:text-[34px] lg:text-[40px]">Precision in every <span className="text-leaf-300">loop we knit.</span></h1>
            <p className="max-w-[500px] text-[13px] leading-[1.4] text-white">RMS Textile Mills combines imported Pailung circular knitting machinery with practical configuration options and direct production communication.</p>
            <div className="flex flex-wrap gap-1.5"><Link href="/products" className="inline-flex items-center gap-2 bg-leaf-400 px-3 py-2 text-xs font-bold text-forest-950 transition hover:bg-leaf-300">Explore fabric capabilities <ArrowRight size={16} /></Link><Link href="/contact" className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20">Discuss a requirement</Link></div>
            <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-[11px] font-semibold text-white"><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-leaf-300" /> 24 GG machines</span><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-leaf-300" /> Four-track design</span><span className="flex items-center gap-2"><BadgeCheck size={15} className="text-leaf-300" /> All-feeder Lycra</span></div>
          </div>
          <BannerCards />
          <p className="absolute bottom-2 left-5 text-[10px] font-bold uppercase tracking-[.16em] text-white/50">Visual representation</p>
        </div>
      </section>
      </div>

      <StatsSection totalMachines={totalMachines} diameterOptions={machineRows.length} fabricCount={fabrics.length} />

{/* =====================================================
          OWNER / DIRECTOR
          CONTENT LEFT + OWNER IMAGE RIGHT
      ====================================================== */}

      <section
  className="
    container-pad
    pb-10
    md:pb-12
    lg:pb-14
  "
>
  <Reveal>
    <TiltCard
      intensity={3}
      className="
        relative
        overflow-hidden
        rounded-[1.6rem]
        border
        border-white/5
        bg-forest-950
        text-white
        shadow-[0_22px_60px_rgba(7,24,17,.16)]
      "
    >
      <div
        className="
          grid
          lg:grid-cols-[1.08fr_.92fr]
          lg:items-stretch
        "
      >
        {/* =====================================================
            LEFT — DIRECTOR CONTENT
        ====================================================== */}
        <div
          className="
            relative
            flex
            min-h-[350px]
            flex-col
            justify-between
            overflow-hidden
            p-5

            sm:p-6
            md:p-7

            lg:min-h-[400px]
            lg:p-8
          "
        >
          {/* =====================================================
              BACKGROUND DECORATION
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              size-56
              rounded-full
              bg-leaf-300/[.07]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              right-[-80px]
              size-[270px]
              rounded-full
              border
              border-white/[.045]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              right-[-10px]
              size-[170px]
              rounded-full
              border
              border-leaf-300/[.06]
            "
          />

          <Quote
            size={68}
            strokeWidth={1}
            className="
              pointer-events-none
              absolute
              right-6
              top-5
              text-white/[.045]
            "
          />

          {/* =====================================================
              TOP CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-10
              [transform:translateZ(28px)]
            "
          >
            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[.055]
                px-3
                py-1.5
                backdrop-blur-xl
              "
            >
              <UserRound
                size={12}
                className="text-leaf-300"
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.18em]
                  text-leaf-200
                "
              >
                Managing Director
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-4
                max-w-xl
                font-display
                text-[27px]
                font-bold
                leading-[1.08]
                tracking-[-.035em]
                text-white

                sm:text-[30px]
                md:text-[32px]
                lg:text-[34px]
              "
            >
              Leadership focused on{" "}
              <span className="text-leaf-300">
                practical production.
              </span>
            </h2>

            {/* QUOTE */}
            <blockquote
              className="
                mt-4
                max-w-xl
                font-display
                text-[16px]
                font-semibold
                leading-[1.5]
                tracking-[-.015em]
                text-white/80

                sm:text-[17px]
                md:text-[18px]
              "
            >
              &ldquo;Our focus is to understand the fabric requirement,
              choose a suitable machine configuration and keep
              communication direct throughout the production
              conversation.&rdquo;
            </blockquote>

            {/* SMALL ACCENT LINE */}
            <div
              className="
                mt-4
                h-px
                w-14
                bg-leaf-300/55
              "
            />

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-lg
                text-[12px]
                font-medium
                leading-[1.65]
                text-white/55
              "
            >
              Working closely with customers to align fabric expectations,
              machine configuration and practical production requirements.
            </p>
          </div>

          {/* =====================================================
              BOTTOM DIRECTOR DETAILS
          ====================================================== */}

          <div
            className="
              relative
              z-10
              mt-6
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              pt-4

              sm:flex-row
              sm:items-end
              sm:justify-between

              [transform:translateZ(26px)]
            "
          >
            {/* NAME */}
            <div>
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[.19em]
                  text-leaf-300
                "
              >
                Managing Director
              </p>

              <h3
                className="
                  mt-1.5
                  font-display
                  text-[20px]
                  font-bold
                  leading-none
                  text-white
                "
              >
                P. Ramasamy
              </h3>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  font-medium
                  text-white/40
                "
              >
                RMS Textile Mills
              </p>
            </div>

            {/* PHONE BUTTON */}
            <a
              href="tel:+919843419599"
              aria-label="Call P. Ramasamy"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2.5
                rounded-full
                border
                border-white/10
                bg-white/[.06]
                py-1.5
                pl-3.5
                pr-1.5
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-white/15
                hover:bg-white/[.10]
                hover:shadow-[0_10px_28px_rgba(0,0,0,.15)]
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  text-white
                "
              >
                +91 98434 19599
              </span>

              <span
                className="
                  grid
                  size-8
                  place-items-center
                  rounded-full
                  bg-leaf-300
                  text-forest-950

                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Phone size={13} />
              </span>
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT — OWNER IMAGE
        ====================================================== */}

        <div
  className="
    group
    relative
    min-h-[300px]
    overflow-hidden
    bg-[#071811]

    sm:min-h-[330px]
    lg:min-h-[400px]
  "
>
  {/* =====================================================
      FIRST IMAGE - DEFAULT
  ====================================================== */}
  <Image
    src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788785776/WhatsApp_Image_2026-09-07_at_10.57.32_AM_1_xxbjxn.jpg"
    alt="R. Mohan Prasanth of RMS Textile Mills"
    fill
    sizes="
      (max-width: 1024px) 100vw,
      45vw
    "
    className="
      object-cover
      object-center

      opacity-100
      scale-100

      transition-all
      duration-700
      ease-out

      group-hover:opacity-0
      group-hover:scale-[1.03]
    "
  />

  {/* =====================================================
      SECOND IMAGE - SHOW ON HOVER
  ====================================================== */}
  <Image
    src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788785776/WhatsApp_Image_2026-09-07_at_10.57.32_AM_d6adqk.jpg"
    alt="R. Mohan Prasanth at RMS Textile Mills"
    fill
    sizes="
      (max-width: 1024px) 100vw,
      45vw
    "
    className="
      object-cover
      object-center

      opacity-0
      scale-[1.06]

      transition-all
      duration-700
      ease-out

      group-hover:opacity-100
      group-hover:scale-100
    "
  />

  {/* LEFT IMAGE FADE */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-10

      bg-gradient-to-r
      from-forest-950/35
      via-transparent
      to-transparent

      lg:from-forest-950/35
    "
  />

  {/* BOTTOM IMAGE FADE */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      z-10

      h-36

      bg-gradient-to-t
      from-[#071811]/95
      via-[#071811]/30
      to-transparent
    "
  />

  {/* PREMIUM TOP DARK GRADIENT */}
  <div
    className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      z-10

      h-24

      bg-gradient-to-b
      from-black/25
      to-transparent
    "
  />

  {/* NUMBER */}
  <span
    className="
      pointer-events-none
      absolute
      right-4
      top-2
      z-20

      font-display
      text-[70px]
      font-black
      leading-none
      text-white/[.045]
    "
  >
    01
  </span>

  {/* TOP TAG */}
  <div
    className="
      absolute
      left-4
      top-4
      z-20
    "
  >
    <span
      className="
        inline-flex
        items-center
        gap-1.5

        rounded-full
        border
        border-white/15
        bg-[#071811]/50

        px-2.5
        py-1.5

        text-[8px]
        font-bold
        uppercase
        tracking-[.16em]
        text-white

        backdrop-blur-xl
      "
    >
      <UserRound
        size={11}
        className="text-leaf-300"
      />

      Leadership
    </span>
  </div>

  {/* =====================================================
      BOTTOM PERSON CARD
  ====================================================== */}
  <div
    className="
      absolute
      bottom-4
      left-4
      right-4
      z-20
    "
  >
    <div
      className="
        max-w-[250px]

        rounded-[1rem]
        border
        border-white/10
        bg-[#071811]/65

        p-3.5

        shadow-[0_16px_40px_rgba(0,0,0,.22)]
        backdrop-blur-xl

        transition-all
        duration-500

        group-hover:-translate-y-1
        group-hover:bg-[#071811]/75
      "
    >
      <div
        className="
          mb-2
          h-px
          w-8
          bg-leaf-300/60

          transition-all
          duration-500

          group-hover:w-12
        "
      />

      <p
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[.18em]
          text-leaf-300
        "
      >
        RMS Management
      </p>

      <h3
        className="
          mt-1
          font-display
          text-[17px]
          font-bold
          leading-tight
          text-white
        "
      >
        R. Mohan Prasanth
      </h3>

      <p
        className="
          mt-1
          text-[9px]
          font-medium
          text-white/45
        "
      >
        RMS Textile Mills
      </p>
    </div>
  </div>
</div>
      </div>
    </TiltCard>
  </Reveal>
</section>




      <section
  id="overview"
  className="container-pad py-8 md:py-10"
>
  <div
    className="
      grid
      items-center
      gap-7
      lg:grid-cols-[0.95fr_1.05fr]
      lg:gap-10
      xl:gap-12
    "
  >
    {/* RIGHT CONTENT — STATIC */}
    <div className="relative order-2">
      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[.22em]
          text-leaf-700
        "
      >
        RMS Textile Mills
      </span>

      <h2
        className="
          mt-2.5
          max-w-[620px]
          font-display
          text-3xl
          font-bold
          leading-tight
          tracking-[-.04em]
          text-green-950

          md:text-[38px]
          lg:text-[40px]
        "
      >
        A focused knitting partner in the Tiruppur textile ecosystem.
      </h2>

      <p
        className="
          mt-3
          max-w-[590px]
          text-sm
          leading-6
          text-forest-600
        "
      >
        Our imported knitting division is built around ten Pailung circular
        knitting machines across seven diameters, supporting smooth, textured,
        fleece and stretch-enabled constructions.
      </p>

      <p
        className="
          mt-2
          max-w-[570px]
          text-sm
          leading-6
          text-forest-600
        "
      >
        Each enquiry connects yarn, GSM, width, stretch and quantity to a
        practical machine configuration.
      </p>

      <Link
        href="/about"
        className="
          group
          mt-4
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          bg-forest-950
          px-4
          py-2.5
          text-xs
          font-bold
          text-white
          shadow-[0_10px_24px_rgba(8,35,24,.18)]
          transition-colors
          duration-300

          hover:bg-leaf-700
        "
      >
        Learn more about RMS

        <ArrowRight
          size={15}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Link>
    </div>

    {/* LEFT IMAGE — ONLY THIS CARD HAS ANIMATION */}
    <div
      className="
        relative
        order-1
        mx-auto
        w-full
        max-w-[650px]
        [perspective:1400px]
      "
    >
      {/* BACK LAYER */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-3
          left-6
          right-6
          top-5
          rounded-[28px_28px_70px_28px]
          bg-leaf-200/65
          shadow-[0_20px_45px_rgba(16,55,37,.10)]

          sm:rounded-[32px_32px_90px_32px]
        "
      />

      <TiltCard
        className="
          group
          relative
          z-10
          overflow-hidden
          rounded-[26px_26px_70px_26px]
          bg-forest-100
          shadow-[0_22px_55px_rgba(15,50,34,.16)]
          [transform-style:preserve-3d]

          sm:rounded-[30px_30px_90px_30px]
        "
      >
        <div
          className="
            relative
            h-[250px]
            overflow-hidden

            sm:h-[280px]
            md:h-[300px]
            lg:h-[320px]
          "
        >
          <Image
            src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788855359/2149305951_dpkjxx.jpg"
            alt="Visual representation of multiple knitted fabric structures"
            fill
            sizes="
              (max-width: 1024px) 100vw,
              52vw
            "
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out

              group-hover:scale-[1.035]
            "
          />

          {/* SIMPLE IMAGE SHADE ONLY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-forest-950/20
              via-transparent
              to-transparent
            "
          />
        </div>
      </TiltCard>
    </div>
  </div>
</section>

      {/* Pathways â€” interactive mouse-tilt 3D cards with a moving glare */}
      <section className="container-pad pb-8 md:pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {pathways.map(([Icon, title, copy, href, label], index) => (
            <TiltCard
              key={title}
              className="overflow-hidden rounded-[22px] border border-forest-100 bg-white shadow-[0_1px_3px_rgba(15,40,30,0.05)] hover:shadow-[0_36px_64px_-30px_rgba(15,60,40,0.4)]"
            >
              <article className="group relative flex min-h-[220px] flex-col p-4">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-leaf-400 via-leaf-600 to-forest-800 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-forest-900 to-forest-950 text-leaf-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon size={21} />
                  </div>
                  <span className="font-display text-3xl font-bold text-forest-100 transition-colors duration-300 group-hover:text-leaf-100">0{index + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-forest-950">{title}</h3>
                <p className="mt-1.5 text-sm leading-5 text-forest-600">{copy}</p>
                <Link href={href} className="mt-3 flex items-center justify-between border-t border-forest-100 pt-2.5 text-xs font-bold text-leaf-800">
                  <span>{label}</span>
                  <ArrowRight className="transition group-hover:translate-x-1" size={17} />
                </Link>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Fabrics â€” flip cards: front shows the icon, back reveals the description */}
     <section
  className="
    relative
    overflow-hidden
    bg-forest-950
    py-10
    text-white

    md:py-14
  "
>
  {/* BACKGROUND DECORATION */}
  <div
    className="
      pointer-events-none
      absolute
      -left-40
      top-20
      h-[380px]
      w-[380px]
      rounded-full
      bg-leaf-700/10
      blur-[120px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-40
      bottom-0
      h-[420px]
      w-[420px]
      rounded-full
      bg-leaf-400/5
      blur-[130px]
    "
  />

  <div className="container-pad relative">
    {/* ====================================================== */}
    {/* SECTION HEADING */}
    {/* ====================================================== */}

    <div
      className="
        grid
        items-end
        gap-6

        md:grid-cols-[1.1fr_.75fr]
        md:gap-10
      "
    >
      <div>
        <div className="flex items-center gap-3">
          <span
            className="
              h-px
              w-7
              bg-leaf-400
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[.22em]
              text-leaf-300

              sm:text-xs
            "
          >
            What we knit
          </span>
        </div>

        <h2
          className="
            mt-3
            max-w-[680px]
            font-display
            text-3xl
            font-bold
            leading-[1.08]
            tracking-[-.035em]
            text-white

            md:text-4xl
            lg:text-[42px]
          "
        >
          Six structures.
          <span className="text-leaf-300">
            {" "}
            Different garment directions.
          </span>
        </h2>
      </div>

      <div>
        <p
          className="
            max-w-[520px]
            text-sm
            leading-6
            text-forest-300

            md:text-[15px]
          "
        >
          The listed range covers foundational, pattern-led, breathable,
          textured, fleece and stretch-enabled circular knits.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-5">
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-leaf-300
              transition-colors
              duration-300

              hover:text-white
            "
          >
            Explore all fabrics

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <div
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[.14em]
              text-white/35
            "
          >
            <span>↻</span>
            Hover to explore
          </div>
        </div>
      </div>
    </div>

    {/* ====================================================== */}
    {/* FABRIC CARDS */}
    {/* ====================================================== */}

    <div
      className="
        mt-8
        grid
        gap-4

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {fabrics.map((fabric, index) => {
        const Icon = fabric.icon;

        const emojis = ["🧶", "🪡", "🧵", "✦", "◌", "✧"];

        return (
          <div
            key={fabric.name}
            className="
              group
              h-[215px]

              sm:h-[225px]

              [perspective:1400px]
            "
          >
            {/* FLIPPING AREA */}
            <div
              className="
                relative
                h-full
                w-full
                transition-transform
                duration-700
                ease-[cubic-bezier(.2,.7,.2,1)]

                [transform-style:preserve-3d]

                group-hover:[transform:rotateY(180deg)]
              "
            >
              {/* ================================================== */}
              {/* FRONT FACE */}
              {/* ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.09]
                  bg-gradient-to-br
                  from-white/[0.075]
                  via-white/[0.035]
                  to-white/[0.015]
                  p-5
                  shadow-[0_20px_50px_rgba(0,0,0,.16)]
                  backdrop-blur-sm

                  [backface-visibility:hidden]
                "
              >
                {/* DECORATIVE GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-44
                    w-44
                    rounded-full
                    bg-leaf-400/10
                    blur-3xl
                    transition
                    duration-500

                    group-hover:scale-125
                  "
                />

                {/* FABRIC-LIKE CIRCLES */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-16
                    -right-12
                    h-36
                    w-36
                    rounded-full
                    border
                    border-white/[0.04]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    -right-6
                    h-24
                    w-24
                    rounded-full
                    border
                    border-leaf-300/[0.08]
                  "
                />

                {/* TOP */}
                <div className="relative flex items-start justify-between">
                  {/* ICON */}
                  <div
                    className="
                      relative
                      grid
                      size-12
                      place-items-center
                      overflow-hidden
                      rounded-[15px]
                      border
                      border-leaf-300/10
                      bg-leaf-400/[0.08]
                      text-leaf-300
                      shadow-[inset_0_1px_0_rgba(255,255,255,.05)]
                    "
                  >
                    <Icon size={22} />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -bottom-3
                        -right-2
                        text-2xl
                        opacity-[0.08]
                      "
                    >
                      {emojis[index % emojis.length]}
                    </span>
                  </div>

                  {/* NUMBER */}
                  <div className="text-right">
                    <span
                      className="
                        font-display
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.15em]
                        text-white/25
                      "
                    >
                      Structure
                    </span>

                    <span
                      className="
                        mt-0.5
                        block
                        font-display
                        text-lg
                        font-bold
                        text-white/20
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-leaf-300/10
                        bg-leaf-400/[0.06]
                        px-2.5
                        py-1
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[.14em]
                        text-leaf-300
                      "
                    >
                      Circular Knit
                    </span>

                    <span className="text-xs text-white/25">
                      {emojis[index % emojis.length]}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <h3
                      className="
                        font-display
                        text-xl
                        font-bold
                        tracking-[-.02em]
                        text-white

                        sm:text-[22px]
                      "
                    >
                      {fabric.name}
                    </h3>

                    {/* FLIP INDICATOR */}
                    <div
                      className="
                        grid
                        size-8
                        shrink-0
                        place-items-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-sm
                        text-white/40
                        transition
                        duration-300

                        group-hover:bg-leaf-400
                        group-hover:text-forest-950
                      "
                    >
                      ↗
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================== */}
              {/* BACK FACE */}
              {/* ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-leaf-300/20
                  bg-gradient-to-br
                  from-leaf-700
                  via-[#185238]
                  to-forest-950
                  p-5
                  shadow-[0_22px_55px_rgba(0,0,0,.20)]

                  [backface-visibility:hidden]
                  [transform:rotateY(180deg)]
                "
              >
                {/* BACKGROUND CIRCLE */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    size-40
                    rounded-full
                    border
                    border-white/[0.07]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-3
                    size-20
                    rounded-full
                    bg-leaf-300/[0.06]
                    blur-xl
                  "
                />

                {/* TOP */}
                <div className="relative flex items-center justify-between">
                  <div
                    className="
                      grid
                      size-10
                      place-items-center
                      rounded-xl
                      bg-white/10
                      text-leaf-200
                    "
                  >
                    <Icon size={19} />
                  </div>

                  <span
                    className="
                      text-xl
                      opacity-60
                    "
                  >
                    {emojis[index % emojis.length]}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="relative mt-5">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.18em]
                      text-leaf-200/70
                    "
                  >
                    Fabric Structure
                  </span>

                  <h3
                    className="
                      mt-1.5
                      font-display
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {fabric.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      line-clamp-3
                      text-[13px]
                      leading-[1.65]
                      text-leaf-50/80
                    "
                  >
                    {fabric.short}
                  </p>
                </div>

                {/* BOTTOM */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.13em]
                      text-white/45
                    "
                  >
                    RMS Textile Mills
                  </span>

                  <span
                    className="
                      grid
                      size-7
                      place-items-center
                      rounded-full
                      bg-white/10
                      text-xs
                      text-white
                    "
                  >
                    ←
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section className="container-pad py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-36 lg:self-start"><span className="text-xs font-bold uppercase tracking-[.2em] text-leaf-700">Machine range</span><h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest-950 md:text-4xl">A diameter option for the conversation.</h2><p className="mt-3 leading-6 text-forest-600">The range progresses from 26 to 40 diameter with corresponding feeder counts from 78 to 120.</p><Link href="/machines" className="mt-4 inline-flex items-center gap-2 bg-forest-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-leaf-700">Full machine schedule <ArrowRight size={16} /></Link></div>
          <div className="rounded-[22px] border border-forest-100 bg-white p-3.5 shadow-[0_1px_3px_rgba(15,40,30,0.05)]">
            <div className="grid gap-3">
              {machineRows.map(({ diameter, feeders, machines }, index) => (
                <div key={diameter} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-forest-100 pb-2 last:border-0 last:pb-0">
                  <div className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-leaf-100 to-leaf-50 font-display text-lg font-bold text-leaf-800">{diameter}</div>
                  <div>
                    <div className="h-1.5 rounded-full bg-forest-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-leaf-500 to-leaf-700" style={{ width: `${(feeders / 120) * 100}%` }} />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-forest-500">{feeders} feeders</p>
                  </div>
                  <span className="rounded-full bg-leaf-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-leaf-800">{machines} MC</span>
                  <span className="sr-only">Position {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process â€” layered pop-out 3D: icon and text lift off the card plane on hover */}
      <section className="bg-leaf-50 py-8 md:py-12">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center"><span className="inline-flex rounded-full border border-leaf-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-leaf-800">How we work</span><h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-forest-950 md:text-4xl">A clear path from brief to finished knit.</h2><p className="mt-3 leading-6 text-forest-600">Every program starts with the intended fabric, not just a machine setting.</p></div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([Icon, number, title, copy]) => (
              <div key={number} className="[perspective:1000px]">
                <article className="group relative min-h-[220px] rounded-2xl border border-leaf-100 bg-white p-5 shadow-[0_1px_3px_rgba(15,40,30,0.05)] transition-transform duration-300 [transform-style:preserve-3d] hover:[transform:rotateX(6deg)_rotateY(-6deg)] hover:shadow-[0_32px_56px_-30px_rgba(15,60,40,0.35)]">
                  <div className="flex items-center justify-between">
                    <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-leaf-600 to-forest-800 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:[transform:translateZ(30px)]">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-3xl font-bold text-leaf-100 transition-transform duration-300 group-hover:[transform:translateZ(16px)]">{number}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-forest-950 transition-transform duration-300 group-hover:[transform:translateZ(16px)]">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-forest-600 transition-transform duration-300 group-hover:[transform:translateZ(8px)]">{copy}</p>
                </article>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="container-pad pt-8 md:pt-12">
        <div className="grid overflow-hidden rounded-[22px] border border-forest-100 bg-white shadow-[0_1px_3px_rgba(15,40,30,0.05)] lg:grid-cols-[auto_1fr_auto] lg:items-center"><div className="hidden h-full min-w-20 place-items-center bg-gradient-to-br from-leaf-600 to-forest-800 text-white lg:grid"><MapPin size={27} /></div><div className="p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-leaf-700">Located in Tiruppur</p><h2 className="mt-1.5 font-display text-2xl font-bold text-forest-950">Connected to a leading textile manufacturing ecosystem.</h2><p className="mt-1.5 max-w-3xl text-sm leading-5 text-forest-600">{address}</p></div><Link href="/contact" className="flex h-full min-h-14 items-center justify-between gap-4 bg-forest-950 px-5 text-sm font-bold text-white transition hover:bg-leaf-700">Contact RMS <ArrowRight size={17} /></Link></div>
      </section>
    </>
  );
}
