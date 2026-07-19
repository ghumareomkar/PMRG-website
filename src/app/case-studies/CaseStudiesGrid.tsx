"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, TrendingUp } from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_FILTERS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CaseStudy = (typeof CASE_STUDIES)[number];

export default function CaseStudiesGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<CaseStudy | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((c) => c.industry === filter),
    [filter]
  );

  return (
    <>
      {/* filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {CASE_STUDY_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-all",
              filter === f
                ? "border-brand/50 bg-blue-50 text-brand"
                : "border-light-line bg-white text-fg-dark-muted hover:border-light-line-strong hover:text-fg-dark"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* grid */}
      <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((study) => (
            <motion.button
              layout
              key={study.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(study)}
              className="group text-left"
            >
              <GlassCard theme="light" className="flex h-full flex-col overflow-hidden p-0">
                {/* thumbnail */}
                <div className="relative h-40 overflow-hidden border-b border-light-line bg-gradient-to-br from-blue-50 to-light-bg-grey">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-extrabold text-brand/10">
                      {study.industry[0]}
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-brand">{study.tag}</span>
                  </div>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-light-line bg-white text-fg-dark-muted transition-all group-hover:bg-brand group-hover:text-white group-hover:border-brand">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brand">
                    {study.industry}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-fg-dark">
                    {study.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                    {study.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-fg-dark-subtle transition-colors group-hover:text-brand">
                    Read case study <span aria-hidden>→</span>
                  </span>
                </div>
              </GlassCard>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* detail modal */}
      <AnimatePresence>
        {active && <CaseStudyModal study={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function CaseStudyModal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-light-line bg-white shadow-2xl sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-light-line bg-white/90 p-6 backdrop-blur-xl">
          <div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-brand/30 bg-blue-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-brand">{study.tag}</span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">{study.industry}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-fg-dark">{study.title}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-light-line text-fg-dark-muted transition-colors hover:bg-light-bg-grey hover:text-fg-dark"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-7 p-6 sm:p-8">
          <Section title="The Challenge">
            <p className="text-sm leading-relaxed text-fg-dark-muted">{study.challenge}</p>
          </Section>
          <Section title="Our Solution">
            <p className="text-sm leading-relaxed text-fg-dark-muted">{study.solution}</p>
          </Section>

          <Section title="Results">
            <ul className="space-y-2.5">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-fg-dark">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                    <TrendingUp className="h-3 w-3" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Technology">
            <div className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          <div className="rounded-xl border border-light-line bg-light-bg-grey p-5">
            <p className="text-sm italic leading-relaxed text-fg-dark">"{study.testimonial}"</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact" className="flex-1">
              Start a similar project
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
