"use client";

import { useState } from "react";
import { Check, Mail, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please check the box to consent to receiving fragrance updates.");
      return;
    }

    // In Phase 1, save locally / simulate verified subscription
    try {
      const existing = JSON.parse(localStorage.getItem("vees_subscribers") || "[]");
      if (!existing.includes(email.trim().toLowerCase())) {
        existing.push(email.trim().toLowerCase());
        localStorage.setItem("vees_subscribers", JSON.stringify(existing));
      }
      setStatus("success");
      setEmail("");
      setErrorMessage("");
    } catch {
      setStatus("success");
    }
  };

  return (
    <section className="surface-dark py-20 bg-[#241915] text-[#F8F4ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Private Scent Club</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F4ED]">
            Receive First Access to Rare Dubai Shipments
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#D9C2B8] max-w-xl mx-auto font-light leading-relaxed">
            Subscribe to receive private alerts when limited batch Lattafa, Afnan, and Paris Corner shipments land in Nairobi, along with exclusive VIP promotions.
          </p>
        </div>

        {status === "success" ? (
          <div className="surface-dark max-w-md mx-auto p-6 bg-[#38251F] border border-[#C6A46A] text-[#F8F4ED] space-y-2 animate-fadeIn">
            <div className="w-10 h-10 bg-[#C6A46A] text-[#241915] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-[#F8F4ED]">Welcome to Vee&apos;s Luxe Circle</h3>
            <p className="text-xs text-[#D9C2B8] font-light">
              You are now on our private VIP notification list. Look out for rare fragrance arrivals in your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email address..."
                  className="w-full bg-[#FFFDF9] text-[#292522] placeholder-[#89796F] px-4 py-3.5 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#C6A46A]"
                />
                <Mail className="w-4 h-4 text-[#89796F] absolute left-3.5 top-4" />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-[#C6A46A] text-[#241915] text-xs uppercase tracking-widest font-semibold hover:bg-[#dfc89f] transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/* Explicit Consent Checkbox */}
            <div className="flex items-start justify-center text-left space-x-2 pt-2">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (status === "error") setStatus("idle");
                }}
                className="mt-1 accent-[#C6A46A] rounded-none cursor-pointer"
              />
              <label
                htmlFor="newsletter-consent"
                className="text-sm text-[#D9C2B8] cursor-pointer leading-tight select-none"
              >
                I agree to receive fragrance announcements and offers from Vee&apos;s Luxe Foundry. You can unsubscribe at any time.
              </label>
            </div>

            {status === "error" && (
              <p className="text-xs text-rose-400 text-center pt-1">{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
