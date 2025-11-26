// src/pages/Terms.jsx
import React from "react";
import { Link } from "react-router-dom";

const UPDATED = "November 26, 2025";

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0f0b0b] text-[#e9e3e3] py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap');
        .terms-container { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .terms-title { font-family: 'Poppins', sans-serif; }
        .terms-article h2 { font-family: 'Poppins', sans-serif; color: #fff; }
        .terms-article p, .terms-article li { color: #d9d1d1; line-height: 1.6; }
        .accent { color: #d89463; }
        .muted { color: #bfb3b3; }
        .prose { max-width: none; }
      `}</style>

      <div className="max-w-[1100px] mx-auto px-6 terms-container">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold terms-title">Terms & Conditions — Freelance Services</h1>
          <p className="muted mt-2">Last updated: <strong className="accent">{UPDATED}</strong></p>
          <p className="muted mt-3">
            These terms govern the provision of freelance web development and related services by <strong className="accent">Sathwik
            Kamath</strong> (the "Freelancer"). By commissioning work, paying a deposit, or otherwise instructing the Freelancer you
            accept these Terms.
          </p>
        </header>

        <article className="terms-article prose">
          <section className="mb-6">
            <h2 className="text-xl font-semibold">1. Services, Proposals & Scope</h2>
            <p>
              Services include web design, frontend & backend development, integration, hosting/deployment support, and advisory work.
              A written proposal (email or PDF) sets out the agreed scope, deliverables, schedule, and price. Any work outside the
              signed/approved proposal is treated as extra and charged separately.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">2. Estimates, Quotes & Changes</h2>
            <p>
              Estimates are provided in good faith based on information available at the time. If scope changes materially, the
              Freelancer will provide an updated quote. Work will not proceed on changed items until the client approves the update.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">3. Payment Terms & Hosting / Deployment Fees</h2>
            <ul className="list-disc list-inside mt-3">
              <li>Standard payment schedule: a non-refundable deposit (usually 30–50%) before work begins, milestone payments during
                  delivery, and final payment on completion.</li>
              <li>Hosting, domain, third-party subscriptions and deployment fees are billed separately unless included in the
                  written proposal. The Freelancer can arrange hosting & deployment on behalf of the client and will itemize those
                  charges in invoices.</li>
              <li>All fees are quoted in Indian Rupees (INR) unless otherwise stated. Bank transfer, UPI or mutually agreed payment
                  methods are accepted.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">4. Revisions & Acceptance</h2>
            <p>
              Proposals will include a reasonable number of revision rounds. Additional revisions beyond the agreed rounds are
              chargeable. The client must provide feedback and approvals in a timely manner; delays may affect the schedule.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">5. Delivery, Support & Maintenance</h2>
            <p>
              Delivery means handing over agreed deliverables (source files, deployable code, or live site). Post-delivery support
              (bug fixes, minor tweaks) is offered for a limited period as agreed in the proposal. Ongoing maintenance is not
              included unless explicitly stated in the proposal or a separate maintenance agreement.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, the Freelancer retains ownership of any reusable libraries, frameworks, templates,
              or tooling used to build the project. Upon full payment, the Freelancer assigns ownership of the project's deliverables
              (designs, source code specifically created for the client) to the client. The Freelancer retains the right to display the
              work in a portfolio or case study unless a separate NDA or written restriction is agreed.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">7. Confidentiality</h2>
            <p>
              The Freelancer will treat client-supplied confidential information with reasonable care. The Freelancer may engage
              subcontractors (with prior notice) and will ensure confidentiality obligations apply. Confidential information does not
              include information that is publicly available or independently developed.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">8. Liability & Warranties</h2>
            <p>
              The Freelancer will provide services with reasonable skill and care. Except as expressly stated, services are
              provided "as-is". The Freelancer’s total liability for any claim arising from the services is limited to the total fees
              paid for the specific project. The Freelancer is not liable for indirect or consequential losses.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">9. Cancellation & Refunds</h2>
            <p>
              If the client cancels the project before completion, the Freelancer will invoice for work completed and expenses
              incurred up to the date of cancellation. Deposits are non-refundable except where otherwise expressly agreed.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">10. Hosting, Credentials & Access</h2>
            <p>
              Where the Freelancer manages hosting or deployments, the client is expected to provide necessary credentials and
              authorizations. The client should maintain backups of any content; the Freelancer may assist with backups where agreed.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">11. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of India. Parties will attempt to resolve disputes amicably and in good faith. If
              unresolved, disputes will be subject to the exclusive jurisdiction of courts in Karnataka, India (or another court if
              agreed in writing).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">12. Changes to Terms</h2>
            <p>
              The Freelancer may update these Terms from time to time. The "Last updated" date will reflect the most recent changes.
              Continued use of services after changes implies acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">13. Contact</h2>
            <p>
              For questions, contract requests or custom terms, contact:
            </p>
            <ul className="list-disc list-inside mt-2 muted">
              <li>Email: <a className="accent" href="mailto:sathwikkamath31@gmail.com">sathwikkamath31@gmail.com</a></li>
              <li>Use the <Link className="accent" to="/contact">Contact form</Link> to send project briefs.</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
