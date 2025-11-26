// src/components/ContactForm.jsx
import React, { useState } from "react";

/**
 * ContactForm.jsx — Web3Forms integration (uses new FormData(e.target))
 *
 * - Preserves your UI and markup (inputs, textarea, buttons)
 * - Uses VITE_WEB3FORMS_ACCESS_KEY when available, otherwise falls back to the provided key
 * - Appends access_key to the submitted FormData
 * - Robust handling for JSON responses, network errors, and mailto fallback
 * - Shows a centered spinner overlay while submitting
 * - Shows a "Thank you for mailing us" message + Home button after success
 */

const BG = "/mnt/data/75154ad3-c13d-41aa-b215-484f7d1887f0.png";

// replace this fallback with "" in production if you don't want keys in source
const FALLBACK_ACCESS_KEY = "6b28425f-e843-424b-be74-6b06eed7bdbf";
const ENV_KEY = import.meta?.env?.VITE_WEB3FORMS_ACCESS_KEY || "";
const WEB3FORMS_ACCESS_KEY = ENV_KEY || FALLBACK_ACCESS_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "plus",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // {type: 'success'|'error', msg: string}
  const [sent, setSent] = useState(false); // shows thank-you view after success

  function updateField(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter your phone.";
    if (!/^[0-9+\-()\s]{6,20}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!form.subject.trim()) return "Please add a subject.";
    if (!form.message.trim()) return "Please add a message.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    // Build FormData from the form element (ensures names are used)
    const fd = new FormData(e.target);

    // Ensure access_key is present (Web3Forms requires it)
    if (!WEB3FORMS_ACCESS_KEY) {
      // If you intentionally removed the key, fallback to mailto
      const subject = encodeURIComponent(`${form.subject} — ${form.plan} plan`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPlan: ${form.plan}\n\n${form.message}`
      );
      window.location.href = `mailto:sathwikkamath31@gmail.com?subject=${subject}&body=${body}`;
      setStatus({ type: "success", msg: "No Web3Forms key — opened your mail app." });
      return;
    }

    // Append access_key and helpful meta fields if not already present
    if (!fd.get("access_key")) fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    if (!fd.get("meta[submitted_at]")) fd.append("meta[submitted_at]", new Date().toISOString());
    if (!fd.get("meta[plan]") && form.plan) fd.append("meta[plan]", form.plan);

    setSubmitting(true);

    try {
      console.log("Sending contact form to Web3Forms...", { keyPresent: !!WEB3FORMS_ACCESS_KEY });
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      // Try to parse json safely
      let json = null;
      try {
        json = await res.json();
      } catch (parseErr) {
        console.warn("Failed to parse JSON from Web3Forms:", parseErr);
      }

      if (res.ok && json && json.success) {
        setStatus({ type: "success", msg: json.message || "Form submitted successfully." });
        // reset controlled state and native form fields
        setForm({
          name: "",
          email: "",
          phone: "",
          plan: "plus",
          subject: "",
          message: "",
        });
        e.target.reset();
        // show thank-you view
        setSent(true);
      } else {
        // show server-provided message if available, otherwise generic
        const serverMsg = (json && json.message) || `Failed to submit (status ${res.status}).`;
        console.error("Web3Forms error:", { status: res.status, json });
        setStatus({ type: "error", msg: serverMsg });
      }
    } catch (networkErr) {
      console.error("Network error sending form:", networkErr);
      // fallback to mailto (attachments won't be included)
      try {
        const subject = encodeURIComponent(`${form.subject} — ${form.plan} plan`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPlan: ${form.plan}\n\n${form.message}\n\n(Attachment not included)`
        );
        window.location.href = `mailto:sathwikkamath31@gmail.com?subject=${subject}&body=${body}`;
        setStatus({ type: "error", msg: "Network error — opened mail client as fallback." });
      } catch (mailtoErr) {
        console.error("Mailto fallback failed:", mailtoErr);
        setStatus({ type: "error", msg: "Could not send message. Please email directly." });
      }
    } finally {
      setSubmitting(false);
    }
  }

  // Home navigation handler used by the Home button in the thank-you view
  function goHome() {
    // Use history if available or simple navigation
    try {
      // prefer SPA navigation if using react-router: try to push to '/'
      // but to avoid importing router here, use location assign as safe fallback
      window.location.href = "/";
    } catch (err) {
      window.location.assign("/");
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full py-16 px-6 md:px-12 bg-[#0f0b0b] text-white"
      style={{
        backgroundImage: `url('${BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div aria-hidden className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-[900px] mx-auto bg-white/6 rounded-2xl p-6 md:p-10 shadow-xl">
        {!sent ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Let's discuss your project</h2>
              <p className="text-gray-200 mt-2">
                Fill the form with your project details. You'll receive a reply within 24–48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-200">Full name *</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="mt-2 px-3 py-2 rounded bg-black/60 border border-white/10"
                  placeholder="Your full name"
                />
              </label>

              {/* Email */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-200">Email *</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="mt-2 px-3 py-2 rounded bg-black/60 border border-white/10"
                  placeholder="Your Email"
                />
              </label>

              {/* Phone */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-200">Phone *</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="mt-2 px-3 py-2 rounded bg-black/60 border border-white/10"
                  placeholder="+91 98765 43210"
                />
              </label>

              {/* Plan */}
              <label className="flex flex-col">
                <span className="text-sm text-gray-200">Preferred plan *</span>
                <select
                  name="plan"
                  value={form.plan}
                  onChange={(e) => updateField("plan", e.target.value)}
                  className="mt-2 px-3 py-2 rounded bg-black/60 border border-white/10"
                >
                  <option value="basic">Basic — Landing page</option>
                  <option value="plus">Plus — Business website</option>
                  <option value="pro">Pro — App / E-commerce</option>
                </select>
              </label>

              {/* Subject */}
              <div className="md:col-span-2">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-200">Subject *</span>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    className="mt-2 px-3 py-2 rounded bg-black/60 border border-white/10"
                    placeholder="Project title"
                  />
                </label>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-200">Message *</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={6}
                    className="mt-2 px-3 py-3 rounded bg-black/60 border border-white/10"
                    placeholder="Describe your project, features, and timeline..."
                  />
                </label>
              </div>

              {/* Status */}
              {status && (
                <div
                  className={`md:col-span-2 px-4 py-3 rounded ${
                    status.type === "success" ? "bg-green-700/80" : "bg-red-700/80"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              {/* Buttons */}
              <div className="md:col-span-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded bg-[#d89463] text-black font-semibold disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const pre = encodeURIComponent(
                      `Hi, I'm ${form.name || "interested"} and I need details about the ${form.plan} plan.`
                    );
                    window.open(`https://wa.me/+919591178734?text=${pre}`, "_blank");
                  }}
                  className="px-4 py-3 rounded border border-white/10 text-gray-200"
                >
                  Contact on WhatsApp
                </button>
              </div>
            </form>

            {/* Spinner overlay while submitting */}
            {submitting && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                <div className="relative z-30 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  <div className="text-white">Sending...</div>
                </div>
              </div>
            )}
          </>
        ) : (
          // Thank-you view after a successful submission
          <div className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Thank you for mailing us</h2>
            <p className="text-gray-200 mb-8">We received your message and will get back to you shortly.</p>
            <div className="flex items-center justify-center">
              <button
                onClick={goHome}
                className="px-6 py-3 rounded bg-[#d89463] text-black font-semibold"
              >
                Home
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
