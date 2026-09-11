import ResumeUpload from "../components/ResumeUpload";

export default function Resume() {
  return (
    <div className="flex flex-col gap-6 w-full pb-12 max-w-4xl">
      <div className="border-b border-outline-variant/30 pb-4">
        <h1 className="text-2xl font-extrabold text-primary">
          My AI Resume & Dossier
        </h1>
        <p className="text-xs text-on-surface-variant mt-1">
          Manage master resume files, AI parsing extraction, and portfolio
          credentials.
        </p>
      </div>

      <ResumeUpload />

      <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <h2 className="font-bold text-primary text-base flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">
            psychology
          </span>
          Extracted AI Skill Dossier
        </h2>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          The CareerScout parser automatically extracted 18 core technical
          competencies, 4 verified leadership experiences, and 1 design token
          patent from your master PDF.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "Design Systems Architecture (Expert)",
            "Figma Tokens & Auto-Layout",
            "LLM Latency UX",
            "Agentic Workflow Mechanics",
            "User Research & Synthesis",
            "Micro-interactions",
            "Web Standards (HTML/CSS)",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="text-xs bg-primary-container text-on-primary-container px-3 py-1.5 rounded-full font-semibold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">
                check
              </span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
