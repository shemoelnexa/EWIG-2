import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { letter: "R", word: "Reliability", description: "Delivering consistent, dependable service to every client" },
  { letter: "E", word: "Excellence", description: "Pursuing the highest standards in everything we do" },
  { letter: "S", word: "Service", description: "Putting our clients' needs at the heart of our operations" },
  { letter: "P", word: "Professionalism", description: "Conducting business with integrity and expertise" },
  { letter: "E", word: "Empowerment", description: "Enabling our team and clients to achieve their potential" },
  { letter: "C", word: "Caring", description: "Nurturing relationships with genuine concern and attention" },
  { letter: "T", word: "Teamwork", description: "Collaborating to deliver exceptional results together" },
];

const leadership = [
  { name: "Executive Board", role: "Strategic Direction & Governance" },
  { name: "Executive Committee", role: "Operational Oversight" },
  { name: "Risk Committee", role: "Risk Management & Mitigation" },
  { name: "Investment Committee", role: "Investment Strategy" },
  { name: "Audit & Compliance", role: "Regulatory Compliance" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.eastandwest.ae/images/1-470x660.jpg"
            alt="Abu Dhabi skyline"
            fill
            className="object-cover"
                    unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Since 1993
          </p>
          <h1 className="font-heading font-extralight text-white">
            About <em className="italic">East & West</em>
          </h1>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
                Our Vision
              </p>
              <h2 className="font-heading font-extralight leading-[1.1]">
                A world class <em className="italic">property management</em> company
              </h2>
              <div className="w-[60px] h-px bg-ewig-gold mt-8 mb-8" />
              <p className="text-base leading-relaxed text-[#4a4540]">
                To be a world class property management & real estate company in
                the UAE and the region, recognized for our commitment to
                exceptional service, innovative solutions, and sustainable
                practices.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
                Our Mission
              </p>
              <h2 className="font-heading font-extralight leading-[1.1]">
                Enhancing <em className="italic">value</em> & performance
              </h2>
              <div className="w-[60px] h-px bg-ewig-gold mt-8 mb-8" />
              <p className="text-base leading-relaxed text-[#4a4540]">
                To provide comprehensive, reliable, and cost-effective property
                management services that enhance the value and performance of
                our clients&apos; real estate assets. We are dedicated to
                delivering exceptional customer service, leveraging technology
                and best practices to optimize efficiency and transparency.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values - R.E.S.P.E.C.T */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeading
            subtitle="Our Values"
            title="R.E.S.P.E.C.T"
            highlight="R.E.S.P.E.C.T"
            description="Seven core values that guide everything we do"
          />
          <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {values.map((value, index) => (
              <ScrollReveal key={`${value.word}-${index}`} delay={index * 80}>
                <div className="bg-ewig-off-white p-6 lg:p-8 text-center group hover:bg-ewig-deep-sea transition-colors duration-500 h-full">
                  <span className="font-heading text-4xl lg:text-5xl font-extralight text-ewig-gold group-hover:text-white transition-colors duration-500">
                    {value.letter}
                  </span>
                  <h4 className="text-xs uppercase tracking-[0.1em] mt-4 mb-3 group-hover:text-white transition-colors duration-500">
                    {value.word}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#4a4540] group-hover:text-white/90 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
                Governance
              </p>
              <h2 className="font-heading font-extralight leading-[1.1]">
                Two-tiered <em className="italic">governance</em> structure
              </h2>
              <div className="w-[60px] h-px bg-ewig-gold mt-8 mb-8" />
              <p className="text-base leading-relaxed text-[#4a4540] mb-8">
                Our governance framework ensures accountability, transparency,
                and fairness across all operations through an Executive Board
                and specialized committees.
              </p>
              <div className="space-y-4">
                {leadership.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 py-4 border-b border-ewig-seashell"
                  >
                    <div className="w-2 h-2 bg-ewig-gold shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-xs text-[#4a4540]">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Corporate governance"
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

      {/* Award Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-ewig-deep-sea/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              Recognition
            </p>
            <h2 className="font-heading font-extralight text-white">
              Silver Award Winner
            </h2>
            <p className="mt-4 text-lg text-white/90">
              World Realty Congress 2024
            </p>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
