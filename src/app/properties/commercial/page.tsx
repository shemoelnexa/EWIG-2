import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PropertyCard from "@/components/PropertyCard";

const commercialProperties = [
  {
    title: "Al Arabiya Tower",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    href: "/properties/commercial",
    tag: "68,013 sq ft",
  },
  {
    title: "Westburry Offices",
    location: "Business Bay, Dubai",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    href: "/properties/commercial",
    tag: "Downtown Views",
  },
  {
    title: "Defense Road Building",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    href: "/properties/commercial",
    tag: "Showroom & Offices",
  },
  {
    title: "Al Safiya Complex",
    location: "Deira, Dubai",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80",
    href: "/properties/commercial",
    tag: "13 Commercial Shops",
  },
  {
    title: "Mussafah Warehouse",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    href: "/properties/commercial",
    tag: "State of the Art",
  },
  {
    title: "Das Tower",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    href: "/properties/commercial",
    tag: "Office Space",
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Commercial Properties"
            fill
            className="object-cover"
                    unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Offices, Warehouses, Showrooms & Retail
          </p>
          <h1 className="font-heading font-extralight text-white">
            Commercial <em className="italic">Properties</em>
          </h1>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialProperties.map((property, index) => (
              <ScrollReveal key={property.title} delay={index * 80}>
                <PropertyCard {...property} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
