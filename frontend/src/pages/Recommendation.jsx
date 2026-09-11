import JobList from "../components/JobList";

export default function Recommendation() {
  const recommendedJobs = [
    {
      id: "stripe-sr-designer",
      title: "Senior AI Product Designer",
      company: "Stripe",
      location: "South Park, SF / Hybrid",
      salary: "$165k – $195k • 0.05% Equity",
      matchScore: 96,
      badge: "✨ 96% Match",
      bgBrand: "bg-primary",
      logoText: "S",
      description:
        "Drive core visual patterns and conversational UI paradigms for next-generation autonomous financial agents.",
      tags: ["Full-time", "AI Agents", "Design Systems", "Figma"],
      matchHighlight:
        "Top 95%+ Match: Matched on 8 of 9 key target competencies.",
      postedTime: "3 days ago",
    },
    {
      id: "anthropic-staff-designer",
      title: "Staff Product Designer – Claude Interface",
      company: "Anthropic",
      location: "San Francisco, CA (Remote Friendly)",
      salary: "$185k – $230k • Significant Equity",
      matchScore: 94,
      badge: "✨ 94% Match",
      bgBrand: "bg-on-surface",
      logoText: "A",
      description:
        "Shape intuitive interfaces, steerability controls, and multimodal canvas experiences for millions of knowledge workers.",
      tags: ["Full-time", "LLM Alignment", "Complex Workflows"],
      postedTime: "1 day ago",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-12">
      <div className="bg-primary-fixed/20 border border-primary-fixed/60 rounded-xl p-6 shadow-sm flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">
              lightbulb
            </span>
            AI Recommendations (✨ 95% Match Index)
          </div>
          <h1 className="text-2xl font-extrabold text-primary tracking-tight mt-1">
            Personalized Career Opportunities
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Calculated against your verified dossier, work history, and target
            salary specifications.
          </p>
        </div>
      </div>

      <JobList
        jobs={recommendedJobs}
        title="Top AI Recommendations"
        activeCount={2}
      />
    </div>
  );
}
