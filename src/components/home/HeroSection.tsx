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
      className="relative h-screen min-h-[750px] flex flex-col overflow-hidden"
    >
      {/* Background — sky covers full area, building layered on top */}
      <div className="absolute inset-0">
        {/* Sky — full bleed so it shows through building transparency */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-sky.png"
            alt="Sky"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
        {/* Building — layered on top, bottom-aligned */}
        <div
          className="absolute inset-x-0 bottom-0 h-[50%]"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <Image
            src="/images/hero-building.png"
            alt="East & West properties"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>

      {/* Centered content — sits in the sky area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-[35vh]">
        <p
          className={`text-[11px] uppercase tracking-[0.4em] text-white/80 mb-6 ${a(200)}`}
          style={{ transitionDelay: "0.3s" }}
        >
          Est. 1993 — Abu Dhabi
        </p>

        <h1 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-extralight text-white leading-[1] text-center">
          <span
            className="inline-block transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: "0.5s",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(30px)",
              filter: show ? "blur(0px)" : "blur(8px)",
            }}
          >
            East &{" "}
          </span>
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
          className={`mt-5 text-[15px] text-white/80 max-w-md leading-relaxed text-center ${a(600)}`}
          style={{ transitionDelay: "0.8s" }}
        >
          Leading Integrated Real Estate Group in the UAE.
          <br />
          Premium residential and commercial properties across
          <br />
          Abu Dhabi, Dubai, and Sharjah.
        </p>

        {/* Search bar */}
        <div className={`mt-6 w-full max-w-lg ${a(800)}`} style={{ transitionDelay: "1.1s" }}>
          <div
            className={`bg-white/90 backdrop-blur-md border border-gray-200 p-1 shadow-lg rounded-full ${show ? "hero-search-glow" : ""}`}
            style={{ animationDelay: "2.4s" }}
          >
            <div className="flex flex-col sm:flex-row">
              {["Property Type", "Location", "Bedrooms"].map((label, i) => (
                <div key={label} className={`${i === 0 ? "flex-[1.3]" : "flex-1"} relative`}>
                  <select className={`w-full bg-transparent text-[#0a0b09]/70 text-[13px] ${i === 0 ? "px-3" : "px-2"} py-2.5 appearance-none cursor-pointer focus:outline-none`}>
                    <option value="">{label}</option>
                    {label === "Property Type" && <><option value="r">Residential</option><option value="c">Commercial</option></>}
                    {label === "Location" && <><option value="ad">Abu Dhabi</option><option value="d">Dubai</option><option value="s">Sharjah</option></>}
                    {label === "Bedrooms" && <><option value="s">Studio</option><option value="1">1 Bed</option><option value="2">2 Beds</option><option value="3">3+ Beds</option></>}
                  </select>
                  <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0a0b09]/30 pointer-events-none" />
                  {i < 2 && <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200 hidden sm:block" />}
                </div>
              ))}
              <button className="bg-[#94a901] hover:bg-[#0a0b09] text-white px-6 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300">
                <Search size={13} />
                <span className="text-[11px] uppercase tracking-[0.1em]">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
