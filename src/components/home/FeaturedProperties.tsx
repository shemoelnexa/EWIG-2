"use client";

import { useRef, useState, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const properties = [
  { title: "Dusit Thani Complex", location: "Abu Dhabi", image: "https://www.eastandwest.ae/images/projects/dusitthani/r/14.jpg" },
  { title: "Westburry Residence", location: "Business Bay, Dubai", image: "https://www.eastandwest.ae/images/projects/westburry-residence/r/14.jpg" },
  { title: "The Hills Abu Dhabi", location: "Abu Dhabi", image: "https://www.eastandwest.ae/images/projects/thehills/r/14.jpg" },
  { title: "Marina Gate", location: "Marsa Dubai", image: "https://www.eastandwest.ae/images/projects/marina-gate-2/r/20.jpg" },
  { title: "Al Qurm Compound", location: "Abu Dhabi", image: "https://www.eastandwest.ae/images/projects/alquram-compound/r/10.jpg" },
  { title: "Al Mushrif Villas", location: "Abu Dhabi", image: "https://www.eastandwest.ae/images/projects/mishrif-villas/r/01.jpg" },
];

export default function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [clickedArrow, setClickedArrow] = useState<"left" | "right" | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 10);
    }
  };

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;

    // Trigger bounce animation
    setClickedArrow(dir);
    setTimeout(() => setClickedArrow(null), 400);

    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  }, []);

  return (
    <section className="py-32 lg:py-48 bg-[#f1ebe3]">
      {/* Pulse animation for the caption dot */}
      <style>{`
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(148, 169, 1, 0.5); }
          50% { box-shadow: 0 0 0 4px rgba(148, 169, 1, 0); }
        }
        .dot-pulse {
          animation: dotPulse 2.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes arrowBounce {
          0% { transform: scale(1); }
          30% { transform: scale(0.85); }
          100% { transform: scale(1); }
        }
        .arrow-bounce {
          animation: arrowBounce 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <ScrollReveal className="text-center mb-6">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-extralight leading-[1.02]">
            Featured <em className="italic">Properties</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100} className="max-w-lg mx-auto text-center mb-4">
          <p className="text-[15px] leading-[1.8] text-[#4a4540]">
            Explore our portfolio to experience the beauty of East & West properties.
            From stunning residences to premium commercial spaces, discover what
            makes us the UAE&apos;s leading real estate group.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="text-center mb-14 lg:mb-20">
          <Link
            href="/properties"
            className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-[#0a0b09] font-medium group relative"
          >
            <span className="relative">
              View All Properties
              <span
                className="absolute left-0 -bottom-0.5 h-px bg-[#94a901] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-0 group-hover:w-full"
              />
            </span>
            <span className="w-7 h-7 bg-[#94a901] rounded-full flex items-center justify-center group-hover:bg-[#405653] transition-colors duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </ScrollReveal>
      </div>

      {/* Full-width carousel */}
      <ScrollReveal>
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-16"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {properties.map((p) => (
              <Link
                key={p.title}
                href="/properties/residential"
                className="group block shrink-0 relative overflow-hidden w-[80vw] sm:w-[50vw] lg:w-[38vw]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-[1.05]"
                    unoptimized
                    sizes="45vw"
                  />
                </div>
                {/* Caption at bottom */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-1.5 h-1.5 bg-[#94a901] rounded-full shrink-0 dot-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#0a0b09]">{p.title}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  clickedArrow === "left" ? "arrow-bounce" : ""
                } ${
                  canScrollLeft
                    ? "border-[#0a0b09] text-[#0a0b09] hover:bg-[#0a0b09] hover:text-white"
                    : "border-[#94a901]/30 text-[#94a901]/30 cursor-default"
                }`}
                aria-label="Previous"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className={`w-10 h-10 rounded-full border border-[#0a0b09] text-[#0a0b09] flex items-center justify-center hover:bg-[#0a0b09] hover:text-white transition-all duration-300 ${
                  clickedArrow === "right" ? "arrow-bounce" : ""
                }`}
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
