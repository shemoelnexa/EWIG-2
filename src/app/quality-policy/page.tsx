import ScrollReveal from "@/components/ScrollReveal";
import { Award, ShieldCheck, Leaf, AlertTriangle, Phone } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description: "Certified by QA International since January 5, 2016",
  },
  {
    icon: ShieldCheck,
    title: "ISO 45001:2015",
    subtitle: "Occupational Health & Safety",
    description: "Ensuring the highest workplace safety standards",
  },
  {
    icon: Leaf,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    description: "Certificate No. QAICME231081078",
  },
];

export default function QualityPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            We make quality a habit
          </p>
          <h1 className="font-heading font-extralight text-white">
            Quality <em className="italic">Policy</em>
          </h1>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              Our Commitment
            </p>
            <h2 className="font-heading font-extralight leading-[1.1]">
              We make quality a habit.{" "}
              <em className="italic">Every time. Every day.</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto mb-8" />
            <p className="text-base leading-relaxed text-[#4a4540]">
              East & West International Group is deeply committed to maintaining
              the highest standards of Quality, Health, Safety, and
              Environmental management across all operations and managed
              properties.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
              Triple ISO Certified
            </p>
            <h2 className="font-heading font-extralight">
              Our <em className="italic">Certifications</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.title} delay={index * 150}>
                <div className="bg-ewig-off-white p-10 lg:p-14 text-center h-full">
                  <cert.icon
                    size={36}
                    strokeWidth={1}
                    className="text-ewig-gold mx-auto mb-6"
                  />
                  <h3 className="font-heading text-xl font-extralight mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.1em] text-ewig-gold mb-4">
                    {cert.subtitle}
                  </p>
                  <p className="text-sm text-[#4a4540] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* QHSE */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              QHSE Policy
            </p>
            <h2 className="font-heading font-extralight leading-[1.1] mb-8">
              Quality, Health, Safety &{" "}
              <em className="italic">Environment</em>
            </h2>
            <p className="text-base leading-relaxed text-[#4a4540]">
              We are deeply committed to maintaining the highest standards of
              Quality, Health, Safety, and Environmental management. Our target
              is zero accidents and minimizing environmental impact across all
              operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Fraud Reporting */}
      <section className="py-16 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-ewig-off-white">
              <AlertTriangle
                size={28}
                strokeWidth={1}
                className="text-ewig-gold shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-heading text-lg font-extralight mb-1">
                  Fraud Risk Reporting
                </h4>
                <p className="text-sm text-[#4a4540]">
                  Report concerns to DAS Holdings Group
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="mailto:risk@dasholding.ae"
                  className="text-sm text-ewig-gold hover:text-ewig-deep-sea transition-colors"
                >
                  risk@dasholding.ae
                </a>
                <a
                  href="tel:+97124499884"
                  className="flex items-center gap-2 text-sm text-[#4a4540] hover:text-ewig-black transition-colors"
                >
                  <Phone size={14} />
                  +971 2 449 9884
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
