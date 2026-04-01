"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  // Subtle parallax: hero image moves slower than scroll — clamped to prevent vanishing
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(Math.min(scrollY * 0.15, 150));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const a = (d: number) =>
    `transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[750px] flex flex-col justify-end overflow-hidden"
    >
      {/* Background with Ken Burns + parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-[-10%]"
          style={{ transform: `translateY(${parallaxY}px) scale(1.05)` }}
        >
          <Image
            src="https://eastandwest.ae/images/slider/first1.jpg"
            alt="East & West properties"
            fill
            className="object-cover"
            unoptimized
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
      </div>

      {/* Large display title — cinematic positioning */}
      <div className="relative z-10 px-6 lg:px-16 pb-12 lg:pb-16 max-w-[1440px] mx-auto w-full">
        <div className="max-w-5xl">
          <p
            className={`text-[11px] uppercase tracking-[0.4em] text-[#94a901] mb-6 ${a(200)}`}
            style={{ transitionDelay: "0.3s" }}
          >
            Est. 1993 — Abu Dhabi
          </p>

          {/* Staggered h1 lines with blur-to-clear */}
          <h1 className="font-heading text-[clamp(3rem,8vw,8rem)] font-extralight text-white leading-[0.95]">
            <span
              className="inline-block transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: "0.5s",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(30px)",
                filter: show ? "blur(0px)" : "blur(8px)",
              }}
            >
              East &
            </span>
            <br />
            <span
              className="inline-block transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transitionDelay: "0.75s",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(30px)",
                filter: show ? "blur(0px)" : "blur(8px)",
              }}
            >
              <em className="italic">West</em>
            </span>
          </h1>

          <p
            className={`mt-6 text-[16px] text-white/90 max-w-md leading-relaxed ${a(600)}`}
            style={{ transitionDelay: "0.8s" }}
          >
            Leading Integrated Real Estate Group in the UAE. Premium residential
            and commercial properties across Abu Dhabi, Dubai, and Sharjah.
          </p>
        </div>

        {/* Search — bottom aligned, elegant, with glow pulse after appear */}
        <div className={`mt-10 ${a(800)}`} style={{ transitionDelay: "1.1s" }}>
          <div
            className={`bg-white/[0.06] backdrop-blur-md border border-white/[0.08] p-1.5 max-w-3xl ${show ? "hero-search-glow" : ""}`}
            style={{ animationDelay: "2.4s" }}
          >
            <div className="flex flex-col sm:flex-row">
              {["Property Type", "Location", "Bedrooms"].map((label, i) => (
                <div key={label} className="flex-1 relative">
                  <select className="w-full bg-transparent text-white/90 text-[14px] px-4 py-3.5 appearance-none cursor-pointer focus:outline-none">
                    <option value="" className="text-[#0a0b09]">{label}</option>
                    {label === "Property Type" && <><option className="text-[#0a0b09]" value="r">Residential</option><option className="text-[#0a0b09]" value="c">Commercial</option></>}
                    {label === "Location" && <><option className="text-[#0a0b09]" value="ad">Abu Dhabi</option><option className="text-[#0a0b09]" value="d">Dubai</option><option className="text-[#0a0b09]" value="s">Sharjah</option></>}
                    {label === "Bedrooms" && <><option className="text-[#0a0b09]" value="s">Studio</option><option className="text-[#0a0b09]" value="1">1 Bed</option><option className="text-[#0a0b09]" value="2">2 Beds</option><option className="text-[#0a0b09]" value="3">3+ Beds</option></>}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                  {i < 2 && <div className="absolute right-0 top-2.5 bottom-2.5 w-px bg-white/[0.08] hidden sm:block" />}
                </div>
              ))}
              <button className="bg-[#94a901] hover:bg-white hover:text-[#0a0b09] text-white px-8 py-3.5 flex items-center justify-center gap-2 transition-all duration-300">
                <Search size={14} />
                <span className="text-[12px] uppercase tracking-[0.1em]">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll line — gentle floating animation */}
      <div className="absolute bottom-0 right-8 lg:right-16 z-10 hidden lg:flex flex-col items-center gap-3">
        <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-lr] hero-scroll-float">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
