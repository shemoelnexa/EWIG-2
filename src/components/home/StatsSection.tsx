"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ThumbsUp, Building2, MapPin, Award } from "lucide-react";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence", icon: ThumbsUp },
  { value: 50, suffix: "+", label: "Managed Properties", icon: Building2 },
  { value: 4, suffix: "", label: "UAE Regions", icon: MapPin },
  { value: 3, suffix: "", label: "ISO Certifications", icon: Award },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const s = performance.now();
        const run = (n: number) => {
          const p = Math.min((n - s) / 2000, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / window.innerHeight;
      setParallaxY(scrollProgress * 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80')",
            transform: `translateY(${parallaxY}px) scale(1.1)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0b09]/60" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <ScrollReveal direction="blur" className="mb-16 lg:mb-20">
          <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-extralight text-white leading-[0.95]">
            Trusted across<br />the <em className="italic">Emirates</em>
          </h2>
        </ScrollReveal>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div
                  className="group rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[160px] bg-white/10 backdrop-blur-md text-white hover:bg-[#94a901] hover:text-[#0a0b09] transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-[#0a0b09]/10 transition-colors duration-300">
                      <Icon size={16} />
                    </div>
                  </div>
                  <div>
                    <span className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-extralight leading-none block">
                      <Counter target={s.value} suffix={s.suffix} />
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.15em] mt-2 text-white/50 group-hover:text-[#0a0b09]/70 transition-colors duration-300">
                      {s.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
