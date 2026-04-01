import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Zap, Car, ShoppingBag, UtensilsCrossed } from "lucide-react";

const spaces = [
  {
    icon: ShoppingBag,
    title: "Retail Spaces",
    description: "Premium storefronts in a high-footfall shopping destination",
  },
  {
    icon: UtensilsCrossed,
    title: "F&B Outlets",
    description: "Restaurant and cafe spaces designed for culinary experiences",
  },
  {
    icon: Zap,
    title: "EV Charging",
    description: "Electric car charging stations for the modern consumer",
  },
  {
    icon: Car,
    title: "Easy Parking",
    description: "Ample, convenient parking for customers and tenants",
  },
];

export default function SquarePlazaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1920&q=80"
            alt="The Square Plaza"
            fill
            className="object-cover"
                    unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Now Leasing — Baniyas, Abu Dhabi
          </p>
          <h1 className="font-heading font-extralight text-white">
            The Square <em className="italic">Plaza</em>
          </h1>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
                A New Destination
              </p>
              <h2 className="font-heading font-extralight leading-[1.1]">
                Restaurants, stores & retail{" "}
                <em className="italic">under one roof</em>
              </h2>
              <div className="w-[60px] h-px bg-ewig-gold mt-8 mb-8" />
              <p className="text-base leading-relaxed text-[#4a4540] mb-4">
                The Square Plaza is a new retail and dining destination in the
                Baniyas area of Abu Dhabi, bringing together a curated mix of
                restaurants, retail stores, and kiosks in a modern, accessible
                setting.
              </p>
              <p className="text-base leading-relaxed text-[#4a4540]">
                With anchor tenant Select Market and spaces designed for a
                premium retail experience, The Square Plaza is set to become a
                community landmark.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 mt-10 bg-ewig-gold text-white px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-ewig-deep-sea transition-colors duration-300"
              >
                Secure Your Spot
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="The Square Plaza interior"
                  fill
                  className="object-cover"
                    unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Available Spaces */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
              What We Offer
            </p>
            <h2 className="font-heading font-extralight">
              Available <em className="italic">Spaces</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {spaces.map((space, index) => (
              <ScrollReveal key={space.title} delay={index * 100}>
                <div className="bg-ewig-off-white p-8 text-center group hover:bg-ewig-deep-sea transition-colors duration-500 h-full">
                  <space.icon
                    size={28}
                    strokeWidth={1}
                    className="text-ewig-gold mx-auto mb-6"
                  />
                  <h3 className="font-heading text-lg font-extralight mb-3 group-hover:text-white transition-colors duration-500">
                    {space.title}
                  </h3>
                  <p className="text-sm text-[#4a4540] group-hover:text-white/90 transition-colors duration-500">
                    {space.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-ewig-black/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-extralight text-white leading-[1.1]">
              Secure your spot today and join us in this{" "}
              <em className="italic text-ewig-gold">changing landscape</em>
            </h2>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 mt-10 bg-ewig-gold text-white px-10 py-4 text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-ewig-black transition-colors duration-300"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
