"use client";

import { useState } from "react";
import { lattafaNewsletter } from "@/data/lattafa-landing-copy";

export function LattafaNewsletterBlock() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || !consent) {
      setStatus("error");
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("vees_subscribers") || "[]");
      if (!existing.includes(email.trim().toLowerCase())) {
        existing.push(email.trim().toLowerCase());
        localStorage.setItem("vees_subscribers", JSON.stringify(existing));
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  };

  return (
    <section className="py-16 bg-ivory border-t border-sand/60">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-serif text-2xl text-ink">{lattafaNewsletter.title}</h2>
        <p className="text-sm text-body leading-relaxed">{lattafaNewsletter.body}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 border border-sand px-3 py-2.5 text-sm rounded-lg bg-white text-ink focus:outline-none focus:border-gold"
          />
          <button type="submit" className="ui-btn bg-bottle-green text-ivory hover:bg-bottle-green-hover shrink-0">
            Subscribe
          </button>
        </form>
        <label className="flex items-start gap-2 text-left text-xs text-muted max-w-md mx-auto">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
          <span>{lattafaNewsletter.privacy}</span>
        </label>
        {status === "success" && <p className="text-sm text-bottle-green">Thank you — you are subscribed.</p>}
        {status === "error" && <p className="text-sm text-muted">Enter a valid email and agree to receive updates.</p>}
      </div>
    </section>
  );
}