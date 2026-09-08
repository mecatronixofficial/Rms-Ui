"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const whatsappMessage = encodeURIComponent(
  "Hello RMS Textile Mills, I would like to discuss a knitting requirement.",
);

export function FloatingActions() {
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 500;

        setShowActions((current) =>
          current === shouldShow ? current : shouldShow,
        );

        frame = 0;
      });
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVisibility);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div
      className={`
        fixed
        bottom-5
        right-4
        z-40

        flex
        flex-col
        items-center
        gap-3

        transition-all
        duration-300
        ease-out

        sm:bottom-6
        sm:right-6

        ${
          showActions
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      {/* Scroll To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
        className="
          grid
          size-11
          shrink-0
          place-items-center

          rounded-full
          border
          border-forest-200

          bg-white
          text-forest-950

          shadow-[0_8px_25px_rgba(0,0,0,0.14)]

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-leaf-600
          hover:text-leaf-700
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
        "
      >
        <ArrowUp size={20} strokeWidth={2.2} />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/917708107473?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RMS Textile Mills on WhatsApp"
        title="Chat on WhatsApp"
        className="
          grid
          size-11
          shrink-0
          place-items-center

          rounded-full

          bg-[#25D366]
          text-white

          shadow-[0_8px_25px_rgba(37,211,102,0.28)]

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:bg-[#1ebe5d]
          hover:shadow-[0_10px_30px_rgba(37,211,102,0.38)]
        "
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.93 11.93 0 0 0 5.79 1.48h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.18-3.47-8.43ZM12.05 21.82a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.9 9.9 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.97 9.88Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}