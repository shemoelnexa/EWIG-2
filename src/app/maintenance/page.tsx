import ScrollReveal from "@/components/ScrollReveal";
import { Phone, MessageCircle, Wrench, Droplets, Zap, Wind, Leaf, Shield, Clock } from "lucide-react";

const services = [
  { icon: Wrench, title: "Mechanical", description: "HVAC, plumbing fixtures, and mechanical systems" },
  { icon: Zap, title: "Electrical", description: "Wiring, fixtures, lighting, and power systems" },
  { icon: Droplets, title: "Plumbing", description: "Water supply, drainage, and sanitation" },
  { icon: Leaf, title: "Landscaping", description: "Garden maintenance and outdoor areas" },
  { icon: Shield, title: "Pest Control", description: "Regular treatments and emergency response" },
  { icon: Wind, title: "AC Servicing", description: "Quarterly maintenance and emergency repairs" },
];

export default function MaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            24/7 Support
          </p>
          <h1 className="font-heading font-extralight text-white">
            Maintenance <em className="italic">Services</em>
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-xl font-light">
            Call here and book your request. Get quick resolutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="tel:600511122"
              className="inline-flex items-center gap-3 bg-ewig-gold text-white px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-ewig-black transition-colors duration-300"
            >
              <Phone size={16} />
              600 511122
            </a>
            <a
              href="https://wa.me/971600511122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-ewig-black transition-colors duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-16 lg:mb-24">
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
              Our Services
            </p>
            <h2 className="font-heading font-extralight">
              Comprehensive <em className="italic">Facility</em> Management
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#4a4540] max-w-xl mx-auto">
              Powered by Emirates International Facility Management LLC, our
              dedicated teams ensure the highest standards of maintenance across
              all managed properties.
            </p>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="bg-ewig-beige p-10 group hover:bg-ewig-deep-sea transition-colors duration-500 h-full">
                  <service.icon
                    size={28}
                    strokeWidth={1}
                    className="text-ewig-gold mb-6"
                  />
                  <h3 className="font-heading text-xl font-extralight mb-3 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4540] group-hover:text-white/90 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-ewig-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Clock size={48} strokeWidth={1} className="text-ewig-gold mx-auto mb-8" />
            <h2 className="font-heading font-extralight text-white leading-[1.1]">
              Available <em className="italic">24/7</em>
            </h2>
            <p className="mt-6 text-base text-white/90 max-w-lg mx-auto leading-relaxed">
              Emergency night service available. Our maintenance team is always
              ready to assist with urgent requests around the clock.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="tel:600511122"
                className="inline-flex items-center gap-3 bg-ewig-gold text-white px-10 py-4 text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-ewig-black transition-colors duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="https://customerportal.ewp.ae/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-10 py-4 text-sm uppercase tracking-[0.1em] hover:bg-white hover:text-ewig-black transition-colors duration-300"
              >
                Customer Portal
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
