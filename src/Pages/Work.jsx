// src/pages/Work.jsx
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Branchselector from "/src/assets/Branch.png";
import Saloon from "/src/assets/Vrnsaloon.png";
import Nettrackrpic from "/src/assets/Net.png";
import Csg from "/src/assets/CSG-7.webp";
import Infotech from "/src/assets/VRN.png";
import Hotels from "/src/assets/VrnHOTELS.png";
/**

// local/shared hero image (uploaded asset)
const HERO_IMG = "";

/**
 * Work.jsx — Project detail page (multiple projects)
 *
 * Updated: Quick navigator now navigates to /work and passes project via location.state
 * so it works with your App routing (which exposes /work, not /projects/:id).
 *
 * - resolution order:
 *   1) props.project (if provided)
 *   2) location.state.project (when navigated from quick navigator)
 *   3) find by params.id (if you later add a param-based route)
 *   4) fallback to first project
 */

const PROJECTS = [
  {
    id: "proj-01",
    title: "VRN Saloon",
    summary:
      "VRN Saloon is a modern, user-friendly platform designed to simplify salon and grooming service bookings. Built with a clean and intuitive interface, it allows customers to explore services, view details, and book appointments seamlessly.",
    problem:"Traditional salons face several challenges that affect customer experience and business growth:Manual Bookings: Appointments are handled via phone calls or walk-ins, causing confusion and scheduling errors.Long Waiting Times: Customers often have to wait because there’s no transparent system to track availability.Poor Service Visibility: Clients cannot easily see available services, prices, or offers before visiting.Lack of Digital Presence: Many salons are not digitally accessible, resulting in missed customers and limited reach.No Data Tracking: Salons struggle to track customer history, preferences, peak hours, or popular services.",
    solution:
      "VRN Saloon provides a complete digital platform that streamlines bookings and enhances the overall salon experience.It transforms traditional salons into modern, efficient, customer-focused service providers by offering a seamless interface where users can explore services, check availability, and book appointments instantly.The platform helps salon owners reduce operational chaos, attract more online customers, and deliver faster, more organized service.",
    features: [
     "Service Showcase",
     "Appointment Scheduling",
     "Service Details",
     "Responsive Design",
     "Smooth Layout",
    ],
    tech: ["React", "Vercel"],
    screenshots: [Saloon],
    live: "https://vrnsaloon.vercel.app/",
    repo: "",
  },

  {
    id: "proj-02",
    title: "BranchSelector",
    summary:
      "Branch Selector is an AI-powered platform focused on helping students and career-seekers identify the academic or professional path that fits them best. Its core promise: “your guide to a successful career path.It offers a range of tests and assessments designed to help users understand their strengths, interests, and aptitudes — with a view to matching those with appropriate academic branches or career tracks.Through a simple user interface, students can access resources, assessment tools, and guidance tailored to their individual profiles — helping them make more informed decisions about their educational or career journey.",
    problem:
      "Many students — especially at critical decision points (e.g. after high school or during early college) — struggle to choose the right academic stream or career path. This uncertainty stems from several issues:Traditional guidance (parents, family, peers) is often subjective and may not take the student’s personality, strengths, or long-term goals into account.Lack of structured assessment: students rarely get a systematic way to gauge their interests, skills, aptitude, and how those map to various academic streams / career options.Overwhelm of choices: with many fields/branches available, students can find it difficult to compare and choose what really fits them.Risk of misalignment: choosing a branch or path that doesn’t suit one’s aptitude can lead to poor performance, dissatisfaction, or wasted time and resources.Thus there’s a clear need for a data-driven, personalized, structured approach to career guidance — rather than guesswork or anecdotal advice.",
    solution:
      "Branch Selector addresses this need by offering an AI-backed, assessment-based guidance platform that helps students make well-informed decisions about their academic and career path. By taking a suite of tests — designed to evaluate a user’s personality, strengths, interests, and aptitudes — the platform analyses and recommends academic branches or career paths that align with the student’s profile. This removes guesswork and helps guide people toward branches where they are more likely to succeed and feel motivated.Furthermore, by consolidating guidance, assessments, and resources in one place, Branch Selector provides a simple, intuitive way for students to explore options, compare branches, and understand which academic or career tracks best suit their unique profile. As a result, students (and their families) can feel more confident in their choices — reducing risk of mismatch, improving satisfaction, and potentially increasing long-term success.",
    features: [
      "AI-Powered Assessments",
      "Personalized Recommendations",
      "Easy-to-Use Interface",
      "Instant Result Analysis",
      "Centralized Guidance Platform",
    ],
    tech: ["React", "Node.js", "Firebase"],
    screenshots: ["/src/assets/Branch.png"],
    live: "https://www.branchselector.com/",
    repo: "https://github.com/you/branchselector",
  },

  {
    id: "proj-03",
    title: "Nettrackr",
    summary:
      "Nettrackr is a network monitoring dashboard that surfaces real-time metrics, alerts and historical logs.",
    problem:
      "Ops teams lacked an easy-to-use, lightweight dashboard to view key metrics and receive timely alerts.",
    solution:
      "Real-time charts, alerting rules, log viewer and role-based access using sockets and Firebase for notifications.",
    features: ["Realtime charts", "Alerting rules", "Log viewer", "RBAC"],
    tech: ["React", "Node.js", "Firebase"],
    screenshots: ["/src/assets/Net.png"],
    live: "https://nettrackr.vercel.app/",
    repo: "https://github.com/you/nettrackr",
  },

  {
    id: "proj-04",
    title: "CyberSafeGirl",
    summary:
      "Cyber Safe Girl is a digital-awareness and e-learning initiative aimed at promoting safe, responsible internet usage — especially for students, women, professionals and the elderly. The platform offers a library of animated “infotoons” (info + cartoons) and educational content to raise awareness about various cyber-threats and how individuals can protect their digital lives. .",
    problem:
      "The internet — while a powerful tool — exposes individuals to many dangers: scams, identity theft, privacy violations, cyber-stalking, social engineering, fake profiles, ransomware, phishing, and more. Many people, especially younger users or those new to digital spaces, don’t understand the various forms these threats take.Additionally, there’s a need for structured education and guidance in cyber-safety: many people are unaware about their rights under cyber-law, or about preventive practices.",
    solution:
      "Cyber Safe Girl addresses these issues by offering a comprehensive, user-friendly educational platform that makes cybersecurity and cyber-crime awareness accessible to everyone — not just tech experts. By combining animated infotoons, real-life scenarios, and legal explanations, the platform translates complex cyber security / cyber law concepts into easy-to-understand format.",
    features: ["Wide Coverage of Cyber Threats", "E-Learning Format for All", "Certification"],
    tech: ["Next.js", "Firebase", "Vercel"],
    screenshots: ["/src/assets/CSG-7.webp"],
    live: "https://cybersafegirl.com/",
    
  },

  {
    id: "proj-05",
    title: "VRN Infotech",
    summary:
      "Company site + services portal for VRN Infotech — modernized with service funnels and analytics.",
    problem:
      "Outdated corporate site with poor UX and no analytics-driven contact funnel.",
    solution:
      "Rebuilt the site with clear service pages, contact funnels, and analytics tracking to capture leads and measure conversions.",
    features: ["Service pages", "Contact funnels", "Analytics & tracking"],
    tech: ["React", "Node.js", "AWS"],
    screenshots: ["/src/assets/VRN.png"],
    live: "https://www.vrninfotech.com/",
    repo: "https://github.com/you/vrn-infotech",
  },

  {
    id: "proj-06",
    title: "VRN Hotels",
    summary:
      "Restaurant & hotel booking front-end prototype focusing on simplified booking flows and visual appeal.",
    problem:
      "Complex booking UI led to drop-offs and lost reservations.",
    solution:
      "Streamlined booking steps, added gallery and one-click reservation flows to reduce friction.",
    features: ["Simple booking flow", "Image gallery", "Menu management"],
    tech: ["React", "Firebase"],
    screenshots: ["/src/assets/VrnHOTELS.png"],
    live: "https://vrnrestaurant.vercel.app/",
    repo: "https://github.com/you/vrn-hotels",
  },
];

