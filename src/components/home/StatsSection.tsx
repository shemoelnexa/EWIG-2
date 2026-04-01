"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: 30, suffix: "+", label: "Years of\nExcellence" },
  { value: 50, suffix: "+", label: "Managed\nProperties" },
  { value: 4, suffix: "", label: "UAE\nRegions" },
  { value: 3, suffix: "", label: "ISO\nCertifications" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
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
          setProgress(p);
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  // Blur decreases as the counter progresses
  const blurAmount = Math.max(0, (1 - progress) * 6);

  return (
    <span
      ref={ref}
      style={{
        filter: `blur(${blurAmount}px)`,
        transition: "filter 0.1s ease-out",
      }}
    >
      {count}{suffix}
    </span>
  );
}

function AnimatedDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px bg-white/[0.08]"
      style={{
        height: visible ? "100%" : "0%",
        transition: "height 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    />
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
    <section ref={sectionRef} className="relative py-40 lg:py-56 overflow-hidden">
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
        <div className="absolute inset-0 bg-[#0a0b09]/85" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Giant display heading with blur reveal */}
        <ScrollReveal direction="blur" className="mb-20 lg:mb-28">
          <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-extralight text-white leading-[0.95]">
            Trusted across<br />the <em className="italic">Emirates</em>
          </h2>
        </ScrollReveal>

        {/* Stats in a line with animated vertical dividers */}
        <div className="flex flex-wrap lg:flex-nowrap">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 120} className="w-1/2 lg:w-1/4">
              <div className="py-6 lg:py-0 relative lg:pl-8">
                {i > 0 && <AnimatedDivider />}
                <span className="font-heading text-[clamp(3rem,6vw,5.5rem)] font-extralight text-white leading-none block">
                  <Counter target={s.value} suffix={s.suffix} />
                </span>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mt-3 whitespace-pre-line">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
