import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BG = "/mnt/data/75154ad3-c13d-41aa-b215-484f7d1887f0.png";

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{ background: "linear-gradient(180deg,#241c1d,#0f0b0b)" }}
    >
      {/* Decorative faded BG */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('${BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT SECTION */}
          <div>
            <h3 className="text-2xl font-bold">Sathwik Kamath</h3>
            <p className="mt-3 text-gray-300 max-w-sm">
              Full-Stack developer building modern web apps — React, Node.js,
              Next.js, and cloud-based solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/sathwik-kamath-99287b310"
                target="_blank"
                className="p-3 rounded-md bg-white/6 hover:bg-white/10 transition"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sathwik._31"
                target="_blank"
                className="p-3 rounded-md bg-white/6 hover:bg-white/10 transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/+919591178734"
                target="_blank"
                className="p-3 rounded-md bg-white/6 hover:bg-white/10 transition"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sathwik-337"
                target="_blank"
                className="p-3 rounded-md bg-white/6 hover:bg-white/10 transition"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* MIDDLE SECTION — Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#d89463]">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/work" className="hover:text-[#d89463]">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/service" className="hover:text-[#d89463]">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#d89463]">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Contact */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-gray-300 text-sm">sathwikkamath31@gmail.com</p>
              <p className="text-gray-300 text-sm">+91 95911 78734</p>
            </div>
          </div>

          {/* RIGHT SECTION — Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-[#d89463]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#d89463]">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Moving disclaimer */}
            <div className="mt-6 text-xs text-gray-400">
              <div style={{ overflow: "hidden" }}>
                <div
                  className="moving-disclaimer whitespace-nowrap"
                  style={{ transformOrigin: "left" }}
                >
                  © {new Date().getFullYear()} Sathwik Kamath — All rights
                  reserved • Freelance Web Developer • UI / UX • React • Node.js
                  • Deployment & Hosting • Privacy First
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-8 border-t border-white/6 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Sathwik Kamath. All rights reserved.
          </div>
          <div>
            Designed & built by Sathwik •{" "}
            <Link to="/terms" className="hover:text-[#d89463]">
              Terms
            </Link>{" "}
            •{" "}
            <Link to="/privacy" className="hover:text-[#d89463]">
              Privacy
            </Link>
          </div>
        </div>
      </div>

      {/* Moving text animation */}
      <style>{`
        .moving-disclaimer {
          display: inline-block;
          padding-left: 100%;
          animation: moveText 18s linear infinite;
        }
        @keyframes moveText {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .moving-disclaimer { animation: none; }
        }
      `}</style>
    </footer>
  );
}
