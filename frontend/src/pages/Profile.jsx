import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("About");
  const [isOpenToWork, setIsOpenToWork] = useState(true);

  const tabs = [
    "About",
    "Skills (18)",
    "Experience (4)",
    "Education",
    "Certifications (2)",
  ];

  const highlights = [
    {
      title: "Architected Stripe Agent UI Kit reaching 40k+ devs",
      year: "2023 – Present",
      desc: "Created standard open-source token system and canvas component guidelines for asynchronous AI payment flows, adopted across 140+ third-party ecosystem integrations.",
    },
    {
      title: "Keynote Speaker at Config 2024 on LLM Latency UX",
      year: "June 2024",
      desc: "Presented cognitive load models for streaming generative interfaces before 8,000 live attendees; featured in Figma’s Design Systems annual showcase.",
    },
    {
      title: "Patented Multi-Modal Conversational Canvas Pattern",
      year: "US Patent #11,842,901",
      desc: "Co-invented bidirectional infinite-canvas orchestration engine uniting vector embedding navigation with synchronous direct manipulation gestures.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-12">
      {/* Top Banner & Header Card */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden shadow-sm flex flex-col">
        {/* Cover Background Gradient */}
        <div className="h-32 bg-gradient-to-r from-primary-fixed/40 via-secondary-container/40 to-primary-fixed/30 w-full"></div>

        <div className="p-6 relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 -mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
              alt="Elena Vance"
              className="w-24 h-24 rounded-full object-cover ring-4 ring-surface-container-lowest shadow-md flex-shrink-0"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-primary">
                Elena Vance
              </h1>
              <p className="text-xs text-on-surface-variant flex items-center gap-2 mt-1">
                <span>📍 San Francisco, CA</span>
                <span>•</span>
                <span>Member since Jan 2023</span>
                <span>•</span>
                <span className="text-secondary font-semibold">
                  🟢 Active today
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Open to Work Toggle */}
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/30">
              <span className="text-xs font-bold text-primary">
                STATUS Open to Work
              </span>
              <button
                onClick={() => setIsOpenToWork(!isOpenToWork)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors flex items-center ${
                  isOpenToWork
                    ? "bg-secondary justify-end"
                    : "bg-outline-variant justify-start"
                }`}
              >
                <div className="w-4 h-4 bg-on-secondary rounded-full shadow-sm"></div>
              </button>
            </div>

            <button className="px-4 py-2 rounded-lg border border-outline-variant/60 text-xs font-bold text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-1.5 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">
                edit
              </span>
              Edit Profile
            </button>
          </div>
        </div>

        {/* 3 Quick Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 pt-0">
          <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary-container/60 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                verified
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-primary">
                18 Skills
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Validated via AI Assessment
              </span>
            </div>
          </div>

          <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                work_history
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-primary">7+ Years</span>
              <span className="text-[11px] text-on-surface-variant">
                Senior & Staff Experience
              </span>
            </div>
          </div>

          <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                trending_up
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-primary">
                88% Ready
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Top Tier Profile Strength
              </span>
            </div>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="flex items-center gap-6 px-6 border-t border-outline-variant/30 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.split(" ")[0])}
              className={`py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.split(" ")[0]
                  ? "border-secondary text-secondary"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Content (Left 8 cols) & Sidebar (Right 4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Professional Summary */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  badge
                </span>
                <h2 className="font-bold text-primary text-base">
                  Professional Summary
                </h2>
              </div>
              <button className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  edit
                </span>
              </button>
            </div>

            <p className="text-xs text-on-surface leading-relaxed">
              Staff AI Product Designer with over seven years specializing in
              multimodal interface patterns, interactive copilot paradigms, and
              scalable enterprise design systems. Deep expertise in translating
              complex foundational LLM latencies, stochastic agent states, and
              human-in-the-loop workflows into calm, high-fidelity digital
              products. Proven track record collaborating with ML research
              teams, scaling component libraries to 40,000+ developers, and
              authoring foundational patents in adaptive conversational UI
              surfaces.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Agentic Workflows",
                "Design Systems",
                "Multimodal Canvas",
                "Human-Centered AI",
                "Latency UX",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-surface-container text-on-surface px-2.5 py-1 rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Career Preferences */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  tune
                </span>
                <h2 className="font-bold text-primary text-base">
                  Career Preferences
                </h2>
              </div>
              <button className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  edit
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-[11px] text-on-surface-variant font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    location_on
                  </span>
                  Target Location
                </span>
                <span className="text-xs font-bold text-primary">
                  San Francisco Bay Area{" "}
                  <span className="text-[10px] bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded font-normal">
                    Primary
                  </span>
                </span>
              </div>

              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-[11px] text-on-surface-variant font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    home_work
                  </span>
                  Work Mode
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-bold">
                    Remote
                  </span>
                  <span className="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-bold">
                    Hybrid (2 days/wk)
                  </span>
                </div>
              </div>

              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-[11px] text-on-surface-variant font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    flight_takeoff
                  </span>
                  Relocation
                </span>
                <span className="text-xs font-bold text-primary">
                  Willing to relocate:{" "}
                  <strong className="text-secondary">Yes</strong> (NYC, Seattle,
                  London)
                </span>
              </div>

              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-[11px] text-on-surface-variant font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    work
                  </span>
                  Role Type & Target
                </span>
                <span className="text-xs font-bold text-primary">
                  Full-Time • Staff / Principal Level
                </span>
              </div>
            </div>
          </article>

          {/* Career Highlights */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  military_tech
                </span>
                <h2 className="font-bold text-primary text-base">
                  Career Highlights
                </h2>
              </div>
              <button className="text-xs text-secondary font-bold hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  add
                </span>
                Add Highlight
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-surface border-l-4 border-secondary border-outline-variant/30 rounded-r-xl p-4 flex flex-col gap-1"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-primary">
                      {h.title}
                    </h3>
                    <span className="text-[11px] text-on-surface-variant">
                      {h.year}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Languages */}
          <article className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  translate
                </span>
                <h2 className="font-bold text-primary text-base">Languages</h2>
              </div>
              <button className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  edit
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-surface border border-outline-variant/30 rounded-lg p-2.5 flex items-center gap-2 text-xs">
                <span className="font-bold text-primary">English</span>
                <span className="bg-secondary-container/60 text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-semibold">
                  Native / Bilingual
                </span>
              </div>
              <div className="bg-surface border border-outline-variant/30 rounded-lg p-2.5 flex items-center gap-2 text-xs">
                <span className="font-bold text-primary">French</span>
                <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px]">
                  Professional Working (C1)
                </span>
              </div>
              <div className="bg-surface border border-outline-variant/30 rounded-lg p-2.5 flex items-center gap-2 text-xs">
                <span className="font-bold text-primary">Spanish</span>
                <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px]">
                  Conversational (B2)
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <ResumeUpload />

          {/* Profile Strength */}
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  pie_chart
                </span>
                <h3 className="font-bold text-primary text-base">
                  Profile Strength
                </h3>
              </div>
              <span className="text-xs text-secondary font-bold">Strong</span>
            </div>

            <div className="flex items-center gap-4 bg-surface-container-low border border-primary-fixed/40 rounded-xl p-4">
              <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-surface-container"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  ></path>
                  <path
                    className="text-secondary"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="88, 100"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  ></path>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-sm font-bold text-secondary">88%</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary">
                  Almost complete!
                </span>
                <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                  Profiles above 85% get 4.2x higher scout reach and priority
                  match index.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-on-surface">
              {[
                "Profile photo uploaded & validated",
                "Comprehensive executive bio added",
                "5+ core skills verified by assessment",
                "Detailed experience timeline synced",
                "Degrees & academic history noted",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Next Steps */}
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">
                checklist_rtl
              </span>
              <h3 className="font-bold text-primary text-base">
                Suggested Next Steps
              </h3>
            </div>

            {[
              {
                step: "1",
                title: "Add 2 portfolio case studies",
                desc: "Links to live LLM systems or interactive prototypes",
              },
              {
                step: "2",
                title: "Verify GitHub sync",
                desc: "Connect public repos and design system contributions",
              },
              {
                step: "3",
                title: "Set Salary Floor Guidance",
                desc: "Confidential to AI matching algorithms only",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-surface border border-outline-variant/30 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-secondary-container text-on-secondary-container font-bold text-xs flex items-center justify-center">
                    {step.step}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-primary">
                      {step.title}
                    </span>
                    <span className="text-[10px] text-on-surface-variant">
                      {step.desc}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  chevron_right
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
