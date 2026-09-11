export default function MatchScore({
  score = 96,
  title = "Candidate Fit Profile",
}) {
  const dimensions = [
    { label: "Skills & Competencies", value: 98 },
    { label: "Experience & Leadership", value: 95 },
    { label: "Location & Work Model", value: 100 },
    { label: "Compensation Bracket", value: 92 },
  ];

  return (
    <div className="bg-primary-fixed/20 border border-primary-fixed/60 rounded-xl p-6 shadow-sm flex flex-col gap-5">
      {/* Donut Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-secondary font-bold tracking-wider uppercase">
            CareerScout AI
          </span>
          <h3 className="text-lg font-bold text-primary">{title}</h3>
        </div>

        {/* Circular Donut Meter */}
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
              strokeDasharray={`${score}, 100`}
              strokeLinecap="round"
              strokeWidth="3.5"
            ></path>
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-secondary">{score}%</span>
          </div>
        </div>
      </div>

      {/* Breakdown Meters */}
      <div className="flex flex-col gap-3 bg-surface-container-lowest/80 rounded-lg p-4 shadow-sm border border-outline-variant/30">
        {dimensions.map((dim, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-on-surface font-medium">{dim.label}</span>
              <span className="text-secondary font-bold">{dim.value}%</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full"
                style={{ width: `${dim.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Match Highlights List */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-primary font-bold uppercase tracking-wider">
          Algorithmic Highlights
        </span>
        <div className="flex flex-col gap-2 text-xs text-on-surface">
          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">✓</span>
            <span>
              Direct alignment with Stripe's modular Design System philosophy.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">✓</span>
            <span>
              5+ years orchestrating complex enterprise web applications.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-secondary font-bold">✓</span>
            <span>
              Documented portfolio case studies in autonomous copilot UX.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
