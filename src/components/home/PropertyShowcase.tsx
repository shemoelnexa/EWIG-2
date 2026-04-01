"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    subtitle: "654 Units — Abu Dhabi",
    title: "Dusit Thani",
    highlight: "Complex",
    description:
      "A landmark residential community featuring studios, 1-3 bedroom apartments with pool, gym, sauna, and covered parking.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    href: "/properties/residential",
  },
  {
    subtitle: "Business Bay — Dubai",
    title: "Westburry",
    highlight: "Residence",
    description:
      "Stunning studios and 1-3 bedroom apartments with breathtaking Burj Khalifa views, premium amenities, and 24/7 security.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    href: "/properties/residential",
  },
  {
    subtitle: "Now Leasing — Baniyas",
    title: "The Square",
    highlight: "Plaza",
    description:
      "A new retail and dining destination with restaurants, stores, and kiosks in a modern setting with EV charging and easy parking.",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80",
    href: "/the-square-plaza",
  },
];

export default function PropertyShowcase() {
  const [active, setActive] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      if (scrolled < 0 || scrolled > scrollableHeight) return;

      const progress = scrolled / scrollableHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      const slideIndex = Math.min(
        Math.floor(progress * slides.length),
        slides.length - 1
      );

      if (slideIndex !== active) {
        setTextVisible(false);
        setTimeout(() => {
          setActive(slideIndex);
          setTextVisible(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <div
      ref={containerRef}
      style={{ height: `${slides.length * 100}vh` }}
    >
      <style>{`
        @keyframes indicatorGlow {
          0%, 100% { box-shadow: 0 0 4px 0 rgba(148, 169, 1, 0.3); }
          50% { box-shadow: 0 0 8px 2px rgba(148, 169, 1, 0.5); }
        }
      `}</style>

      <div className="sticky top-0 h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left — Text */}
        <div className="w-full lg:w-[45%] bg-[#f1ebe3] flex items-center relative z-10">
          <div className="w-full px-8 lg:px-16 xl:px-24 py-16 lg:py-0">
            {/* Text content — blur in/out transition */}
            <div
              className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: textVisible ? 1 : 0,
                filter: textVisible ? "blur(0px)" : "blur(8px)",
                transform: textVisible ? "translateY(0)" : "translateY(4px)",
              }}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#94a901] mb-5">
                {slides[active].subtitle}
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-[1.02]">
                {slides[active].title}{" "}
                <em className="italic">{slides[active].highlight}</em>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.8] text-[#4a4540] max-w-md">
                {slides[active].description}
              </p>
              <Link
                href={slides[active].href}
                className="inline-flex items-center gap-3 mt-8 text-[12px] uppercase tracking-[0.12em] text-[#0a0b09] font-medium group"
              >
                <span>Learn More</span>
                <span className="w-7 h-7 bg-[#94a901] rounded-full flex items-center justify-center group-hover:bg-[#405653] transition-colors duration-300">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Slide indicators with glow */}
            <div className="flex items-center gap-3 mt-16">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className="h-px transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    width: i === active ? "2.5rem" : "1.25rem",
                    backgroundColor:
                      i === active
                        ? "#94a901"
                        : "rgba(148, 169, 1, 0.25)",
                    animation:
                      i === active
                        ? "indicatorGlow 2s ease-in-out infinite"
                        : "none",
                  }}
                />
              ))}
              <span className="text-[11px] text-[#4a4540]/40 ml-2 tabular-nums">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Right — Image with clip-path wipe reveal */}
        <div className="w-full lg:w-[55%] relative min-h-[350px] lg:min-h-0 overflow-hidden">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                clipPath:
                  i === active
                    ? "inset(0 0 0 0)"
                    : i < active
                      ? "inset(0 100% 0 0)"
                      : "inset(0 0 0 100%)",
                transition:
                  "clip-path 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: i === active ? 1 : 0,
                zIndex: i === active ? 10 : 0,
              }}
            >
              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                fill
                className="object-cover"
                unoptimized
                sizes="55vw"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Scroll hint on first slide */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-500 ${
              active === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Progress bar at the very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/5 z-30">
          <div
            className="h-full bg-[#94a901] transition-all duration-150 ease-linear"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
