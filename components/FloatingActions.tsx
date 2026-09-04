"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const whatsappMessage = encodeURIComponent(
  "Hello RMS Textile Mills, I would like to discuss a knitting requirement.",
);

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setShowScrollTop((current) => {
          const next = window.scrollY > 500;
          return current === next ? current : next;
        });
        frame = 0;
      });
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="grid size-11 place-items-center border border-slate-200 bg-white text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:border-teal-600 hover:text-teal-700"
        >
          <ArrowUp size={19} />
        </button>
      )}

      <a
        href={`https://wa.me/919843419599?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RMS Textile Mills on WhatsApp"
        title="Chat on WhatsApp"
        className="group flex items-center bg-[#25D366] text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#1fbd5a]"
      >
        <span className="hidden border-r border-white/20 px-4 text-sm font-bold sm:block">WhatsApp us</span>
        <span className="grid size-14 place-items-center p-3.5">
          <MessageCircle size={24} fill="currentColor" strokeWidth={1.8} />
        </span>
      </a>
    </div>
  );
}
