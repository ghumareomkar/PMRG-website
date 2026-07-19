import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, CheckCircle2, ArrowRight, Users2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import { PRODUCTS } from "@/lib/constants";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug) as any;

  if (!product) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${product.name} | PMRG Solutions`,
    description: product.detailedDescription || product.description,
    alternates: {
      canonical: `/solutions/${product.slug}`,
    },
  };
}

export default function SolutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) as any;

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={product.tag}
        title={product.name}
        description={product.detailedTagline || product.tagline}
      />

      {/* Overview */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg">
          <Reveal>
            <GlassCard theme="light" strong className="relative overflow-hidden">
              <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12">
                {/* left: identity */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-light-line bg-blue-50 text-brand">
                      <Icon name={product.icon} className="h-7 w-7" />
                    </span>
                    <span className="rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                      {product.tag}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-fg-dark sm:text-3xl">{product.name}</h2>
                  <p className="mt-1 text-sm font-medium text-brand">{product.detailedTagline || product.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                    {product.detailedDescription || product.description}
                  </p>

                  {/* metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {product.metrics.map((m: any) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-light-line bg-light-bg-grey p-3 text-center"
                      >
                        <div className="font-display text-lg font-extrabold text-gradient">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-fg-dark-subtle">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Button href="/contact">
                      Request a Consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* right: capabilities + outcomes */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Core capabilities */}
                  {product.coreCapabilities && (
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                        Core Capabilities
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {product.coreCapabilities.map((c: string) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-fg-dark">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                              <Check className="h-3 w-3" />
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Business outcomes */}
                  {product.businessOutcomes && (
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                        Business Outcomes
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {product.businessOutcomes.map((o: string) => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-fg-dark">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                              <CheckCircle2 className="h-3 w-3" />
                            </span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Best suited for */}
                  {product.bestSuitedFor && (
                    <div className="rounded-lg border border-dashed border-light-line bg-light-bg-grey p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fg-dark-subtle">
                        <Users2 className="h-3.5 w-3.5" />
                        Best suited for
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-fg-dark-muted">
                        {product.bestSuitedFor}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}