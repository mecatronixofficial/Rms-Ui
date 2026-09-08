"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "./nav-links";

export { navLinks };

export function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  // Controls navbar hide/show
  const [hideNavbar, setHideNavbar] = useState(false);

  // Store previous scroll position without causing rerenders
  const lastScrollY = useRef(0);

  /* ========================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================== */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ========================================
     HIDE ON SCROLL DOWN
     SHOW ON SCROLL UP
  ======================================== */
  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        // Always show navbar near top of page
        if (currentScrollY <= 50) {
          setHideNavbar(false);
        } else {
          const difference = currentScrollY - previousScrollY;

          // Ignore tiny movements to prevent navbar flickering
          if (Math.abs(difference) >= 6) {
            if (difference > 0) {
              // Scrolling DOWN
              setHideNavbar(true);
            } else {
              // Scrolling UP
              setHideNavbar(false);
            }
          }
        }

        lastScrollY.current = currentScrollY;
        frame = 0;
      });
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  /* ========================================
     KEEP NAVBAR VISIBLE WHEN MOBILE
     MENU IS OPEN
  ======================================== */
  useEffect(() => {
    if (open) {
      setHideNavbar(false);
    }
  }, [open]);

  /* ========================================
     ESC KEY CLOSE MOBILE MENU
  ======================================== */
  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);

        document
          .getElementById("navigation-toggle")
          ?.focus();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  /* ========================================
     ACTIVE NAV ITEM
  ======================================== */
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        bg-transparent

        transform-gpu
        transition-transform
        duration-300
        ease-out

        ${
          hideNavbar && !open
            ? "pointer-events-none -translate-y-full"
            : "pointer-events-auto translate-y-0"
        }
      `}
    >
      <div className="relative mx-auto max-w-[1500px]">

        <div
          className="
            relative
            flex
            h-[105px]
            items-center
            justify-between
            px-4
            sm:px-6
            xl:px-8
          "
        >
          {/* ========================================
              LEFT LOGO + TITLE
          ======================================== */}
          <Link
            href="/"
            aria-label="RMS Textile Mills home"
            onClick={() => setOpen(false)}
            className="
              group
              relative
              z-20
              flex
              shrink-0
              items-center
              gap-3
              text-white
            "
          >
            {/* LOGO */}
            <span
              className="
                relative
                size-[60px]
                shrink-0
                overflow-hidden
                rounded-full
                border
                border-white
                bg-white
                p-1

                shadow-[0_10px_35px_rgba(0,0,0,.25)]

                transition-all
                duration-300

                sm:size-[70px]
                xl:size-[74px]

                group-hover:-translate-y-0.5
                group-hover:scale-[1.03]
              "
            >
              <Image
                src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788844795/RMS3_vsgfnw.png"
                alt="RMS Textile Mills logo"
                fill
                priority
                sizes="74px"
                className="object-contain p-0.5"
              />
            </span>

            {/* TITLE */}
            <div
              className="
                hidden
                min-w-[150px]
                border-l-[3px]
                border-white
                pl-4
                sm:block
              "
            >
              <h2
                className="
                  whitespace-nowrap
                  font-display
                  text-[23px]
                  font-black
                  leading-[0.92]
                  tracking-[-0.055em]
                  text-white
                  [text-shadow:0_3px_18px_rgba(0,0,0,.38)]

                  xl:text-[20px]
                  2xl:text-[22px]
                "
              >
                RMS Textile
              </h2>

              <p
                className="
                  mt-1.5
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white/75

                  xl:text-[9px]
                "
              >
                Imported Knitting Division
              </p>
            </div>
          </Link>

          {/* ========================================
              CENTER NAVIGATION
          ======================================== */}
          <div
            className="
              refined-nav-panel
              absolute
              left-1/2
              top-0
              z-10
              hidden
              -translate-x-1/2
              px-8
              pb-3
              pt-2
              lg:block
            "
          >
            <svg
              aria-hidden="true"
              focusable="false"
              className="refined-nav-rim"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="
                  0,0
                  100,0
                  98.8,2
                  97.9,8
                  97.2,19
                  94.7,82
                  94,93
                  93.1,98
                  92,100
                  8,100
                  6.9,98
                  6,93
                  5.3,82
                  2.8,19
                  2.1,8
                  1.2,2
                "
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                strokeLinejoin="round"
              />
            </svg>

            <nav
              aria-label="Main navigation"
              className="
                refined-nav-track
                relative
                flex
                items-center
                gap-0.5
                rounded-full
                p-1
              "
            >
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={
                    isActive(href)
                      ? "page"
                      : undefined
                  }
                  className="
                    refined-nav-link
                    relative
                    whitespace-nowrap
                    rounded-full
                    px-3.5
                    py-2.5
                    text-xs
                    font-semibold
                    xl:px-4
                  "
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ========================================
              RIGHT BUTTONS
          ======================================== */}
          <div
            className="
              relative
              z-20
              flex
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
          >
            {/* PHONE */}
            <a
              href="tel:+919843419599"
              aria-label="Call RMS Textile Mills"
              className="
                hidden
                size-12
                items-center
                justify-center
                rounded-full
                border
                border-white/70
                bg-white/90
                text-forest-700

                shadow-lg
                shadow-forest-950/10
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-white

                sm:flex
                lg:hidden
                xl:flex
              "
            >
              <Phone size={16} />
            </a>

            {/* GET QUOTE */}
            <Link
              href="/contact"
              className="
                refined-nav-quote
                hidden
                h-12
                items-center
                gap-3
                whitespace-nowrap
                rounded-full
                py-0
                pl-5
                pr-2
                text-xs
                font-semibold

                transition-all
                duration-300

                hover:-translate-y-0.5

                sm:flex
              "
            >
              Get a quote

              <span
                className="
                  grid
                  size-8
                  place-items-center
                  rounded-full
                  bg-white/15
                "
              >
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>

          {/* ========================================
              MOBILE MENU BUTTON
          ======================================== */}
          <button
            id="navigation-toggle"
            type="button"
            onClick={() =>
              setOpen((previous) => !previous)
            }
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="
              relative
              z-30
              ml-2
              grid
              size-12
              shrink-0
              place-items-center
              rounded-full
              border
              border-white/70
              bg-white/95
              text-forest-950
              shadow-lg

              transition-colors

              hover:bg-forest-100

              lg:hidden
            "
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* ========================================
            MOBILE NAVIGATION
        ======================================== */}
        {open && (
          <div
            id="mobile-navigation"
            className="
              absolute
              left-4
              right-4
              top-[96px]
              z-50

              max-h-[calc(100dvh-110px)]
              overflow-y-auto

              rounded-[24px]
              border
              border-white/80
              bg-white/90
              p-3

              shadow-[0_20px_60px_#12200e26]
              backdrop-blur-2xl

              lg:hidden
            "
          >
            {/* MOBILE BRAND */}
            <div
              className="
                mb-3
                flex
                items-center
                gap-3
                border-b
                border-forest-200/70
                px-2
                pb-3
              "
            >
              <div
                className="
                  relative
                  size-[62px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border
                  border-forest-100
                  bg-white
                  p-1
                  shadow-md
                "
              >
                <Image
                  src="https://res.cloudinary.com/ddpfxvydm/image/upload/v1788844795/RMS3_vsgfnw.png"
                  alt="RMS Textile logo"
                  fill
                  sizes="62px"
                  className="object-contain"
                />
              </div>

              <div>
                <div
                  className="
                    font-display
                    text-[25px]
                    font-semibold
                    leading-tight
                    text-forest-950
                  "
                >
                  RMS Textile
                </div>

                <div
                  className="
                    mt-1.5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-forest-600/70
                  "
                >
                  Imported Knitting Division
                </div>
              </div>
            </div>

            {/* MOBILE LINKS */}
            <nav
              aria-label="Mobile navigation"
              className="grid gap-1"
            >
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={
                    isActive(href)
                      ? "page"
                      : undefined
                  }
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition-colors

                    ${
                      isActive(href)
                        ? "bg-forest-950 text-white"
                        : "text-forest-600 hover:bg-forest-100"
                    }
                  `}
                >
                  {label}

                  <ArrowUpRight
                    size={16}
                    className={
                      isActive(href)
                        ? "text-leaf-200"
                        : "opacity-40"
                    }
                  />
                </Link>
              ))}
            </nav>

            {/* MOBILE ACTIONS */}
            <div
              className="
                mt-3
                grid
                grid-cols-2
                gap-2
                border-t
                border-forest-200/70
                pt-3
              "
            >
              <a
                href="tel:+919843419599"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-forest-100
                  px-4
                  py-3.5
                  text-xs
                  font-semibold
                  text-forest-950
                "
              >
                <Phone size={14} />

                Call now
              </a>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-forest-950
                  px-4
                  py-3.5
                  text-xs
                  font-semibold
                  text-white
                "
              >
                Get a quote

                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export const Header = Navbar;

export default Navbar;
