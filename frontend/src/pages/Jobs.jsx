import { useState } from "react";
import JobList from "../components/JobList";

export default function Jobs() {
  const [searchKeyword, setSearchKeyword] = useState("Product Designer");
  const [minMatch, setMinMatch] = useState(80);
  const [employmentTypes, setEmploymentTypes] = useState({
    "Full-time": true,
    Contract: false,
    "Part-time": false,
    Internship: false,
  });
  const [expLevel, setExpLevel] = useState("Senior");
  const [remoteOnly, setRemoteOnly] = useState(true);
  const [salaryMin, setSalaryMin] = useState(130000);

  const mockJobs = [
    {
      id: "stripe-sr-designer",
      title: "Senior AI Product Designer",
      company: "Stripe",
      location: "South Park, SF / Hybrid",
      salary: "$165k – $195k • 0.05% Equity",
      matchScore: 96,
      badge: "Verified Role",
      bgBrand: "bg-primary",
      logoText: "S",
      description:
        "Drive core visual patterns and conversational UI paradigms for next-generation autonomous financial agents. Lead cross-functional architecture spanning risk interfaces, autonomous workflows...",
      tags: [
        "Full-time",
        "AI Agents",
        "Design Systems",
        "Figma",
        "Prototyping",
      ],
      matchHighlight:
        "Matched on 8 of 9 key target competencies from your dossier: Design tokens, LLM flows, and Systems architecture.",
      applicantsCount: 12,
      interviewProcess: "Rapid 4-Stage Interview",
      postedTime: "3 days ago",
    },
    {
      id: "anthropic-staff-designer",
      title: "Staff Product Designer – Claude Interface",
      company: "Anthropic",
      location: "San Francisco, CA (Remote Friendly)",
      salary: "$185k – $230k • Significant Equity",
      matchScore: 94,
      badge: "High Priority",
      bgBrand: "bg-on-surface",
      logoText: "A",
      description:
        "Shape intuitive interfaces, steerability controls, and multimodal canvas experiences for millions of knowledge workers. Direct interaction models for next-gen reasoning models...",
      tags: [
        "Full-time",
        "LLM Alignment",
        "Complex Workflows",
        "Design Thinking",
      ],
      matchHighlight: "Matches Elena's 7+ yrs Portfolio",
      applicantsCount: 8,
      postedTime: "1 day ago",
    },
    {
      id: "linear-lead-systems",
      title: "Lead Product & Systems Designer",
      company: "Linear",
      location: "San Francisco / Remote",
      salary: "$170k – $210k • Competitive Grant",
      matchScore: 91,
      badge: "Design-Led Team",
      bgBrand: "bg-secondary",
      logoText: "L",
      description:
        "Obsess over craft, micro-interactions, keyboard-first navigation, and ultra-crisp aesthetics across web and desktop apps. You will shape the core workflow loop used by thousands of developers...",
      tags: [
        "Full-time",
        "Micro-interactions",
        "System Architecture",
        "Dark Mode UI",
      ],
      matchHighlight: "Immediate Review Promised",
      postedTime: "4 days ago",
    },
    {
      id: "notion-principal-ux",
      title: "Principal UX Architect – AI Workspace",
      company: "Notion",
      location: "New York, NY",
      salary: "$190k – $240k",
      matchScore: 87,
      badge: "New Office",
      bgBrand: "bg-surface-tint",
      logoText: "N",
      description:
        "Reimagine document authoring and collaborative databases infused with proactive contextual AI teammates. Work directly on the frontier of real-time knowledge graphs...",
      tags: ["Full-time", "Information Architecture", "Enterprise UX"],
      matchHighlight: "NYC Tech Campus",
      postedTime: "5 days ago",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full pb-12 items-start">
      {/* Refine Search Filter Panel (Left 4 cols on desktop) */}
      <aside className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">
              tune
            </span>
            <h2 className="font-bold text-primary text-base">Refine Search</h2>
          </div>
          <button
            onClick={() => {
              setSearchKeyword("Product Designer");
              setMinMatch(80);
              setRemoteOnly(true);
              setSalaryMin(130000);
            }}
            className="text-xs text-secondary font-medium hover:underline"
          >
            Reset Filters
          </button>
        </div>

        {/* Search Keywords */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Search Keywords
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full h-10 pl-9 pr-3 bg-surface rounded-lg border border-outline-variant/60 text-xs font-medium text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />
          </div>
        </div>

        {/* Minimum Match Slider */}
        <div className="flex flex-col gap-2 bg-surface-container-low border border-primary-fixed/40 rounded-xl p-4">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-primary">Minimum Match</span>
            <span className="font-extrabold text-secondary text-sm">
              {minMatch}%+
            </span>
          </div>
          <input
            type="range"
            min="60"
            max="98"
            value={minMatch}
            onChange={(e) => setMinMatch(Number(e.target.value))}
            className="w-full accent-secondary cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-on-surface-variant">
            <span>60%</span>
            <span>80% (Recommended)</span>
            <span>98%</span>
          </div>
        </div>

        {/* Salary Target Range */}
        <div className="flex flex-col gap-2 bg-surface-container-low border border-primary-fixed/40 rounded-xl p-4">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-primary">Salary Target</span>
            <span className="font-extrabold text-secondary text-sm">
              ${(salaryMin / 1000).toFixed(0)}k+
            </span>
          </div>
          <input
            type="range"
            min="100000"
            max="250000"
            step="5000"
            value={salaryMin}
            onChange={(e) => setSalaryMin(Number(e.target.value))}
            className="w-full accent-secondary cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-on-surface-variant">
            <span>$100k</span>
            <span>$150k</span>
            <span>$250k+</span>
          </div>
        </div>

        {/* Employment Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Employment Type
          </label>
          <div className="flex flex-col gap-2">
            {[
              { label: "Full-time", count: 38 },
              { label: "Contract", count: 6 },
              { label: "Part-time", count: 3 },
              { label: "Internship", count: 1 },
            ].map((type) => (
              <label
                key={type.label}
                className="flex items-center justify-between text-xs text-on-surface cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={employmentTypes[type.label]}
                    onChange={(e) =>
                      setEmploymentTypes({
                        ...employmentTypes,
                        [type.label]: e.target.checked,
                      })
                    }
                    className="accent-secondary rounded"
                  />
                  <span>{type.label}</span>
                </div>
                <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-[10px]">
                  {type.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Experience Level
          </label>
          <div className="flex flex-col gap-2">
            {[
              { label: "Senior", count: "24 roles" },
              { label: "Lead / Principal", count: "14 roles" },
              { label: "Mid-level", count: "8 roles" },
              { label: "Fresher / Early", count: "2 roles" },
            ].map((lvl) => (
              <label
                key={lvl.label}
                className="flex items-center justify-between text-xs text-on-surface cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="expLevel"
                    checked={expLevel === lvl.label}
                    onChange={() => setExpLevel(lvl.label)}
                    className="accent-secondary"
                  />
                  <span>{lvl.label}</span>
                </div>
                <span className="text-[11px] text-on-surface-variant">
                  {lvl.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Location & Remote Modality */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Location Modality
            </label>
            <label className="flex items-center gap-1 text-xs text-secondary cursor-pointer font-medium">
              <span>Remote</span>
              <input
                type="checkbox"
                checked={remoteOnly}
                onChange={(e) => setRemoteOnly(e.target.checked)}
                className="accent-secondary rounded"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs bg-primary-fixed/40 text-primary px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
              San Francisco, CA
              <span className="material-symbols-outlined text-[14px] cursor-pointer">
                close
              </span>
            </span>
            <span className="text-xs bg-surface-container text-on-surface-variant px-2.5 py-1 rounded-full">
              Hybrid
            </span>
            <button className="text-xs text-secondary hover:underline font-medium">
              + Add City
            </button>
          </div>
        </div>

        {/* Key Skills Match */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Key Skills Match
          </label>
          <div className="flex flex-wrap gap-1.5">
            {["Figma", "Design Systems", "AI/LLM UX", "User Research"].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-primary text-on-primary px-2.5 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ),
            )}
            <button className="text-xs text-secondary hover:underline font-medium">
              + Add Skill
            </button>
          </div>
        </div>

        {/* Filter CTA Button */}
        <button className="w-full py-3 rounded-lg bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 mt-2">
          <span className="material-symbols-outlined text-[18px]">
            filter_list
          </span>
          Apply Filters
        </button>
      </aside>

      {/* Main Jobs Stream (Right 8 cols) */}
      <main className="lg:col-span-8 flex flex-col w-full">
        <JobList jobs={mockJobs} title="Recommended Roles" activeCount={48} />
      </main>
    </div>
  );
}
