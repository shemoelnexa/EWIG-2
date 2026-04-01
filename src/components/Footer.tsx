"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Residential", href: "/properties/residential" },
  { label: "Commercial", href: "/properties/commercial" },
  { label: "The Square Plaza", href: "/the-square-plaza" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "Quality Policy", href: "/quality-policy" },
  { label: "24/7 Maintenance", href: "/maintenance" },
  { label: "Tenant Benefits", href: "/tenant-benefits" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0b09]">
      <style jsx global>{`
        /* Footer link animated underline */
        .footer-link-underline {
          position: relative;
          display: inline-block;
        }
        .footer-link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #94a901;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-link-underline:hover::after {
          width: 100%;
        }

        /* Social icon hover */
        .social-icon-hover {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .social-icon-hover:hover {
          transform: scale(1.15);
          color: #94a901 !important;
        }

        /* Contact row hover shift */
        .contact-row-hover {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-row-hover:hover {
          transform: translateX(4px);
        }

        /* Gradient top border */
        .footer-gradient-border {
          position: relative;
        }
        .footer-gradient-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(148, 169, 1, 0.2) 50%,
            transparent 100%
          );
        }
      `}</style>

      {/* Subtle gradient top border */}
      <div className="footer-gradient-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="East & West International Group"
                  width={160}
                  height={49}
                  className="h-11 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-xs">
                Leading Integrated Real Estate Group in the UAE since 1993.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/East-West-International-Group-103804441028858/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-white/50" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://www.instagram.com/eastandwest_int_grp/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-white/50" aria-label="Instagram"><InstagramIcon /></a>
                <a href="https://www.youtube.com/channel/UCUoQzzscZdJEnZ07uhN9G-Q/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-white/50" aria-label="YouTube"><YoutubeIcon /></a>
                <a href="https://www.linkedin.com/company/east-west-international-group/" target="_blank" rel="noopener noreferrer" className="social-icon-hover text-white/50" aria-label="LinkedIn"><LinkedinIcon /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-ewig-gold mb-6 font-medium">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link-underline text-[14px] text-white/60 hover:text-white transition-colors duration-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-ewig-gold mb-6 font-medium">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link-underline text-[14px] text-white/60 hover:text-white transition-colors duration-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-ewig-gold mb-6 font-medium">Contact</h4>
              <ul className="space-y-4">
                <li className="contact-row-hover flex gap-3 text-[14px] text-white/60">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-ewig-gold/70" />
                  <span>7th Floor, Dusit Thani Complex, Muroor Road, Abu Dhabi, UAE</span>
                </li>
                <li className="contact-row-hover flex gap-3 text-[14px] text-white/60">
                  <Phone size={16} className="shrink-0 text-ewig-gold/70" />
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:600511122" className="hover:text-white transition-colors">600 511122</a>
                    <a href="tel:+97122072200" className="hover:text-white transition-colors">+971 2 207 2200</a>
                  </div>
                </li>
                <li className="contact-row-hover flex gap-3 text-[14px] text-white/60">
                  <Mail size={16} className="shrink-0 text-ewig-gold/70" />
                  <a href="mailto:leasing@ewp.ae" className="hover:text-white transition-colors">leasing@ewp.ae</a>
                </li>
                <li className="contact-row-hover flex gap-3 text-[14px] text-white/60">
                  <Clock size={16} className="shrink-0 text-ewig-gold/70" />
                  <span>Mon–Thu 8AM–4PM, Fri 8AM–12PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/50">&copy; {new Date().getFullYear()} East & West International Group. All rights reserved.</p>
          <div className="flex gap-6 text-[11px] text-white/50">
            <Link href="/legal" className="footer-link-underline hover:text-white/90 transition-colors">Terms of Use</Link>
            <Link href="/legal" className="footer-link-underline hover:text-white/90 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
