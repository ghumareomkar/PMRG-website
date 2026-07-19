"use client";

import BlogGrid from "./BlogGrid";
import TestimonialsPanel from "./TestimonialsPanel";

/**
 * Full-partition layout:
 * Desktop — two full-height pages sitting side by side, each with its own
 *           header, scrollable content area, and distinct background.
 * Mobile  — stacked vertically (blogs first, then testimonials).
 */
export default function BlogTestimonialsLayout() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-5rem)]">
        {/* ─── BLOGS PANE ─── */}
        <div
          data-section-theme="light"
          className="flex-1 flex flex-col min-w-0 section-light"
        >
          {/* Pane header */}
          <div className="shrink-0 border-b border-light-line bg-white/80 backdrop-blur-sm px-6 py-5 sm:px-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Blogs
            </span>
            <h1 className="mt-1.5 text-2xl font-bold text-fg-dark sm:text-3xl">
              Thinking from the <span className="text-gradient">edge of enterprise tech</span>
            </h1>
            <p className="mt-1.5 max-w-xl text-sm text-fg-dark-muted">
              Deep dives, playbooks, and field notes on AI, telecom, cloud, and digital transformation.
            </p>
          </div>

          {/* Scrollable blog content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-8 sm:px-10">
            <BlogGrid />
          </div>
        </div>

        {/* ─── VERTICAL DIVIDER ─── */}
        <div className="hidden lg:block lg:w-[2px] lg:shrink-0 lg:bg-gradient-to-b lg:from-light-line lg:via-brand/20 lg:to-light-line" />

        {/* ─── TESTIMONIALS PANE ─── */}
        <div
          data-section-theme="light"
          className="lg:w-[420px] xl:w-[460px] flex flex-col shrink-0 section-light-grey"
        >
          {/* Pane header */}
          <div className="shrink-0 border-b border-light-line bg-light-bg-grey/80 backdrop-blur-sm px-6 py-5 sm:px-10 lg:px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Testimonials
            </span>
            <h2 className="mt-1.5 text-2xl font-bold text-fg-dark sm:text-3xl">
              Outcomes clients <span className="text-gradient">actually feel</span>
            </h2>
            <p className="mt-1.5 text-sm text-fg-dark-muted">
              What technology leaders say about working with PMRG.
            </p>
          </div>

          {/* Scrollable testimonials content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-8 lg:px-6">
            <TestimonialsPanel />
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
