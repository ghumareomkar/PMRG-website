"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight, X } from "lucide-react";
import { JOB_LISTINGS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Job = (typeof JOB_LISTINGS)[number];

export default function JobsList() {
  const departments = useMemo(
    () => ["All", ...Array.from(new Set(JOB_LISTINGS.map((j) => j.department)))],
    []
  );
  const [dept, setDept] = useState("All");
  const [active, setActive] = useState<Job | null>(null);

  const filtered = useMemo(
    () => (dept === "All" ? JOB_LISTINGS : JOB_LISTINGS.filter((j) => j.department === dept)),
    [dept]
  );

  return (
    <>
      {/* department filters */}
      <div className="flex flex-wrap gap-2">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setDept(d)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-all",
              dept === d
                ? "border-accent/50 bg-accent/soft text-accent"
                : "border-line-strong bg-white/[0.02] text-fg-muted hover:border-white/20 hover:text-fg"
            )}
          >
            {d}
          </button>
        ))}
      </div>

      {/* list */}
      <div className="mt-6 flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((job) => (
            <motion.div
              layout
              key={job.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <button onClick={() => setActive(job)} className="block w-full text-left">
                <GlassCard className="group flex flex-col gap-4 p-5 transition-all hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white/[0.02] text-accent">
                      <Briefcase className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-fg transition-colors group-hover:text-accent">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-fg-muted">{job.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                    <Badge variant="outline">{job.department}</Badge>
                    <Badge variant="outline">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="mint">{job.type}</Badge>
                    <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </GlassCard>
              </button>
            </motion.div>
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
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-lg overflow-hidden glass-strong rounded-t-3xl sm:rounded-3xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative overflow-hidden p-7 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/soft blur-3xl" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-fg-muted transition-colors hover:bg-white/5 hover:text-fg"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{job.department}</Badge>
            <Badge variant="outline">
              <MapPin className="h-3 w-3" />
              {job.location}
            </Badge>
            <Badge variant="mint">{job.type}</Badge>
          </div>
          <h2 className="mt-4 text-2xl font-bold leading-tight">{job.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">{job.description}</p>

          <p className="mt-5 text-sm leading-relaxed text-fg-muted">
            You'll join a cross-functional pod shipping production software for enterprise
            clients. We move fast, ship often, and care deeply about craft. If that sounds
            like you, we'd love to hear from you.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" className="flex-1">
              Apply Now
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
