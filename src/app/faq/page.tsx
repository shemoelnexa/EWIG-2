"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which regions does East & West operate in?",
    answer: "We operate across Abu Dhabi, Al Ain, Dubai, and Sharjah, offering residential, commercial, and labour accommodation properties.",
  },
  {
    question: "What is the standard tenancy duration?",
    answer: "Standard tenancy contracts are for 12 months and are renewable upon agreement between both parties.",
  },
  {
    question: "What is the security deposit requirement?",
    answer: "The security deposit is 5% of the annual rent, with a minimum of AED 3,000. This is refundable at the end of the tenancy subject to the condition of the property.",
  },
  {
    question: "What are the early termination penalties?",
    answer: "For residential properties, the early termination penalty is 2 months' rent. For commercial properties, it is 3 months' rent.",
  },
  {
    question: "What is the municipality tax?",
    answer: "Municipality tax is 5% of the annual rent and is the tenant's responsibility to pay.",
  },
  {
    question: "Who is responsible for service fees?",
    answer: "Service fees are the landlord's responsibility.",
  },
  {
    question: "How often is repainting done?",
    answer: "Repainting is carried out every 2 years upon tenant request.",
  },
  {
    question: "How often is AC servicing performed?",
    answer: "AC servicing is performed every 3 months to ensure optimal performance and tenant comfort.",
  },
  {
    question: "Is subletting permitted?",
    answer: "No, subletting is not permitted as per RERA rules and regulations.",
  },
  {
    question: "What partner services are available?",
    answer: "Through DAS Holdings Group, tenants have access to Emirates International Facility Management, Tawasul Transport, Yas Healthcare, and Grove services.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ewig-seashell">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-heading text-lg font-extralight pr-8 group-hover:text-ewig-gold transition-colors">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-ewig-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-[#4a4540]">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Common Questions
          </p>
          <h1 className="font-heading font-extralight text-white">
            Frequently Asked <em className="italic">Questions</em>
          </h1>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
