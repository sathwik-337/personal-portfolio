// src/components/Modules.jsx
import React, { useEffect, useRef, useState } from "react";
import Branchselector from "/src/assets/Branch.png";
import Saloon from "/src/assets/Vrnsaloon.png";
import Nettrackrpic from "/src/assets/Net.png";
import Csg from "/src/assets/CSG-7.webp";
import Infotech from "/src/assets/VRN.png";
import Hotels from "/src/assets/VrnHOTELS.png";
/**
 * Modules.jsx — theme-matched carousel
 * Desktop view unchanged; mobile calculation fixed to avoid jump-to-last behaviour.
 */

// default image (uploaded asset). Use this path or replace per-item.


export const MODULES_DATA = [
  { id: "proj-01", title: "VRN Saloon", subtitle: "React js", img: {Saloon}, link: "/projects/https://vrnsaloon.vercel.app" },
  { id: "proj-02", title: "BranchSelector", subtitle: "React js ,Node.js", img: {Branchselector}, link: "https://www.branchselector.com/" },
  { id: "proj-03", title: "Nettrackr", subtitle: "React js,Node,Firebase", img:{Nettrackrpic}, link: "https://nettrackr.vercel.app/" },
  { id: "proj-04", title: "CyberSafeGirl", subtitle: "Nextjs,Firebase", img: {Csg}, link: "https://cybersafegirl.com/" },
  { id: "proj-05", title: "VRN Infotech", subtitle: "Node.js ,AWS ,React", img: {Infotech}, link: "https://www.vrninfotech.com/" },
  { id: "proj-06", title: "VRN Hotels", subtitle: "React js", img: {Hotels}, link: "https://vrnrestaurant.vercel.app/" },
];

export default function Modules({ items }) {
  const slides = (items && items.length > 0) ? items : MODULES_DATA;

  const containerRef = useRef(null);
  const [index, setIndex] = useState(0); // current start index
  const [perView, setPerView] = useState(4);

  // touch support
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  // responsive perView (desktop behavior preserved)
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= 1280) setPerView(4);
      else if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // compute maxIndex based on perView (same logic as before)
  const maxIndex = Math.max(0, slides.length - perView);

  // clamp index when perView or slides length change to avoid jumps
  useEffect(() => {
    setIndex((cur) => {
      if (cur > maxIndex) return maxIndex;
      if (cur < 0) return 0;
      return cur;
    });
  }, [maxIndex, slides.length, perView]);

  // single-step handlers
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  // touch handlers for swipe
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = touchStartX.current;
  }
  function onTouchMove(e) {
    touchCurrentX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    const dx = touchStartX.current - touchCurrentX.current;
    const threshold = 40;
    if (dx > threshold) handleNext();
    else if (dx < -threshold) handlePrev();
  }

  // --- layout math: keep desktop exactly the same (perView > 1),
  // but use safer calculation when perView === 1 (mobile) to avoid jump.
  let containerStyle = {};
  let childWidthPercent = 0;
  let transformStyle = "";

  if (perView === 1) {
    // Mobile-safe calculation:
    // Container: slides.length * 100%
    // Child: 100 / slides.length %
    // Translate uses calc() to avoid fractional pixel rounding issues
    containerStyle.width = `${slides.length * 100}%`;
    childWidthPercent = 100 / slides.length;
    // Translate in percent of the full container width:
    transformStyle = `translateX(calc(-${index * (100 / slides.length)}%))`;
  } else {
    // Desktop/tablet: keep original behaviour unchanged
    const slideWidthPercent = 100 / perView;
    containerStyle.width = `${(slides.length * 100) / perView}%`;
    childWidthPercent = slideWidthPercent;
    transformStyle = `translateX(${-(index * slideWidthPercent)}%)`;
  }

  return (
    <main className="w-full" style={{ background: "#3b2a2d", color: "#fff", paddingTop: 48, paddingBottom: 48 }}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}>Projects</h2>
        </div>

        {/* Carousel */}
        <div className="relative" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{
                ...containerStyle,
                transform: transformStyle,
              }}
              aria-live="polite"
            >
              {slides.map((s) => (
                <div
                  key={s.id}
                  className="px-2"
                  style={{ width: `${childWidthPercent}%`, boxSizing: "border-box" }}
                >
                  {/* Card (clickable if s.link provided) */}
                  {s.link ? (
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden group relative" style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          borderRadius: 14,
                          background: "#2f2425",
                          padding: 18,
                          minHeight: 260,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                        }}
                      >
                        <div className="w-full flex-shrink-0 rounded-md overflow-hidden bg-gray-800" style={{ height: 140 }}>
                          <img
                            src={s.img || DEFAULT_IMG}
                            alt={s.title}
                            className="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        <div className="mt-4 text-left text-white">
                          <div className="font-semibold text-lg">{s.title}</div>
                          <div className="text-sm text-gray-300 mt-1">{s.subtitle}</div>
                        </div>

                      </div>
                    </a>
                  ) : (
                    <div className="rounded-xl overflow-hidden group relative" style={{
                      borderRadius: 14,
                      background: "#2f2425",
                      padding: 18,
                      minHeight: 260,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                    }}>
                      <div className="w-full flex-shrink-0 rounded-md overflow-hidden bg-gray-800" style={{ height: 140 }}>
                        <img
                          src={s.img || DEFAULT_IMG}
                          alt={s.title}
                          className="w-full h-full object-cover transform transition-transform duration-400 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="mt-4 text-left text-white">
                        <div className="font-semibold text-lg">{s.title}</div>
                        <div className="text-sm text-gray-300 mt-1">{s.subtitle}</div>
                      </div>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Arrows positioned slightly outside */}
          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            disabled={index === 0}
            className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white rounded-full shadow-md ${index === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
            style={{
              left: "-26px",
              width: 46,
              height: 46,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: 22, lineHeight: 1 }}>‹</span>
          </button>

          <button
            aria-label="Next slide"
            onClick={handleNext}
            disabled={index === maxIndex}
            className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-white rounded-full shadow-md ${index === maxIndex ? "opacity-40 cursor-not-allowed" : ""}`}
            style={{
              right: "-26px",
              width: 46,
              height: 46,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: 22, lineHeight: 1 }}>›</span>
          </button>

          {/* navigation groups/dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
              <button
                key={dot}
                onClick={() => setIndex(dot)}
                aria-label={`Go to group ${dot + 1}`}
                className={`w-3 h-3 rounded-full ${dot === index ? "bg-[#d89463]" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
