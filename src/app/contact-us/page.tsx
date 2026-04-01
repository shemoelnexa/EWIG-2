"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const offices = [
  {
    city: "Abu Dhabi",
    address:
      "7th Floor, Office #703, Dusit Thani Complex, Sultan Bin Zayed The First St (Muroor Road), Opposite Al Jazira Club, P.O. Box 52444, Abu Dhabi, UAE",
    phone: "+971 2 207 2200",
    email: "ewig@ccsupport.ae",
    mapUrl: "https://maps.google.com/?q=24.455056,54.394674",
  },
  {
    city: "Dubai",
    address:
      "P9 Floor, Westburry Offices Tower, Marsai Drive St., opposite The St. Regis Downtown Dubai Hotel, Business Bay, Dubai, UAE",
    phone: "+971 2 207 2200",
    email: "ewig-dxb@ewp.ae",
    mapUrl: "https://maps.google.com/?q=25.1852,55.2619",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading font-extralight text-white">
            Contact <em className="italic">Us</em>
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
                  Reach Out
                </p>
                <h2 className="font-heading font-extralight leading-[1.1]">
                  We&apos;d love to <em className="italic">hear</em> from you
                </h2>
                <div className="w-[60px] h-px bg-ewig-gold mt-8 mb-10" />

                {/* Quick Contact */}
                <div className="space-y-6 mb-12">
                  <a
                    href="tel:600511122"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-ewig-beige flex items-center justify-center group-hover:bg-ewig-gold transition-colors duration-300">
                      <Phone
                        size={18}
                        className="text-ewig-gold group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a4540]">Toll Free</p>
                      <p className="text-sm font-medium">600 511122</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/971600511122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-ewig-beige flex items-center justify-center group-hover:bg-ewig-gold transition-colors duration-300">
                      <MessageCircle
                        size={18}
                        className="text-ewig-gold group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a4540]">WhatsApp</p>
                      <p className="text-sm font-medium">+971 600 511122</p>
                    </div>
                  </a>
                  <a
                    href="mailto:leasing@ewp.ae"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-ewig-beige flex items-center justify-center group-hover:bg-ewig-gold transition-colors duration-300">
                      <Mail
                        size={18}
                        className="text-ewig-gold group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a4540]">Leasing</p>
                      <p className="text-sm font-medium">leasing@ewp.ae</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-ewig-beige flex items-center justify-center">
                      <Clock size={18} className="text-ewig-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4a4540]">
                        Office Hours
                      </p>
                      <p className="text-sm font-medium">
                        Mon-Thu 8AM-4PM, Fri 8AM-12PM
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors appearance-none"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="leasing">Leasing Inquiry</option>
                        <option value="maintenance">Maintenance Request</option>
                        <option value="commercial">
                          Commercial Properties
                        </option>
                        <option value="general">General Inquiry</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-ewig-gold text-white px-10 py-4 text-sm uppercase tracking-[0.1em] hover:bg-ewig-deep-sea transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
              Our Offices
            </p>
            <h2 className="font-heading font-extralight">
              Visit <em className="italic">Us</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <ScrollReveal key={office.city} delay={index * 150}>
                <div className="bg-ewig-off-white p-8 lg:p-12 h-full">
                  <h3 className="font-heading text-2xl font-extralight mb-6">
                    {office.city}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 text-sm text-[#4a4540]">
                      <MapPin
                        size={18}
                        className="shrink-0 mt-0.5 text-ewig-gold"
                      />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex gap-3 text-sm text-[#4a4540]">
                      <Phone size={18} className="shrink-0 text-ewig-gold" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="hover:text-ewig-black transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex gap-3 text-sm text-[#4a4540]">
                      <Mail size={18} className="shrink-0 text-ewig-gold" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-ewig-black transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 text-xs uppercase tracking-[0.15em] text-ewig-black hover:text-ewig-gold transition-colors duration-300 border-b border-ewig-black hover:border-ewig-gold pb-1"
                  >
                    View on Map
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
