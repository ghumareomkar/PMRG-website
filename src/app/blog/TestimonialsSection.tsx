"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function TestimonialsSection() {
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

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {TESTIMONIALS.map((testimonial) => (
            <RevealItem key={testimonial.company}>
              <GlassCard theme="light" className="flex h-full flex-col p-7">
                {/* Company header */}
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 font-mono text-sm font-bold text-brand">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-brand uppercase tracking-wide">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-fg-dark-subtle">
                      {testimonial.title}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-3 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-dark-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
