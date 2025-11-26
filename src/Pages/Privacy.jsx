// src/pages/Privacy.jsx
import React from "react";
import { Link } from "react-router-dom";

const UPDATED = "November 26, 2025";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0f0b0b] text-[#e9e3e3] py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@600;700&display=swap');
        .privacy-container { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .privacy-title { font-family: 'Poppins', sans-serif; }
        .muted { color: #bfb3b3; }
        .accent { color: #d89463; }
      `}</style>

      <div className="max-w-[1100px] mx-auto px-6 privacy-container">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold privacy-title">Privacy Policy</h1>
          <p className="muted mt-2">Last updated: <strong className="accent">{UPDATED}</strong></p>
          <p className="muted mt-3">
            This Privacy Policy explains how <strong className="accent">Sathwik Kamath</strong> (the "Freelancer") collects, uses,
            stores and discloses personal data when you visit the website or engage freelance services.
          </p>
        </header>

        <article className="prose prose-invert max-w-none text-gray-200">
          <section className="mb-6">
            <h2 className="text-xl font-semibold">1. Personal Data I Collect</h2>
            <p>
              I collect the personal data you provide directly (for example, when you use the contact form or email):
            </p>
            <ul className="list-disc list-inside mt-3 muted">
              <li>Contact details (name, email, phone)</li>
              <li>Project details, brief, files or attachments you choose to send</li>
              <li>Payment details where necessary (invoices, payment references — payment processors may collect financial data)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">2. How I Use Your Data</h2>
            <p>
              Personal data is used to respond to inquiries, provide quotes and proposals, manage projects, send invoices, and
              fulfil contractual obligations. With your consent I may also send occasional updates about availability or services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">3. Third Parties & Tools</h2>
            <p>
              I use trusted third-party services to assist delivery (for example Web3Forms for form submissions, hosting providers,
              analytics and payment processors). These third parties process data on my behalf — their own privacy policies apply
              to their use of data. I will only select providers who use reasonable security controls.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">4. Data Retention</h2>
            <p>
              I retain personal data only as long as necessary to provide services or comply with legal obligations (e.g. accounting,
              tax or contractual retention requirements). If you request deletion, I will delete personal data unless it is required
              for legitimate business or legal reasons.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">5. Security</h2>
            <p>
              I take reasonable organisational and technical measures to protect data from unauthorized access, disclosure or loss.
              No internet transmission is completely secure — if you have concerns about transmitting highly sensitive information,
              contact me directly to arrange a safer transfer.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">6. Your Rights</h2>
            <p>
              You may request access, correction, restriction, portability or deletion of your personal data held by me. To exercise
              these rights, contact me at the email below. I will respond to requests promptly and in accordance with applicable law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">7. Cookies & Analytics</h2>
            <p>
              The website may use cookies and analytics tools to understand usage and improve the site. These are generally
              non-identifying and used for performance — you may opt out through your browser settings or by contacting me.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">8. International Transfers</h2>
            <p>
              Data may be processed by third parties outside India (for example cloud providers). Where data is transferred
              internationally I will take steps to protect it consistent with applicable law.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">9. Children</h2>
            <p>
              The services are not directed at children under 16. I do not knowingly collect personal data from children — if you
              believe I have such data, contact me to arrange deletion.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">10. Changes to this Policy</h2>
            <p>
              I may update this policy occasionally. The "Last updated" date at the top will show when this policy was last
              revised. Significant changes will be communicated via the website or direct contact where appropriate.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold">11. Contact</h2>
            <p>
              For data access, deletion requests or privacy questions, contact:
            </p>
            <ul className="list-disc list-inside mt-2 muted">
              <li>Email: <a className="accent" href="mailto:sathwikkamath31@gmail.com">sathwikkamath31@gmail.com</a></li>
              <li>Or use the <Link className="accent" to="/contact">Contact form</Link>.</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
