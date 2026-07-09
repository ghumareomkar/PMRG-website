import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import GradientOrb from "@/components/animations/GradientOrb";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PMRG's full spectrum of services: BSS/OSS, CRM, digital transformation, AI/ML, cloud & DevOps, and custom software development.",
  alternates: { canonical: "/services" },
};

type UseCase = { title: string; body: string };

const USE_CASES: Record<string, UseCase> = {
  "bss-oss": {
    title: "Case: 5G slice monetization",
    body: "We helped a tier-2 operator launch slice-based pricing in 11 days using a real-time rating engine — cutting rating latency 80% and unlocking new B2B revenue.",
  },
  crm: {
    title: "Case: Churn turnaround at an MVNO",
    body: "Our AI next-best-action engine flagged 92% of at-risk subscribers a quarter early and orchestrated retention offers — reducing monthly churn by 18%.",
  },
  digital: {
    title: "Case: Mainframe decommissioning",
    body: "Using a strangler-fig approach, we retired a 20-year-old mainframe order system domain-by-domain with zero downtime and full audit traceability.",
  },
  "ai-ml": {
    title: "Case: Grid anomaly detection at scale",
    body: "A streaming ML pipeline over 2M smart meters now detects outages and tampering sub-minute — cutting non-technical losses by 31%.",
  },
  cloud: {
    title: "Case: FinOps velocity engine",
    body: "GitOps delivery with ArgoCD plus FinOps guardrails doubled a fintech's deploy frequency while reducing cloud spend by 23%.",
  },
  custom: {
    title: "Case: Headless commerce re-platform",
    body: "We rebuilt a marketplace on a headless, event-driven stack — halving page load time and tripling peak throughput on Black Friday.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            End-to-end capability for{" "}
            <span className="text-gradient">every layer</span> of your stack
          </>
        }
        description="Six practice areas, one accountable partner. From the charging core of a telecom to the ML layer of a marketplace — we build it, run it, and improve it."
      />

      {/* anchor nav */}
      <div className="container-pmrg">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-line-strong bg-white/[0.02] px-4 py-2 text-xs font-medium text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* detailed sections */}
      <div className="section">
        <div className="container-pmrg flex flex-col gap-24">
          {SERVICES.map((service, idx) => {
            const useCase = USE_CASES[service.id];
            const reversed = idx % 2 === 1;
            return (
              <section key={service.id} id={service.id} className="scroll-mt-28">
                <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                  {/* copy side */}
                  <div className="lg:[direction:ltr]">
                    <Reveal>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/soft text-accent">
                          <Icon name={service.icon} className="h-6 w-6" />
                        </span>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                          0{idx + 1} / 0{SERVICES.length}
                        </span>
                      </div>
                      <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-fg-muted">
                        {service.description}
                      </p>

                      <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-fg">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/soft text-accent">
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.stack.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Button href={`/contact?service=${service.slug}`} variant="secondary">
                          Discuss this service
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </Reveal>
                  </div>

                  {/* visual / use-case side */}
                  <Reveal delay={0.1} className="lg:[direction:ltr]">
                    <GlassCard strong className="relative overflow-hidden p-8">
                      <GradientOrb className="-right-16 -top-16" size={220} />
                      <div className="relative">
                        <Badge>Use Case</Badge>
                        <h3 className="mt-4 text-xl font-semibold text-fg">{useCase.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                          {useCase.body}
                        </p>
                      </div>

                      {/* decorative metric row */}
                      <div className="relative mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
                        {[["Delivery", "On time"], ["Downtime", "Zero"], ["Outcome", "Measured"]].map(
                          ([k, v]) => (
                            <div key={k}>
                              <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                                {k}
                              </div>
                              <div className="mt-1 text-sm font-semibold text-fg">{v}</div>
                            </div>
                          )
                        )}
                      </div>
                    </GlassCard>
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
