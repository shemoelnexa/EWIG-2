"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <>
      {/* Full-width cinematic image with Ken Burns */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            animation: "cta-kenburns 20s ease-in-out infinite alternate",
          }}
        >
          <Image
            src="https://www.eastandwest.ae/images/projects/westburry-residence/r/12.jpg"
            alt="Westburry Residence"
            fill
            className="object-cover"
            unoptimized
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/15" />
        <style jsx>{`
          @keyframes cta-kenburns {
            0% { transform: scale(1); }
            100% { transform: scale(1.06); }
          }
        `}</style>
      </section>

      {/* Marquee — scrolling text strip with hover effect */}
      <section className="py-5 bg-[#0a0b09] overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {["Residential", "Commercial", "Managed Properties", "Maintenance", "Sustainability", "Quality", "Leasing", "Abu Dhabi", "Dubai", "Sharjah"].map((w) => (
                <span
                  key={`${w}-${i}`}
                  className="font-heading text-[1.1rem] font-extralight text-white/50 flex items-center gap-8 transition-all duration-300 hover:text-white hover:scale-110"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {w}
                  <span className="inline-block w-1.5 h-1.5 bg-[#94a901] rounded-full" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA — dramatic type */}
      <section className="py-36 lg:py-52">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="blur">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#94a901] mb-8">Get In Touch</p>
              <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-extralight leading-[0.98]">
                An experience<br />you&apos;ll <em className="italic">never forget</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-8 text-[16px] leading-relaxed text-[#4a4540] max-w-md mx-auto">
                Whether you&apos;re looking for your next home, a commercial space,
                or investment opportunities — our team is here to guide you.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-14">
                <Link
                  href="/contact-us"
                  className="cta-shimmer-btn inline-flex items-center gap-2.5 bg-[#94a901] text-white px-10 py-4 text-[12px] uppercase tracking-[0.1em] hover:bg-[#405653] transition-colors duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2.5">Contact Us <ArrowRight size={14} /></span>
                </Link>
                <a
                  href="tel:600511122"
                  className="inline-flex items-center gap-2.5 border border-[#0a0b09] text-[#0a0b09] px-10 py-4 text-[12px] uppercase tracking-[0.1em] hover:bg-[#0a0b09] hover:text-white transition-colors duration-300"
                >
                  <Phone size={14} /> 600 511122
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Shimmer effect styles */}
        <style jsx>{`
          .cta-shimmer-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(255, 255, 255, 0.15) 40%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0.15) 60%,
              transparent 100%
            );
            transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .cta-shimmer-btn:hover::before {
            left: 120%;
          }
        `}</style>
      </section>

      {/* Giant decorative logotype — letter-by-letter reveal */}
      <section className="py-4">
        <LetterReveal text="EAST & WEST" />
      </section>
    </>
  );
}

function LetterReveal({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.3;
      const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = text.split("");

  return (
    <div ref={ref} className="text-center whitespace-nowrap">
      <span className="font-heading text-[15vw] font-extralight leading-[1.1] select-none inline-block">
        {letters.map((char, i) => {
          const letterProgress = Math.max(
            0,
            Math.min(1, (progress * letters.length - i) / 1.5)
          );
          const blurAmount = Math.max(0, (1 - letterProgress) * 5);
          return (
            <span
              key={i}
              className="inline-block transition-none"
              style={{
                opacity: letterProgress,
                transform: `translateY(${(1 - letterProgress) * 30}px)`,
                filter: `blur(${blurAmount}px)`,
                color: "#e0d3cc",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </div>
  );
}
