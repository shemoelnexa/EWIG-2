"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

const tabs = [
  {
    label: "Abu Dhabi",
    locations: [
      { name: "The Hills", desc: "A premium residential community in Abu Dhabi featuring modern villas and luxury amenities.", image: "https://www.eastandwest.ae/images/projects/thehills/r/15.jpg" },
      { name: "Dusit Thani Complex", desc: "An upscale mixed-use complex offering refined living and hospitality in the capital.", image: "https://www.eastandwest.ae/images/projects/al-fardous-villas/r/1.jpg" },
      { name: "Arabian Gulf Tower", desc: "A landmark residential tower with panoramic views of the Arabian Gulf coastline.", image: "https://www.eastandwest.ae/images/projects/arabian-gulf-tower/r/1.jpg" },
    ],
  },
  {
    label: "Dubai",
    locations: [
      { name: "Westburry Residence", desc: "A premium residential development in the heart of Dubai offering modern urban living.", image: "https://www.eastandwest.ae/images/projects/westburry-residence/r/14.jpg" },
      { name: "Marina Gate 2", desc: "A luxurious waterfront tower in Dubai Marina with stunning views and world-class facilities.", image: "https://www.eastandwest.ae/images/projects/arabian-gulf-tower/r/1.jpg" },
      { name: "Al Safa Villa", desc: "An exclusive villa residence in the prestigious Al Safa district of Dubai.", image: "https://www.eastandwest.ae/images/projects/al-fardous-villas/r/1.jpg" },
    ],
  },
  {
    label: "Sharjah",
    locations: [
      { name: "Al Qasimiya", desc: "A well-connected residential area in Al Nad, Sharjah, offering comfortable apartments and community living.", image: "https://www.eastandwest.ae/images/projects/arabian-gulf-tower/r/1.jpg" },
      { name: "The Square Plaza", desc: "A modern commercial and mixed-use development bringing retail and lifestyle together.", image: "https://www.eastandwest.ae/images/projects/thehills/r/15.jpg" },
      { name: "Al Arabiya Tower", desc: "A contemporary residential tower offering quality living in a prime Sharjah location.", image: "https://www.eastandwest.ae/images/projects/westburry-residence/r/14.jpg" },
    ],
  },
];

export default function LocationsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-[#fdf9f3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <ScrollReveal>
              <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-extralight text-[#0a0b09] leading-[1.1]">
                Discover Homes in
                <br />
                Your Desired <em className="italic">Area</em>
              </h2>
              <p className="mt-4 text-[15px] text-[#0a0b09]/60 leading-relaxed max-w-md">
                Whether you&apos;re looking for a bustling city vibe, a peaceful
                suburban retreat, or a waterfront escape, we make it easy to find
                the perfect property in your ideal location.
              </p>
            </ScrollReveal>
          </div>

          {/* Tabs */}
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`text-[13px] tracking-[0.05em] px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    activeTab === i
                      ? "bg-[#0a0b09] text-white border-[#0a0b09]"
                      : "bg-transparent text-[#0a0b09]/70 border-[#0a0b09]/20 hover:border-[#0a0b09]/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Location cards — horizontally scrollable */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
          {tabs[activeTab].locations.map((loc, i) => (
            <div
              key={loc.name}
              className="group flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(33.333%-14px)] snap-start"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  sizes="35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extralight text-white mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-[13px] text-white/80 leading-relaxed">
                    {loc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
