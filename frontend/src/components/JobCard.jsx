import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job, onApply }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsApplied(true);
    if (onApply) onApply(job);
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-4">
      {/* Header Row: Company Emblem, Title, Verified Pill, AI Match Badge */}
      <div className="flex items-start justify-between gap-4 flex-wrap sm:flex-nowrap">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl ${job.bgBrand || "bg-primary"} text-on-primary flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-sm`}
          >
            {job.logoText || job.company?.charAt(0) || "C"}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                to={`/jobs/${job.id}`}
                className="font-bold text-lg text-primary hover:text-secondary transition-colors"
              >
                {job.title}
              </Link>
              {job.badge && (
                <span className="text-xs bg-secondary-container/60 text-on-secondary-container px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  {job.badge}
                </span>
              )}
            </div>

            <p className="text-xs text-on-surface-variant mt-1">
              <strong className="text-on-surface">{job.company}</strong> •{" "}
              {job.location} • {job.salary}
            </p>
          </div>
        </div>

        {/* AI Match Score Badge */}
        <div className="flex-shrink-0">
          <span className="bg-secondary-container/80 text-on-secondary-container text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">
              auto_awesome
            </span>
            {job.matchScore}% AI Match
          </span>
        </div>
      </div>

      {/* Description Snippet */}
      <p className="text-sm text-on-surface leading-relaxed line-clamp-2">
        {job.description}
      </p>

      {/* Skill Tags */}
      <div className="flex items-center gap-2 flex-wrap">
        {job.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-surface-container text-on-surface px-2.5 py-1 rounded-md font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Match Highlight Banner if available */}
      {job.matchHighlight && (
        <div className="bg-surface-container-low border border-primary-fixed/40 rounded-lg p-3 flex items-start gap-2 text-xs text-on-surface">
          <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
            check_circle
          </span>
          <span>{job.matchHighlight}</span>
        </div>
      )}

      {/* Footer Info & Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30 flex-wrap gap-3">
        <div className="flex items-center gap-4 text-xs text-on-surface-variant flex-wrap">
          {job.applicantsCount && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                group
              </span>
              {job.applicantsCount} Applicants via AI Scout
            </span>
          )}
          {job.interviewProcess && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">
                schedule
              </span>
              {job.interviewProcess}
            </span>
          )}
          {job.postedTime && <span>Posted {job.postedTime}</span>}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className={`p-2 rounded-lg border transition-all ${
              isSaved
                ? "bg-secondary-container/40 text-secondary border-secondary"
                : "border-outline-variant/60 text-on-surface-variant hover:bg-surface-container-low"
            }`}
            title="Save to Wishlist"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isSaved ? "favorite" : "favorite_border"}
            </span>
          </button>

          <Link
            to={`/jobs/${job.id}`}
            onClick={handleApply}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              isApplied
                ? "bg-tertiary-container text-on-tertiary-container"
                : "bg-secondary hover:bg-on-secondary-fixed-variant text-on-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isApplied ? "check" : "bolt"}
            </span>
            {isApplied
              ? "Applied with AI Resume"
              : "Quick Apply with AI Resume"}
          </Link>
        </div>
      </div>
    </div>
  );
}
