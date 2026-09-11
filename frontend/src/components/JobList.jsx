import { useState } from "react";
import JobCard from "./JobCard";

export default function JobList({
  jobs,
  title = "Recommended Roles",
  activeCount = 48,
}) {
  const [sortOption, setSortOption] = useState("highest-match");
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* List Header Controls */}
      <div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-4 shadow-sm flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary-container/60 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              explore
            </span>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg text-primary">{title}</h2>
            <span className="bg-secondary-container text-on-secondary-container text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {activeCount} Active
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span>Sort:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-surface border border-outline-variant/60 rounded-lg px-3 py-1.5 text-xs text-on-surface font-medium focus:outline-none focus:ring-1 focus:ring-secondary"
            >
              <option value="highest-match">
                Highest Match Score (AI Ranked)
              </option>
              <option value="recent">Most Recent</option>
              <option value="salary">Highest Salary</option>
            </select>
          </div>

          <div className="flex items-center gap-1 bg-surface rounded-lg p-1 border border-outline-variant/40">
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-surface-container-lowest text-secondary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              title="List View"
            >
              <span className="material-symbols-outlined text-[18px]">
                format_list_bulleted
              </span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-surface-container-lowest text-secondary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              title="Grid View"
            >
              <span className="material-symbols-outlined text-[18px]">
                grid_view
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Jobs Stream */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-6"
            : "flex flex-col gap-6"
        }
      >
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-12 text-center flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-on-surface-variant text-[48px]">
              search_off
            </span>
            <h3 className="text-lg font-bold text-primary">
              No Matching Opportunities Found
            </h3>
            <p className="text-xs text-on-surface-variant max-w-sm">
              Try adjusting your search keywords, salary target, or minimum
              match percentage in the Refine Search panel.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-4 shadow-sm flex-wrap gap-4 text-xs">
        <span className="text-on-surface-variant font-medium">
          Showing 1 - {jobs?.length || 4} of {activeCount} recommended
          opportunities
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container-low disabled:opacity-40 transition-colors flex items-center gap-1 font-medium"
          >
            <span className="material-symbols-outlined text-[14px]">
              arrow_back
            </span>
            Previous
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg font-bold transition-all ${
                currentPage === page
                  ? "bg-secondary text-on-primary shadow-sm"
                  : "border border-outline-variant/60 text-on-surface hover:bg-surface-container-low"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1.5 rounded-lg border border-outline-variant/60 text-on-surface-variant hover:bg-surface-container-low transition-colors flex items-center gap-1 font-medium"
          >
            Next
            <span className="material-symbols-outlined text-[14px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
