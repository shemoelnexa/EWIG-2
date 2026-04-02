"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about-us" },
  { label: "Properties", href: "/properties" },
  { label: "The Square Plaza", href: "/the-square-plaza" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkColor = scrolled ? "text-[#0a0b09]" : "text-white";

  return (
    <>
      <style jsx global>{`
        /* Animated underline for nav links */
        .nav-link-underline {
          position: relative;
          display: inline-block;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #94a901;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }

        /* Hamburger bar morphing */
        .hamburger-icon {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hamburger-icon.menu-open {
          transform: rotate(90deg);
          opacity: 0;
        }
        .hamburger-icon.menu-open + .close-icon {
          transform: rotate(0deg);
          opacity: 1;
        }
        .close-icon {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform: rotate(-90deg);
          opacity: 0;
        }
        .close-icon.active {
          transform: rotate(0deg);
          opacity: 1;
        }

        /* Logo hover */
        .logo-hover {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .logo-hover:hover {
          transform: scale(1.02);
        }

        /* Fullscreen overlay slide-in */
        .menu-overlay {
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .menu-overlay.open {
          transform: translateY(0);
          opacity: 1;
        }

        /* Overlay link stagger animation */
        .overlay-link {
          transform: translateY(30px);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.3s ease;
        }
        .overlay-link.visible {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-ewig-off-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="shrink-0 relative z-[60] logo-hover" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="East & West International Group"
              width={160}
              height={49}
              className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
                menuOpen ? "" : scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Non-scrolled: horizontal nav links visible on desktop */}
          {!scrolled && (
            <div className="hidden lg:flex flex-row items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-underline text-[13px] tracking-[0.06em] uppercase transition-colors duration-300 hover:text-[#94a901] leading-none ${linkColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Hamburger / Close toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-[60] w-7 h-7 flex items-center justify-center transition-colors duration-300 ${
              !scrolled && !menuOpen ? "lg:hidden" : ""
            } ${
              menuOpen ? "text-[#0a0b09]" : scrolled ? "text-[#0a0b09]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className="absolute transition-all duration-400"
              style={{
                transform: menuOpen ? "rotate(0deg)" : "rotate(-90deg)",
                opacity: menuOpen ? 1 : 0,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDuration: "0.4s",
              }}
            >
              <X size={28} strokeWidth={1.5} />
            </span>
            <span
              className="absolute transition-all duration-400"
              style={{
                transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                opacity: menuOpen ? 0 : 1,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDuration: "0.4s",
              }}
            >
              <Menu size={28} strokeWidth={1.5} />
            </span>
          </button>
        </nav>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-[#fdf9f3]/80 backdrop-blur-xl menu-overlay ${
          menuOpen ? "open pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ opacity: menuOpen ? 1 : 0 }}
      >
        {/* Close button inside overlay */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 lg:top-8 lg:right-16 z-[60] text-[#0a0b09] hover:text-[#94a901] transition-colors duration-300"
          aria-label="Close menu"
        >
          <X size={32} strokeWidth={1.2} />
        </button>

        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-5 lg:gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`overlay-link font-heading text-[clamp(2rem,5vw,3.5rem)] font-extralight uppercase tracking-[0.04em] text-[#0a0b09] hover:text-[#94a901] leading-[1.1] ${
                  menuOpen ? "visible" : ""
                }`}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
