// src/components/ContactCTA.jsx
import React from "react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail, FiExternalLink } from "react-icons/fi";
import resume from "/src/assets/Sathwik Kamath(Resume).pdf"
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

// background image uploaded to /mnt/data (keeps your original asset path)
const BG = "/mnt/data/75154ad3-c13d-41aa-b215-484f7d1887f0.png";

const CTA = styled(Link)`
  border: 1px solid ${ACCENT};
  color: ${ACCENT};
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  transition: background 180ms ease, color 180ms ease;
  background: transparent;

  &:hover {
    background: ${ACCENT};
    color: ${DARK_BG};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

/**
 * ContactCTA — call-to-action / social buttons section
 *
 * - Uses react-icons (FaWhatsapp, FaLinkedinIn, FaInstagram, FiMail)
 * - Replace the `href` values with your real links
 * - Drop this file at: src/components/ContactCTA.jsx
 * - Use <ContactCTA /> where you want the section to appear
 */
export default function ContactCTA() {
  const socials = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/+919591178734", // replace with wa.me/yourNumber (no + or dashes)
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <FaLinkedinIn className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/sathwik-kamath-99287b310/", // replace with your LinkedIn
    },
    {
      id: "email",
      label: "Email",
      icon: <FiMail className="w-6 h-6" />,
      href: "mailto:sathwikkamath31@gmail.com", // replace with your email
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/sathwik._31?igsh=MXI0YzdtNG12Nzgycw==", // replace with your Instagram
    },
  ];

  return (
    <section
      id="contact-cta"
      className="relative text-white py-20 px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: `url('${BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* subtle overlay to darken the background and match the site tone */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,11,12,0.9), rgba(17,11,12,0.85))",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Do you have any Project?{" "}
              <span className="text-[#d89463]">Let's Talk</span>
            </h2>

            

            <div className="mt-6 flex gap-3">
              <CTA to="/contact" className="inline-block bg-[#d89463] text-[#0f0b0b] px-5 py-3 rounded-md font-medium shadow-sm hover:opacity-95 transition">Let's Talk
               
               
                Hire Me
                </CTA>
             
              <a
                href={resume}
                download
                className="inline-block border border-white/20 text-white px-5 py-3 rounded-md hover:bg-white/5 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* social/service boxes */}
          <div className="pt-6 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-6 rounded-md border border-[#4a2f2f] hover:border-[#d89463] transition-colors bg-transparent"
                  aria-label={s.label}
                >
                  <div className="text-lg font-medium">{s.label}</div>

                  <div className="flex items-center gap-3 text-[#d89463]">
                    <span className="opacity-95">{s.icon}</span>
                    <FiExternalLink className="w-4 h-4 opacity-90" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
