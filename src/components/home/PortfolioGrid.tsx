"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function GridItem({
  href,
  imageSrc,
  imageAlt,
  subtitle,
  title,
  description,
  showLearnMore,
  sizes,
  className = "",
  large,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  title: string | React.ReactNode;
  description?: string;
  showLearnMore?: boolean;
  sizes: string;
  className?: string;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { setVisible(true); return; }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} h-full`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Link href={href} className="group block relative overflow-hidden h-full">
        <div className="relative h-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-[1.05]"
            unoptimized
            sizes={sizes}
          />
          <div className="absolute inset-0 bg-[#94a901]/0 group-hover:bg-[#94a901]/10 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#94a901] mb-2">{subtitle}</p>
            {typeof title === "string" ? (
              <h3 className={`font-heading font-extralight text-white ${large ? "text-[clamp(1.8rem,3.5vw,3.5rem)] leading-[1.02]" : "text-[1.6rem]"}`}>{title}</h3>
            ) : title}
            {description && <p className="text-[14px] text-white/90 mt-1.5">{description}</p>}
            {showLearnMore && (
              <div className="flex items-center gap-2 mt-4 text-white text-[11px] uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Learn More</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <section className="py-32 lg:py-48 bg-[#e0d3cc]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="lg:ml-[10%] mb-16 lg:mb-24">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#94a901] mb-5">Explore</p>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[0.98]">
              Our <em className="italic">Portfolio</em>
            </h2>
          </ScrollReveal>
        </div>

        {/* Row 1: 7 + 5 masonry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3" style={{ minHeight: "600px" }}>
          {/* Large left — spans 2 rows */}
          <div className="lg:col-span-7 lg:row-span-2">
            <GridItem
              href="/the-square-plaza"
              imageSrc="https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80"
              imageAlt="The Square Plaza"
              subtitle="Now Leasing — Baniyas, Abu Dhabi"
              title={
                <h3 className="font-heading text-[clamp(1.8rem,3.5vw,3.5rem)] font-extralight text-white leading-[1.02]">
                  The Square<br /><em className="italic">Plaza</em>
                </h3>
              }
              description="A new retail and dining destination under one roof"
              showLearnMore
              sizes="60vw"
              large
            />
          </div>

          {/* Top right */}
          <div className="lg:col-span-5">
            <GridItem
              href="/properties"
              imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              imageAlt="Commercial towers"
              subtitle="Labour City"
              title="Labour Accommodation"
              sizes="40vw"
            />
          </div>

          {/* Bottom right */}
          <div className="lg:col-span-5">
            <GridItem
              href="/properties/commercial"
              imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              imageAlt="Westburry Offices"
              subtitle="Business Bay, Dubai"
              title="Westburry Offices"
              description="Premium commercial spaces with Downtown views"
              sizes="40vw"
            />
          </div>
        </div>

        {/* Row 2: 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
          <div className="aspect-[16/9]">
            <GridItem
              href="/properties/residential"
              imageSrc="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80"
              imageAlt="Al Mushrif Villas"
              subtitle="Abu Dhabi"
              title="Al Mushrif Villas"
              sizes="50vw"
            />
          </div>
          <div className="aspect-[16/9]">
            <GridItem
              href="/properties/residential"
              imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
              imageAlt="Marina Gate"
              subtitle="Marsa Dubai"
              title="Marina Gate"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
