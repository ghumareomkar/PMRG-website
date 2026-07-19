import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Governance, Sprint Planning, Data Center & CLM Products",
  description:
    "Explore PMRG Solution products for governance intelligence, agile planning, infrastructure operations, and end-to-end customer lifecycle management.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & Products"
        title={
          <>
            Flagship platforms, <span className="text-gradient">battle-tested at scale</span>
          </>
        }
        description="Four production platforms that unify billing, engagement, infrastructure, and analytics — deployable independently or as an integrated suite."
      />

      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg flex flex-col gap-8">
          {PRODUCTS.map((product, idx) => (
            <Reveal key={product.id}>
              <section id={product.id} className="scroll-mt-28">
                <GlassCard theme="light" strong className="relative overflow-hidden transition-all hover:scale-[1.01] hover:border-brand/30">
                  <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12">
                    {/* left: identity */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-light-line bg-blue-50 text-brand">
                          <Icon name={product.icon} className="h-7 w-7" />
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-light-line bg-light-bg-slate px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-dark-muted">Product 0{idx + 1}</span>
                      </div>
                      <h2 className="mt-5 text-2xl font-bold text-fg-dark sm:text-3xl">{product.name}</h2>
                      <p className="mt-1 text-sm font-medium text-brand">{product.tagline}</p>
                      <p className="mt-4 text-sm leading-relaxed text-fg-dark-muted">
                        {product.description}
                      </p>

                      {/* metrics */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {product.metrics.map((m) => (
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

                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        
                        <Button href="/contact">
                          Request a Demo
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                       
                        <Link
                          href={`/solutions/${product.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
                        >
                          View Details
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* right: features + architecture */}
                    <div className="lg:col-span-7">
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dark-subtle">
                        Key Capabilities
                      </h3>
                      <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-fg-dark">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 rounded-xl border border-light-line bg-light-bg-grey p-5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-fg-dark-subtle">
                          Reference Architecture
                        </div>
                        <ArchitectureDiagram />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </section>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

/** Lightweight SVG architecture diagram */
function ArchitectureDiagram() {
  const layers = [
    { label: "Data Sources", nodes: ["APIs", "Events", "Batch"] },
    { label: "Ingestion", nodes: ["Kafka", "Stream"] },
    { label: "Core Engine", nodes: ["Process", "AI / Rules"] },
    { label: "Delivery", nodes: ["APIs", "UI", "Insights"] },
  ];
  return (
    <div className="mt-4 flex items-stretch gap-2 overflow-x-auto pb-1">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex min-w-[110px] flex-1 items-center">
          <div className="w-full rounded-lg border border-light-line bg-white p-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-brand">
              {layer.label}
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              {layer.nodes.map((n) => (
                <div
                  key={n}
                  className="rounded-md bg-light-bg-grey px-2 py-1.5 text-center text-[10px] text-fg-dark-muted"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <span className="mx-1 shrink-0 text-brand/50">→</span>
          )}
        </div>
      ))}
    </div>
  );
}