export default function Work({ project: propProject }) {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // resolution order:
  // 1) props.project (if provided)
  // 2) location.state.project (when navigated from quick navigator)
  // 3) find by params.id (deep link / direct visit) — only used if you later add param route
  // 4) fallback to first project
  const stateProject = location.state?.project;
  const projectId = params.id;
  const foundById = projectId ? PROJECTS.find((p) => p.id === projectId) : null;

  const project = propProject || stateProject || foundById || PROJECTS[0];

  // if user landed on an unknown id, optionally redirect to projects list:
  if (projectId && !foundById && !stateProject && !propProject) {
    // optional: redirect back to projects overview
    // navigate("/work");
    // For now we just show fallback (first project) and a small warning in UI (if you want)
  }

  return (
    <main className="min-h-screen bg-[#0f0b0b] text-[#e9e3e3] py-16">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Quick project navigator */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              /* navigate to /work and pass project in state so Work resolves it from location.state */
              onClick={() => navigate("/work", { state: { project: p } })}
              className={`text-left p-3 rounded-md border ${p.id === project.id ? "border-[#d89463] bg-white/5" : "border-white/6"} hover:border-[#d89463] transition`}
            >
              <div className="font-semibold">{p.title}</div>
              {/* show role/timeframe as the small subtitle */}
             
            </button>
          ))}
        </div>

        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
            <div className="mt-3 flex items-center gap-4 text-sm text-gray-300">
              <span className="px-3 py-1 rounded bg-white/6">{project.role}</span>
              <span className="px-3 py-1 rounded bg-white/6">{project.timeframe}</span>
            </div>

            <p className="mt-6 text-gray-300 leading-relaxed">{project.summary}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded bg-[#d89463] text-black font-semibold text-center"
                >
                  View Live
                </a>
              ) : null}

              

              <button
                onClick={() => navigate(-1)}
                className="inline-block px-4 py-2 rounded border border-white/10 text-white"
              >
                Back
              </button>
            </div>

            {project.problem && (
              <section className="mt-8">
                <h3 className="text-xl font-semibold text-white">Problem</h3>
                <p className="mt-2 text-gray-300">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="mt-6">
                <h3 className="text-xl font-semibold text-white">Solution</h3>
                <p className="mt-2 text-gray-300">{project.solution}</p>
              </section>
            )}

            {project.features && (
              <section className="mt-6">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="mt-3 list-disc list-inside space-y-2 text-gray-300">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.tech && (
              <section className="mt-6">
                <h3 className="text-xl font-semibold text-white">Tech & Tools</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span key={t} className="text-sm px-3 py-1 rounded bg-white/6">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right column: screenshots */}
          <aside>
            <div className="rounded-lg overflow-hidden bg-gray-900 shadow-lg">
              <img
                src={project.screenshots?.[0] || HERO_IMG}
                alt={`${project.title} screenshot`}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {(project.screenshots || []).slice(1).map((s, i) => (
                <div key={i} className="rounded-md overflow-hidden bg-gray-900">
                  <img src={s || HERO_IMG} alt={`${project.title} thumb ${i}`} className="w-full h-28 object-cover" />
                </div>
              ))}
            </div>

            

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Contact to hire</h4>
              <a href="https://wa.me/+919591178734" className="inline-block px-4 py-2 rounded bg-[#d89463] text-black font-semibold">
                Message on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      
     

      </div>
    </main>
  );
}
