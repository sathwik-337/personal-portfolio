// src/components/Services.jsx
import React from "react";
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiShoppingCart,
} from "react-icons/fi";

export default function Services() {
  const SERVICES = [
    {
      id: 1,
      title: "Custom Website Development",
      desc: "Modern, responsive and high-performance websites built using React, Next.js and clean UI practices.",
      icon: <FiCode className="text-[#d89463] w-14 h-14" />,
    },
    {
      id: 2,
      title: "UI / UX Design",
      desc: "User-centric design focused on clarity, usability and brand experience with clean visual layouts.",
      icon: <FiLayers className="text-[#d89463] w-14 h-14" />,
    },
    {
      id: 3,
      title: "Full-Stack Applications",
      desc: "Complete end-to-end applications with secure backend, APIs, authentication and admin dashboards.",
      icon: <FiSmartphone className="text-[#d89463] w-14 h-14" />,
    },
    
  ];

  return (
    <section
      className="w-full py-20 px-6 md:px-12"
      style={{ background: "#3b2a2d", color: "#fff" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-left"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Services
        </h2>

        <div className="h-1 w-24 mt-3 rounded-full bg-[#d89463]" />

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 rounded-xl bg-[#2e2324] shadow-lg 
              hover:border-[#d89463] hover:scale-[1.03] 
              border border-transparent transition-all duration-300
              flex flex-col items-center text-center gap-4"
            >
              {srv.icon}

              <h3 className="text-xl font-semibold text-[#d89463]">
                {srv.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
