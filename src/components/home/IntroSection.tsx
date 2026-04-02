"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-[#fdf9f3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Top row — label left, large statement right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <p className="text-[12px] uppercase tracking-[0.2em] text-[#0a0b09]/50">
                (01) About Us
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollReveal direction="right">
              <h2 className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] font-extralight text-[#0a0b09] leading-[1.2]">
                At East & West, we see a home as the ultimate
                expression of comfort and well-being. From
                thoughtfully designed spaces to carefully
                planned communities
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom row — two images + text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-16 lg:mt-20">
          {/* Left large image */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://www.eastandwest.ae/images/1-470x660.jpg"
                  alt="East & West property"
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="35vw"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-[11px] text-[#0a0b09]/40 tracking-[0.1em]">
                  (01) Premium Living
                </p>
                <p className="text-[11px] text-[#0a0b09]/40 tracking-[0.1em]">
                  @1993
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — image aligned with left, text bottom-right */}
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Image — aligned to top */}
            <div className="lg:col-span-12">
              <ScrollReveal direction="right">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://www.eastandwest.ae/images/projects/thehills/r/15.jpg"
                    alt="UAE community"
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="40vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Text — bottom-right, next to image */}
            <div className="lg:col-span-12">
              <ScrollReveal direction="right" delay={150}>
                <p className="text-[15px] leading-[1.8] text-[#0a0b09]/60 max-w-md">
                  We create spaces that not only offer a place to live, but
                  also foster lasting memories while shaping a better,
                  more sustainable future. Since 1993, East & West has been
                  a cornerstone of the UAE&apos;s real estate landscape.
                </p>
                <a
                  href="/about-us"
                  className="inline-block mt-6 text-[11px] uppercase tracking-[0.15em] text-[#0a0b09] border-b border-[#0a0b09] pb-1 hover:text-[#94a901] hover:border-[#94a901] transition-colors duration-300"
                >
                  Discover our story
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
