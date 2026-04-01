"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { Building2, Home, Warehouse, Wrench, Shield, Leaf } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Leasing", description: "Apartments, villas, townhouses, and penthouses across the UAE." },
  { icon: Building2, title: "Commercial Spaces", description: "Offices, retail, showrooms, and warehouses in prime districts." },
  { icon: Warehouse, title: "Managed Properties", description: "Full-service property management to the highest standards." },
  { icon: Wrench, title: "24/7 Maintenance", description: "Round-the-clock facility management and emergency service." },
  { icon: Shield, title: "Quality Assurance", description: "Triple ISO certified across quality, safety, and environment." },
  { icon: Leaf, title: "Sustainability", description: "Committed to Net Zero by 2050 with strong ESG governance." },
];

export default function ServicesSection() {
  return (
    <>
      {/* Full-width cinematic image with Ken Burns zoom */}
      <section className="relative h-[90vh] min-h-[650px] overflow-hidden">
        <div className="absolute inset-0 cinematic-ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury property"
            fill
            className="object-cover"
            unoptimized
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/15" />
      </section>

      {/* Staggered heading + paragraph + CTA + parallax image */}
      <ParallaxTextSection />

      {/* Services — asymmetric overlapping grid */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#94a901] mb-5">What We Offer</p>
              <h2 className="font-heading text-[clamp(2.2rem,5vw,4.5rem)] font-extralight leading-[1.02]">
                Curated<br /><em className="italic">Services</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} className="mt-6 lg:mt-0">
              <div className="w-14 h-px bg-[#94a901]" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0d3cc]/30">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group bg-[#fdf9f3] p-8 lg:p-10 h-full hover:bg-[#f1ebe3] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,11,9,0.08)]">
                  <div className="w-11 h-11 bg-[#f1ebe3] group-hover:bg-[#94a901] transition-all duration-500 flex items-center justify-center mb-5">
                    <s.icon
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#94a901] group-hover:text-white transition-all duration-500 group-hover:rotate-[5deg]"
                    />
                  </div>
                  <h3 className="font-heading text-[1.4rem] font-normal mb-2">{s.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-[#4a4540]">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Staggered blur-in heading line ── */
function BlurInLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className={`block ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(6px)",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      {children}
    </span>
  );
}

function ParallaxTextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      setOffset(progress * 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 bg-[#f1ebe3] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          {/* Left — Text content */}
          <div className="lg:w-[60%]">
            <h2 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[1.05]">
              <BlurInLine delay={0}>
                Your <em className="italic">luxury escape</em>
              </BlurInLine>
              <BlurInLine delay={200} className="lg:ml-[15%]">
                to disconnect
              </BlurInLine>
              <BlurInLine delay={400} className="lg:ml-[30%]">
                and reconnect
              </BlurInLine>
            </h2>

            <ScrollReveal delay={150}>
              <div className="lg:ml-[30%] mt-10 max-w-lg">
                <p className="text-[16px] leading-[1.8] text-[#4a4540]">
                  <strong className="font-medium text-[#0a0b09]">East & West International Group</strong> is
                  a leading integrated real estate company in the UAE. Available across Abu Dhabi, Dubai, and
                  Sharjah, our properties are the perfect setting for your next home or investment.
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-3 mt-8 text-[12px] uppercase tracking-[0.12em] text-[#0a0b09] font-medium group"
                >
                  <span>Enquire Now</span>
                  <span className="w-7 h-7 bg-[#94a901] rounded-full flex items-center justify-center group-hover:bg-[#405653] transition-colors duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Parallax vertical image */}
          <div className="hidden lg:block lg:w-[35%] lg:ml-auto mt-12 lg:mt-0">
            <ScrollReveal direction="right" delay={200}>
              <div className="relative aspect-[3/5] overflow-hidden">
                <div
                  className="absolute inset-x-0 -top-[10%] -bottom-[10%] transition-transform duration-100 ease-linear"
                  style={{ transform: `translateY(${offset}px)` }}
                >
                  <Image
                    src="https://www.eastandwest.ae/images/projects/alquram-compound/r/10.jpg"
                    alt="Al Qurm Compound"
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
