"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Factory,
  Gauge,
  Handshake,
  Layers3,
  Phone,
  Quote,
  ReceiptText,
  Settings2,
  Target,
  UserRound,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useRef } from "react";

import { CTA } from "@/components/Shared";
import { contacts, fabrics, machineRows } from "@/components/site-data";

/* =========================================================
   DATA
========================================================= */

const principles = [
  [
    "01",
    "Start with the application",
    "The intended garment, fabric performance and construction guide the production conversation.",
  ],
  [
    "02",
    "Configure with purpose",
    "Diameter, feeders, track design and Lycra capability are considered against the fabric brief.",
  ],
  [
    "03",
    "Keep communication direct",
    "Customers can discuss requirements directly with the RMS management team.",
  ],
  [
    "04",
    "Stay focused on the knit",
    "Setup, production handling and visual review remain centred on the agreed construction.",
  ],
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

const easing = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 26,
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.72,
        delay,
        ease: easing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   3D TILT CARD
========================================================= */

function TiltCard({
  children,
  className = "",
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateXRaw = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);

  const rotateYRaw = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 220,
    damping: 22,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 220,
    damping: 22,
  });

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    x.set((event.clientX - rect.left) / rect.width - 0.5);

    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="[perspective:1200px]">
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  icon,
  children,
  light = false,
}: {
  icon?: ReactNode;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1.5
        text-[10px]
        font-bold
        uppercase
        tracking-[.2em]
        backdrop-blur-xl
        sm:text-xs

        ${
          light
            ? `
              border-white/15
              bg-white/[.06]
              text-leaf-200
            `
            : `
              border-leaf-200/80
              bg-white/80
              text-leaf-800
              shadow-sm
            `
        }
      `}
    >
      {icon}

      {children}
    </span>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  const totalMachines = machineRows.reduce(
    (total, row) => total + row.machines,
    0,
  );

  const heroRef = useRef<HTMLElement>(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.055]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const capabilityCards = [
    {
      icon: Settings2,
      title: "Configurable range",
      copy: "Seven diameters and matching feeder counts help frame different construction and width requirements.",
    },
    {
      icon: Gauge,
      title: "24-gauge setup",
      copy: "The documented machine floor uses a consistent 24 GG configuration across the listed diameter range.",
    },
    {
      icon: Layers3,
      title: "Six fabric directions",
      copy: `${fabrics.length} listed capabilities span jersey, patterned, breathable, textured, fleece and stretch knits.`,
    },
    {
      icon: Handshake,
      title: "Direct access",
      copy: "Production enquiries can be discussed directly with the RMS management team.",
    },
  ];

  const stats = [
    [String(totalMachines), "Circular machines"],
    [String(machineRows.length), "Diameter options"],
    ["24 GG", "Machine gauge"],
    ["120", "Max feeders"],
  ] as const;

  return (
    <main className="overflow-hidden bg-[#f6f8f3] text-forest-950">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          isolate
          overflow-hidden
          bg-forest-950
          pt-24
          text-white
          sm:pt-28
        "
      >
        {/* BACKGROUND IMAGE */}

        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: imageY,
                  scale: imageScale,
                }
          }
          className="absolute inset-0 -z-30"
        >
          <Image
            src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788843626/84969_v2xhma.jpg"
            alt="Circular knitting production environment at RMS Textile Mills"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            -z-20
            bg-gradient-to-r
            from-forest-950/95
            via-forest-950/82
            to-forest-950/42
          "
        />

        <div
          className="
            absolute
            inset-0
            -z-20
            bg-gradient-to-t
            from-forest-950/80
            via-transparent
            to-forest-950/25
          "
        />

        {/* DECORATION */}

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="
              absolute
              -left-20
              top-14
              size-64
              rounded-full
              bg-leaf-400/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              right-[8%]
              top-12
              size-56
              rounded-full
              bg-leaf-300/[.06]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.025)_1px,transparent_1px)]
              bg-[size:52px_52px]
              [mask-image:linear-gradient(to_bottom,black,transparent_92%)]
            "
          />
        </div>

        {/* HERO CONTENT */}

        <div
          className="
            container-pad
            relative
            z-10
            flex
            min-h-[310px]
            items-center
            py-7
            sm:min-h-[330px]
            md:min-h-[350px]
            md:py-8
          "
        >
          <motion.div
            style={reduceMotion ? undefined : { y: contentY }}
            className="max-w-3xl"
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.5,
                ease: easing,
              }}
            >
              <SectionLabel light icon={<Factory size={13} />}>
                About RMS
              </SectionLabel>
            </motion.div>

            <motion.h1
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 26,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.72,
                delay: 0.06,
                ease: easing,
              }}
              className="
                mt-4
                max-w-3xl
                font-display
                text-[clamp(2.4rem,5vw,4.1rem)]
                font-bold
                leading-[.92]
                tracking-[-.055em]
              "
            >
              Precision built for
              <span className="ml-3 text-leaf-300">better knits.</span>
            </motion.h1>

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.66,
                delay: 0.14,
                ease: easing,
              }}
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-white/70
                sm:text-base
              "
            >
              RMS Textile Mills is an imported circular knitting division in
              Tiruppur, combining Pailung machinery, practical configuration
              options and direct management communication.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.64,
                delay: 0.2,
                ease: easing,
              }}
              className="
                mt-5
                flex
                flex-wrap
                gap-2.5
              "
            >
              <Link
                href="/machines"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-leaf-300
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-forest-950
                  shadow-[0_12px_30px_rgba(132,204,22,.16)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-leaf-200
                  sm:text-sm
                "
              >
                Explore machines
                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/[.06]
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/10
                  sm:text-sm
                "
              >
                Contact the team
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            {/* QUICK DETAILS */}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
              }}
              className="
                mt-5
                flex
                flex-wrap
                gap-x-5
                gap-y-2
                text-[11px]
                font-semibold
                text-white/60
                sm:text-xs
              "
            >
              {["Imported Pailung setup", "24 GG", "All-feeder Lycra"].map(
                (item) => (
                  <span
                    key={item}
                    className="
                    inline-flex
                    items-center
                    gap-2
                  "
                  >
                    <span
                      className="
                      grid
                      size-5
                      place-items-center
                      rounded-full
                      bg-leaf-300/10
                      text-leaf-300
                    "
                    >
                      <Check size={11} strokeWidth={2.8} />
                    </span>

                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FLOATING STATS
      ====================================================== */}

      <section
        className="
          container-pad
          relative
          z-30
          -mt-3
          sm:-mt-7
        "
      >
        <Reveal>
          <div
            className="
              mx-auto
              grid
              max-w-5xl
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        rotateX: 4,
                        rotateY: index % 2 === 0 ? -3 : 3,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.2rem]
                    border
                    border-white/90
                    bg-gradient-to-br
                    from-white
                    via-[#fbfcf9]
                    to-[#edf4e9]
                    px-4
                    py-3
                    shadow-[0_14px_0_#dce8d8,0_24px_45px_rgba(20,59,50,.12)]
                    [perspective:900px]
                    [transform-style:preserve-3d]
                  "
              >
                <span
                  className="
                      absolute
                      -right-3
                      -top-4
                      size-20
                      rounded-full
                      bg-leaf-200/35
                      blur-xl
                      transition
                      duration-500
                      group-hover:scale-150
                    "
                />

                <span
                  className="
                      absolute
                      right-3
                      top-2
                      font-display
                      text-5xl
                      font-bold
                      text-forest-950/[.045]
                    "
                >
                  0{index + 1}
                </span>

                <p
                  className="
                      relative
                      font-display
                      text-2xl
                      font-bold
                      tracking-tight
                      text-forest-950
                      [transform:translateZ(28px)]
                    "
                >
                  {value}
                </p>

                <p
                  className="
                      relative
                      mt-1
                      text-xs
                      font-semibold
                      text-forest-500
                      [transform:translateZ(20px)]
                    "
                >
                  {label}
                </p>

                <span
                  className="
                      absolute
                      inset-x-4
                      bottom-0
                      h-0.5
                      origin-left
                      scale-x-0
                      bg-leaf-600
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          COMPANY SECTION
          CONTENT LEFT + COMPANY IMAGE RIGHT
      ====================================================== */}

      <section
        className="
    container-pad
    py-10
    md:py-12
    lg:py-14
  "
      >
        <div
          className="
      grid
      items-stretch
      gap-5
      lg:grid-cols-2
      lg:gap-7
    "
        >
          {/* =====================================================
        LEFT — COMPANY IMAGE
    ====================================================== */}
          <Reveal delay={0.08} className="h-full">
            <TiltCard
              intensity={4}
              className="
          group
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[1.6rem]
          border
          border-white
          bg-white
          p-1.5
          shadow-[0_18px_50px_rgba(20,59,50,.12)]
        "
            >
              <div
                className="
            relative
            h-full
            min-h-[330px]
            w-full
            overflow-hidden
            rounded-[1.3rem]

            sm:min-h-[360px]
            md:min-h-[390px]
            lg:min-h-[430px]
          "
              >
                <Image
                  src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788850355/Screenshot_2026-09-08_122145_cmwe3i.png"
                  alt="RMS Textile Mills circular knitting production facility"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-[1.045]
            "
                />

                {/* DARK BOTTOM OVERLAY */}
                <div
                  className="
              absolute
              inset-0
              bg-gradient-to-t
              from-forest-950/90
              via-forest-950/10
              to-transparent
            "
                />

                {/* LEFT OVERLAY */}
                <div
                  className="
              absolute
              inset-0
              bg-gradient-to-r
              from-forest-950/15
              to-transparent
            "
                />

                {/* TOP BADGE */}
                <div className="absolute left-4 top-4">
                  <span
                    className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/25
                px-3
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[.16em]
                text-white
                backdrop-blur-xl
              "
                  >
                    <Factory size={11} />
                    RMS Textile Mills
                  </span>
                </div>

                {/* BOTTOM CONTENT */}
                <div
                  className="
              absolute
              bottom-4
              left-4
              right-4
            "
                >
                  <p
                    className="
                text-[8px]
                font-bold
                uppercase
                tracking-[.18em]
                text-leaf-300
              "
                  >
                    Production Facility
                  </p>

                  <h3
                    className="
                mt-1.5
                max-w-sm
                font-display
                text-[22px]
                font-bold
                leading-[1.12]
                tracking-[-.025em]
                text-white
                sm:text-2xl
              "
                  >
                    Modern circular knitting from Tiruppur.
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Pailung", "24 GG", "4 Track"].map((item) => (
                      <span
                        key={item}
                        className="
                    rounded-full
                    border
                    border-white/15
                    bg-black/20
                    px-2.5
                    py-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[.12em]
                    text-white/80
                    backdrop-blur-xl
                  "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* =====================================================
        RIGHT — COMPANY CONTENT
    ====================================================== */}
          <Reveal className="h-full">
            <div
              className="
          relative
          flex
          h-full
          min-h-[330px]
          flex-col
          justify-between
          overflow-hidden

          rounded-[1.6rem]
          border
          border-forest-100

          bg-gradient-to-br
          from-white
          via-white
          to-[#f3f7f1]

          p-5

          shadow-[0_18px_50px_rgba(20,59,50,.07)]

          sm:min-h-[360px]
          sm:p-6

          md:min-h-[390px]

          lg:min-h-[430px]
          lg:p-7
        "
            >
              {/* DECORATIVE GLOW */}
              <div
                className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            size-44
            rounded-full
            bg-leaf-300/[.12]
            blur-3xl
          "
              />

              {/* TOP CONTENT */}
              <div className="relative z-10">
                <SectionLabel icon={<Factory size={12} />}>
                  Who we are
                </SectionLabel>

                <h2
                  className="
              mt-4
              max-w-lg
              font-display
              text-[27px]
              font-bold
              leading-[1.06]
              tracking-[-.04em]
              text-forest-950

              sm:text-[30px]
              md:text-[32px]
              lg:text-[34px]
            "
                >
                  Built around
                  <span className="block text-leaf-700">
                    better production.
                  </span>
                </h2>

                <p
                  className="
              mt-3
              max-w-xl
              text-[13px]
              font-medium
              leading-[1.65]
              text-forest-600
            "
                >
                  RMS Textile Mills is a focused circular-knitting operation in
                  Tiruppur, combining imported machinery, practical production
                  knowledge and direct customer communication.
                </p>

                <p
                  className="
              mt-2.5
              max-w-xl
              text-[13px]
              leading-[1.65]
              text-forest-600
            "
                >
                  Our setup is designed around fabric requirements, suitable
                  machine configurations and consistent knitting quality.
                </p>
              </div>

              {/* =====================================================
            BOTTOM
        ====================================================== */}
              <div className="relative z-10 mt-5">
                {/* STATS */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    [String(totalMachines), "Machines"],
                    ["24 GG", "Gauge"],
                    ["26–40", "Diameter"],
                    ["120", "Feeders"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-forest-100
                  bg-white/75
                  px-3
                  py-2.5
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-leaf-300
                  hover:bg-white
                  hover:shadow-[0_12px_28px_rgba(20,59,50,.09)]
                "
                    >
                      <span
                        className="
                    absolute
                    -right-5
                    -top-6
                    size-14
                    rounded-full
                    bg-leaf-200/30
                    blur-xl
                  "
                      />

                      <strong
                        className="
                    relative
                    block
                    font-display
                    text-[17px]
                    font-bold
                    leading-none
                    text-leaf-700
                  "
                      >
                        {value}
                      </strong>

                      <span
                        className="
                    relative
                    mt-1
                    block
                    text-[9px]
                    font-semibold
                    text-forest-500
                  "
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
    PRODUCTION APPROACH — COMPACT PREMIUM DESIGN
===================================================== */}
      <section
        className="
    relative
    overflow-hidden
    bg-[#071d15]
    py-10
    text-white
    md:py-12
  "
      >
        {/* ===================================================
      BACKGROUND DECORATIONS
  ==================================================== */}
        <div className="pointer-events-none absolute inset-0">
          {/* Green Glow */}
          <div
            className="
        absolute
        -left-32
        top-1/2
        size-[380px]
        -translate-y-1/2
        rounded-full
        bg-leaf-400/[.07]
        blur-[100px]
      "
          />

          {/* Right Glow */}
          <div
            className="
        absolute
        -right-24
        -top-24
        size-[330px]
        rounded-full
        bg-leaf-300/[.045]
        blur-[90px]
      "
          />

          {/* Decorative Circle */}
          <div
            className="
        absolute
        -right-24
        bottom-[-180px]
        size-[420px]
        rounded-full
        border
        border-white/[.035]
      "
          />

          <div
            className="
        absolute
        -right-2
        bottom-[-100px]
        size-[250px]
        rounded-full
        border
        border-leaf-300/[.045]
      "
          />

          {/* Grid Pattern */}
          <div
            className="
        absolute
        inset-0
        opacity-[.025]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:48px_48px]
      "
          />
        </div>

        {/* ===================================================
      CONTENT
  ==================================================== */}
        <div
          className="
      container-pad
      relative
      z-10
      grid
      items-center
      gap-8
      lg:grid-cols-[.78fr_1.22fr]
      lg:gap-12
    "
        >
          {/* =================================================
        LEFT INTRO
    ================================================== */}
          <Reveal>
            <div className="max-w-md">
              <SectionLabel light icon={<Target size={13} />}>
                Our production approach
              </SectionLabel>

              <h2
                className="
            mt-4
            font-display
            text-3xl
            font-bold
            leading-[1.05]
            tracking-[-.045em]
            text-white
            md:text-[38px]
          "
              >
                Clear thinking
                <span className="block text-leaf-300">before production.</span>
              </h2>

              <p
                className="
            mt-4
            max-w-sm
            text-[13px]
            font-medium
            leading-6
            text-white/50
            sm:text-sm
          "
              >
                Every fabric requirement is evaluated before production to
                select the right configuration, performance and machine setup.
              </p>

              {/* PREMIUM LINE */}
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="
              h-[2px]
              w-12
              rounded-full
              bg-leaf-300
            "
                />

                <span
                  className="
              size-1.5
              rounded-full
              bg-leaf-300
            "
                />

                <span
                  className="
              text-[9px]
              font-bold
              uppercase
              tracking-[.2em]
              text-white/35
            "
                >
                  RMS Textile Mills
                </span>
              </div>
            </div>
          </Reveal>

          {/* =================================================
        RIGHT COMPACT CARDS
    ================================================== */}
          <div
            className="
        grid
        gap-3
        sm:grid-cols-2
      "
          >
            {principles.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 0.05}>
                <motion.article
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          scale: 1.015,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                  }}
                  className="
                group
                relative
                min-h-[185px]
                overflow-hidden
                rounded-[1.4rem]
                border
                border-white/[.08]
                bg-white/[.035]
                p-4
                backdrop-blur-xl
                transition
                duration-300

                hover:border-leaf-300/25
                hover:bg-white/[.055]
                hover:shadow-[0_20px_55px_rgba(0,0,0,.18)]

                sm:min-h-[195px]
                sm:p-5
              "
                >
                  {/* -----------------------------------------
                  TOP ACCENT LINE
              ------------------------------------------ */}
                  <span
                    className="
                  absolute
                  left-5
                  top-0
                  h-[2px]
                  w-10
                  rounded-full
                  bg-leaf-300
                  transition-all
                  duration-500
                  group-hover:w-20
                "
                  />

                  {/* -----------------------------------------
                  BACKGROUND NUMBER
              ------------------------------------------ */}
                  <span
                    className="
                  pointer-events-none
                  absolute
                  -right-2
                  -top-5
                  font-display
                  text-[92px]
                  font-black
                  leading-none
                  text-white/[.025]
                  transition
                  duration-500

                  group-hover:-translate-x-2
                  group-hover:text-leaf-300/[.045]
                "
                  >
                    {number}
                  </span>

                  {/* -----------------------------------------
                  CARD CONTENT
              ------------------------------------------ */}
                  <div
                    className="
                  relative
                  z-10
                  [transform:translateZ(25px)]
                "
                  >
                    {/* NUMBER + LABEL */}
                    <div
                      className="
                    flex
                    items-center
                    justify-between
                  "
                    >
                      <div
                        className="
                      grid
                      size-9
                      place-items-center
                      rounded-xl
                      border
                      border-leaf-300/20
                      bg-leaf-300/10
                      font-display
                      text-[11px]
                      font-bold
                      text-leaf-300
                      shadow-[0_8px_25px_rgba(132,204,22,.08)]

                      transition
                      duration-300

                      group-hover:scale-105
                      group-hover:bg-leaf-300
                      group-hover:text-forest-950
                    "
                      >
                        {number}
                      </div>

                      <span
                        className="
                      rounded-full
                      border
                      border-white/[.07]
                      bg-white/[.035]
                      px-2.5
                      py-1
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[.16em]
                      text-white/35
                    "
                      >
                        Step {index + 1}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                    mt-4
                    max-w-[250px]
                    font-display
                    text-[18px]
                    font-bold
                    leading-[1.15]
                    tracking-[-.025em]
                    text-white

                    sm:text-xl
                  "
                    >
                      {title}
                    </h3>

                    {/* CONTENT */}
                    <p
                      className="
                    mt-2
                    max-w-sm
                    text-[12px]
                    font-medium
                    leading-[1.65]
                    text-white/45

                    sm:text-[13px]
                  "
                    >
                      {copy}
                    </p>
                  </div>

                  {/* -----------------------------------------
                  BOTTOM HOVER ARROW
              ------------------------------------------ */}
                  <div
                    className="
                  absolute
                  bottom-4
                  right-4
                  grid
                  size-7
                  translate-x-3
                  place-items-center
                  rounded-full
                  bg-leaf-300
                  text-forest-950
                  opacity-0
                  transition-all
                  duration-300

                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
                  >
                    <ArrowUpRight size={12} />
                  </div>

                  {/* -----------------------------------------
                  CARD GLOW
              ------------------------------------------ */}
                  <div
                    className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-14
                  size-32
                  rounded-full
                  bg-leaf-300/[.04]
                  blur-2xl
                  transition
                  duration-500

                  group-hover:scale-150
                  group-hover:bg-leaf-300/[.08]
                "
                  />
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITY
      ====================================================== */}

      {/* =====================================================
    CAPABILITY — PREMIUM HOVER CARDS
===================================================== */}
      <section
        className="
    relative
    overflow-hidden
    border-y
    border-forest-100
    bg-white
    py-10
    md:py-14
  "
      >
        {/* ===================================================
      BACKGROUND EFFECTS
  ==================================================== */}
        <div className="pointer-events-none absolute inset-0">
          {/* LEFT GREEN GLOW */}
          <div
            className="
        absolute
        -left-28
        -top-28
        size-[360px]
        rounded-full
        bg-leaf-300/[.09]
        blur-[100px]
      "
          />

          {/* RIGHT GLOW */}
          <div
            className="
        absolute
        -right-32
        bottom-[-160px]
        size-[420px]
        rounded-full
        bg-leaf-200/[.12]
        blur-[110px]
      "
          />

          {/* GRID */}
          <div
            className="
        absolute
        inset-0
        opacity-[.018]
        bg-[linear-gradient(to_right,#143b32_1px,transparent_1px),linear-gradient(to_bottom,#143b32_1px,transparent_1px)]
        bg-[size:48px_48px]
      "
          />

          {/* RADIAL EFFECT */}
          <div
            className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_20%_10%,rgba(132,204,22,.08),transparent_30%)]
      "
          />
        </div>

        <div className="container-pad relative z-10">
          {/* =================================================
        SECTION HEADER
    ================================================== */}
          <div
            className="
        grid
        items-end
        gap-5
        md:grid-cols-[1.1fr_.9fr]
      "
          >
            {/* LEFT HEADING */}
            <Reveal>
              <div>
                <SectionLabel>What defines the setup</SectionLabel>

                <h2
                  className="
              mt-3
              max-w-2xl
              font-display
              text-3xl
              font-bold
              leading-[1.05]
              tracking-[-.04em]
              text-forest-950

              md:text-4xl
            "
                >
                  Capability with a
                  <span className="text-leaf-700"> clear purpose.</span>
                </h2>
              </div>
            </Reveal>

            {/* RIGHT DESCRIPTION */}
            <Reveal delay={0.08}>
              <div className="md:justify-self-end">
                <p
                  className="
              max-w-xl
              text-sm
              font-medium
              leading-6
              text-forest-600
            "
                >
                  The machinery, fabric range and communication structure are
                  intended to make production discussions practical and
                  specific.
                </p>

                {/* SMALL DECORATIVE LINE */}
                <div
                  className="
              mt-4
              flex
              items-center
              gap-2
            "
                >
                  <span
                    className="
                h-[2px]
                w-10
                rounded-full
                bg-leaf-600
              "
                  />

                  <span
                    className="
                size-1.5
                rounded-full
                bg-leaf-300
              "
                  />

                  <span
                    className="
                text-[8px]
                font-bold
                uppercase
                tracking-[.18em]
                text-forest-400
              "
                  >
                    RMS Textile Mills
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
        PREMIUM CARDS
    ================================================== */}
          <div
            className="
        mt-7
        grid
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
          >
            {capabilityCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <motion.article
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -10,
                            scale: 1.025,
                            rotateX: 3,
                            rotateY: index % 2 === 0 ? -3 : 3,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="
                group
                relative
                min-h-[215px]
                cursor-default
                overflow-hidden

                rounded-[1.5rem]

                border
                border-forest-100

                bg-gradient-to-br
                from-white
                via-[#fcfdfb]
                to-[#f1f6ee]

                p-5

                shadow-[0_12px_35px_rgba(20,59,50,.045)]

                transition-[border-color,box-shadow,background-color]
                duration-500

                hover:border-leaf-300/80

                hover:shadow-[0_28px_65px_rgba(20,59,50,.15)]

                [perspective:1000px]
                [transform-style:preserve-3d]
              "
                  >
                    {/* ===========================================
                  TOP GREEN LINE
              ============================================ */}
                    <span
                      className="
                  absolute
                  left-5
                  top-0

                  h-[3px]
                  w-8

                  rounded-b-full
                  bg-leaf-600

                  transition-all
                  duration-500

                  group-hover:w-20
                "
                    />

                    {/* ===========================================
                  TOP RIGHT GLOW
              ============================================ */}
                    <div
                      className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16

                  size-44

                  rounded-full
                  bg-leaf-300/[.09]
                  blur-3xl

                  transition-all
                  duration-700

                  group-hover:scale-[1.8]
                  group-hover:bg-leaf-300/[.20]
                "
                    />

                    {/* ===========================================
                  BOTTOM LEFT GLOW
              ============================================ */}
                    <div
                      className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16

                  size-40

                  rounded-full
                  bg-forest-950/[.025]
                  blur-3xl

                  transition-all
                  duration-700

                  group-hover:scale-150
                  group-hover:bg-leaf-600/[.07]
                "
                    />

                    {/* ===========================================
                  SHINE SWEEP
              ============================================ */}
                    <div
                      className="
                  pointer-events-none
                  absolute
                  -left-[160%]
                  top-0

                  h-full
                  w-[70%]

                  skew-x-[-20deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/80
                  to-transparent

                  opacity-0

                  transition-all
                  duration-700

                  group-hover:left-[140%]
                  group-hover:opacity-100
                "
                    />

                    {/* ===========================================
                  LARGE NUMBER
              ============================================ */}
                    <span
                      className="
                  pointer-events-none
                  absolute
                  right-4
                  top-2

                  font-display
                  text-[64px]
                  font-black
                  leading-none

                  text-forest-950/[.035]

                  transition-all
                  duration-500

                  group-hover:-translate-x-2
                  group-hover:-translate-y-1
                  group-hover:scale-110

                  group-hover:text-leaf-700/[.08]
                "
                    >
                      0{index + 1}
                    </span>

                    {/* ===========================================
                  CONTENT
              ============================================ */}
                    <div
                      className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col

                  [transform:translateZ(25px)]
                "
                    >
                      {/* ICON AREA */}
                      <div
                        className="
                    flex
                    items-start
                    justify-between
                  "
                      >
                        <div
                          className="
                      relative

                      grid
                      size-11
                      place-items-center

                      overflow-hidden
                      rounded-[14px]

                      bg-forest-950
                      text-leaf-300

                      shadow-[0_10px_25px_rgba(20,59,50,.16)]

                      transition-all
                      duration-500

                      group-hover:-translate-y-1
                      group-hover:rotate-[-6deg]
                      group-hover:scale-110

                      group-hover:bg-leaf-600
                      group-hover:text-white

                      group-hover:shadow-[0_16px_35px_rgba(101,163,13,.30)]
                    "
                        >
                          {/* ICON INNER GLOW */}
                          <span
                            className="
                        absolute
                        inset-0

                        scale-0

                        rounded-[14px]
                        bg-white/10

                        transition-transform
                        duration-500

                        group-hover:scale-100
                      "
                          />

                          <Icon
                            size={19}
                            className="
                        relative
                        z-10

                        transition-transform
                        duration-500

                        group-hover:scale-110
                      "
                          />
                        </div>

                        {/* SMALL NUMBER BADGE */}
                        <span
                          className="
                      rounded-full

                      border
                      border-leaf-200

                      bg-leaf-50

                      px-2.5
                      py-1

                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[.14em]

                      text-leaf-700

                      transition-all
                      duration-300

                      group-hover:border-leaf-300
                      group-hover:bg-leaf-100
                    "
                        >
                          0{index + 1}
                        </span>
                      </div>

                      {/* LABEL */}
                      <p
                        className="
                    mt-4

                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[.19em]

                    text-leaf-700

                    transition-all
                    duration-300

                    group-hover:tracking-[.23em]
                  "
                      >
                        Capability
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                    mt-1.5

                    font-display
                    text-xl
                    font-bold
                    leading-tight
                    tracking-[-.025em]

                    text-forest-950

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:text-leaf-700
                  "
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p
                        className="
                    mt-2

                    text-[13px]
                    font-medium
                    leading-[1.65]

                    text-forest-600

                    transition-colors
                    duration-300

                    group-hover:text-forest-700
                  "
                      >
                        {item.copy}
                      </p>

                      {/* =========================================
                    BOTTOM
                ========================================== */}
                      <div
                        className="
                    mt-auto
                    flex
                    items-center
                    justify-between

                    border-t
                    border-forest-100

                    pt-4

                    transition-colors
                    duration-300

                    group-hover:border-leaf-200
                  "
                      >
                        <div
                          className="
                      flex
                      items-center
                      gap-2
                    "
                        >
                          <span
                            className="
                        size-1.5
                        rounded-full
                        bg-leaf-500

                        transition-all
                        duration-300

                        group-hover:scale-150
                      "
                          />

                          <span
                            className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[.15em]

                        text-forest-400

                        transition-colors
                        duration-300

                        group-hover:text-leaf-700
                      "
                          >
                            RMS Textile
                          </span>
                        </div>

                        {/* HOVER ARROW */}
                        <span
                          className="
                      grid
                      size-7

                      translate-x-2

                      place-items-center

                      rounded-full

                      bg-leaf-100
                      text-leaf-700

                      opacity-0

                      transition-all
                      duration-300

                      group-hover:translate-x-0
                      group-hover:opacity-100

                      group-hover:bg-leaf-600
                      group-hover:text-white
                    "
                        >
                          <ArrowUpRight size={12} strokeWidth={2.3} />
                        </span>
                      </div>
                    </div>

                    {/* ===========================================
                  BOTTOM ANIMATED LINE
              ============================================ */}
                    <span
                      className="
                  absolute
                  bottom-0
                  left-0

                  h-[3px]
                  w-full

                  origin-left
                  scale-x-0

                  bg-gradient-to-r
                  from-leaf-300
                  via-leaf-600
                  to-leaf-300

                  transition-transform
                  duration-500

                  group-hover:scale-x-100
                "
                    />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* =====================================================
          MANAGEMENT
      ====================================================== */}

<section
        className="
    container-pad
    py-10
    md:py-12
  "
      >
        {/* ===================================================
      SECTION HEADING
  ==================================================== */}
        <div
          className="
      grid
      gap-4
      lg:grid-cols-[.9fr_1.1fr]
      lg:items-end
    "
        >
          <Reveal>
            <div>
              <SectionLabel>Management</SectionLabel>

              <h2
                className="
            mt-3
            max-w-2xl
            font-display
            text-3xl
            font-bold
            leading-[1.05]
            tracking-[-.04em]
            text-forest-950
            md:text-4xl
          "
              >
                Direct contacts for
                <span className="text-leaf-700">
                  {" "}
                  production conversations.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p
              className="
          max-w-xl
          text-sm
          font-medium
          leading-6
          text-forest-600
          lg:justify-self-end
        "
            >
              Speak with the RMS management team about machine suitability,
              fabric development and production requirements.
            </p>
          </Reveal>
        </div>

        {/* ===================================================
      CONTACT CARDS
  ==================================================== */}
        <div
          className="
      mt-5
      grid
      gap-3
      md:grid-cols-2
    "
        >
          {contacts.map((contact, index) => (
            <Reveal key={contact.tel} delay={index * 0.06}>
              <motion.article
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.015,
                        rotateX: 2,
                        rotateY: index % 2 === 0 ? -2 : 2,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className="
            group
            relative
            min-h-[175px]
            cursor-default
            overflow-hidden

            rounded-[1.35rem]

            border
            border-forest-100

            bg-gradient-to-br
            from-white
            via-white
            to-[#eef5eb]

            p-4

            shadow-[0_10px_0_#dce7d8,0_20px_45px_rgba(20,59,50,.09)]

            transition-[border-color,box-shadow]
            duration-500

            hover:border-leaf-300
            hover:shadow-[0_13px_0_#cee0c8,0_28px_60px_rgba(20,59,50,.15)]

            sm:p-[18px]

            [perspective:1000px]
            [transform-style:preserve-3d]
          "
              >
                {/* ===============================================
              TOP GREEN ACCENT
          ================================================ */}
                <span
                  className="
              absolute
              left-4
              top-0
              h-[3px]
              w-9
              rounded-b-full
              bg-leaf-600

              transition-all
              duration-500

              group-hover:w-24
            "
                />

                {/* ===============================================
              GREEN GLOW
          ================================================ */}
                <div
                  className="
              pointer-events-none
              absolute
              -right-14
              -top-14

              size-36

              rounded-full

              bg-leaf-300/[.12]

              blur-2xl

              transition-all
              duration-700

              group-hover:scale-[1.8]
              group-hover:bg-leaf-300/[.24]
            "
                />

                {/* SECOND GLOW */}
                <div
                  className="
              pointer-events-none
              absolute
              -bottom-16
              -left-16

              size-36

              rounded-full

              bg-forest-950/[.02]

              blur-3xl

              transition-all
              duration-700

              group-hover:scale-150
              group-hover:bg-leaf-700/[.05]
            "
                />

                {/* ===============================================
              SHINE
          ================================================ */}
                <div
                  className="
              pointer-events-none
              absolute
              -left-[160%]
              top-0

              h-full
              w-[60%]

              skew-x-[-20deg]

              bg-gradient-to-r
              from-transparent
              via-white/80
              to-transparent

              opacity-0

              transition-all
              duration-700

              group-hover:left-[140%]
              group-hover:opacity-100
            "
                />

                {/* ===============================================
              LARGE BACKGROUND NUMBER
          ================================================ */}
                <span
                  className="
              pointer-events-none
              absolute
              right-4
              -top-2

              font-display
              text-[72px]
              font-black
              leading-none

              text-forest-950/[.035]

              transition-all
              duration-500

              group-hover:-translate-x-2
              group-hover:translate-y-1
              group-hover:scale-110

              group-hover:text-leaf-700/[.08]
            "
                >
                  0{index + 1}
                </span>

                {/* ===============================================
              CONTENT
          ================================================ */}
                <div
                  className="
              relative
              z-10
              [transform:translateZ(26px)]
            "
                >
                  {/* TOP */}
                  <div
                    className="
                flex
                items-center
                justify-between
                gap-3
              "
                  >
                    {/* ICON */}
                    <div
                      className="
                  relative

                  grid
                  size-9
                  place-items-center

                  overflow-hidden

                  rounded-xl

                  bg-forest-950
                  text-leaf-300

                  shadow-[0_8px_22px_rgba(20,59,50,.16)]

                  transition-all
                  duration-500

                  group-hover:-translate-y-1
                  group-hover:rotate-[-7deg]
                  group-hover:scale-110

                  group-hover:bg-leaf-600
                  group-hover:text-white

                  group-hover:shadow-[0_12px_30px_rgba(101,163,13,.28)]
                "
                    >
                      <span
                        className="
                    absolute
                    inset-0

                    scale-0

                    rounded-xl
                    bg-white/10

                    transition-transform
                    duration-500

                    group-hover:scale-100
                  "
                      />

                      <UserRound
                        size={17}
                        className="
                    relative
                    z-10
                    transition-transform
                    duration-500

                    group-hover:scale-110
                  "
                      />
                    </div>

                    {/* TEAM BADGE */}
                    <span
                      className="
                  rounded-full

                  border
                  border-forest-100

                  bg-white/70

                  px-2.5
                  py-1

                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[.15em]

                  text-forest-500

                  backdrop-blur

                  transition-all
                  duration-300

                  group-hover:border-leaf-200
                  group-hover:bg-leaf-50
                  group-hover:text-leaf-700
                "
                    >
                      RMS Team
                    </span>
                  </div>

                  {/* ROLE */}
                  <p
                    className="
                mt-3

                text-[9px]
                font-bold
                uppercase
                tracking-[.18em]

                text-leaf-700

                transition-all
                duration-300

                group-hover:tracking-[.22em]
              "
                  >
                    {contact.role}
                  </p>

                  {/* NAME */}
                  <h3
                    className="
                mt-1.5

                font-display
                text-[24px]
                font-bold
                leading-tight
                tracking-[-.035em]

                text-forest-950

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:text-leaf-700

                sm:text-[26px]
              "
                  >
                    {contact.name}
                  </h3>

                  {/* BOTTOM */}
                  <div
                    className="
                mt-3

                flex
                items-center
                justify-between

                border-t
                border-forest-100

                pt-3

                transition-colors
                duration-300

                group-hover:border-leaf-200
              "
                  >
                    {/* PHONE */}
                    <a
                      href={`tel:${contact.tel}`}
                      className="
                  group/phone

                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  text-[13px]
                  font-bold

                  text-forest-700

                  transition-all
                  duration-300

                  hover:text-leaf-700
                "
                    >
                      <span
                        className="
                    grid
                    size-7
                    place-items-center

                    rounded-full

                    bg-leaf-50
                    text-leaf-700

                    transition-all
                    duration-300

                    group-hover/phone:scale-110
                    group-hover/phone:bg-leaf-600
                    group-hover/phone:text-white
                  "
                      >
                        <Phone size={12} />
                      </span>

                      {contact.phone}
                    </a>

                    {/* ARROW */}
                    <span
                      className="
                  grid
                  size-7

                  translate-x-2

                  place-items-center

                  rounded-full

                  bg-leaf-100
                  text-leaf-700

                  opacity-0

                  transition-all
                  duration-300

                  group-hover:translate-x-0
                  group-hover:opacity-100

                  group-hover:bg-leaf-600
                  group-hover:text-white
                "
                    >
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>

                {/* ===============================================
              BOTTOM ANIMATED GREEN LINE
          ================================================ */}
                <span
                  className="
              absolute
              bottom-0
              left-0

              h-[3px]
              w-full

              origin-left
              scale-x-0

              bg-gradient-to-r
              from-leaf-300
              via-leaf-600
              to-leaf-300

              transition-transform
              duration-500

              group-hover:scale-x-100
            "
                />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          BUSINESS INFORMATION
      ====================================================== */}

      <section
        className="
          bg-[#eaf0e8]
          py-10
          md:py-14
        "
      >
        <div className="container-pad">
          <div
            className="
              grid
              gap-7
              lg:grid-cols-[.72fr_1.28fr]
              lg:gap-10
            "
          >
            {/* LEFT */}

            <Reveal>
              <SectionLabel icon={<ReceiptText size={13} />}>
                Business information
              </SectionLabel>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-bold
                  tracking-[-.04em]
                  text-forest-950
                  md:text-4xl
                "
              >
                The company at a glance.
              </h2>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  font-medium
                  leading-6
                  text-forest-600
                "
              >
                Key identity and capability details reproduced from the supplied
                RMS company profile.
              </p>

              <div
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white/70
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-leaf-800
                  shadow-sm
                  backdrop-blur
                "
              >
                <Building2 size={16} />
                Imported Knitting Division
              </div>
            </Reveal>

            {/* RIGHT INFORMATION CARDS */}

            <div
              className="
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {businessInfo.map(([label, value], index) => (
                <Reveal key={label} delay={(index % 4) * 0.035}>
                  <motion.dl
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            scale: 1.015,
                            rotateX: 2,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                    }}
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-xl
                        border
                        border-white
                        bg-white/90
                        p-4
                        shadow-[0_7px_0_#d8e4d4,0_14px_28px_rgba(20,59,50,.07)]
                        backdrop-blur
                        transition-shadow
                        hover:border-leaf-200
                        hover:shadow-[0_10px_0_#cddfc8,0_20px_38px_rgba(20,59,50,.12)]
                        [transform-style:preserve-3d]
                      "
                  >
                    <span
                      className="
                          absolute
                          inset-y-0
                          left-0
                          w-1
                          origin-bottom
                          scale-y-0
                          bg-leaf-600
                          transition-transform
                          duration-300
                          group-hover:scale-y-100
                        "
                    />

                    <dt
                      className="
                          relative
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[.17em]
                          text-leaf-700
                          sm:text-[10px]
                        "
                    >
                      {label}
                    </dt>

                    <dd
                      className="
                          relative
                          mt-1.5
                          text-[13px]
                          font-semibold
                          leading-5
                          text-forest-800
                        "
                    >
                      {value}
                    </dd>
                  </motion.dl>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <CTA compact />
    </main>
  );
}
