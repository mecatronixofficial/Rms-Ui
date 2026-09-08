import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Factory,
  Layers3,
  Sparkles,
} from "lucide-react";

import { CTA } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Gallery | RMS Textile Mills",
  description:
    "Explore RMS Textile Mills circular knitting machinery, yarn preparation, textile production and knitted fabric capabilities.",
};

type GalleryItem = {
  src: string;
  title: string;
  category: string;
  alt: string;
  className: string;
  objectPosition?: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1787643046/Screenshot_2026-08-25_124048_bgxa68.png",
    title: "Circular Knitting",
    category: "Knitting Machine",
    alt: "Circular knitting machinery",
    className:
      "md:col-span-8 md:row-span-2 min-h-[480px] md:min-h-[620px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788780260/1_zqeqkm.png",
    title: "Machine Detail",
    category: "Precision",
    alt: "Knitting machine close up",
    className: "md:col-span-4 min-h-[300px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788780259/vv_edjffu.png",
    title: "Yarn Feeding",
    category: "Production",
    alt: "Yarn cones used for textile production",
    className: "md:col-span-4 min-h-[300px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788780259/Tea_Towel_xtrqlb.png",
    title: "Production Technology",
    category: "Machinery",
    alt: "Textile production machinery",
    className: "md:col-span-5 min-h-[430px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788780258/close-up-knitting-needles-wool_eaebj6.jpg",
    title: "Knitting Floor",
    category: "Facility",
    alt: "Knitting production facility",
    className: "md:col-span-7 min-h-[430px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1788780240/table-cloth1_sizmpw.jpg",
    title: "Single Jersey",
    category: "Knitted Fabric",
    alt: "White knitted fabric texture",
    className: "md:col-span-4 min-h-[350px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779964030/31319_njq4rr.jpg",
    title: "Knitted Texture",
    category: "Fabric Detail",
    alt: "Knitted textile texture",
    className: "md:col-span-4 min-h-[350px]",
  },

  {
    src: "https://res.cloudinary.com/ddpfxvydm/image/upload/v1779964027/1946_dtzc2r.jpg",
    title: "Fabric Collection",
    category: "Textile",
    alt: "Collection of textile fabric rolls",
    className: "md:col-span-4 min-h-[350px]",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}

      <section className="relative min-h-[380px] overflow-hidden bg-black pt-24 md:min-h-[430px] md:pt-28">
  {/* Banner Image */}
  <Image
    src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788781107/2148350149_cljqiz.jpg"
    alt="RMS Textile Mills circular knitting machine"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  {/* Light overlay - keeps image clear */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

  {/* Small premium green glow */}
  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-leaf-500/20 blur-[100px]" />

  {/* Content */}
  <div className="container-pad relative z-10 flex min-h-[290px] items-end py-10 md:min-h-[320px] md:py-12">
    <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
      <div>
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur-md">
          <Camera size={14} className="text-leaf-300" />

          <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-white">
            RMS Textile Mills
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
          Inside our world
          <span className="block text-leaf-300">
            of knitting.
          </span>
        </h1>

        {/* Small description */}
        <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 md:text-base">
          Machinery. Yarn. Fabric. Precision.
        </p>
      </div>

      {/* Button */}
      <a
        href="#gallery"
        className="group inline-flex w-fit items-center gap-4 border-b border-white/40 pb-2 text-sm font-bold text-white transition hover:border-leaf-300 hover:text-leaf-300"
      >
        Explore gallery

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  </div>
</section>

      {/* =========================
          SMALL INFORMATION BAR
      ========================== */}

     <section className="border-y border-forest-950/10 bg-white">
  <div className="container-pad">
    <div className="grid overflow-hidden rounded-2xl border border-forest-950/10 bg-white shadow-sm sm:grid-cols-3">
      
      {/* Facility */}
      <div className="group flex items-center gap-3 border-b border-forest-950/10 px-4 py-3 transition hover:bg-leaf-50 sm:border-b-0 sm:border-r sm:px-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
          <Factory size={16} strokeWidth={1.8} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-forest-400">
            Facility
          </p>

          <p className="mt-0.5 font-display text-xs font-bold text-forest-950 sm:text-sm">
            Knitting Machinery
          </p>
        </div>
      </div>

      {/* Capability */}
      <div className="group flex items-center gap-3 border-b border-forest-950/10 px-4 py-3 transition hover:bg-leaf-50 sm:border-b-0 sm:border-r sm:px-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
          <Layers3 size={16} strokeWidth={1.8} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-forest-400">
            Capability
          </p>

          <p className="mt-0.5 font-display text-xs font-bold text-forest-950 sm:text-sm">
            Knitted Fabrics
          </p>
        </div>
      </div>

      {/* Focus */}
      <div className="group flex items-center gap-3 px-4 py-3 transition hover:bg-leaf-50 sm:px-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
          <Sparkles size={16} strokeWidth={1.8} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-forest-400">
            Focus
          </p>

          <p className="mt-0.5 font-display text-xs font-bold text-forest-950 sm:text-sm">
            Quality & Precision
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =========================
          GALLERY
      ========================== */}

      <section
        id="gallery"
        className="bg-[#f7f8f5] py-8 md:py-12 lg:py-16"
      >
        <div className="container-pad">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
            {galleryItems.map((item, index) => (
              <figure
                key={`${item.title}-${index}`}
                className={`group relative overflow-hidden bg-forest-950 ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 70vw,
                    60vw
                  "
                  className={`object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] ${
                    item.objectPosition ?? ""
                  }`}
                />

                {/* premium dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/90 via-[#061a14]/5 to-transparent" />

                {/* subtle border */}
                <div className="pointer-events-none absolute inset-3 border border-white/0 transition-all duration-500 group-hover:inset-4 group-hover:border-white/20" />

                {/* number */}
                <span className="absolute right-5 top-5 font-display text-4xl font-bold text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* title */}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-leaf-300">
                      {item.category}
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {item.title}
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 translate-y-3 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight size={17} />
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          LARGE IMAGE SECTION
      ========================== */}

      <section className="bg-white py-16 md:py-24">
        <div className="container-pad">
          <div className="grid overflow-hidden bg-forest-950 lg:grid-cols-[1.35fr_.65fr]">
            <div className="relative min-h-[450px] md:min-h-[600px]">
              <Image
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1779964027/5610_vh9lp0.jpg"
                alt="Circular knitting machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest-950/20" />
            </div>

            <div className="flex flex-col justify-center p-8 text-white sm:p-10 lg:p-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-leaf-300">
                RMS Knitting
              </span>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Technology behind every knit.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-forest-300">
                Explore our knitting capability and discuss machine,
                diameter, gauge, GSM and fabric requirements with the RMS
                Textile Mills team.
              </p>

              <Link
                href="/products"
                className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-leaf-400 pb-2 text-sm font-bold text-white"
              >
                Explore Fabrics

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT STRIP
      ========================== */}

   <section className="bg-[#eef3eb]">
  <div className="container-pad py-8 md:py-10">
    <div className="flex flex-col gap-5 rounded-2xl border border-forest-950/10 bg-white/70 px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6 md:flex-row md:items-center md:justify-between md:py-6">
      
      <div>
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-leaf-700">
          Work with RMS
        </span>

        <h2 className="mt-2 max-w-xl font-display text-2xl font-bold tracking-tight text-forest-950 sm:text-3xl md:text-[34px]">
          Have a knitted fabric requirement?
        </h2>
      </div>

      <Link
        href="/contact"
        className="group inline-flex w-fit items-center gap-3 rounded-xl bg-leaf-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-forest-950"
      >
        Contact RMS

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  </div>
</section>
      <CTA />
    </>
  );
}