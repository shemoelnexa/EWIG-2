import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Leaf, Globe, TrendingUp, Shield, Target, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Social Sustainability",
    description:
      "Investing in community welfare, ethical governance, and programs that uplift local communities across the UAE.",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description:
      "Minimizing our ecological footprint through energy-efficient practices, waste reduction, and sustainable building operations.",
  },
  {
    icon: TrendingUp,
    title: "Economic Sustainability",
    description:
      "Driving long-term value creation through responsible investment and innovative property management strategies.",
  },
];

const governance = [
  { icon: Shield, title: "Accountability", description: "Clear ownership of decisions and outcomes at every level" },
  { icon: Target, title: "Transparency", description: "Open reporting and communication with all stakeholders" },
  { icon: BarChart3, title: "Fairness", description: "Equitable treatment and ethical business practices" },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80"
            alt="Sustainability"
            fill
            className="object-cover"
                    unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            ESG Commitment
          </p>
          <h1 className="font-heading font-extralight text-white">
            Sustainability <em className="italic">Strategy</em>
          </h1>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              Our Purpose
            </p>
            <h2 className="font-heading font-extralight leading-[1.1]">
              Investing in a <em className="italic">sustainable</em> future
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto mb-8" />
            <p className="text-base leading-relaxed text-[#4a4540]">
              To strategically invest in initiatives that promote long-term
              growth, support local communities, and minimize environmental
              impact. Our ESG framework guides every decision we make.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeading
            subtitle="Three Pillars"
            title="Our Approach"
            highlight="Approach"
          />
          <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 150}>
                <div className="bg-ewig-off-white p-10 lg:p-14 h-full group hover:bg-ewig-deep-sea transition-colors duration-500">
                  <pillar.icon
                    size={32}
                    strokeWidth={1}
                    className="text-ewig-gold mb-8"
                  />
                  <h3 className="font-heading text-xl font-extralight mb-4 group-hover:text-white transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4540] group-hover:text-white/90 transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Net Zero */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-ewig-black/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              Net Zero Target
            </p>
            <h2 className="font-heading font-extralight text-white leading-[1.1]">
              Net Zero Emissions by{" "}
              <em className="italic text-ewig-gold">2050</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto mb-8" />
            <p className="text-base leading-relaxed text-white/90">
              Committed to achieving Net Zero Emission across Scope 1, 2 & 3 by
              2050, through strategic carbon reduction initiatives and
              sustainable operations across all managed properties.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeading
            subtitle="Governance"
            title="Governance & Policies"
            highlight="Policies"
            description="Built on principles of accountability, responsibility, transparency, fairness, and trust"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {governance.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ewig-beige flex items-center justify-center mx-auto mb-6">
                    <item.icon size={24} strokeWidth={1} className="text-ewig-gold" />
                  </div>
                  <h4 className="font-heading text-lg font-extralight mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#4a4540]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
