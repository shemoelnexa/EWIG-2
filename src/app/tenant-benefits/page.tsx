import ScrollReveal from "@/components/ScrollReveal";
import { UtensilsCrossed, Briefcase, Hotel, Gift } from "lucide-react";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Exclusive discounts at partner restaurants and cafes across the UAE",
  },
  {
    icon: Briefcase,
    title: "Services",
    description: "Special rates on home services, cleaning, and maintenance from our partner network",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Preferential rates at select hotels and resorts for our valued tenants",
  },
  {
    icon: Gift,
    title: "Lifestyle & Retail",
    description: "Exclusive offers on fitness, wellness, and retail from curated partners",
  },
];

export default function TenantBenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Exclusive Perks
          </p>
          <h1 className="font-heading font-extralight text-white">
            Tenant <em className="italic">Benefits</em>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              Grab Your Offer
            </p>
            <h2 className="font-heading font-extralight leading-[1.1]">
              Exclusive offers for our{" "}
              <em className="italic">valued tenants</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto mb-8" />
            <p className="text-base leading-relaxed text-[#4a4540]">
              As an East & West tenant, enjoy a curated selection of partner
              offers spanning dining, services, hospitality, and lifestyle —
              designed to enhance your living experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, index) => (
              <ScrollReveal key={cat.title} delay={index * 100}>
                <div className="bg-ewig-off-white p-10 lg:p-14 flex gap-6 group hover:bg-ewig-deep-sea transition-colors duration-500 h-full">
                  <cat.icon
                    size={32}
                    strokeWidth={1}
                    className="text-ewig-gold shrink-0"
                  />
                  <div>
                    <h3 className="font-heading text-xl font-extralight mb-3 group-hover:text-white transition-colors duration-500">
                      {cat.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4a4540] group-hover:text-white/90 transition-colors duration-500">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
