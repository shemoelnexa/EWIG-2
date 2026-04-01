import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Residential Properties",
    description:
      "Premium apartments, villas, townhouses, and penthouses across Abu Dhabi, Dubai, and Sharjah",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    href: "/properties/residential",
    count: "20+ Properties",
  },
  {
    title: "Commercial Properties",
    description:
      "Offices, warehouses, showrooms, and retail shops in prime business districts",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    href: "/properties/commercial",
    count: "10+ Properties",
  },
];

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Properties"
            fill
            className="object-cover"
                    unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Our Portfolio
          </p>
          <h1 className="font-heading font-extralight text-white">
            Our <em className="italic">Properties</em>
          </h1>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {categories.map((cat, index) => (
              <ScrollReveal key={cat.title} delay={index * 150}>
                <Link href={cat.href} className="group block relative overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                      <p className="text-xs uppercase tracking-[0.15em] text-ewig-gold mb-3">
                        {cat.count}
                      </p>
                      <h2 className="font-heading text-3xl lg:text-4xl font-extralight text-white mb-4">
                        {cat.title}
                      </h2>
                      <p className="text-sm text-white/90 leading-relaxed max-w-md">
                        {cat.description}
                      </p>
                      <div className="flex items-center gap-2 mt-6 text-white text-xs uppercase tracking-[0.1em]">
                        <span>View Properties</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
