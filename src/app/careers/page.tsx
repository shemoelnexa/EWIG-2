"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, Upload } from "lucide-react";

const departments = [
  "Accounting",
  "Administration",
  "Finance",
  "Human Resources",
  "Information Technology",
  "Legal",
  "Marketing",
  "Production",
  "Sales",
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Join Our Team
          </p>
          <h1 className="font-heading font-extralight text-white">
            Script Your Own <em className="italic">Growth</em> Story
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-xl font-light">
            Leap ahead in your career with East & West International Group
          </p>
        </div>
      </section>

      {/* HR Mission */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-6">
              Our HR Mission
            </p>
            <h2 className="font-heading font-extralight leading-[1.1]">
              Empowering <em className="italic">talent</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto mb-8" />
            <p className="text-base leading-relaxed text-[#4a4540]">
              Driven by our mission to provide superior services to our clients
              in the areas of Employee Relations, Manpower Planning, Learning &
              Development, Compensation & Benefits, and Emiratisation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 lg:py-40 bg-ewig-beige">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionHeading
            subtitle="Departments"
            title="Where You Can Grow"
            highlight="Grow"
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.map((dept, index) => (
              <ScrollReveal key={dept} delay={index * 60}>
                <div className="bg-ewig-off-white p-6 text-center group hover:bg-ewig-deep-sea transition-colors duration-500">
                  <Briefcase
                    size={20}
                    strokeWidth={1}
                    className="text-ewig-gold mx-auto mb-3"
                  />
                  <p className="text-sm group-hover:text-white transition-colors duration-500">
                    {dept}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
              Apply Now
            </p>
            <h2 className="font-heading font-extralight">
              Submit Your <em className="italic">Application</em>
            </h2>
            <div className="w-[60px] h-px bg-ewig-gold mt-8 mx-auto" />
          </ScrollReveal>

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
                    Email
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
                    Phone
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
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors appearance-none"
                    required
                  >
                    <option value="">Select department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                  Experience
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors appearance-none"
                  required
                >
                  <option value="">Years of experience</option>
                  <option value="0-1">0-1 Years</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5-7">5-7 Years</option>
                  <option value="7+">7+ Years</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full border-b border-ewig-seashell bg-transparent py-3 text-sm focus:outline-none focus:border-ewig-gold transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.1em] text-[#4a4540] mb-4">
                  Upload CV (PDF, DOC, DOCX)
                </label>
                <label className="inline-flex items-center gap-3 border border-dashed border-ewig-seashell px-8 py-4 cursor-pointer hover:border-ewig-gold transition-colors">
                  <Upload size={18} className="text-ewig-gold" />
                  <span className="text-sm text-[#4a4540]">
                    Choose File
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="bg-ewig-gold text-white px-10 py-4 text-sm uppercase tracking-[0.1em] hover:bg-ewig-deep-sea transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
