"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + count) % count);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = TESTIMONIALS[index];

  return (
    <section
      data-section-theme="light"
      className="section-light-grey section"
    >
      <div className="container-pmrg">
        <SectionHeading
          theme="light"
          eyebrow="Testimonials"
          title={
            <>
              Outcomes our clients{" "}
              <span className="text-gradient">actually feel</span>
            </>
          }
          description="Don't take our word for it — here's what technology leaders say about working with PMRG."
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-xl border border-light-line bg-white p-8 shadow-card-light sm:p-10"
              >
                {/* Blue accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand to-brand-cyan" />
                <p className="text-lg leading-relaxed text-fg-dark sm:text-xl">&quot;{active.quote}&quot;</p>
                <footer className="mt-7 flex items-center gap-4">
                  {active.logo ? (
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white border border-light-line">
                      <Image
                        src={active.logo}
                        alt={`${active.company} logo`}
                        fill
                        className="object-contain p-1"
                        sizes="44px"
                      />
                    </span>
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 font-mono text-sm font-semibold text-brand">
                      {active.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                  <div>
                    <div className="font-semibold text-fg-dark">{active.name}</div>
                    <div className="text-sm text-fg-dark-subtle">
                      {active.title}, {active.company}
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-line text-fg-dark-muted transition-colors hover:border-light-line-strong hover:text-fg-dark"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-brand" : "w-1.5 bg-light-line-strong hover:bg-fg-dark-subtle"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-line text-fg-dark-muted transition-colors hover:border-light-line-strong hover:text-fg-dark"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
