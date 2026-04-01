import ScrollReveal from "@/components/ScrollReveal";

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <h1 className="font-heading font-extralight text-white">
            Legal <em className="italic">Information</em>
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Terms of Use */}
          <ScrollReveal>
            <div id="terms" className="mb-20">
              <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
                Legal
              </p>
              <h2 className="font-heading font-extralight mb-8">Terms of Use</h2>
              <div className="prose prose-sm text-[#4a4540] space-y-4">
                <p className="text-sm leading-relaxed">
                  Welcome to the East & West International Group website. By
                  accessing and using this website, you accept and agree to be
                  bound by these terms and conditions.
                </p>
                <p className="text-sm leading-relaxed">
                  The content of this website is for general information
                  purposes only. East & West International Group reserves the
                  right to modify these terms at any time. All property
                  information, pricing, and availability are subject to change
                  without notice.
                </p>
                <p className="text-sm leading-relaxed">
                  All intellectual property rights in the content of this
                  website, including but not limited to text, images, logos, and
                  graphics, are owned by East & West International Group or its
                  licensors.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Privacy Policy */}
          <ScrollReveal>
            <div id="privacy">
              <p className="text-xs uppercase tracking-[0.2em] text-ewig-gold mb-4">
                Legal
              </p>
              <h2 className="font-heading font-extralight mb-8">Privacy Policy</h2>
              <div className="prose prose-sm text-[#4a4540] space-y-4">
                <p className="text-sm leading-relaxed">
                  East & West International Group is committed to protecting
                  your privacy. This policy outlines how we collect, use, and
                  safeguard your personal information.
                </p>
                <p className="text-sm leading-relaxed">
                  We may collect personal information including your name, email
                  address, phone number, and other details when you submit forms
                  on our website or contact us directly.
                </p>
                <p className="text-sm leading-relaxed">
                  Your information is used to respond to inquiries, process
                  applications, and improve our services. We do not sell or
                  share your personal data with third parties except as
                  necessary to provide our services.
                </p>
                <p className="text-sm leading-relaxed">
                  For questions about our privacy practices, please contact us
                  at{" "}
                  <a
                    href="mailto:ewig@ccsupport.ae"
                    className="text-ewig-gold hover:text-ewig-deep-sea transition-colors"
                  >
                    ewig@ccsupport.ae
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
