import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Factory,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  UserRound,
} from "lucide-react";

import { EnquiryForm } from "@/components/EnquiryForm";
import { address } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Contact | RMS Textile Mills",
  description:
    "Contact RMS Textile Mills in Tiruppur for circular knitting, fabric production and textile manufacturing enquiries.",
};

export default function Contact() {
  // Exact RMS Textile Mills Google Maps location
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=11.058933789107497,77.32477817400425";

  const mapEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.728991000057!2d77.32477817400425!3d11.058933789107497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a9004f0e5a37%3A0x945ece3bda7dff0a!2sRMS%20TEXTILE%20MILLS!5e0!3m2!1sen!2sin!4v1788783340317!5m2!1sen!2sin";

  return (
    <>
      {/* =========================================================
          CONTACT BANNER
      ========================================================= */}
      <section className="relative min-h-[285px] overflow-hidden bg-[#071812] pt-20 text-white md:min-h-[320px] md:pt-24">
        <Image
          src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788783722/179_ddqdho.jpg"
          alt="RMS Textile Mills"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061812]/95 via-[#061812]/72 to-[#061812]/25" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061812]/60 via-transparent to-transparent" />

        {/* Glow */}
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-green-400/10 blur-[100px]" />

        {/* Content */}
        <div className="container-pad relative z-10 flex min-h-[205px] items-center py-8 md:min-h-[230px]">
          <div className="max-w-3xl">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
              <MessageCircle size={13} className="text-green-300" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                Get in touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-4 font-display text-4xl font-bold leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Contact{" "}
              <span className="text-green-300">
                RMS Textile Mills
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 md:text-base">
              Connect with our team for circular knitting, yarn, GSM,
              diameter, fabric structure and production requirements.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-green-400 px-5 py-2.5 text-xs font-bold text-[#071812] transition duration-300 hover:bg-green-300"
              >
                Send Enquiry
                <ArrowRight size={14} />
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#071812]"
              >
                <MapPin size={14} />
                View Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTACT SECTION
      ========================================================= */}
      <section
        id="enquiry"
        className="container-pad py-12 md:py-16"
      >
        <div className="grid items-start gap-7 lg:grid-cols-[1.08fr_.92fr]">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div>
            {/* FORM HEADING */}
            <div className="mb-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-green-700">
                Send an enquiry
              </p>

              <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-[-0.03em] text-[#10261d] md:text-4xl">
                Tell us about your{" "}
                <span className="text-green-700">
                  fabric requirement.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Share yarn type, GSM, diameter, fabric structure,
                quantity or production requirements with our team.
              </p>
            </div>

            {/* =====================================================
                ENQUIRY FORM
            ====================================================== */}
            <div className="relative">
              {/* 3D Bottom Layer */}
              <div className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-[25px] bg-[#dfeadb]" />

              <div className="relative overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(8,35,20,.08)]">
                <EnquiryForm />
              </div>
            </div>

            {/* =====================================================
                LEADERSHIP
            ====================================================== */}
            <div className="mt-8">
              {/* Heading */}
              <div className="mb-4 flex items-center gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-700">
                    Leadership
                  </p>

                  <h3 className="mt-1 font-display text-xl font-bold text-[#10261d]">
                    RMS Textile Mills
                  </h3>
                </div>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Vertical Contact Cards */}
              <div className="space-y-3">
                {/* =================================================
                    MANAGING DIRECTOR
                ================================================= */}
                <article className="group relative overflow-hidden rounded-[18px] bg-[#09241a] px-4 py-4 text-white shadow-[0_12px_35px_rgba(5,30,18,.14)] sm:px-5">
                  {/* Decorative Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-400/10 blur-2xl" />

                  {/* Number */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-[65px] font-black leading-none text-white/[0.035]">
                    01
                  </div>

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Person */}
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-400 text-[#09241a]">
                        <UserRound size={17} />
                      </div>

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-green-300">
                          Managing Director
                        </p>

                        <h4 className="mt-1 font-display text-lg font-bold">
                          P. Ramasamy
                        </h4>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <div className="sm:text-right">
                        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/40">
                          Call directly
                        </p>

                        <a
                          href="tel:+917708 107 473"
                          className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-white transition hover:text-green-300"
                        >
                          <Phone size={12} />
                          +91 98434 19599
                        </a>
                      </div>

                      <a
                        href="tel:+919843419599"
                        aria-label="Call P. Ramasamy"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-green-400 text-[#09241a] transition duration-300 hover:scale-105 hover:bg-white"
                      >
                        <Phone size={14} />
                      </a>
                    </div>
                  </div>
                </article>

                {/* =================================================
                    GENERAL MANAGER
                ================================================= */}
                <article className="group relative overflow-hidden rounded-[18px] border border-[#dce8dc] bg-[#f5f8f3] px-4 py-4 shadow-[0_10px_30px_rgba(10,40,25,.06)] transition duration-300 hover:border-green-200 hover:shadow-[0_15px_40px_rgba(10,40,25,.10)] sm:px-5">
                  {/* Background Glow */}
                  <div className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full bg-green-200/40 blur-2xl" />

                  {/* Number */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-[65px] font-black leading-none text-[#10261d]/[0.03]">
                    02
                  </div>

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Person */}
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-green-700 shadow-sm">
                        <UserRound size={17} />
                      </div>

                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-green-700">
                          General Manager
                        </p>

                        <h4 className="mt-1 font-display text-lg font-bold text-[#10261d]">
                          R. Mohan Prasanth
                        </h4>

                        <p className="mt-1 max-w-[330px] text-[10px] leading-4 text-slate-500">
                          Production coordination, fabric requirements
                          and general business enquiries.
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex shrink-0 items-center gap-3">
                      <div className="sm:text-right">
                        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          Call directly
                        </p>

                        <a
                          href="tel:+917708107473"
                          className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-[#10261d] transition hover:text-green-700"
                        >
                          <Phone
                            size={12}
                            className="text-green-700"
                          />

                          +91 77081 07473
                        </a>
                      </div>

                      <a
                        href="tel:+917708107473"
                        aria-label="Call R. Mohan Prasanth"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#10261d] text-white transition duration-300 hover:scale-105 hover:bg-green-700"
                      >
                        <Phone size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <aside className="space-y-4 lg:sticky lg:top-28">
            {/* =====================================================
                LOCATION CARD
            ====================================================== */}
            <article className="relative overflow-hidden rounded-[24px] bg-[#09241a] p-5 text-white shadow-[0_22px_60px_rgba(5,25,15,.16)] sm:p-6">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green-400/10 blur-3xl" />

              <div className="relative">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-green-400 text-[#071812]">
                    <Factory size={19} />
                  </div>

                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-green-200">
                    Tiruppur
                  </span>
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-green-300">
                  Our Location
                </p>

                <h2 className="mt-1.5 font-display text-2xl font-bold">
                  Visit RMS Textile Mills
                </h2>

                {/* Address */}
                <div className="mt-3 flex items-start gap-2.5 text-sm leading-6 text-white/60">
                  <MapPin
                    size={16}
                    className="mt-1 shrink-0 text-green-300"
                  />

                  <span>{address}</span>
                </div>

                {/* Directions */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[11px] font-bold text-[#0b251b] transition duration-300 hover:bg-green-300"
                >
                  Get Directions
                  <Navigation size={14} />
                </a>
              </div>
            </article>

            {/* =====================================================
                VISIT INFORMATION
            ====================================================== */}
            <article className="rounded-[20px] border border-green-100 bg-[#f1f7ef] p-4">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-green-700 shadow-sm">
                  <Clock3 size={17} />
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#10261d]">
                    Planning a mill visit?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Please contact our team before visiting to confirm
                    meeting availability and production schedules.
                  </p>
                </div>
              </div>
            </article>

            {/* =====================================================
                EXPLORE RMS
            ====================================================== */}
            <Link
              href="/machines"
              className="group relative block overflow-hidden rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-100 transition duration-500 group-hover:scale-150" />

              <div className="relative flex items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#10261d] text-white transition group-hover:bg-green-700">
                    <Factory size={17} />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-green-700">
                      Explore RMS
                    </p>

                    <h3 className="mt-0.5 font-display text-base font-bold text-[#10261d]">
                      View our machine range
                    </h3>
                  </div>
                </div>

                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-green-400 text-[#10261d] transition duration-300 group-hover:rotate-45 group-hover:bg-[#10261d] group-hover:text-white">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </Link>
          </aside>
        </div>
      </section>

      {/* =========================================================
          GOOGLE MAP
      ========================================================= */}
      <section className="container-pad pb-16 md:pb-20">
        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_65px_rgba(8,35,20,.08)]">

          {/* Exact RMS Textile Mills Google Map */}
          <div className="relative h-[280px] w-full bg-slate-100 sm:h-[340px] md:h-[390px]">
            <iframe
              title="RMS Textile Mills Location"
              src={mapEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}