"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Calendar,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/topnochwealth/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/the_mauricecoleman/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@mauricecoleman277", icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@mauricecoleman1914", icon: YouTubeIcon },
];

const GHL_CALENDAR_ID = process.env.NEXT_PUBLIC_GHL_CALENDAR_ID;

export default function ContactPage() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!GHL_CALENDAR_ID) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    // Submit to GHL webhook
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            source: "contact-form",
            timestamp: new Date().toISOString(),
          }),
        });
      }
    } catch {
      // Silent fail
    }

    setFormState("success");
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s Talk About{" "}
              <span className="text-gradient-gold">Your Goals</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Whether you have a question, want to book a consultation, or
              are ready to get started — we&apos;re here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {formState === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle2
                    size={48}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-dark focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 transition-all"
                        placeholder="Maurice L. Coleman"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-dark focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-dark focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-dark focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 transition-all"
                      >
                        <option value="">Select a topic...</option>
                        <option value="consultation">
                          Book a Consultation
                        </option>
                        <option value="credit">Credit Repair</option>
                        <option value="funding">Funding Strategy</option>
                        <option value="products">Digital Products</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-dark focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 transition-all resize-none"
                      placeholder="Tell us about your situation and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="gradient-gold text-royal-dark font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 flex items-center gap-2"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Book a Call */}
              <div className="bg-surface rounded-2xl border border-border p-8">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <Calendar size={22} className="text-royal-dark" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  Book a Free Strategy Call
                </h3>
                <p className="text-muted text-sm mb-4">
                  30-minute 1-on-1 with Maurice. We&apos;ll assess your
                  situation and build your plan.
                </p>
                {GHL_CALENDAR_ID ? (
                  <iframe
                    src={`https://api.leadconnectorhq.com/widget/booking/${GHL_CALENDAR_ID}`}
                    className="w-full min-h-[600px] rounded-xl"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    id={`ghl-calendar`}
                  />
                ) : (
                  <a
                    href="mailto:info@topnochwealth.com?subject=Book%20a%20Strategy%20Call"
                    className="block w-full gradient-gold text-royal-dark font-bold py-3.5 rounded-xl text-center transition-all hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Email to Book a Call
                  </a>
                )}
              </div>

              {/* Email */}
              <div className="bg-surface rounded-2xl border border-border p-8">
                <div className="w-12 h-12 bg-royal/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail size={22} className="text-royal" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:info@topnochwealth.com"
                  className="text-royal hover:text-royal-dark transition-colors font-medium"
                >
                  info@topnochwealth.com
                </a>
              </div>

              {/* Social */}
              <div className="bg-surface rounded-2xl border border-border p-8">
                <h3 className="text-lg font-bold text-dark mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:bg-royal hover:text-white hover:border-royal transition-all"
                    >
                      <s.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
