import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";

const abuDhabiProperties = [
  {
    title: "Dusit Thani Complex",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    href: "/properties/residential",
    tag: "654 Units",
  },
  {
    title: "Al Qurm Compound",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    href: "/properties/residential",
    tag: "3-4 Bedrooms",
  },
  {
    title: "The Hills Abu Dhabi",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    href: "/properties/residential",
    tag: "Pool & Kids Area",
  },
  {
    title: "Nasayem Saadiyat",
    location: "Saadiyat Island",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    href: "/properties/residential",
    tag: "Premium Living",
  },
  {
    title: "Al Arabiya Tower",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    href: "/properties/residential",
    tag: "3 Bedrooms",
  },
  {
    title: "E48",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    href: "/properties/residential",
    tag: "1-4 Bedrooms",
  },
  {
    title: "Al Mushrif 2 Villas",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    href: "/properties/residential",
    tag: "5BR, 7200 sq ft",
  },
  {
    title: "Seashore Villas",
    location: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    href: "/properties/residential",
    tag: "10 Villas",
  },
];

const dubaiProperties = [
  {
    title: "Westburry Residence Tower",
    location: "Business Bay, Dubai",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    href: "/properties/residential",
    tag: "Burj Khalifa Views",
  },
  {
    title: "Marina Gate 2",
    location: "Marsa Dubai",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    href: "/properties/residential",
    tag: "Waterfront",
  },
  {
    title: "East & West Villas",
    location: "Umm Suqaim 3, Dubai",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    href: "/properties/residential",
    tag: "3-4 Bedrooms",
  },
  {
    title: "Al Nahda 2",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    href: "/properties/residential",
    tag: "Pool & Gym",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Residential Properties"
            fill
            className="object-cover"
                    unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Apartments, Villas, Townhouses & Penthouses
          </p>
          <h1 className="font-heading font-extralight text-white">
            Residential <em className="italic">Properties</em>
          </h1>
        </div>
      </section>

      {/* Abu Dhabi Properties */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeading
            subtitle="Abu Dhabi"
            title="Abu Dhabi Properties"
            highlight="Properties"
            description="Our flagship portfolio in the UAE capital"
            align="left"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {abuDhabiProperties.map((property, index) => (
              <ScrollReveal key={property.title} delay={index * 80}>
                <PropertyCard {...property} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Properties */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeading
            subtitle="Dubai"
            title="Dubai Properties"
            highlight="Properties"
            description="Premium residences across Dubai's most sought-after neighborhoods"
            align="left"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dubaiProperties.map((property, index) => (
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
