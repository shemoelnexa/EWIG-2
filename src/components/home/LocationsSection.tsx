"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Abu Dhabi", desc: "Our headquarters — towers, villas, and compounds across the capital", image: "https://www.eastandwest.ae/images/projects/al-fardous-villas/r/1.jpg", count: "30+" },
  { city: "Dubai", desc: "From Business Bay to Jumeirah — premium residences and offices", image: "https://www.eastandwest.ae/images/projects/westburry-residence/r/14.jpg", count: "15+" },
  { city: "Sharjah", desc: "Expanding into Sharjah's growing real estate market", image: "https://www.eastandwest.ae/images/projects/arabian-gulf-tower/r/1.jpg", count: "5+" },
];

function LocationCard({ loc, i }: { loc: typeof locations[number]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setRevealed(true), i * 180);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [i]);

  return (
    <div ref={cardRef} className={i === 1 ? "md:-mt-8" : ""}>
      <div className="group relative overflow-hidden">
        <div
          className={`relative overflow-hidden ${i === 1 ? "aspect-[3/5]" : "aspect-[3/4]"}`}
          style={{
            clipPath: revealed
              ? "inset(0 0 0% 0)"
              : "inset(0 0 100% 0)",
            transition: "clip-path 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src={loc.image}
            alt={loc.city}
            fill
            className="object-cover transition-transform duration-[15s] ease-linear group-hover:scale-105"
            style={{
              animation: `kenburns-${i} 15s ease-in-out infinite alternate`,
            }}
            sizes="33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/20" />
        </div>

        {/* Ghost number with floating animation */}
        <div className="absolute top-6 left-6 z-10">
          <span
            className="font-heading text-[3.5rem] font-extralight text-white/20 leading-none block"
            style={{
              animation: `ghost-float 6s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {loc.count}
          </span>
        </div>

        {/* Bottom text with hover slide-up */}
        <div
          className="absolute bottom-0 left-0 right-0 p-7 transition-transform duration-500"
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            className="transition-transform duration-500 group-hover:-translate-y-2"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="flex items-center gap-1.5 text-[#94a901] mb-3">
              <MapPin size={12} />
              <span className="text-[11px] uppercase tracking-[0.15em]">Properties</span>
            </div>
            <h3 className="font-heading text-[2.2rem] font-extralight text-white mb-2">{loc.city}</h3>
            <p className="text-[14px] text-white/90 leading-relaxed">{loc.desc}</p>
          </div>
        </div>
      </div>

      {/* Keyframes injected via style tag */}
      <style jsx>{`
        @keyframes kenburns-${i} {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.03) translate(${i === 0 ? "-0.5%" : i === 1 ? "0.5%" : "-0.3%"}, ${i === 0 ? "-0.3%" : i === 1 ? "0.3%" : "-0.5%"}); }
        }
      `}</style>
    </div>
  );
}

export default function LocationsSection() {
  return (
    <section className="py-32 lg:py-48 bg-[#f1ebe3]">
      {/* Ghost float keyframes */}
      <style jsx>{`
        @keyframes ghost-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#94a901] mb-5">Where We Operate</p>
            <h2 className="font-heading text-[clamp(2.2rem,5vw,4.5rem)] font-extralight leading-[1.02]">
              Across the<br /><em className="italic">Emirates</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150} className="mt-6 lg:mt-0">
            <p className="text-[16px] leading-relaxed text-[#4a4540] max-w-xs">
              Wherever the UAE&apos;s finest addresses are found
            </p>
          </ScrollReveal>
        </div>

        {/* Staggered height cards with clip-path reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {locations.map((loc, i) => (
            <LocationCard key={loc.city} loc={loc} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
