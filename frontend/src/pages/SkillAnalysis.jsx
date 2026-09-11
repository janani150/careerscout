import SkillGap from "../components/SkillGap";

export default function SkillAnalysis() {
  const learningSteps = [
    {
      step: "Step 01 • Priority High",
      time: "⏱ 4 hrs",
      title: "Mastering Agentic Interface Paradigms",
      desc: "Deep dive course on non-deterministic UX patterns, human oversight levers, and conversational task recovery mechanics.",
      courseName: "Deep Dive Interactive Course",
      subText: "Includes 4 Figma sandbox exercises",
      btnText: "Start Module",
      badgeColor: "bg-error-container text-on-error-container",
    },
    {
      step: "Step 02 • Project Base",
      time: "⏱ 6 hrs",
      title: "Building Eval-Driven UX for LLMs",
      desc: "Hands-on project configuring automated evaluation metrics for latency, contextual clarity, and response grading frameworks.",
      courseName: "Hands-on Project & Case Study",
      subText: "Produces verified portfolio artifact",
      btnText: "Start Module",
      badgeColor: "bg-secondary-container text-on-secondary-container",
    },
    {
      step: "Step 03 • Certification",
      time: "⏱ 1 hr",
      title: "Portfolio Review with AI Career Coach",
      desc: "Automated portfolio critique scoring case studies against staff-level rubrics used by leading product hiring committees.",
      courseName: "Automated AI Assessment",
      subText: "Immediate interview readiness verdict",
      btnText: "Schedule Review",
      badgeColor: "bg-primary-container text-on-primary-container",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-12">
      {/* Target Benchmark Focus Banner */}
      <section className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">
              target
            </span>
            Target Benchmark Focus
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 flex items-center justify-between gap-4 font-bold text-primary text-base flex-1 max-w-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  stars
                </span>
                Target Career Path: Staff AI Product Designer ($180k+)
              </span>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                expand_more
              </span>
            </div>

            <button className="px-4 py-2.5 rounded-xl border border-outline-variant/60 text-xs font-bold text-on-surface hover:bg-surface-container-low transition-colors shadow-sm">
              Change Goal
            </button>
          </div>
        </div>

        {/* High Role Readiness Donut Widget */}
        <div className="bg-surface-container-low border border-primary-fixed/60 rounded-xl p-4 flex items-center gap-4 flex-shrink-0">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
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

          <div className="flex flex-col max-w-[220px]">
            <span className="text-xs font-bold text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified
              </span>
              High Role Readiness
            </span>
            <span className="text-xs text-on-surface-variant mt-0.5 leading-snug">
              You are{" "}
              <strong className="text-on-surface">
                2 high-impact skills away
              </strong>{" "}
              from unlocking{" "}
              <strong className="text-secondary">35 additional</strong> top-tier
              opportunities.
            </span>
          </div>
        </div>
      </section>

      {/* 3-Column Skills Matrix Component */}
      <SkillGap />

      {/* Recommended AI Learning Plan */}
      <section className="bg-primary-fixed/20 border border-primary-fixed/60 rounded-xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                auto_awesome
              </span>
              <h2 className="text-lg font-bold text-primary">
                Recommended AI Learning Plan to Bridge Your Gaps
              </h2>
            </div>
            <p className="text-xs text-on-surface-variant">
              Curated targeted modules customized to unlock the remaining 12%
              role compatibility.
            </p>
          </div>

          <button className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-xs font-bold text-on-surface hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              file_upload
            </span>
            Export Plan to Notion/Calendar
          </button>
        </div>

        {/* 3 Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningSteps.map((card, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${card.badgeColor}`}
                  >
                    {card.step}
                  </span>
                  <span className="text-xs text-on-surface-variant font-medium">
                    {card.time}
                  </span>
                </div>

                <h3 className="font-bold text-primary text-base">
                  {card.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="bg-surface border border-outline-variant/30 rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/50 text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    school
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-primary">
                    {card.courseName}
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    {card.subText}
                  </span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-lg bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 mt-2">
                <span>{card.btnText}</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
