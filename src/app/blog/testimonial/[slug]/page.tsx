import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Quote } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/animations/Reveal";
import { TESTIMONIALS } from "@/lib/constants";

export async function generateStaticParams() {
  return TESTIMONIALS.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const testimonial = TESTIMONIALS.find((t) => t.slug === params.slug);

  if (!testimonial) {
    return { title: "Testimonial Not Found" };
  }

  return {
    title: `${testimonial.company} Testimonial | PMRG`,
    description: testimonial.quote,
    alternates: {
      canonical: `/blog/testimonial/${testimonial.slug}`,
    },
  };
}

export default function TestimonialDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const testimonial = TESTIMONIALS.find((t) => t.slug === params.slug);

  if (!testimonial) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Testimonial"
        title={
          <>
            What <span className="text-gradient">{testimonial.company}</span> says about us
          </>
        }
        description={testimonial.quote}
      />

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg max-w-4xl">
          {/* Back link */}
          <Reveal>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs & Testimonials
            </Link>
          </Reveal>

          {/* Testimonial card */}
          <Reveal>
            <GlassCard theme="light" strong className="relative overflow-hidden p-8 sm:p-10">
              {/* Decorative quote mark */}
              <div className="absolute -right-4 -top-4 text-brand/5">
                <Quote className="h-32 w-32" />
              </div>

              {/* Company header */}
              <div className="relative flex items-center gap-4 border-b border-light-line pb-6">
                {testimonial.logo ? (
                  <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-light-line bg-white">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                    />
                  </span>
                ) : (
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 font-mono text-lg font-bold text-brand">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
                <div>
                  <div className="text-lg font-bold text-fg-dark">{testimonial.name}</div>
                  <div className="text-sm text-fg-dark-muted">
                    {testimonial.title}, {testimonial.company}
                  </div>
                  <div className="mt-1.5 flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Full description */}
              <div className="relative mt-8">
                <p className="text-base leading-relaxed text-fg-dark-muted sm:text-lg sm:leading-relaxed">
                  &ldquo;{testimonial.fullDescription}&rdquo;
                </p>
              </div>
            </GlassCard>
          </Reveal>

          {/* Other testimonials */}
          <Reveal>
            <div className="mt-12">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                More testimonials
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {TESTIMONIALS.filter((t) => t.slug !== testimonial.slug).map(
                  (other) => (
                    <Link
                      key={other.slug}
                      href={`/blog/testimonial/${other.slug}`}
                    >
                      <GlassCard
                        theme="light"
                        className="group flex h-full flex-col p-6 transition-all hover:border-brand/30"
                      >
                        <div className="flex items-center gap-3">
                          {other.logo ? (
                            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-light-line bg-white">
                              <Image
                                src={other.logo}
                                alt={`${other.company} logo`}
                                fill
                                className="object-contain p-1"
                                sizes="40px"
                              />
                            </span>
                          ) : (
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-mono text-xs font-bold text-brand">
                              {other.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          )}
                          <div>
                            <div className="text-sm font-semibold text-fg-dark group-hover:text-brand transition-colors">
                              {other.company}
                            </div>
                            <div className="text-xs text-fg-dark-subtle">
                              {other.title}
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 flex-1 text-sm text-fg-dark-muted line-clamp-2">
                          &ldquo;{other.quote}&rdquo;
                        </p>
                      </GlassCard>
                    </Link>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
