import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";

export default function Dashboard() {
  const highMatchJobs = [
    {
      id: "stripe-sr-designer",
      title: "Senior AI Product Designer",
      company: "Stripe",
      location: "San Francisco, CA (Hybrid)",
      salary: "$165k – $195k / year • Equity included",
      matchScore: 96,
      badge: "Full-time",
      bgBrand: "bg-primary",
      logoText: "S",
      description:
        "Lead design systems and user-facing agentic workflows for global fintech scale. Collaborate across foundational AI models and merchant checkout telemetry.",
      tags: ["Design Systems", "Figma", "Generative UI", "Agentic UX"],
      matchHighlight:
        "Matched on 8 of 9 key target competencies from your dossier: Design tokens, LLM flows, and Systems architecture.",
      applicantsCount: 12,
      interviewProcess: "Rapid 4-Stage Interview",
      postedTime: "2 days ago",
    },
    {
      id: "anthropic-lead-strategist",
      title: "Lead UX Strategist",
      company: "Anthropic",
      location: "San Francisco / Remote",
      salary: "$180k – $220k / year",
      matchScore: 92,
      badge: "Remote (US)",
      bgBrand: "bg-on-surface",
      logoText: "A",
      description:
        "Shape human-AI alignment paradigms and safety interfaces for next-generation frontier intelligence products.",
      tags: ["AI Alignment", "User Research", "Prompt UX"],
      postedTime: "1 day ago",
    },
    {
      id: "figma-staff-interaction",
      title: "Staff Interaction Designer",
      company: "Figma",
      location: "New York, NY",
      salary: "$170k – $205k / year",
      matchScore: 88,
      badge: "Full-time",
      bgBrand: "bg-secondary",
      logoText: "F",
      description:
        "Craft micro-interactions and collaborative canvas systems for real-time creation workflows across desktop and web.",
      tags: ["Prototyping", "Design Tools", "Canvas Mechanics"],
      postedTime: "4 days ago",
    },
  ];

  const applicationsTracker = [
    {
      id: 1,
      company: "Stripe",
      role: "Senior Product Designer",
      status: "In Review",
      statusColor: "bg-surface-container text-on-surface font-semibold",
      detail: "Applied 2 days ago",
    },
    {
      id: 2,
      company: "Linear",
      role: "Principal UI Designer",
      status: "Interview",
      statusColor: "bg-tertiary-fixed text-on-tertiary-fixed font-bold",
      detail: "📅 Oct 24, 10:00 AM",
    },
    {
      id: 3,
      company: "Notion",
      role: "AI UX Lead",
      status: "Screening Done",
      statusColor: "bg-surface-container-high text-on-surface-variant",
      detail: "Applied 1 week ago",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-12">
      {/* AI Agent Welcome Banner */}
      <section className="w-full bg-primary-fixed/25 border border-primary-fixed/60 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-semibold text-secondary">
              AI Agent Active • Synced 12 mins ago
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
            Welcome back, Elena! 🌟
          </h1>
          <p className="text-xs md:text-sm text-on-surface-variant max-w-2xl">
            Your AI agent discovered{" "}
            <strong className="text-on-surface">
              14 new high-match career opportunities
            </strong>{" "}
            tailored to your Product Design & AI UX expertise.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Link
            to="/jobs"
            className="px-4 py-2.5 rounded-lg bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary text-xs font-semibold shadow-sm transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              auto_awesome
            </span>
            Review New Matches (14)
          </Link>
          <Link
            to="/resume"
            className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 hover:bg-surface-container-low text-on-surface text-xs font-semibold transition-all flex items-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              description
            </span>
            Update Resume
          </Link>
        </div>
      </section>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {/* Stat 1: Discovery */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Discovery
            </span>
            <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/40 text-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">
                work
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-3xl font-extrabold text-primary">48</span>
            <span className="text-xs bg-tertiary-fixed text-on-tertiary-fixed px-1.5 py-0.5 rounded font-bold">
              +12% wk
            </span>
          </div>
          <span className="text-xs text-on-surface-variant mt-1">
            Jobs Found This Week
          </span>
        </div>

        {/* Stat 2: Calibration */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Calibration
            </span>
            <div className="w-8 h-8 rounded-lg bg-primary-fixed/40 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-3xl font-extrabold text-primary">89%</span>
            <span className="text-xs bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded font-bold">
              Top 5%
            </span>
          </div>
          <span className="text-xs text-on-surface-variant mt-1">
            Average Match Score
          </span>
        </div>

        {/* Stat 3: Pipeline */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Pipeline
            </span>
            <div className="w-8 h-8 rounded-lg bg-secondary-container/60 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-3xl font-extrabold text-primary">6</span>
            <span className="text-xs text-on-surface-variant">
              2 in recruiter review
            </span>
          </div>
          <span className="text-xs text-on-surface-variant mt-1">
            Applications Pending
          </span>
        </div>

        {/* Stat 4: Upcoming */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Upcoming
            </span>
            <div className="w-8 h-8 rounded-lg bg-secondary-container/80 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">
                calendar_today
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-3xl font-extrabold text-primary">2</span>
            <span className="text-xs text-secondary font-semibold">
              Tomorrow, 2:00 PM
            </span>
          </div>
          <span className="text-xs text-on-surface-variant mt-1">
            Interviews Scheduled
          </span>
        </div>
      </div>

      {/* Main Grid: High Match Opportunities (Left) & Widgets (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* High Match Opportunities List (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-primary">
                High Match Opportunities
              </h2>
              <span className="text-xs bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-bold">
                Auto-Scouted
              </span>
            </div>
            <Link
              to="/jobs"
              className="text-xs text-secondary font-bold hover:underline flex items-center gap-1"
            >
              View All (48)
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {highMatchJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Right Sidebar Widgets (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Application Tracker */}
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  track_changes
                </span>
                <h3 className="font-bold text-primary text-base">
                  Application Tracker
                </h3>
              </div>
              <Link
                to="/applications"
                className="text-xs text-secondary font-bold hover:underline"
              >
                Manage
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {applicationsTracker.map((app) => (
                <div
                  key={app.id}
                  className="flex items-start justify-between p-3 rounded-lg border border-outline-variant/30 bg-surface"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-primary">
                      {app.company}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {app.role}
                    </span>
                    <span className="text-[10px] text-on-surface-variant/80 mt-1">
                      {app.detail}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Readiness */}
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  psychology
                </span>
                <h3 className="font-bold text-primary text-base">
                  Skill Readiness
                </h3>
              </div>
              <span className="text-xs bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-bold">
                Target: Staff
              </span>
            </div>

            {/* Readiness Donut Card */}
            <div className="bg-surface-container-low border border-primary-fixed/40 rounded-xl p-4 flex items-center gap-4">
              <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-14 h-14 transform -rotate-90"
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
                <span className="absolute text-xs font-bold text-secondary">
                  88%
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary">
                  Strong Profile Fit
                </span>
                <span className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                  Matches 18 of 21 key requirements for Tier-1 Product Design
                  specifications.
                </span>
              </div>
            </div>

            {/* Top Validated Skills */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-on-surface-variant uppercase font-semibold">
                Top Validated Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Design Systems", "Prototyping", "AI UX"].map(
                  (skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondary-container/40 text-on-secondary-container px-2.5 py-1 rounded-full font-medium flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[12px]">
                        check
                      </span>
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Recommended Skill Boost Alert */}
            <div className="bg-surface-container-low border border-primary-fixed/60 rounded-lg p-3 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                lightbulb
              </span>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-primary">
                  Recommended Skill Boost
                </span>
                <span className="text-on-surface-variant mt-0.5">
                  Add{" "}
                  <strong className="text-on-surface">
                    TypeScript for Designers
                  </strong>{" "}
                  to raise high-tier match potential by{" "}
                  <strong className="text-secondary">+4%</strong>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
