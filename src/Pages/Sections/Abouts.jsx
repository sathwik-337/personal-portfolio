// src/components/About.jsx
import React, { useEffect, useRef, useState } from "react";

// import your five icons from assets (adjust filenames if different)
import icon1 from "../../assets/mongodb.png";
import icon2 from "../../assets/express.png";
import icon3 from "../../assets/React.png";
import icon4 from "../../assets/node-js.png";
import icon5 from "../../assets/python.png";

export default function About() {
  const rootRef = useRef(null);
  const [visibleMap, setVisibleMap] = useState({});

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const timeline = [
    {
      id: "bca",
      type: "education",
      title: "Graduation — BCA",
      subtitle: "St Aloysius (Deemed to be University)",
      period: "2023 — 2026",
      details:
        "Graduated with a Bachelor of Computer Applications (BCA). Built multiple software projects in JS, databases and web development.",
    },
    {
      id: "intern1",
      type: "work",
      title: "Frontend Intern",
      subtitle: "Tor Secure",
      period: "March 2025 — June 2025",
      details: "Worked on projects like CyberSafeGirl, BranchSelector, Nettrackr",
    },
    {
      id: "intern2",
      type: "work",
      title: "Full-Stack Intern",
      subtitle: "VRN Infotech",
      period: "Oct 2025 — Nov 2025",
      details: "Building Company's Official Websites VRN Infotech, VRN Hotels",
    },
  ];

  // Intersection observer only controls timeline reveal now
  useEffect(() => {
    if (prefersReducedMotion) {
      const map = {};
      timeline.forEach((t) => (map[t.id] = true));
      setVisibleMap(map);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        setVisibleMap((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("data-id");
            if (entry.isIntersecting && id) next[id] = true;
          });
          return next;
        });
      },
      { threshold: 0.18 }
    );

    const el = rootRef.current;
    if (!el) return;

    el.querySelectorAll("[data-id]").forEach((it) => obs.observe(it));

    return () => obs.disconnect();
  }, [prefersReducedMotion, timeline]);

  return (
    <section
      id="about"
      ref={rootRef}
      data-role="about-root"
      className="relative w-full py-20 px-6 md:px-8 lg:px-12 text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #241c1d, #3b2a2d)", // NEW BACKGROUND
      }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN */}
        <aside className="space-y-6" data-role="skills">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Hello, I’m Sathwik Kamath</h1>

            <p className="text-[#d8cccc] mt-3">
              Full-Stack Developer who builds modern, clean and scalable web applications. Passionate about UI/UX and backend engineering.
            </p>

            <p className="text-[#d8cccc] mt-3">
              I work across multiple technologies like React, Node.js, Express, and databases such as MongoDB or SQL, ensuring seamless communication between client and server. I focus on performance, scalability, and clean architecture, allowing me to design, develop, deploy, and maintain end-to-end digital solutions with efficiency and reliability.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                className="inline-block border border-[#d89463] text-[#d89463] px-5 py-2 rounded hover:bg-[#d89463] hover:text-[#0f0b0b] transition"
                href="/src/assets/Sathwik Kamath(Resume).pdf"
                download
              >
                Download CV
              </a>
              <a className="inline-block bg-white/10 text-white px-5 py-2 rounded hover:bg-white/20 transition" href="/contact">
                Contact
              </a>
            </div>
          </div>

          {/* ------- REPLACED: progress bars -> icons ------- */}
          <div className="mt-4 grid grid-cols-5 gap-4 justify-items-center items-center">
            <img src={icon1} alt="skill icon 1" className="w-12 h-12" />
            <img src={icon2} alt="skill icon 2" className="w-12 h-12" />
            <img src={icon3} alt="skill icon 3" className="w-12 h-12" />
            <img src={icon4} alt="skill icon 4" className="w-12 h-12" />
            <img src={icon5} alt="skill icon 5" className="w-12 h-12" />
          </div>

          {/* SMALL COUNTERS */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg bg-white/10 text-center">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm text-[#dccccc]">Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-white/10 text-center">
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-[#dccccc]">Internships</div>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN — TIMELINE */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Education & Experience</h2>

          <ul className="space-y-6">
            {timeline.map((item, idx) => {
              const visible = !!visibleMap[item.id];
              return (
                <li key={item.id} data-id={item.id}>
                  <article
                    className={`p-6 rounded-xl bg-white/10 shadow-md transition-all duration-500 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } hover:scale-[1.01] hover:bg-white/20`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-[#e0d3d3]">{item.subtitle}</p>
                      </div>
                      <div className="text-sm text-[#d89463]">{item.period}</div>
                    </div>

                    <p className="text-[#d9cfcf] mt-3">{item.details}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
