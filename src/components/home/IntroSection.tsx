"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Left column moves slightly slower — subtle parallax between columns
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      setParallaxOffset(progress * 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Overlapping editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 items-start">
          {/* Left column — large image with overlapping text, parallax offset */}
          <div
            className="lg:col-span-6 relative"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://www.eastandwest.ae/images/1-470x660.jpg"
                  alt="Abu Dhabi skyline"
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="50vw"
                />
              </div>
            </ScrollReveal>

            {/* Overlapping stat block — slide in from below with bounce */}
            <BounceInBlock className="absolute -bottom-8 -right-4 lg:right-[-60px] z-10">
              <div className="bg-[#405653] p-8 lg:p-10 text-center w-40 lg:w-48 text-white">
                <span className="font-heading text-[3.5rem] lg:text-[4.5rem] font-extralight leading-none block">30+</span>
                <div className="w-8 h-px bg-[#94a901] mx-auto my-3" />
                <p className="text-[11px] uppercase tracking-[0.2em]">Years of<br />Excellence</p>
              </div>
            </BounceInBlock>
          </div>

          {/* Right column — text + small image */}
          <div className="lg:col-span-5 lg:col-start-8 pt-16 lg:pt-32">
            <ScrollReveal direction="right">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#94a901] mb-5">
                About East & West
              </p>
              <h2 className="font-heading text-[clamp(2.2rem,4.5vw,4rem)] font-extralight leading-[1.05]">
                Your trusted<br /><em className="italic">partner</em> in UAE<br />real estate
              </h2>
              <div className="w-14 h-px bg-[#94a901] mt-8 mb-8" />
              <p className="text-[16px] leading-[1.8] text-[#4a4540] max-w-md">
                Since 1993, East & West International Group has been a cornerstone
                of the UAE&apos;s real estate landscape. We provide comprehensive,
                reliable, and cost-effective property management services that
                enhance the value of our clients&apos; real estate assets.
              </p>
              <a
                href="/about-us"
                className="inline-block mt-10 text-[11px] uppercase tracking-[0.15em] text-[#0a0b09] border-b border-[#0a0b09] pb-1 hover:text-[#94a901] hover:border-[#94a901] transition-colors duration-300"
              >
                Discover our story
              </a>
            </ScrollReveal>

            {/* Offset small image — clip-path reveal from right */}
            <ScrollReveal direction="right" delay={200} className="mt-12 lg:mt-16">
              <div className="relative aspect-[4/3] w-[75%] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
                  alt="Dubai sunset"
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="30vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Clip-path reveal image component ── */
function ClipRevealImage({
  src,
  alt,
  aspect,
  direction,
  sizes,
}: {
  src: string;
  alt: string;
  aspect: string;
  direction: "left" | "right";
  sizes: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in view on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clipFrom = direction === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
  const clipTo = "inset(0 0 0 0)";

  return (
    <div
      ref={ref}
      className={`relative ${aspect} overflow-hidden`}
      style={{
        clipPath: visible ? clipTo : clipFrom,
        transition: "clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        unoptimized
        sizes={sizes}
      />
    </div>
  );
}

/* ── Bounce-in from below component ── */
function BounceInBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => setVisible(true), 300);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 300);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
    </div>
  );
}
