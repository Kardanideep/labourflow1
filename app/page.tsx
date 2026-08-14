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
                ? "Sending..."
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
          © {new Date().getFullYear()} LabourFlow
        </span>

        <span className="footer-center">
          BUILT FOR LABOUR LAW CONSULTANTS
        </span>

        <span>
          labourflow.in
        </span>
      </footer>

    </main>
  );
}