"use client";

import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export default function TestimonialsPanel() {
  return (
    <div className="flex flex-col gap-5">
      {TESTIMONIALS.map((testimonial) => (
        <GlassCard
          key={testimonial.slug}
          theme="light"
          className="flex flex-col p-6 transition-all hover:-translate-y-0.5"
        >
          {/* Company header */}
          <div className="flex items-center gap-3">
            {testimonial.logo ? (
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-light-line bg-white">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  fill
                  className="object-contain p-1.5"
                  sizes="44px"
                />
              </span>
            ) : (
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 font-mono text-sm font-bold text-brand">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
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
                className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          {/* Quote (truncated) */}
          <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted line-clamp-3">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Read more */}
          <Link
            href={`/blog/testimonial/${testimonial.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-brand transition-colors hover:text-brand-deep"
          >
            Read more <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </GlassCard>
      ))}
    </div>
  );
}
