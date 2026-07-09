"use client";

import { WHY_PMRG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-pmrg grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why PMRG"
            title={
              <>
                A partner engineered for{" "}
                <span className="text-gradient">scale, speed &amp; trust</span>
              </>
            }
            description="We combine deep telecom domain expertise with an AI-first mindset to deliver outcomes, not just software."
          />

          <RevealGroup className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {WHY_PMRG.map((item) => (
              <RevealItem key={item.title} as="div">
                <div className="h-full bg-ink p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-fg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Minimal right column: a clean stat panel */}
        <Reveal delay={0.1} className="relative">
          <div className="sticky top-28 overflow-hidden rounded-xl border border-line bg-surface">
            <div className="border-b border-line p-8">
              <span className="eyebrow">At a glance</span>
              <h3 className="mt-4 text-xl font-semibold text-fg">
                Built for the demands of modern telecom &amp; enterprise
              </h3>
            </div>
            <dl className="divide-y divide-line">
              {[
                { k: "10+ years", v: "Telecom BSS/OSS expertise" },
                { k: "4", v: "Global delivery centers" },
                { k: "300+", v: "Engineers & specialists" },
                { k: "99.99%", v: "Platform uptime delivered" },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-6 p-6">
                  <dt className="text-sm text-fg-muted">{row.v}</dt>
                  <dd className="font-display text-lg font-bold text-fg">{row.k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
