"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight, X, GraduationCap } from "lucide-react";
import { JOB_LISTINGS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Job = (typeof JOB_LISTINGS)[number];

function JobCard({ job, onClick }: { job: Job; onClick: () => void }) {
  const isIntern = job.category === "internship";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
    >
      <button onClick={onClick} className="block w-full text-left">
        <GlassCard
          theme="light"
          className="group flex flex-col gap-3 p-5 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border",
                isIntern
                  ? "border-violet-200 bg-violet-50 text-violet-600"
                  : "border-light-line bg-blue-50 text-brand"
              )}
            >
              {isIntern ? (
                <GraduationCap className="h-4 w-4" />
              ) : (
                <Briefcase className="h-4 w-4" />
              )}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-fg-dark transition-colors group-hover:text-brand leading-snug">
                {job.title}
              </h3>
              <p className="mt-1 text-xs text-fg-dark-muted line-clamp-2">
                {job.description}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-dark-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-md border border-light-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-dark-muted">
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-light-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-dark-muted">
              <MapPin className="h-2.5 w-2.5" />
              {job.location}
            </span>
            <span
              className={cn(
                "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                isIntern
                  ? "border-violet-200 bg-violet-50 text-violet-600"
                  : "border-emerald-200 bg-emerald-50 text-emerald-600"
              )}
            >
              {job.type}
            </span>
          </div>
        </GlassCard>
      </button>
    </motion.div>
  );
}

export function JobsPane() {
  const [active, setActive] = useState<Job | null>(null);
  const jobs = useMemo(
    () => JOB_LISTINGS.filter((j) => j.category === "job"),
    []
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} onClick={() => setActive(job)} />
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {active && <JobModal job={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

export function InternshipsPane() {
  const [active, setActive] = useState<Job | null>(null);
  const internships = useMemo(
    () => JOB_LISTINGS.filter((j) => j.category === "internship"),
    []
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {internships.map((job) => (
            <JobCard key={job.title} job={job} onClick={() => setActive(job)} />
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {active && <JobModal job={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function JobModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const isIntern = job.category === "internship";
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-light-line bg-white shadow-2xl sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative overflow-hidden p-7 sm:p-8">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-light-line text-fg-dark-muted transition-colors hover:bg-light-bg-grey hover:text-fg-dark"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">{job.department}</span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">
              <MapPin className="h-3 w-3" />
              {job.location}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider",
                isIntern
                  ? "border-violet-200 bg-violet-50 text-violet-600"
                  : "border-emerald-200 bg-emerald-50 text-emerald-600"
              )}
            >
              {job.type}
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-fg-dark">{job.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">{job.description}</p>

          <p className="mt-5 text-sm leading-relaxed text-fg-dark-muted">
            {isIntern
              ? "You'll work alongside experienced engineers and designers, gaining hands-on experience with production systems. We believe in learning by doing — you'll contribute real code from day one."
              : "You'll join a cross-functional pod shipping production software for enterprise clients. We move fast, ship often, and care deeply about craft. If that sounds like you, we'd love to hear from you."}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" className="flex-1">
              {isIntern ? "Apply for Internship" : "Apply Now"}
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

// Keep default export for backward compat
export default function JobsList() {
  return (
    <div className="flex flex-col gap-8">
      <JobsPane />
      <InternshipsPane />
    </div>
  );
}
