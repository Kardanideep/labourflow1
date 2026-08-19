"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setMessageType(data.isExisting ? "existing" : "new");
        setEmail("");

        setTimeout(() => {
          setSubmitted(false);
          setMessageType("");
        }, 3000);
      } else {
        console.error("Submission failed:", data);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="coming-page">

      {/* Ambient background */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Top bar */}
      <header className="topbar">
        <a href="/" className="brand">
          <img src="/logo.png" alt="LabourFlow" />
        </a>

        <div className="brand-section">
          <div className="brandname">
            <p className="labour">Labour</p>
            <p className="flow">Flow</p>
          </div>

          <p className="tagline">
            COMPLIANCE. SIMPLIFIED.
          </p>
        </div>
      </header>

      {/* Main */}
      <section className="hero">

        {/* Left content */}
        <div className="hero-content">

          <div className="eyebrow">
            <span />
            SOMETHING NEW IS BEING BUILT
          </div>

          <h1>
            Compliance
            <br />

            <span>is about to</span>
            <br />

            <strong>flow.</strong>
          </h1>

          <p className="hero-description">
            LabourFlow is the modern platform for labour law consultants to
            manage compliance, clients, and their entire consultancy workflow.
          </p>

          <div className="launch-label">
            <span className="launch-line" />
            <span>A NEW ERA OF COMPLIANCE.</span>
            <span className="launch-line" />
          </div>

          {/* Email form */}
          <form
            className="waitlist"
            onSubmit={handleSubmit}
          >
            <div className="input-wrap">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Z" />

                <path d="m3 7 9 6 9-6" />
              </svg>

              <input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                disabled={loading}
                required
              />
            </div>

            <button type="submit" disabled={loading || submitted}>
              {loading
                ? "Submitting..."
                : submitted
                ? messageType === "existing"
                  ? "Your email already on list ✓"
                  : "You're on the list ✓"
                : "Notify me at launch"}

              {!submitted && !loading && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              )}
            </button>
          </form>

          <p className="privacy"></p>

        </div>

        {/* Right visual */}
        <div className="hero-visual">

          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="flow-shape shape-one" />
          <div className="flow-shape shape-two" />
          <div className="flow-shape shape-three" />

          <div className="visual-logo">
            <img
              src="/logo2.png"
              alt=""
            />
          </div>

          <div className="visual-card card-top-left">
            <span>CLIENTS</span>
            <strong>120+</strong>
          </div>

          <div className="visual-card card-top-right">
            <span>COMPLIANCE</span>
            <strong>10+</strong>
          </div>

          <div className="visual-card card-bottom-left">
            <span>HOURS SAVED</span>
            <strong>40hrs</strong>
          </div>

          <div className="visual-card card-bottom-right">
            <span>DEADLINES</span>
            <strong>0</strong>
          </div>

          <div className="floating-dot dot-one" />
          <div className="floating-dot dot-two" />
          <div className="floating-dot dot-three" />

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <span>
          {new Date().getFullYear()} LabourFlow
        </span>

        <span className="footer-center">
          BUILT FOR LABOUR LAW CONSULTANTS
        </span>

        <div className="footer-social">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/labourflow.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/the-labourflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
          </a>
        </div>
      </footer>

    </main>
  );
}