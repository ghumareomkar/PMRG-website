"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, TrendingUp } from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_FILTERS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
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
                ? "border-accent/50 bg-accent/soft text-accent"
                : "border-line-strong bg-white/[0.02] text-fg-muted hover:border-white/20 hover:text-fg"
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
              <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                {/* thumbnail */}
                <div className="relative h-40 overflow-hidden border-b border-line bg-gradient-to-br from-surface/40 to-ink">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-extrabold text-white/5">
                      {study.industry[0]}
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge>{study.tag}</Badge>
                  </div>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass text-fg transition-all group-hover:bg-accent group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    {study.industry}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-fg">
                    {study.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                    {study.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-fg-subtle transition-colors group-hover:text-accent">
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
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto glass-strong rounded-t-3xl sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-ink/60 p-6 backdrop-blur-xl">
          <div>
            <div className="flex gap-2">
              <Badge>{study.tag}</Badge>
              <Badge variant="outline">{study.industry}</Badge>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight">{study.title}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-fg-muted transition-colors hover:bg-white/5 hover:text-fg"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-7 p-6 sm:p-8">
          <Section title="The Challenge">
            <p className="text-sm leading-relaxed text-fg-muted">{study.challenge}</p>
          </Section>
          <Section title="Our Solution">
            <p className="text-sm leading-relaxed text-fg-muted">{study.solution}</p>
          </Section>

          <Section title="Results">
            <ul className="space-y-2.5">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm text-fg">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/soft text-accent">
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
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </Section>

          <div className="rounded-xl border border-line bg-surface p-5">
            <p className="text-sm italic leading-relaxed text-fg">“{study.testimonial}”</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact" className="flex-1">
              Start a similar project
            </Button>
            <Button variant="secondary" onClick={onClose}>
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
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
