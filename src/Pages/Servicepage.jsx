// src/pages/Services.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

// decorative background (uploaded asset)
const BG = "/mnt/data/75154ad3-c13d-41aa-b215-484f7d1887f0.png";

/**
 * Services.jsx — Freelance plans with hosting & deployment breakdown
 *
 * - Same visual theme as previous design (dark + gold accent)
 * - Each plan shows:
 *   - Development price (one-time)
 *   - Deployment fee (one-time)
 *   - Hosting (annual)
 *   - Total Upfront (dev + deployment)
 *   - First Year Total (dev + deployment + hosting)
 *
 * Replace contact links (WhatsApp / mailto) with your real details.
 */

const HOSTING_COST_YEARLY = 2999; // ₹ per year (change if needed)
const DEPLOYMENT_FEE = 1999; // one-time deployment fee (upload, DNS, SSL, config)
const MAINTENANCE_MONTHLY = 1499; // optional monthly retainer for Pro (example)

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    devPrice: 7999,
    tagline: "Landing page or small brochure site",
    features: [
      "Responsive single-page or landing page",
      "Design + development",
      "Contact form & basic SEO",
      "1 free revision",
    ],
    ctaWa: "https://wa.me/+919591178734?text=Hi%2C%20I%27m%20interested%20in%20the%20Basic%20plan",
    ctaEmailSubject: "Enquiry%20-%20Basic%20Plan",
  },
  {
    id: "plus",
    name: "Plus",
    devPrice: 19999,
    tagline: "Small business site (5–10 pages)",
    features: [
      "Custom multi-page site",
      "CMS for content updates",
      "Analytics & SEO setup",
      "Payment or booking integration (optional)",
      "1 month complimentary support",
    ],
    recommended: true,
    ctaWa: "https://wa.me/+919591178734?text=Hi%2C%20I%27m%20interested%20in%20the%20Plus%20plan",
    ctaEmailSubject: "Enquiry%20-%20Plus%20Plan",
  },
  {
    id: "pro",
    name: "Pro",
    devPrice: 49999,
    tagline: "Complex apps, e-commerce & integrations",
    features: [
      "Full-stack app or e-commerce",
      "APIs & backend integrations",
      "Scaling, security & monitoring",
      "Performance audit & optimizations",
      "3 months priority support",
    ],
    ctaWa: "https://wa.me/+919591178734?text=Hi%2C%20I%27m%20interested%20in%20the%20Pro%20plan",
    ctaEmailSubject: "Enquiry%20-%20Pro%20Plan",
  },
];

function formatINR(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function Services() {
  return (
    <main
      className="w-full text-white py-20 px-6 lg:px-12"
      style={{
        backgroundImage: `url('${BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Services — freelance plans with hosting and deployment"
    >
      {/* overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(6,4,4,0.82), rgba(11,9,9,0.88))" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">Freelance Web Development Plans</h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Development + deployment + hosting — clear, honest pricing. Pick a plan and we’ll scope timelines after a brief.
          </p>
        </header>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-3 items-stretch">
          {PLANS.map((plan) => {
            const totalUpfront = plan.devPrice + DEPLOYMENT_FEE; // dev + deployment
            const firstYearTotal = totalUpfront + HOSTING_COST_YEARLY; // plus hosting for year 1
            const monthlyMaintenance = plan.id === "pro" ? MAINTENANCE_MONTHLY : null;

            return (
              <article
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between shadow-xl transform transition hover:-translate-y-1 ${
                  plan.recommended ? "border-2 border-[#d89463] bg-white/6" : "bg-white/4"
                }`}
                aria-labelledby={`${plan.id}-title`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#d89463] text-black">Recommended</span>
                  </div>
                )}

                <header className="mt-4">
                  <h2 id={`${plan.id}-title`} className="text-2xl font-semibold">{plan.name}</h2>
                  <p className="text-sm text-gray-300 mt-1">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-3">
                    <div className="text-3xl font-extrabold">{formatINR(plan.devPrice)}</div>
                    <div className="text-sm text-gray-300">development (one-time)</div>
                  </div>
                </header>

                <ul className="mt-6 space-y-3 text-gray-100">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-[#d89463]"><FaCheck /></span>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Charges breakdown */}
                <div className="mt-6 bg-white/6 p-4 rounded-lg text-sm text-gray-200">
                  <div className="flex justify-between">
                    <div>Development</div>
                    <div className="font-semibold">{formatINR(plan.devPrice)}</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div>Deployment (one-time)</div>
                    <div className="font-semibold">{formatINR(DEPLOYMENT_FEE)}</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div>Hosting (first year)</div>
                    <div className="font-semibold">{formatINR(HOSTING_COST_YEARLY)}</div>
                  </div>

                  {monthlyMaintenance && (
                    <div className="flex justify-between mt-2">
                      <div>Maintenance (optional)</div>
                      <div className="font-semibold">{formatINR(monthlyMaintenance)}/mo</div>
                    </div>
                  )}

                  <hr className="my-3 border-white/10" />

                  <div className="flex justify-between text-sm">
                    <div>Total upfront</div>
                    <div className="font-bold">{formatINR(totalUpfront)}</div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <div>First year (incl. hosting)</div>
                    <div className="font-bold">{formatINR(firstYearTotal)}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={plan.ctaWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full px-4 py-3 rounded-md font-semibold ${plan.recommended ? "bg-[#d89463] text-black" : "bg-white/6 text-white"} hover:opacity-95 transition`}
                  >
                    Hire — {plan.name}
                  </a>

                  <a
                    href={`mailto:sathwikkamath31@gmail.com?subject=${plan.ctaEmailSubject}&body=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan.%20Please%20share%20details.`}
                    className="mt-3 block w-full text-center px-4 py-2 rounded-md border border-white/8 text-sm text-gray-200 hover:bg-white/5 transition"
                  >
                    Contact via Email
                  </a>

                  <div className="mt-4 text-xs text-gray-300">
                    <div>Estimated delivery: <strong>{plan.id === "pro" ? "4–8 weeks" : plan.id === "plus" ? "2–4 weeks" : "3–7 days"}</strong></div>
                    <div className="mt-1">Payments: 50% upfront, 40% on milestone, 10% on delivery (negotiable)</div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <footer className="mt-10 text-center text-gray-300">
          <p>
            Not sure which plan fits? <button className="text-[#d89463] underline" onClick={() => window.location.href = "/contact"}>Contact me</button> for a free scope call and exact quote.
          </p>
        </footer>
      </div>

      <style>{`
        main { position: relative; }
      `}</style>
    </main>
  );
}
