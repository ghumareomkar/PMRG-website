"use client";

import { useMemo } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { JOB_LISTINGS } from "@/lib/constants";
import { JobsPane, InternshipsPane } from "./JobsList";

/**
 * Full-partition layout:
 * Desktop — two full-height pages sitting side by side, each with its own
 *           header, scrollable content area, and distinct background.
 * Mobile  — stacked vertically (jobs first, then internships).
 */
export default function JobsInternshipLayout() {
  const jobCount = useMemo(
    () => JOB_LISTINGS.filter((j) => j.category === "job").length,
    []
  );
  const internCount = useMemo(
    () => JOB_LISTINGS.filter((j) => j.category === "internship").length,
    []
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-5rem)]">
        {/* ─── JOBS PANE ─── */}
        <div
          data-section-theme="light"
          className="lg:w-1/2 flex-1 flex flex-col min-w-0 section-light"
        >
          {/* Pane header */}
          <div className="shrink-0 border-b border-light-line bg-white/80 backdrop-blur-sm px-6 py-5 sm:px-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <h1 className="text-2xl font-bold text-fg-dark sm:text-3xl">
                  Jobs
                </h1>
                <p className="text-sm text-fg-dark-muted">
                  {jobCount} open position{jobCount !== 1 ? "s" : ""} · Full-time roles
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable jobs content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-8 sm:px-10">
            <JobsPane />
          </div>
        </div>

        {/* ─── VERTICAL DIVIDER ─── */}
        <div className="hidden lg:block lg:w-[2px] lg:shrink-0 lg:bg-gradient-to-b lg:from-light-line lg:via-brand/20 lg:to-light-line" />

        {/* ─── INTERNSHIPS PANE ─── */}
        <div
          data-section-theme="light"
          className="lg:w-1/2 flex flex-col section-light-grey"
        >
          {/* Pane header */}
          <div className="shrink-0 border-b border-light-line bg-light-bg-grey/80 backdrop-blur-sm px-6 py-5 sm:px-10 lg:px-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-600">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-fg-dark sm:text-3xl">
                  Internships
                </h2>
                <p className="text-sm text-fg-dark-muted">
                  {internCount} open position{internCount !== 1 ? "s" : ""} · Learn & grow
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable internships content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-8 lg:px-6">
            <InternshipsPane />
          </div>
        </div>
      </div>

      {/* Mobile: remove the fixed-height constraint */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .flex-col {
            height: auto !important;
          }
        }
      `}</style>
    </>
  );
}
