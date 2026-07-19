import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/animations/Reveal";
import { SERVICE_PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI, Enterprise Platforms, Cloud and Digital Transformation",
  description: "Consulting, architecture, implementation, integration, managed support, ERPNext, CRM, telecom, AI automation, and cloud-native delivery services.",
  alternates: { canonical: "/services" },
};

export default function ServicesListingPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Four connected pillars for{" "}
            <span className="text-gradient">end-to-end delivery</span>
          </>
        }
        description="From strategy to implementation, PMRG Solution provides one accountable team for discovery, design, build, integration, governance, adoption, and support."
      />

      {/* Service Pillars */}
      <section data-section-theme="light" className="section-light section">
        <div className="container-pmrg space-y-12">
          {SERVICE_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 0.05}>
              <Link href={`/services/${pillar.id}`} className="block h-full group">
                <GlassCard theme="light" strong className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-brand/30">
                  <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                    {/* Left — pillar info */}
                    <div className="border-b border-light-line p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-light-line bg-blue-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <Icon name={pillar.icon} className="h-6 w-6" />
                        </span>
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-fg-dark sm:text-2xl group-hover:text-brand transition-colors">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-fg-dark-muted">{pillar.description}</p>
                    </div>

                    {/* Right — items list */}
                    <div className="p-8 lg:col-span-3 flex flex-col justify-center">
                      <ul className="space-y-3.5">
                        {pillar.items.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span className="text-sm leading-relaxed text-fg-dark-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service Promise CTA */}
      <section data-section-theme="dark" className="section-gradient-cta relative overflow-hidden py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-20"
        />
        <div className="container-pmrg relative text-center">
          <Reveal variant="slide-up">
            <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-white/60">Our Service Promise</span>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              One accountable team from strategy to production
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              From strategy to implementation, PMRG Solution provides one accountable team for discovery, design, build, integration, governance, adoption, and support.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg" className="bg-white text-brand-deep hover:bg-white/90 hover:text-brand-deep">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="/solutions"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-white/70 hover:bg-white/10"
              >
                Explore Our Solutions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}