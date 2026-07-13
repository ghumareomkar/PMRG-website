import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions & Products",
  description:
    "Explore PMRG's flagship platforms: BSS Suite, CRM360, CloudOps, and DataIntel — built for telecom and enterprise scale.",
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

      <div className="section">
        <div className="container-pmrg flex flex-col gap-8">
          {PRODUCTS.map((product, idx) => (
            <Reveal key={product.id}>
              <section id={product.id} className="scroll-mt-28">
                <GlassCard strong className="relative overflow-hidden transition-all hover:scale-[1.01] hover:border-accent/40">
                  <GradientOrb
                    className={idx % 2 === 0 ? "-left-20 -top-20" : "-right-20 -top-20"}
                    from={idx % 2 === 0 ? "#00D4FF" : "#7B2FFF"}
                    to={idx % 2 === 0 ? "#7B2FFF" : "#00F5A0"}
                    size={340}
                  />
                  <div className="relative grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12">
                    {/* left: identity */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/soft text-accent">
                          <Icon name={product.icon} className="h-7 w-7" />
                        </span>
                        <Badge variant="violet">Product 0{idx + 1}</Badge>
                      </div>
                      <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{product.name}</h2>
                      <p className="mt-1 text-sm font-medium text-accent">{product.tagline}</p>
                      <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                        {product.description}
                      </p>

                      {/* metrics */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {product.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-line bg-white/[0.02] p-3 text-center"
                          >
                            <div className="font-display text-lg font-extrabold text-gradient">
                              {m.value}
                            </div>
                            <div className="mt-0.5 text-[10px] uppercase tracking-wider text-fg-subtle">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        {/* ✅ Button – सीधे /contact पर जाएगा, कोई onClick नहीं */}
                        <Button href="/contact">
                          Request a Demo
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        {/* ✅ "View Details" Link – Card के detail page पर जाएगा */}
                        <Link
                          href={`/solutions/${product.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                        >
                          View Details
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* right: features + architecture */}
                    <div className="lg:col-span-7">
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                        Key Capabilities
                      </h3>
                      <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-fg">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/soft text-accent">
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 rounded-xl border border-line bg-ink/40 p-5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
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
      </div>
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
          <div className="w-full rounded-lg border border-line bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-accent">
              {layer.label}
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              {layer.nodes.map((n) => (
                <div
                  key={n}
                  className="rounded-md bg-white/[0.02] px-2 py-1.5 text-center text-[10px] text-fg-muted"
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <span className="mx-1 shrink-0 text-accent/50">→</span>
          )}
        </div>
      ))}
    </div>
  );
}