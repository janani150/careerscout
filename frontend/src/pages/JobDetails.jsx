import { useState } from "react";
import { Link } from "react-router-dom";
import MatchScore from "../components/MatchScore";

export default function JobDetails() {
  const [isSaved, setIsSaved] = useState(true);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [coverLetterGenerated, setCoverLetterGenerated] = useState(false);

  const handleApplyClick = () => {
    setApplying(true);
    setTimeout(() => {
      setApplying(false);
      setApplied(true);
    }, 1200);
  };

  const handleCustomizeClick = () => {
    setCustomizing(true);
    setTimeout(() => {
      setCustomizing(false);
      setCoverLetterGenerated(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full gap-6 pb-12">
      {/* Top Context Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-semibold"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          <span>Back to Opportunity Stream</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-on-surface-variant uppercase tracking-wider">
            Opportunity ID: #STR-8842-AI
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
          <span className="text-xs text-secondary font-semibold">
            Active & Actively Sourcing
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="w-full bg-primary-fixed/25 border border-primary-fixed/60 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-3xl text-on-primary font-bold tracking-tight">
                S
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl md:text-3xl text-primary font-extrabold tracking-tight">
                  Senior AI Product Designer
                </h1>
                <span className="inline-flex items-center gap-1 text-xs bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>{" "}
                  Verified Opportunity
                </span>
              </div>

              <p className="text-sm text-on-surface-variant mt-1">
                Stripe • San Francisco, CA (Hybrid) • Posted 2 days ago
              </p>

              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-semibold shadow-sm">
                  Full-Time
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-semibold shadow-sm">
                  $165,000 - $195,000 USD / year
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-semibold shadow-sm">
                  Equity: 0.05% - 0.1%
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">
                  Tier 1 Sponsoring
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-secondary text-xs font-semibold shadow-sm hover:bg-surface-container-low transition-all border border-outline-variant/40"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isSaved ? "bookmark" : "bookmark_border"}
              </span>
              <span>{isSaved ? "Saved to Wishlist" : "Save to Wishlist"}</span>
            </button>
            <button className="p-2.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-sm hover:bg-surface-container-low transition-all border border-outline-variant/40">
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2-Column Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Role Details Deep Dive (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Card 1: Role Overview & Impact */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                target
              </span>
              <h2 className="text-base font-bold text-primary uppercase tracking-wide">
                Role Overview & Impact
              </h2>
            </div>
            <p className="text-base text-on-surface leading-relaxed font-normal">
              Stripe is creating sovereign programmatic economic infrastructure
              for artificial intelligence. As our Senior AI Product Designer,
              you will spearhead interface design across high-volume checkout
              autonomy, agentic financial permissions, and human-in-the-loop
              auditability.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              You will translate probabilistic multi-agent models into
              predictable, deterministic UI paradigms that give global
              enterprises uncompromised visibility and security over financial
              operations.
            </p>
          </article>

          {/* Key Focus Visual Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-primary">
                  Autonomous Commerce Workflows
                </span>
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  account_tree
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mb-3">
                Architecting high-consequence state machines where AI copilot
                actions seamlessly transfer ownership to human finance
                directors.
              </p>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-primary">
                  LLM Latency & Confidence UX
                </span>
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  psychology
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mb-3">
                Pioneering fluid streaming feedback states, micro-confidence
                gauges, and generative fallback fallbacks for real-time
                transactions.
              </p>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 2: What You Will Do */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                checklist
              </span>
              <h2 className="text-base font-bold text-primary uppercase tracking-wide">
                What You Will Do
              </h2>
            </div>
            <ul className="flex flex-col gap-4 text-xs">
              {[
                {
                  title: "Partner with AI researchers and foundation engineers",
                  desc: "Translate complex multi-agent inference flows into transparent, intuitive UI abstractions that preserve user control during rapid autonomous transactions.",
                },
                {
                  title: "Lead end-to-end systemic design",
                  desc: "Direct workflow progression from foundational customer discovery and low-fidelity specs to production-ready design system tokens built inside Stripe's design ecosystem.",
                },
                {
                  title: "Establish company-wide AI interaction guidelines",
                  desc: "Standardize visual representations for latency, streaming token telemetry, hallucination prevention warnings, and varying agent confidence thresholds.",
                },
                {
                  title: "Drive continuous usability cycles",
                  desc: "Iterate rapidly through quantitative customer observation sessions, prototype stress-testing, and rigorous qualitative UX telemetry.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface text-sm">
                      {item.title}
                    </span>
                    <span className="text-on-surface-variant mt-0.5 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Card 3: Skills & Qualifications */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  neurology
                </span>
                <h2 className="text-base font-bold text-primary uppercase tracking-wide">
                  Skills & Qualifications
                </h2>
              </div>
              <span className="text-xs text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full font-bold">
                5 of 6 Skills Matched
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Design Systems (Expert)",
                "Figma Components & Tokens",
                "Generative UI / LLM UX",
                "User Research & Prototyping",
                "Web Standards & CSS/HTML Awareness",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    check
                  </span>
                  {skill}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-xs font-medium">
                Python & API Integration Familiarity
              </span>
            </div>
          </article>

          {/* Card 4: About Stripe */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  apartment
                </span>
                <h2 className="text-base font-bold text-primary uppercase tracking-wide">
                  About Stripe
                </h2>
              </div>
              <span className="text-xs text-on-surface-variant">
                Founded 2010
              </span>
            </div>
            <p className="text-sm text-on-surface leading-relaxed">
              Stripe is a technology company that builds economic infrastructure
              for the internet. Businesses of every size—from new startups to
              public companies—use our software to accept payments and manage
              their businesses online.
            </p>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-surface-container-low rounded-lg p-3 flex flex-col">
                <span className="text-[11px] text-on-surface-variant">
                  Company Scale
                </span>
                <span className="text-base font-bold text-primary mt-1">
                  7,000+
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  Global workforce
                </span>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 flex flex-col">
                <span className="text-[11px] text-on-surface-variant">
                  Glassdoor Rating
                </span>
                <span className="text-base font-bold text-secondary mt-1">
                  4.4 ★
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  89% approve of CEO
                </span>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 flex flex-col">
                <span className="text-[11px] text-on-surface-variant">
                  Status
                </span>
                <span className="text-base font-bold text-primary mt-1">
                  Fintech Leader
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  Pre-IPO / Private
                </span>
              </div>
              <div className="bg-surface-container-low rounded-lg p-3 flex flex-col">
                <span className="text-[11px] text-on-surface-variant">
                  Office Presence
                </span>
                <span className="text-base font-bold text-primary mt-1">
                  SF Hybrid
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  2 days / wk in-office
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Right Sticky Column: AI Match Scorecard & CTA Suite (4 Cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-20">
          <MatchScore score={96} title="Candidate Fit Profile" />

          {/* Primary Action Suite */}
          <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <button
              onClick={handleApplyClick}
              disabled={applying || applied}
              className={`w-full h-14 font-bold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 ${
                applied
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${applying ? "animate-spin" : ""}`}
              >
                {applied ? "check" : applying ? "progress_activity" : "bolt"}
              </span>
              <span>
                {applied
                  ? "Application Dispatched!"
                  : applying
                    ? "Submitting Dossier..."
                    : "Apply with 1-Click AI Resume"}
              </span>
            </button>

            <button
              onClick={handleCustomizeClick}
              disabled={customizing}
              className="w-full h-11 bg-surface-container-lowest border border-secondary text-secondary font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 hover:bg-surface-container-low"
            >
              <span
                className={`material-symbols-outlined text-[18px] ${customizing ? "animate-pulse" : ""}`}
              >
                {coverLetterGenerated ? "description" : "auto_awesome"}
              </span>
              <span>
                {coverLetterGenerated
                  ? "View Tailored Pitch Draft"
                  : customizing
                    ? "Synthesizing Cover Letter..."
                    : "Customize Cover Letter with AI"}
              </span>
            </button>

            {/* Mutual Connections */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs shadow-sm">
                  TL
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-sm">
                  MK
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-tight">
                <strong className="text-on-surface">
                  2 mutual connections
                </strong>{" "}
                in your direct network work at Stripe Design.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-on-surface-variant text-[11px]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  lock
                </span>
                Confidential Candidate Mode
              </span>
              <span>Avg response: 48h</span>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
