export default function SkillGap() {
  const strengths = [
    { name: "Design Systems & Components", score: 98 },
    { name: "Figma & Design Tokens", score: 96 },
    { name: "Multimodal UX & Chat Patterns", score: 90 },
    { name: "User Research & Synthesis", score: 88 },
    { name: "High-Fidelity Prototyping", score: 86 },
  ];

  const gaps = [
    {
      title: "Agentic Workflow Orchestration",
      priority: "High Priority",
      priorityColor: "bg-error-container text-on-error-container",
      desc: "Crucial for autonomy logic, error fallback states, and human-in-the-loop triggers.",
    },
    {
      title: "Token Estimation & Latency UX",
      priority: "Medium Priority",
      priorityColor: "bg-primary-container text-on-primary-container",
      desc: "Streaming responses, progressive rendering, and computational cost UX.",
    },
    {
      title: "Frontend Prompt Engineering Eval",
      priority: "Low Priority",
      priorityColor: "bg-surface-container text-on-surface-variant",
      desc: "Designing quantitative evaluation harnesses directly within prototype stages.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Column 1: Core Strengths */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              check_circle
            </span>
            <h3 className="font-bold text-primary text-base">Core Strengths</h3>
          </div>
          <span className="text-xs bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
            Optimal
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface border border-outline-variant/30 rounded-lg p-3 flex items-center justify-between"
            >
              <span className="text-xs font-semibold text-on-surface">
                {item.name}
              </span>
              <span className="text-xs font-bold text-secondary bg-secondary-container/50 px-2 py-0.5 rounded-full">
                {item.score}%
              </span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-auto">
          <span className="material-symbols-outlined text-[14px] text-secondary">
            sync
          </span>
          Profile synced from GitHub & Figma
        </p>
      </div>

      {/* Column 2: Skill Gaps & Opportunities */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-error text-[20px]">
              warning
            </span>
            <h3 className="font-bold text-primary text-base">
              Skill Gaps & Opportunities
            </h3>
          </div>
          <span className="text-xs bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-bold">
            Action Needed
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {gaps.map((gap, idx) => (
            <div
              key={idx}
              className="bg-surface border border-outline-variant/30 rounded-lg p-3 flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary">
                  {gap.title}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${gap.priorityColor}`}
                >
                  {gap.priority}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {gap.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-secondary font-medium flex items-center gap-1 mt-auto">
          <span className="material-symbols-outlined text-[14px]">
            trending_up
          </span>
          Recommended focus: Agentic Interface patterns
        </p>
      </div>

      {/* Column 3: Market Demand & Impact */}
      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              monitoring
            </span>
            <h3 className="font-bold text-primary text-base">
              Market Demand & Impact
            </h3>
          </div>
          <span className="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
            High Demand
          </span>
        </div>

        <div className="bg-surface-container-low border border-primary-fixed/40 rounded-xl p-4 flex flex-col gap-1">
          <span className="text-xs text-on-surface-variant uppercase font-semibold">
            Compensation Upside
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-primary">
              $198,000
            </span>
            <span className="text-xs text-secondary font-bold">
              +18% Avg Lift
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-1">
            Demonstrating production-grade Agentic UX increases candidate
            leverage in top hiring rounds.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-primary">
            Hiring for this exact combo:
          </span>
          <div className="flex flex-wrap gap-2">
            {["Stripe", "OpenAI", "Anthropic", "Linear", "Figma"].map(
              (co, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-surface-container border border-outline-variant/30 text-on-surface px-2.5 py-1 rounded-md font-medium"
                >
                  {co}
                </span>
              ),
            )}
          </div>
        </div>

        <p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-auto">
          <span className="material-symbols-outlined text-[14px] text-secondary">
            verified
          </span>
          Data verified across 410 recent job listings
        </p>
      </div>
    </div>
  );
}
